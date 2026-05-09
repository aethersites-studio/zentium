import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/about-content";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Zentium",
  description:
    "Zentium is a specialized SEO and digital growth partner for family law firms. We help attorneys attract qualified consultations and convert them into retained clients.",
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CtaSection
        heading="Ready to work with a team that understands law firms?"
        subheading="Start with a free audit. No pitch decks, no commitments. Just a clear look at where your firm's search presence stands today."
        primaryCta="Get Your Free Audit"
        primaryHref="/free-audit"
        secondaryCta="View Services"
        secondaryHref="/services"
        variant="light"
      />
    </>
  );
}
