"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Settings, BookOpen, Target, BarChart2 } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion-primitives";

const ease = [0.22, 1, 0.36, 1] as const;

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Visibility & Intake Audit",
    tagline: "See the full picture before touching anything.",
    description:
      "We begin every engagement with a deep-dive audit not as a sales tool, but as a genuine diagnostic. We analyze your current local search presence, Google Business Profile health, technical SEO signals, competitor positioning, and most importantly: your intake flow.",
    deliverables: [
      "Local search presence report",
      "GBP health assessment and gap analysis",
      "Technical SEO audit with prioritized issues",
      "Top 5 competitor visibility analysis",
      "Intake flow review and friction points",
      "Written findings report (yours to keep)",
    ],
    outcome: "You know exactly where your firm stands and what to fix first.",
    accent: "#F5A623",
  },
  {
    number: "02",
    icon: Settings,
    title: "SEO Foundation Setup",
    tagline: "Build it correctly once.",
    description:
      "We execute the foundational work that most agencies rush or skip entirely. This phase eliminates the technical debt that silently holds firms back from ranking and establishes the infrastructure for sustained growth.",
    deliverables: [
      "Legal schema markup (LegalService, Attorney, FAQPage)",
      "Core Web Vitals optimization",
      "Meta structure and on-page optimization",
      "Google Business Profile complete setup",
      "NAP consistency across directories",
      "Local citation setup (15 core citations)",
    ],
    outcome: "A technically clean foundation that search engines can confidently index and rank.",
    accent: "#10B981",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Authority & Content Growth",
    tagline: "Own the content that drives consultations.",
    description:
      "We create practice area pages and local content specifically designed to attract and qualify the searches that turn into cases. Every piece is built around search intent, not keyword density.",
    deliverables: [
      "Practice area page optimization and creation",
      "Local content strategy and editorial calendar",
      "Monthly content execution (2–4 pieces/month)",
      "Internal linking architecture",
      "FAQ content for featured snippets",
      "Location page strategy for multi-office firms",
    ],
    outcome: "A growing content footprint that consistently attracts your ideal client.",
    accent: "#F5A623",
  },
  {
    number: "04",
    icon: Target,
    title: "Conversion Optimization",
    tagline: "More visitors into consultations.",
    description:
      "Traffic is only half the equation. We review your intake flow, contact experience, and conversion points to ensure that the visitors you attract actually become consultation requests.",
    deliverables: [
      "Intake flow analysis and friction mapping",
      "CTA placement and copy review",
      "Contact page conversion optimization",
      "Mobile UX audit and recommendations",
      "Call tracking setup and attribution",
      "Form optimization review",
    ],
    outcome: "A higher percentage of qualified visitors become consultation requests.",
    accent: "#F59E0B",
  },
  {
    number: "05",
    icon: BarChart2,
    title: "Reporting & Growth Tracking",
    tagline: "Clarity on what's working every month.",
    description:
      "We build custom dashboards and deliver clear monthly reports focused on the metrics that matter to your firm's growth. No keyword-count decks. No opaque agency reports. Just the data you need to make decisions.",
    deliverables: [
      "Custom live reporting dashboard",
      "Monthly consultation and conversion report",
      "Keyword position tracking (local + organic)",
      "GBP insights and review monitoring",
      "Competitor visibility changes",
      "Quarterly roadmap review and planning",
    ],
    outcome: "Full transparency into what's working, what's improving, and what's next.",
    accent: "#10B981",
  },
];

export function ProcessPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="canvas-dark relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="absolute -left-48 top-1/3 w-[500px] h-[500px] rounded-full opacity-[0.1] blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Process
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.07] text-balance">
              A system built for{" "}
              <span className="text-gradient-brand">measurable growth</span>
            </h1>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-2xl mb-8">
              Every Zentium engagement follows a structured five-phase system.
              No improvised strategy. No opaque execution. Just a clear,
              repeatable process that drives real intake growth for law firms.
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 h-12 px-7 text-sm font-semibold text-white transition-all group hover:opacity-90"
              style={{ background: "#F5A623", color: "#0A0D14" }}
            >
              Start with a Free Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-8 pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="flex flex-col gap-6">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <StaggerItem key={phase.number}>
                  <div className="rounded-2xl border border-border bg-card shadow-premium overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      {/* Left accent panel */}
                      <div
                        className="lg:col-span-1 p-6 lg:p-8 flex flex-col justify-between"
                        style={{ background: `${phase.accent}08`, borderRight: `1px solid ${phase.accent}18` }}
                      >
                        <div>
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                            style={{ background: `${phase.accent}18` }}
                          >
                            <Icon className="w-5 h-5" style={{ color: phase.accent }} strokeWidth={1.75} />
                          </div>
                          <p
                            className="text-[11px] font-bold font-mono uppercase tracking-widest mb-1"
                            style={{ color: `${phase.accent}80` }}
                          >
                            Phase {phase.number}
                          </p>
                          <h2 className="text-lg font-semibold text-foreground leading-snug">
                            {phase.title}
                          </h2>
                        </div>
                        <p className="text-xs text-muted-foreground italic mt-4 hidden lg:block leading-relaxed">
                          &ldquo;{phase.tagline}&rdquo;
                        </p>
                      </div>

                      {/* Right content */}
                      <div className="lg:col-span-4 p-6 lg:p-8">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                          {phase.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                              Deliverables
                            </p>
                            <ul className="flex flex-col gap-2">
                              {phase.deliverables.map((d) => (
                                <li key={d} className="flex items-start gap-2 text-sm">
                                  <span
                                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                    style={{ background: phase.accent }}
                                  />
                                  <span className="text-muted-foreground">{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-col justify-end">
                            <div
                              className="rounded-xl p-4 border"
                              style={{
                                background: `${phase.accent}06`,
                                borderColor: `${phase.accent}20`,
                              }}
                            >
                              <p className="text-[10px] font-semibold uppercase tracking-widest mb-2"
                                 style={{ color: `${phase.accent}90` }}>
                                Outcome
                              </p>
                              <p className="text-sm font-medium text-foreground leading-snug">
                                {phase.outcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
