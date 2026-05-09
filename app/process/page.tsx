import type { Metadata } from "next";
import { ProcessPageContent } from "@/components/sections/process-page-content";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Our Process | How Zentium Grows Law Firms",
  description:
    "A five-phase SEO growth system built for law firms: visibility audit, technical foundation, authority content, conversion optimization, and transparent reporting.",
};

export default function ProcessPage() {
  return (
    <>
      <ProcessPageContent />
      <CtaSection
        heading="Start with a free audit, not a discovery call."
        subheading="We'll analyze your firm's visibility, technical setup, and intake flow then show you exactly what needs fixing. No obligation."
        primaryCta="Get Your Free Audit"
        primaryHref="/free-audit"
        secondaryCta="View Services"
        secondaryHref="/services"
        variant="dark"
      />
    </>
  );
}
