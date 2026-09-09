import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ status: "Leads API endpoint active" }), {
    headers: { "Content-Type": "application/json" }
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const rawData = await request.json();

    if (rawData._honey || rawData.website || rawData.fax || rawData.honeypot) {
      return new Response(JSON.stringify({ success: true, message: "Lead captured securely." }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    const sanitizeStr = (str?: any, maxLen = 200) => {
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
      return new Response(JSON.stringify({ success: false, error: "Please provide a valid full name and 10-digit mobile number." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const leadData = {
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

    const gasUrl = "https://script.google.com/macros/s/AKfycbzQF_zr_Sv_arp6GMfwQbM5IinDCNIrLmnvMMnNuiKtPXAa0ZF4Q3iY_pEx5egL69PU/exec";
    if (gasUrl) {
      fetch(gasUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadData,
          _subject: `🚨 NEW LEAD: ${leadData.name} | ${leadData.phone}`
        })
      }).catch(e => console.warn("GAS fetch warning:", e));
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Lead captured securely via Sovereign Hub." 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message || "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
