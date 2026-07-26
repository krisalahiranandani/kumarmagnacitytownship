export const GAS_URL = "https://script.google.com/macros/s/AKfycbzQF_zr_Sv_arp6GMfwQbM5IinDCNIrLmnvMMnNuiKtPXAa0ZF4Q3iY_pEx5egL69PU/exec";

export async function submitLead(data: any) {
  // Anti-bot & honeypot check
  if (data?.website || data?.honeypot || data?.fax || data?._honey) {
    console.warn("Bot lead submission blocked.");
    return true; // Silent rejection for bots
  }

  // Input Sanitization
  let rawPhone = data?.phone ? String(data.phone).replace(/[^\d+]/g, "").trim() : "";
  if (rawPhone.startsWith("+91")) rawPhone = rawPhone.slice(3);
  else if (rawPhone.startsWith("91") && rawPhone.length === 12) rawPhone = rawPhone.slice(2);
  else if (rawPhone.startsWith("0") && rawPhone.length === 11) rawPhone = rawPhone.slice(1);

  const sanitizedData = {
    ...data,
    name: data?.name ? String(data.name).trim() : "",
    phone: rawPhone,
    email: data?.email ? String(data.email).trim().toLowerCase() : "",
    timestamp: new Date().toISOString()
  };

  // Basic phone length validation (Minimum 10 digits for Indian standard)
  const cleanDigits = sanitizedData.phone.replace(/\D/g, "");
  if (cleanDigits.length < 10) {
    console.warn("Invalid phone length, lead aborted:", sanitizedData.phone);
    return false;
  }

  // 1. Primary: Direct to Google Apps Script (Bypasses any Vercel backend limits)
  try {
    fetch(GAS_URL, {
      method: "POST",
      body: JSON.stringify(sanitizedData),
    }).catch(e => console.warn("Direct GAS fetch failed:", e));
  } catch (e) {
    console.warn("GAS fetch error:", e);
  }

  // 2. Secondary: Send to Vercel API (for Google Sheets/Ledger logging)
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sanitizedData)
    });
    return res.ok;
  } catch (err) {
    console.error("Vercel API failed:", err);
    return false;
  }
}
