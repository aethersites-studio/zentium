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
    tagline: "The right start.",
    description:
      "Ideal for law firms with minimal existing SEO, a recently launched website, or switching from an agency that never built a real foundation.",
    deliverables: [
      {
        category: "Discovery & Audit",
        items: [
          "Visibility and intake audit (5-day turnaround)",
          "Technical SEO site audit and prioritized fix list",
          "Local competitor analysis (top 5 firms)",
          "GBP health assessment",
        ],
      },
      {
        category: "Technical & On-Page",
        items: [
          "Core technical SEO implementation",
          "Legal schema markup (LegalService, Attorney, FAQPage)",
          "Core Web Vitals baseline improvement",
          "Meta title and description optimization",
        ],
      },
      {
        category: "Local SEO",
        items: [
          "Google Business Profile full optimization",
          "NAP consistency audit across top directories",
          "Local citation setup (15 core citations)",
          "Practice area page structure review",
        ],
      },
      {
        category: "Reporting",
        items: [
          "Monthly performance report",
          "Keyword ranking baseline and tracking",
          "GBP insights summary",
        ],
      },
    ],
    featured: false,
    cta: "Start with Foundation",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For firms ready to own their market.",
    description:
      "Best for established firms with some SEO history who want systematic, sustained growth in local rankings and qualified consultation volume.",
    deliverables: [
      {
        category: "Everything in Foundation, plus:",
        items: [],
      },
      {
        category: "Content & Authority",
        items: [
          "Local content strategy and calendar",
          "2 practice area / local SEO articles per month",
          "Internal linking architecture optimization",
          "FAQ content optimization for featured snippets",
        ],
      },
      {
        category: "Conversion & Intake",
        items: [
          "Intake flow conversion review",
          "CTA placement and copy recommendations",
          "Contact page optimization",
          "Mobile usability review",
        ],
      },
      {
        category: "Competitive Intelligence",
        items: [
          "Monthly competitor ranking movement report",
          "New competitor content monitoring",
          "Local pack position tracking (weekly)",
        ],
      },
      {
        category: "Reporting & Communication",
        items: [
          "Custom reporting dashboard (live access)",
          "Bi-weekly 30-minute strategy call",
          "Slack/email async updates",
        ],
      },
    ],
    featured: true,
    cta: "Start with Growth",
  },
  {
    id: "authority",
    name: "Authority",
    tagline: "Aggressive growth. Market dominance.",
    description:
      "For firms that want to be the undisputed local leader in their practice area. Accelerated content, full citation management, reputation strategy, and priority support.",
    deliverables: [
      {
        category: "Everything in Growth, plus:",
        items: [],
      },
      {
        category: "Accelerated Content",
        items: [
          "4 practice area / local content pieces per month",
          "Location page creation and optimization",
          "Long-form authority content (1/quarter)",
          "Content performance analysis and iteration",
        ],
      },
      {
        category: "Citations & Reputation",
        items: [
          "Ongoing citation building and cleanup",
          "Review generation strategy and templates",
          "Review response framework",
          "Reputation monitoring across platforms",
        ],
      },
      {
        category: "Priority Access",
        items: [
          "Priority Slack support (4-hour response)",
          "Weekly 30-minute strategy and progress call",
          "Dedicated account lead",
          "Quarterly roadmap review and planning",
        ],
      },
    ],
    featured: false,
    cta: "Start with Authority",
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
