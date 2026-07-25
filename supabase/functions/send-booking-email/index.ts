import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { record } = await req.json();

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }

    // The 'record' contains the newly inserted row from the 'bookings' table
    const { full_name, email, phone, services, total_amount, currency, birth_details } = record;

    // You can customize the destination email here. It can be read from environment variables or hardcoded.
    // For Resend's free tier, you can only send TO the email address you registered with, 
    // unless you add a custom domain to Resend.
    const adminEmail = Deno.env.get("ADMIN_EMAIL") || "bhrigunandiastrology@gmail.com"; 

    const emailHtml = `
      <h2>New Astrology Booking Received!</h2>
      <p><strong>Client Name:</strong> ${full_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      
      <h3>Services Booked</h3>
      <p>${services}</p>
      <p><strong>Total Amount:</strong> ${currency}${total_amount}</p>

      <h3>Birth Details</h3>
      <p><strong>Date of Birth:</strong> ${birth_details?.dob || "N/A"}</p>
      <p><strong>Time of Birth:</strong> ${birth_details?.tob || "N/A"}</p>
      <p><strong>Place of Birth:</strong> ${birth_details?.pob || "N/A"}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Bhrigu Nandi Astrology <onboarding@resend.dev>",
        to: [adminEmail],
        subject: `New Booking: ${full_name}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(data));
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
