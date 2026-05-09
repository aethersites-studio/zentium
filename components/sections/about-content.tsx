"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion-primitives";

const values = [
  {
    title: "Specialization over scope",
    description:
      "We work exclusively with law firms. That focus means everything we build, every process we follow, and every metric we track is calibrated specifically for legal intake and legal search behavior.",
  },
  {
    title: "Accountability over activity",
    description:
      "We don't bill by the deliverable or pad reports with busy work. We're accountable to outcomes qualified consultations, local rankings, and retained cases not traffic numbers and keyword counts.",
  },
  {
    title: "Transparency over polish",
    description:
      "We tell you what's working, what's not, and why. If something underperforms, you hear it from us first with a clear explanation and a plan to fix it.",
  },
  {
    title: "Systems over sprints",
    description:
      "Sustainable SEO growth requires infrastructure. We build the technical, content, and local systems that compound over time not one-time fixes that need repeating every quarter.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              About
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6 text-balance leading-[1.1]">
              Built around one question: what actually brings law firms more retained cases?
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Zentium started with a simple observation: most SEO agencies have
              no idea how a law firm&apos;s intake process works. They optimize for
              traffic. Law firms need consultations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-5 text-balance">
                Why we built a law-firm-only agency
              </h2>
              <div className="flex flex-col gap-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  Law firms kept telling us the same things: their previous agency
                  sent confusing reports, pivoted strategy every few months, and
                  never once asked how the intake team actually handled leads.
                  Rankings would improve. Consultations wouldn&apos;t.
                </p>
                <p>
                  The problem wasn&apos;t SEO knowledge. It was context. A generalist
                  agency doesn&apos;t know the difference between a qualified family law
                  inquiry and a spam submission. They don&apos;t understand why a firm
                  in a mid-size market can own local search by being extremely
                  precise about geography, practice area, and search intent.
                </p>
                <p>
                  We built Zentium to close that gap. Every system, every process,
                  every metric is designed specifically for law firms with the
                  goal of connecting the right people to the right attorney at the
                  moment they&apos;re ready to hire.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Focus", value: "Law firms only" },
                  { label: "Contracts", value: "Month-to-month" },
                  { label: "Audit Delivery", value: "5 business days" },
                  { label: "Client Roster", value: "Intentionally small" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl border border-border bg-card"
                  >
                    <p className="text-xs font-medium text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We keep our client roster intentionally small so every firm
                receives senior-level attention. We don&apos;t hand accounts to
                junior associates once the onboarding is done.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3 text-balance">
              How we work
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The principles that guide every engagement.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-6 rounded-xl border border-border bg-card h-full">
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
