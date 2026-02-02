import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email });

    // Validate inputs
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to you
    const notificationEmail = await resend.emails.send({
      from: "Code-With-Fred Portfolio <onboarding@resend.dev>",
      to: ["ezefavourchimereze@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h1>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send auto-reply to the person who contacted
    const autoReplyEmail = await resend.emails.send({
      from: "Eze Favour - Code-With-Fred <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for contacting me! - Code-With-Fred",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Hi ${name}! 👋</h1>
          <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message:</h3>
            <p style="color: #666;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p>In the meantime, you can:</p>
          <ul>
            <li>Check out my <a href="https://codewithfred.name.ng/#projects">latest projects</a></li>
            <li>Connect with me on <a href="https://linkedin.com/in/favour-chimereze-eze-37b1b235a/">LinkedIn</a></li>
            <li>Follow me on <a href="https://github.com/Code-With-Fred">GitHub</a></li>
          </ul>
          
          <p>I typically respond within 24-48 hours.</p>
          
          <p>Best regards,<br>
          <strong>Eze Favour (Code-With-Fred)</strong><br>
          Full-Stack Web Developer | Port Harcourt, Nigeria</p>
        </div>
      `,
    });

    console.log("Auto-reply email sent:", autoReplyEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
