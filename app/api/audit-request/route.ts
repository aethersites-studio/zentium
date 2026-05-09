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
      <div style="margin:0;padding:24px;background:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#121826;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #e6e9f0;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:22px 24px;background:#0f1115;border-bottom:1px solid #1e232e;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#f5a623;font-weight:700;">Zentium Lead Alert</td>
                  <td style="text-align:right;font-size:12px;color:#b8c0d1;">${escapeHtml(submittedAt)} PT</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:10px;font-size:28px;line-height:1.2;color:#ffffff;font-weight:700;">New Free Audit Request</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:8px;font-size:16px;color:#cfd5e3;">
                    ${safeFirmName} <span style="color:#6f7b96;">&bull;</span> ${safeName}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 24px 8px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:14px;">
                <tr>
                  <td style="padding:0 8px 8px 0;">
                    <a href="mailto:${safeEmail}" style="display:inline-block;padding:10px 14px;border-radius:10px;background:#111827;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;">Reply to Lead</a>
                  </td>
                  <td style="padding:0 8px 8px 0;">
                    <a href="${safeWebsiteUrl}" style="display:inline-block;padding:10px 14px;border-radius:10px;background:#eef2ff;color:#111827;text-decoration:none;font-size:13px;font-weight:600;">Open Website</a>
                  </td>
                  <td style="padding:0 8px 8px 0;">
                    <a href="tel:${safePhone}" style="display:inline-block;padding:10px 14px;border-radius:10px;background:#fff7e8;color:#7a4b00;text-decoration:none;font-size:13px;font-weight:600;">Call Lead</a>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e6e9f0;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="width:34%;padding:12px 14px;font-size:12px;font-weight:700;color:#5b6478;background:#f8faff;border-bottom:1px solid #e6e9f0;">Name</td>
                  <td style="padding:12px 14px;font-size:14px;color:#111827;border-bottom:1px solid #e6e9f0;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#5b6478;background:#f8faff;border-bottom:1px solid #e6e9f0;">Firm Name</td>
                  <td style="padding:12px 14px;font-size:14px;color:#111827;border-bottom:1px solid #e6e9f0;">${safeFirmName}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#5b6478;background:#f8faff;border-bottom:1px solid #e6e9f0;">Email</td>
                  <td style="padding:12px 14px;font-size:14px;color:#111827;border-bottom:1px solid #e6e9f0;"><a href="mailto:${safeEmail}" style="color:#0f5bd7;text-decoration:none;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#5b6478;background:#f8faff;border-bottom:1px solid #e6e9f0;">Phone</td>
                  <td style="padding:12px 14px;font-size:14px;color:#111827;border-bottom:1px solid #e6e9f0;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#5b6478;background:#f8faff;border-bottom:1px solid #e6e9f0;">Website</td>
                  <td style="padding:12px 14px;font-size:14px;color:#111827;border-bottom:1px solid #e6e9f0;"><a href="${safeWebsiteUrl}" style="color:#0f5bd7;text-decoration:none;">${safeWebsiteUrl}</a></td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#5b6478;background:#f8faff;border-bottom:1px solid #e6e9f0;">Practice Area</td>
                  <td style="padding:12px 14px;font-size:14px;color:#111827;border-bottom:1px solid #e6e9f0;">${safePracticeArea}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;font-size:12px;font-weight:700;color:#5b6478;background:#f8faff;">Package Interest</td>
                  <td style="padding:12px 14px;font-size:14px;color:#111827;">${safePackage}</td>
                </tr>
              </table>

              <div style="margin-top:14px;border:1px solid #e6e9f0;border-radius:12px;background:#fcfdff;">
                <div style="padding:12px 14px;font-size:12px;font-weight:700;color:#5b6478;border-bottom:1px solid #e6e9f0;">Lead Message</div>
                <div style="padding:14px;font-size:14px;line-height:1.55;color:#111827;">${safeMessage}</div>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:14px 24px 22px 24px;font-size:12px;color:#6f7b96;">
              Sent from Zentium free audit form. Replying goes directly to the lead.
            </td>
          </tr>
        </table>
      </div>
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
