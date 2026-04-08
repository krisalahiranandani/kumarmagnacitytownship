export async function onRequest(context) {
  const { request } = context;

  // Set CORS Headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
  };

  // Handle Pre-flight request
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const data = await request.json();
    
    // Validate Required Fields
    if (!data.name || !data.phone) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }

    // Prepare Executive Brief Payload
    const mailPayload = {
      personalizations: [
        {
          to: [{ email: "propsmartrealty@gmail.com", name: "PropSmart Realty Executive" }],
        },
      ],
      from: {
        email: "leads@kumarmagnacitytownship.com",
        name: "Magnacity Executive Relay",
      },
      subject: `🚨 EXECUTIVE LEAD: ${data.name} (${data.phone})`,
      content: [
        {
          type: "text/html",
          value: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 0; margin: 0; background-color: #f4f4f4;">
              <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <div style="background-color: #c9a227; padding: 20px; text-align: center; color: #ffffff;">
                  <h1 style="margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">Executive Lead Brief</h1>
                </div>
                <div style="padding: 30px;">
                  <p style="font-size: 16px; color: #444; margin-bottom: 25px;">A new high-intent enquiry has been captured via the <strong>Kumar Magnacity Portal</strong>.</p>
                  
                  <div style="background-color: #fafafa; border-radius: 6px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #c9a227;">
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; width: 100px;">Client Name</td>
                        <td style="padding: 10px 0; color: #222; font-weight: bold; font-size: 16px;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Phone</td>
                        <td style="padding: 10px 0;"><a href="tel:${data.phone}" style="color: #c9a227; text-decoration: none; font-weight: bold; font-size: 16px;">+91 ${data.phone}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Email</td>
                        <td style="padding: 10px 0; color: #444;">${data.email || 'Not provided'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Interest</td>
                        <td style="padding: 10px 0; color: #444;">${data.interest || 'Bungalow Plot Enquiry'}</td>
                      </tr>
                    </table>
                  </div>

                  <div style="text-align: center; margin-top: 30px;">
                    <a href="https://wa.me/91${data.phone}?text=Hi%20${encodeURIComponent(data.name)},%20I%20am%20calling%20from%20Kumar%20Magnacity%20regarding%20your%20interest%20in%20our%20NA%20plots." 
                       style="display: inline-block; background-color: #25d366; color: #ffffff; padding: 15px 25px; border-radius: 5px; text-decoration: none; font-weight: bold; font-size: 14px; margin-right: 10px;">
                       WhatsApp Client Now
                    </a>
                  </div>
                </div>
                <div style="background-color: #333; padding: 15px; text-align: center; color: #999; font-size: 11px;">
                  Source: ${data.source_url} | IP: ${request.headers.get("cf-connecting-ip")} <br>
                  Security: Mailchannels Executive Relay (Encrypted)
                </div>
              </div>
            </div>
          `,
        },
      ],
    };

    // Send via Mailchannels
    const mcResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mailPayload),
    });

    if (mcResponse.status === 202 || mcResponse.status === 200) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } else {
      const errorText = await mcResponse.text();
      return new Response(JSON.stringify({ error: "Relay failed", details: errorText }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal Server Error", message: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}
