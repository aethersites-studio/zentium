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
    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Los_Angeles",
    });

    const websiteUrl = body.website.startsWith("http://") || body.website.startsWith("https://")
      ? body.website
      : `https://${body.website}`;
    const safeWebsiteUrl = escapeHtml(websiteUrl);
    const safeMessage = escapeHtml(body.message?.trim() || "Not provided").replaceAll("\n", "<br/>");
    const safePhone = escapeHtml(body.phone?.trim() || "Not provided");
    const safePackage = escapeHtml(body.package?.trim() || "Not provided");
    const safePracticeArea = escapeHtml(body.practiceArea?.trim() || "Not provided");
    const safeName = escapeHtml(body.name);
    const safeFirmName = escapeHtml(body.firmName);
    const safeEmail = escapeHtml(body.email);

    const html = `
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body style="margin:0;padding:0;background:#111111;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#ececec;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;background:#111111;mso-table-lspace:0pt;mso-table-rspace:0pt;">
          <tr>
            <td style="padding:28px 30px 16px 30px;border-bottom:1px solid #242424;background:#111111;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#f5a623;font-weight:700;">Zentium Lead Alert</td>
                  <td style="text-align:right;font-size:12px;color:#9ca7bf;">${escapeHtml(submittedAt)} PT</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:10px;font-size:36px;line-height:1.1;color:#ffffff;font-weight:700;">New Free Audit Request</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:10px;font-size:18px;line-height:1.4;color:#c8d0e1;">
                    ${safeFirmName} <span style="color:#6d7891;">&bull;</span> ${safeName}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 30px 8px 30px;background:#171717;border-bottom:1px solid #242424;">
              <table role="presentation" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:0 10px 10px 0;">
                    <a href="mailto:${safeEmail}" style="display:inline-block;padding:10px 14px;border-radius:8px;background:#f5a623;color:#161616;text-decoration:none;font-size:13px;font-weight:700;">Reply to Lead</a>
                  </td>
                  <td style="padding:0 10px 10px 0;">
                    <a href="${safeWebsiteUrl}" style="display:inline-block;padding:10px 14px;border-radius:8px;background:#222222;color:#e8e8e8;text-decoration:none;font-size:13px;font-weight:600;">Open Website</a>
                  </td>
                  <td style="padding:0 10px 10px 0;">
                    <a href="tel:${safePhone}" style="display:inline-block;padding:10px 14px;border-radius:8px;background:#222222;color:#e8e8e8;text-decoration:none;font-size:13px;font-weight:600;">Call Lead</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0;background:#151515;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                <tr>
                  <td style="width:30%;padding:12px 14px;font-size:12px;font-weight:700;color:#a7a7a7;background:#1d1d1d;border-bottom:1px solid #2a2a2a;">Name</td>
                  <td style="padding:12px 14px;font-size:15px;color:#ececec;background:#151515;border-bottom:1px solid #2a2a2a;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#a7a7a7;background:#1d1d1d;border-bottom:1px solid #2a2a2a;">Firm Name</td>
                  <td style="padding:12px 14px;font-size:15px;color:#ececec;background:#151515;border-bottom:1px solid #2a2a2a;">${safeFirmName}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#a7a7a7;background:#1d1d1d;border-bottom:1px solid #2a2a2a;">Email</td>
                  <td style="padding:12px 14px;font-size:15px;background:#151515;border-bottom:1px solid #2a2a2a;"><a href="mailto:${safeEmail}" style="color:#f5a623;text-decoration:none;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#a7a7a7;background:#1d1d1d;border-bottom:1px solid #2a2a2a;">Phone</td>
                  <td style="padding:12px 14px;font-size:15px;color:#ececec;background:#151515;border-bottom:1px solid #2a2a2a;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#a7a7a7;background:#1d1d1d;border-bottom:1px solid #2a2a2a;">Website</td>
                  <td style="padding:12px 14px;font-size:15px;background:#151515;border-bottom:1px solid #2a2a2a;"><a href="${safeWebsiteUrl}" style="color:#f5a623;text-decoration:none;">${safeWebsiteUrl}</a></td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#a7a7a7;background:#1d1d1d;border-bottom:1px solid #2a2a2a;">Practice Area</td>
                  <td style="padding:12px 14px;font-size:15px;color:#ececec;background:#151515;border-bottom:1px solid #2a2a2a;">${safePracticeArea}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#a7a7a7;background:#1d1d1d;">Package Interest</td>
                  <td style="padding:12px 14px;font-size:15px;color:#ececec;background:#151515;">${safePackage}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:14px 0 18px 0;background:#151515;">
              <div style="font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#a7a7a7;margin:0 14px 8px 14px;">Lead Message</div>
              <div style="padding:14px;background:#111111;font-size:15px;line-height:1.6;color:#ececec;margin:0 14px;">
                ${safeMessage}
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:14px 14px 26px 14px;background:#111111;color:#7f7f7f;font-size:12px;border-top:1px solid #242424;">
              Sent from Zentium free audit form. Replying goes directly to the lead.
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const text = [
      "NEW FREE AUDIT REQUEST",
      `Submitted: ${submittedAt} PT`,
      "",
      `Name: ${body.name}`,
      `Firm Name: ${body.firmName}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone?.trim() || "Not provided"}`,
      `Website: ${websiteUrl}`,
      `Practice Area: ${body.practiceArea?.trim() || "Not provided"}`,
      `Package: ${body.package?.trim() || "Not provided"}`,
      "",
      "Message:",
      body.message?.trim() || "Not provided",
    ].join("\n");

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Zentium Audit <onboarding@resend.dev>",
      to: ["hello@zentiumhq.com"],
      replyTo: body.email,
      subject,
      html,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit request." }, { status: 500 });
  }
}
