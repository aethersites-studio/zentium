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
    tagline: "Audit-first setup for under-optimized firms.",
    description:
      "Best for newer or under-optimized firms. Starts with a full working audit, then focused foundational fixes your team can build on month over month.",
    deliverables: [
      {
        category: "Full Audit & Plan",
        items: [
          "Full SEO and local visibility audit",
          "Priority roadmap with what to fix first",
          "Google Business Profile baseline review",
          "Top local competitor benchmark",
        ],
      },
      {
        category: "Foundational Technical Work",
        items: [
          "Core technical cleanup (indexing, crawlability, structure)",
          "On-page metadata fixes for core pages",
          "Local legal schema setup and cleanup",
          "Initial page speed and UX fixes",
        ],
      },
      {
        category: "Local Presence Setup",
        items: [
          "Google Business Profile optimization",
          "NAP consistency cleanup",
          "Core citation corrections",
          "Practice area page structure review",
        ],
      },
      {
        category: "Reporting",
        items: [
          "Monthly progress summary",
          "Baseline keyword and local visibility tracking",
          "Next-step recommendations",
        ],
      },
    ],
    featured: false,
    cta: "Choose Foundation",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Steady monthly execution for consistent local growth.",
    description:
      "Best for firms that already have a base in place and want reliable month-to-month execution across local SEO, content, and intake-focused improvements.",
    deliverables: [
      {
        category: "Everything in Foundation, plus:",
        items: [],
      },
      {
        category: "Content & On-Page Execution",
        items: [
          "Monthly legal content plan",
          "Localized practice-area content execution",
          "Internal linking improvements",
          "On-page optimization for target pages",
        ],
      },
      {
        category: "Local Growth Management",
        items: [
          "Ongoing GBP optimization",
          "Competitor visibility checks",
          "Citation and profile maintenance",
          "Local ranking movement monitoring",
        ],
      },
      {
        category: "Conversion Support",
        items: [
          "Intake flow review",
          "CTA and contact-flow recommendations",
          "Mobile conversion UX checks",
        ],
      },
      {
        category: "Reporting & Communication",
        items: [
          "Monthly reporting dashboard",
          "Scheduled strategy call cadence",
          "Async updates on execution progress",
        ],
      },
    ],
    featured: true,
    cta: "Choose Growth",
  },
  {
    id: "authority",
    name: "Authority",
    tagline: "Higher-touch execution for stronger local positioning.",
    description:
      "Best for firms that want broader execution scope, faster iteration, and stronger market positioning through expanded content and reputation management.",
    deliverables: [
      {
        category: "Everything in Growth, plus:",
        items: [],
      },
      {
        category: "Expanded Monthly Execution",
        items: [
          "Higher monthly content and optimization throughput",
          "Location and practice-area expansion work",
          "Deeper on-page and internal-link iteration",
          "Faster implementation cycles",
        ],
      },
      {
        category: "Reputation & Citation Management",
        items: [
          "Ongoing citation cleanup and management",
          "Review strategy and response guidance",
          "Reputation monitoring across core platforms",
          "Brand consistency checks across listings",
        ],
      },
      {
        category: "Strategic Oversight",
        items: [
          "Higher-touch strategic oversight",
          "Frequent progress and priority reviews",
          "Monthly roadmap refinement",
          "Priority support for active initiatives",
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
            We start with a free high-level visibility snapshot, then scope a full
            working audit inside your selected package.{" "}
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
