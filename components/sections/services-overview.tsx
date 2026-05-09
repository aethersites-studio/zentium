"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion-primitives";

const packages = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "The right start for firms building from scratch.",
    highlights: [
      "Visibility & intake audit",
      "Google Business Profile optimization",
      "Core technical SEO",
      "Practice area page optimization",
      "Local citation setup",
      "Monthly performance report",
    ],
    cta: "Start with Foundation",
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For firms ready to own their local market.",
    highlights: [
      "Everything in Foundation",
      "Local content strategy (2/month)",
      "Competitor visibility tracking",
      "Intake conversion review",
      "Custom reporting dashboard",
      "Bi-weekly strategy calls",
    ],
    cta: "Start with Growth",
    featured: true,
  },
  {
    id: "authority",
    name: "Authority",
    tagline: "Aggressive growth. Market dominance.",
    highlights: [
      "Everything in Growth",
      "Accelerated content (4/month)",
      "Citation building & management",
      "Reputation & review strategy",
      "Priority support & response",
      "Weekly strategy updates",
    ],
    cta: "Start with Authority",
    featured: false,
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
             style={{ color: "#F5A623" }}>
            Service Packages
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4 text-balance">
            Three packages. Clear scope. No surprises.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Every engagement starts with a free audit so you know exactly where
            you stand before committing to anything.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {packages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              {pkg.featured ? (
                /* Featured: gold gradient border wrapper */
                <div
                  className="relative rounded-xl p-px h-full"
                  style={{ background: "#F5A623" }}
                >
                  <div className="relative flex flex-col h-full rounded-[11px] bg-[#0A0A0A] p-6">
                    <div className="absolute -top-3 left-6">
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                        style={{ background: "#F5A623", color: "#0A0D14" }}
                      >
                        Most Popular
                      </span>
                    </div>
                    <div className="mb-5 pt-2">
                      <h3 className="text-lg font-semibold text-white mb-1.5">{pkg.name}</h3>
                      <p className="text-sm text-white/50 leading-snug">{pkg.tagline}</p>
                    </div>
                    <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                      {pkg.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#F5A623" }} strokeWidth={2.5} />
                          <span className="text-sm text-white/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/free-audit?package=${pkg.id}`}
                      className="inline-flex items-center justify-center gap-2 h-10 px-4 text-sm font-semibold transition-all group hover:opacity-90"
                      style={{ background: "#F5A623", color: "#0A0D14" }}
                    >
                      {pkg.cta}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              ) : (
                /* Standard card */
                <div className="flex flex-col h-full rounded-xl border border-border bg-card shadow-premium card-hover-glow p-6 transition-all duration-200">
                  <div className="mb-5">
                    <h3 className="text-lg font-semibold text-foreground mb-1.5">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">{pkg.tagline}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {pkg.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#F5A623" }} strokeWidth={2.5} />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/free-audit?package=${pkg.id}`}
                    className="inline-flex items-center justify-center gap-2 h-10 px-4 border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors group"
                  >
                    {pkg.cta}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Not sure which package fits your firm?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium group"
            style={{ color: "#F5A623" }}
          >
            View full service details
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
