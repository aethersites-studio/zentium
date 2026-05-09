import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesPackages } from "@/components/sections/services-packages";
import { ServicesAddons } from "@/components/sections/services-addons";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services | Law Firm SEO Packages",
  description:
    "Three focused SEO packages for family law firms: Foundation, Growth, and Authority. Each built around intake conversion, local visibility, and measurable results.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesPackages />
      <ServicesAddons />
      <CtaSection
        heading="Start with a free audit, not a sales call."
        subheading="We'll analyze your current visibility, technical setup, and intake flow then show you exactly what needs fixing. No obligation, no pitch deck."
        primaryCta="Get Your Free Audit"
        primaryHref="/free-audit"
        secondaryCta="View Our Process"
        secondaryHref="/process"
        variant="dark"
      />
    </>
  );
}
