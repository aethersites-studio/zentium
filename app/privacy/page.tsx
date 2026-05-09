import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Zentium privacy policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-6">
          Privacy Policy
        </h1>
        <div className="prose prose-zinc max-w-none text-muted-foreground text-sm leading-relaxed space-y-4">
          <p>
            Zentium (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
            protecting your privacy. This policy explains how we collect and use
            information submitted through this website.
          </p>
          <h2 className="text-base font-semibold text-foreground mt-8 mb-2">
            Information we collect
          </h2>
          <p>
            We collect information you provide directly, such as your name, firm
            name, email address, phone number, and website URL when you submit an
            audit request or contact form.
          </p>
          <h2 className="text-base font-semibold text-foreground mt-8 mb-2">
            How we use your information
          </h2>
          <p>
            We use submitted information solely to respond to your inquiry and
            deliver the requested audit. We do not sell, share, or rent your
            information to third parties or add you to any marketing lists without
            your explicit consent.
          </p>
          <h2 className="text-base font-semibold text-foreground mt-8 mb-2">
            Contact
          </h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href="mailto:hello@zentiumhq.com" className="text-foreground underline">
              hello@zentiumhq.com
            </a>
            .
          </p>
          <p className="text-xs text-muted-foreground/70 mt-10">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>
        </div>
      </div>
    </div>
  );
}
