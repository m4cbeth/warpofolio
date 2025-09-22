import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// POST /api/contact
// Expects JSON: { name, email, business, website?, message, _honey? }
export async function POST(req: Request) {
  try {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const EMAIL_TO = process.env.EMAIL_TO;
    const EMAIL_FROM = process.env.EMAIL_FROM;

    if (!SENDGRID_API_KEY || !EMAIL_TO || !EMAIL_FROM) {
      return NextResponse.json(
        { error: "Server not configured. Enviroment Congifuration Error. See Variables." },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { name, email, business, website = "", message, _honey = "" } = body as {
      name?: string;
      email?: string;
      business?: string;
      website?: string;
      message?: string;
      _honey?: string;
    };

    // Honeypot check
    if (_honey && String(_honey).trim().length > 0) {
      // Pretend success to avoid tipping off bots
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !name.trim()) return NextResponse.json({ error: "Name required" }, { status: 400 });
    if (!email || !emailRegex.test(email)) return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    if (!business || !business.trim()) return NextResponse.json({ error: "Business required" }, { status: 400 });
    if (!message || !message.trim()) return NextResponse.json({ error: "Message required" }, { status: 400 });

    // Build email
    sgMail.setApiKey(SENDGRID_API_KEY);

    const subject = `New Site Audit Request from ${name}`;
    const plain = `New contact request\n\nName: ${name}\nEmail: ${email}\nBusiness: ${business}\nWebsite: ${website}\n\nMessage:\n${message}`;
    const html = `
      <h2>New contact request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Business:</strong> ${escapeHtml(business)}</p>
      ${website ? `<p><strong>Website:</strong> ${escapeHtml(website)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace">${escapeHtml(message)}</pre>
    `;

    const msg = {
      to: EMAIL_TO,
      from: EMAIL_FROM,
      subject,
      text: plain,
      html,
      replyTo: email,
    } as const;

    await sgMail.send(msg);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("/api/contact error", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

export function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
