"use client";

import { FileSearch, Globe, BarChart2, Shield } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion-primitives";

const addons = [
  {
    icon: FileSearch,
    title: "Content Audits",
    description:
      "A full review of your existing website content identifying thin pages, keyword cannibalization, and content gaps relative to local competitors.",
  },
  {
    icon: Globe,
    title: "Multi-Location Setup",
    description:
      "For firms with multiple offices: location-specific page strategy, GBP management per location, and local citation differentiation by office.",
  },
  {
    icon: BarChart2,
    title: "Intake Analytics Setup",
    description:
      "Google Analytics 4 and call tracking configuration to accurately attribute consultations to their source so you know what's actually driving cases.",
  },
  {
    icon: Shield,
    title: "Reputation Recovery",
    description:
      "For firms with review issues or a damaged local reputation: a structured plan to improve your profile rating and restore trust signals over 60–90 days.",
  },
];

export function ServicesAddons() {
  return (
    <section className="py-16 sm:py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Add-Ons
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3 text-balance">
            Optional services for specific needs
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            These can be added to any package or requested as standalone
            one-time engagements.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {addons.map((addon) => {
            const Icon = addon.icon;
            return (
              <StaggerItem key={addon.title}>
                <div className="p-5 rounded-xl border border-border bg-card hover:shadow-sm transition-all duration-200 h-full">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-foreground" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1.5">
                    {addon.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {addon.description}
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
