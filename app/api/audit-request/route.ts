import { NextResponse } from "next/server";
import { Resend } from "resend";

type AuditRequest = {
  name: string;
  firmName: string;
  email: string;
  phone?: string;
  website: string;
  practiceArea?: string;
  package?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email provider is not configured." }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  try {
    const body = (await req.json()) as AuditRequest;
    const requiredFields = ["name", "firmName", "email", "website"] as const;
    const missingField = requiredFields.find((field) => !body[field]?.trim());

    if (missingField) {
      return NextResponse.json({ error: `Missing field: ${missingField}` }, { status: 400 });
    }

    const subject = `New Free Audit Request: ${body.firmName}`;
    const rows = [
      ["Name", body.name],
      ["Firm Name", body.firmName],
      ["Email", body.email],
      ["Phone", body.phone || "Not provided"],
      ["Website", body.website],
      ["Practice Area", body.practiceArea || "Not provided"],
      ["Package", body.package || "Not provided"],
      ["Message", body.message || "Not provided"],
    ];

    const html = `
      <h2>New Free Audit Request</h2>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; border-color: #ddd;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
    `;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Zentium Audit <onboarding@resend.dev>",
      to: ["hello@zentiumhq.com"],
      replyTo: body.email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit request." }, { status: 500 });
  }
}
