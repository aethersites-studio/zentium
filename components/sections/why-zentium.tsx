"use client";

import { Scale, TrendingUp, Code2, BarChart3, Zap, MapPin } from "lucide-react";
import { StaggerChildren, StaggerItem, FadeIn } from "@/components/motion-primitives";

const reasons = [
  {
    icon: Scale,
    title: "Built for Law Firms Only",
    description:
      "We understand legal intake, referral flows, practice area competition, and the difference between a qualified lead and noise. No generalist playbooks.",
    accent: "#F5A623",
  },
  {
    icon: TrendingUp,
    title: "Retained Cases, Not Rankings",
    description:
      "We track consultation requests, form completions, and case inquiries not just keyword positions. Growth is measured in revenue impact.",
    accent: "#10B981",
  },
  {
    icon: Code2,
    title: "Technical SEO Depth",
    description:
      "Schema markup, Core Web Vitals, legal-specific content architecture, and GBP signals implemented correctly from day one, never patched later.",
    accent: "#F5A623",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Custom dashboards showing metrics that matter. Weekly updates. No opaque spreadsheets or 40-slide decks nobody reads.",
    accent: "#FFD97D",
  },
  {
    icon: Zap,
    title: "Fast, Responsive Execution",
    description:
      "Strategy deployed in weeks, not quarters. No 3-month onboarding. If something needs fixing, it's fixed and you hear about it first.",
    accent: "#FFD97D",
  },
  {
    icon: MapPin,
    title: "Local Market Dominance",
    description:
      "We map your competitive landscape and systematically own the local positions that drive phone calls not just organic impressions.",
    accent: "#10B981",
  },
];

export function WhyZentium() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
             style={{ color: "#F5A623" }}>
            Why Zentium
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4 text-balance">
            The firm-first difference
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Most SEO agencies treat law firms like any other client. We don&apos;t.
            Every system we build is designed around how family law firms actually
            operate from first contact to retained case.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={reason.title}>
                <div className="group p-6 rounded-xl border border-border bg-card shadow-premium card-hover-glow transition-all duration-250 h-full cursor-default">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                    style={{ background: `${reason.accent}18` }}
                  >
                    <Icon
                      className="w-4.5 h-4.5"
                      strokeWidth={1.75}
                      style={{ color: reason.accent }}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
