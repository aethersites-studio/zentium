"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion-primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const packages = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "Built for firms that need a clean, credible SEO base.",
    description:
      "Best for newer or under-optimized firms that need core local visibility fixed first: technical cleanup, Google Business Profile consistency, and reliable baseline tracking.",
    deliverables: [
      {
        category: "Baseline & Priorities",
        items: [
          "Initial local visibility and intake baseline review",
          "Technical SEO audit with a prioritized action plan",
          "Google Business Profile health review",
          "Local competitor snapshot for your key practice areas",
        ],
      },
      {
        category: "Technical & On-Site Improvements",
        items: [
          "Core technical fixes (crawlability, indexing, site structure)",
          "Local legal schema implementation and cleanup",
          "Title tag and meta description improvements",
          "Core page experience and speed improvements",
        ],
      },
      {
        category: "Local Presence Management",
        items: [
          "Google Business Profile optimization and category tuning",
          "NAP consistency cleanup across core directories",
          "Citation foundation setup and correction",
          "Practice area page structure and internal linking review",
        ],
      },
      {
        category: "Reporting & Oversight",
        items: [
          "Monthly visibility report in plain language",
          "Local ranking and GBP performance tracking",
          "Next-month priorities and execution notes",
        ],
      },
    ],
    featured: false,
    cta: "Choose Foundation",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Consistent local growth with content and conversion focus.",
    description:
      "Best for firms that already have basics in place and want steady local growth through ongoing content execution, competitor visibility monitoring, and intake-focused improvements.",
    deliverables: [
      {
        category: "Everything in Foundation, plus:",
        items: [],
      },
      {
        category: "Localized Legal Content",
        items: [
          "Practice area content strategy and monthly content plan",
          "Localized legal content production (practice area + city intent)",
          "Internal linking improvements across core service pages",
          "FAQ and AI-search-ready content refinements",
        ],
      },
      {
        category: "Conversion & Intake",
        items: [
          "Intake flow conversion review",
          "CTA placement and copy recommendations",
          "Contact and conversion path refinements",
          "Mobile UX checks for lead actions",
        ],
      },
      {
        category: "Competitive Visibility",
        items: [
          "Ongoing local competitor visibility analysis",
          "Monthly ranking movement and coverage review",
          "Competitor content and SERP change monitoring",
        ],
      },
      {
        category: "Reporting & Communication",
        items: [
          "Live reporting dashboard with monthly summary",
          "Bi-weekly strategy and execution check-in",
          "Async updates and task visibility",
        ],
      },
    ],
    featured: true,
    cta: "Choose Growth",
  },
  {
    id: "authority",
    name: "Authority",
    tagline: "Higher-touch SEO management for stronger market positioning.",
    description:
      "Best for firms that want stronger market positioning with broader content coverage, reputation and citation management, and tighter strategic oversight from month to month.",
    deliverables: [
      {
        category: "Everything in Growth, plus:",
        items: [],
      },
      {
        category: "Expanded Content Execution",
        items: [
          "Expanded localized legal content publishing cadence",
          "Location and practice area page expansion",
          "Quarterly long-form authority asset planning",
          "Content performance review and iterative updates",
        ],
      },
      {
        category: "Reputation & Citation Management",
        items: [
          "Ongoing citation correction and maintenance",
          "Review generation workflow recommendations",
          "Review response guidance and quality control",
          "Reputation monitoring across major platforms",
        ],
      },
      {
        category: "Strategic Oversight",
        items: [
          "Dedicated strategic lead and execution oversight",
          "Weekly progress sync with next-step priorities",
          "Monthly roadmap refinement based on performance",
          "Faster support response for active initiatives",
        ],
      },
    ],
    featured: false,
    cta: "Choose Authority",
  },
];

export function ServicesPackages() {
  return (
    <section className="py-8 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          {packages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <div
                id={pkg.id}
                className="flex flex-col scroll-mt-24"
                style={
                  pkg.featured
                    ? { border: "1px solid #F5A623", background: "#141414", position: "relative" }
                    : { border: "1px solid rgba(255,255,255,0.09)", background: "#1A1A1A" }
                }
              >
                {/* Gold corner accent on featured */}
                {pkg.featured && (
                  <div className="absolute top-0 right-0 w-3 h-3" style={{ background: "#F5A623" }} />
                )}

                {/* Header */}
                <div className="p-6 pb-5 border-b border-white/[0.07]">
                  {pkg.featured && (
                    <span
                      className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest mb-3"
                      style={{ color: "#F5A623", border: "1px solid #F5A623" }}
                    >
                      Most Popular
                    </span>
                  )}
                  <h2 className="text-xl font-semibold tracking-tight text-foreground mb-1">
                    {pkg.name}
                  </h2>
                  <p className="text-xs font-medium text-muted-foreground mb-3">
                    {pkg.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Deliverables — accordion */}
                <div className="px-6">
                  <Accordion className="w-full">
                    {pkg.deliverables.map((section, i) =>
                      section.items.length === 0 ? (
                        /* Inheritance label — not expandable */
                        <div key={i} className="py-3 border-b border-white/[0.06]">
                          <p
                            className="text-[10px] font-bold uppercase tracking-widest"
                            style={{ color: "#F5A623" }}
                          >
                            {section.category}
                          </p>
                        </div>
                      ) : (
                        <AccordionItem key={i} value={i}>
                          <AccordionTrigger className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:no-underline py-3">
                            {section.category}
                          </AccordionTrigger>
                          <AccordionContent className="pb-3">
                            <ul className="flex flex-col gap-2">
                              {section.items.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <Check
                                    className="w-3.5 h-3.5 mt-0.5 shrink-0"
                                    style={{ color: "#F5A623" }}
                                    strokeWidth={2.5}
                                  />
                                  <span className="text-sm text-muted-foreground leading-snug">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )
                    )}
                  </Accordion>
                </div>

                {/* CTA */}
                <div className="p-6 pt-4">
                  <Link
                    href={`/free-audit?package=${pkg.id}`}
                    className="inline-flex items-center justify-center gap-2 w-full h-10 px-5 text-sm font-semibold transition-all group"
                    style={
                      pkg.featured
                        ? { background: "#F5A623", color: "#0A0A0A" }
                        : { border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }
                    }
                  >
                    {pkg.cta}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Footnote */}
        <FadeIn className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            All packages are month-to-month after an initial 90-day commitment.
            Pricing is customized after your free audit.{" "}
            <Link href="/free-audit" className="text-foreground underline underline-offset-2 hover:no-underline">
              Request pricing
            </Link>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
