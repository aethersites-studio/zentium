import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Zentium terms of service",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-6">
          Terms of Service
        </h1>
        <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
          <p>
            By accessing this website, you agree to these terms. Zentium reserves
            the right to update these terms at any time without prior notice.
          </p>
          <h2 className="text-base font-semibold text-foreground mt-8 mb-2">
            Use of this site
          </h2>
          <p>
            This website is provided for informational purposes. The content does
            not constitute legal advice. You may not use this site in any way that
            is unlawful or harmful.
          </p>
          <h2 className="text-base font-semibold text-foreground mt-8 mb-2">
            Intellectual property
          </h2>
          <p>
            All content on this site including copy, design, and structure is
            owned by Zentium and may not be reproduced without written permission.
          </p>
          <h2 className="text-base font-semibold text-foreground mt-8 mb-2">
            Contact
          </h2>
          <p>
            Questions? Email{" "}
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
