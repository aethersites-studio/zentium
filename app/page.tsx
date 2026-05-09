import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats-section";
import { WhyZentium } from "@/components/sections/why-zentium";
import { PainPoints } from "@/components/sections/pain-points";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesOverview } from "@/components/sections/services-overview";
import { LocalSeoSection } from "@/components/sections/local-seo-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Zentium | SEO Growth Partner for Law Firms",
  description:
    "Zentium helps family law firms dominate local search, attract qualified consultations, and convert more visitors into retained clients. Get your free visibility audit.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <WhyZentium />
      <PainPoints />
      <ProcessSection />
      <ServicesOverview />
      <LocalSeoSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
