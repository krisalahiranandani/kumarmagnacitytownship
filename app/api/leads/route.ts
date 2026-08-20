import { NextRequest, NextResponse } from "next/server";
import React from "react";
import fs from "fs";
import path from "path";
import { Resend } from "resend";
import { sendWhatsAppBrochure } from "@/lib/whatsapp";
import { renderToBuffer } from "@react-pdf/renderer";
import { BrochurePDF } from "@/components/BrochurePDF";
import { google } from "googleapis";
import { EnquiryData } from "@/types/enquiry";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const SALES_EMAIL = 'propsmartrealty@gmail.com';

export const runtime = "nodejs";

const LEDGER_PATH = path.join(process.cwd(), "data", "leads-ledger.json");

interface StoredLead extends Partial<EnquiryData> {
  name: string;
  phone: string;
  timestamp: string;
  _subject?: string;
  _honey?: string;
  website?: string;
  fax?: string;
  honeypot?: string;
}

export async function GET() {
  try {
    let allLeads: StoredLead[] = [];
    if (fs.existsSync(LEDGER_PATH)) {
      try {
        const data = fs.readFileSync(LEDGER_PATH, "utf8");
        allLeads = JSON.parse(data) as StoredLead[];
      } catch (err) {
        console.error("Local ledger parsing failed:", err);
      }
    }

    const filteredLeads = allLeads.filter((l) => l.name);
    return NextResponse.json(filteredLeads.reverse());
  } catch (error) {
    console.error("Failed to read leads source:", error);
    return NextResponse.json({ error: "Vault Synchronisation Error" }, { status: 500 });
  }
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string, limit = 10, windowMs = 60 * 1000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  if (record.count >= limit) {
    record.resetTime = now + (windowMs * 3);
    return true;
  }
  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "127.0.0.1";
    if (checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const rawData = (await req.json()) as StoredLead;

    // Silent honeypot check
    if (rawData._honey || rawData.website || rawData.fax || rawData.honeypot) {
      return NextResponse.json({ success: true, message: "Lead captured securely via Sovereign Hub." });
    }

    // Input sanitization & bounds enforcement
    const sanitizeStr = (str?: string, maxLen = 200) => {
      if (!str) return "";
      return String(str).replace(/[<>]/g, "").trim().slice(0, maxLen);
    };

    const sanitizedName = sanitizeStr(rawData.name, 100);
    let sanitizedPhone = sanitizeStr(rawData.phone, 30).replace(/[^\d+]/g, "");
    if (sanitizedPhone.startsWith("+91")) sanitizedPhone = sanitizedPhone.slice(3);
    else if (sanitizedPhone.startsWith("91") && sanitizedPhone.length === 12) sanitizedPhone = sanitizedPhone.slice(2);
    else if (sanitizedPhone.startsWith("0") && sanitizedPhone.length === 11) sanitizedPhone = sanitizedPhone.slice(1);

    const sanitizedEmail = sanitizeStr(rawData.email, 120).toLowerCase();

    if (!sanitizedName || sanitizedPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name and 10-digit mobile number." },
        { status: 400 }
      );
    }

    const leadData: StoredLead = {
      ...rawData,
      name: sanitizedName,
      phone: sanitizedPhone,
      email: sanitizedEmail,
      intent: sanitizeStr(rawData.intent, 150),
      timing: sanitizeStr(rawData.timing, 100),
      source_url: sanitizeStr(rawData.source_url, 300),
      form_id: sanitizeStr(rawData.form_id, 100),
      timestamp: new Date().toISOString()
    };

    // 0. Cloudflare Turnstile Bot Protection
    const turnstileToken = req.headers.get('cf-turnstile-response');
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    
    if (turnstileSecret && turnstileToken) {
      try {
        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${turnstileSecret}&response=${turnstileToken}`,
        });
        const verifyOutcome = (await verifyRes.json()) as { success: boolean };
        if (!verifyOutcome.success) {
          console.warn("Turnstile bot verification flagged token as invalid.");
        }
      } catch (tErr) {
        console.warn("Turnstile validation error:", tErr);
      }
    }

    // 1. Save to Local Ledger
    if (fs.existsSync(LEDGER_PATH)) {
      try {
        const fileData = fs.readFileSync(LEDGER_PATH, "utf8");
        const allLeads = JSON.parse(fileData) as StoredLead[];
        allLeads.push(leadData);
        fs.writeFileSync(LEDGER_PATH, JSON.stringify(allLeads, null, 2));
      } catch (err) {
        console.error("Failed to append to ledger:", err);
      }
    }

    // 2. Dispatch Sales Notification via Google App Script (GAS)
    const gasUrl = process.env.GOOGLE_APP_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzQF_zr_Sv_arp6GMfwQbM5IinDCNIrLmnvMMnNuiKtPXAa0ZF4Q3iY_pEx5egL69PU/exec";
    if (gasUrl) {
      try {
        fetch(gasUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...leadData,
            _subject: leadData._subject || `🚨 NEW LEAD: ${leadData.name} | ${leadData.phone}`
          })
        }).catch(e => console.warn("GAS fetch warning:", e));
      } catch (gasError) {
        console.error("GAS Sales Dispatch Error:", gasError);
      }
    }

    // 3. Automated Welcome Email & Brochure Delivery
    if (resend && leadData.email) {
      try {
        const buyerHtmlContent = `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #FAFAFA;">
            <div style="background-color: #111111; padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: #D49A1F; margin: 0; font-size: 26px; letter-spacing: 3px; text-transform: uppercase;">Kumar Magnacity</h1>
              <p style="color: #FFFFFF; margin-top: 8px; font-size: 13px; letter-spacing: 2px;">150-ACRE INTEGRATED TOWNSHIP</p>
            </div>
            <div style="background-color: #FFFFFF; padding: 40px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
              <h2 style="color: #111111; font-size: 22px; margin-top: 0;">Welcome, ${leadData.name.split(' ')[0]}</h2>
              <p style="color: #555555; line-height: 1.6; font-size: 15px;">
                Thank you for your interest in Kumar Magnacity, Manjari near Hadapsar, Pune East. We have securely registered your inquiry.
              </p>
              <p style="color: #555555; line-height: 1.6; font-size: 15px;">
                Our official portfolio including unit layouts, floor plans, and pricing matrices is attached to this email.
              </p>
              <div style="text-align: center; margin: 35px 0;">
                <a href="https://kumarmagnacitytownship.com" style="background-color: #D49A1F; color: #0D0B08; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 50px; font-size: 13px; display: inline-block;">EXPLORE TOWNSHIP PORTAL</a>
              </div>
              <p style="color: #777777; line-height: 1.6; font-size: 13px; border-top: 1px solid #EEEEEE; padding-top: 20px;">
                Your dedicated Relationship Executive will assist you shortly on <strong>${leadData.phone}</strong>.
              </p>
            </div>
          </div>
        `;
        
        const pdfElement = React.createElement(BrochurePDF, { clientName: leadData.name || "Valued Client" });
        const pdfBuffer = await renderToBuffer(pdfElement as unknown as React.ReactElement<import("@react-pdf/renderer").DocumentProps>);

        resend.emails.send({
          from: 'Kumar Magnacity <' + (process.env.RESEND_FROM_EMAIL || 'info@kumarmagnacitytownship.com') + '>',
          to: leadData.email,
          subject: 'Official Brochure & Floor Plans - Kumar Magnacity',
          html: buyerHtmlContent,
          attachments: [
            {
              filename: `Kumar-Magnacity-Portfolio-${leadData.name.replace(/\s+/g, '-')}.pdf`,
              content: pdfBuffer,
            }
          ]
        }).catch(e => console.error("Buyer Email Dispatch Failed:", e));

        // Admin Notification
        resend.emails.send({
          from: 'Kumar Magnacity Leads <' + (process.env.RESEND_FROM_EMAIL || 'info@kumarmagnacitytownship.com') + '>',
          to: SALES_EMAIL,
          subject: '🚨 NEW LEAD: ' + leadData.name + ' | ' + leadData.phone,
          html: '<h2>New Lead Captured</h2><p><strong>Name:</strong> ' + leadData.name + '</p><p><strong>Phone:</strong> ' + leadData.phone + '</p><p><strong>Email:</strong> ' + (leadData.email || 'N/A') + '</p><p><strong>Timing:</strong> ' + (leadData.timing || 'N/A') + '</p><p><strong>Intent:</strong> ' + (leadData.intent || 'N/A') + '</p><p><strong>Source:</strong> ' + (leadData.source_url || 'N/A') + '</p>'
        }).catch(e => console.error('Admin Email Dispatch Failed:', e));
      } catch (mailErr) {
        console.warn("Resend email processing warning:", mailErr);
      }
    }

    // 4. CRM Webhook Integration
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData)
        }).catch(e => console.warn("CRM Webhook warning:", e));
      } catch (webhookError) {
        console.error("CRM Webhook Dispatch Failed:", webhookError);
      }
    }
    
    // 4b. Google Sheets CRM Integration
    const googleSheetId = process.env.GOOGLE_SHEET_ID;
    const googleEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const googleKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (googleSheetId && googleEmail && googleKey) {
      try {
        const jwtClient = new google.auth.JWT({
          email: googleEmail,
          key: googleKey,
          scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });
        const sheets = google.sheets({ version: 'v4', auth: jwtClient });
        sheets.spreadsheets.values.append({
          spreadsheetId: googleSheetId,
          range: 'Leads!A:H',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[
              leadData.timestamp, 
              leadData.name, 
              leadData.phone, 
              leadData.email || 'N/A', 
              leadData.timing || 'N/A', 
              leadData.intent || 'N/A', 
              leadData.source_url || 'N/A', 
              leadData.form_id || 'N/A'
            ]]
          }
        }).catch(e => console.warn("Google Sheet append warning:", e));
      } catch (sheetErr) {
        console.error("Google Sheets Sync Failed:", sheetErr);
      }
    }

    // 5. WhatsApp Automated Brochure Delivery
    sendWhatsAppBrochure(leadData.phone, leadData.name).catch(console.error);

    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured securely via Sovereign Hub.' 
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Lead API Error:", err);
    return NextResponse.json({ success: false, error: err.message || "Unknown error" }, { status: 500 });
  }
}
