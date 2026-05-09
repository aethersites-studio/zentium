"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion-primitives";

const steps = [
  {
    number: "01",
    title: "Visibility & Intake Audit",
    description:
      "We analyze your search presence, local rankings, GBP health, technical signals, and intake flow. Findings delivered in 5 business days yours to keep regardless.",
  },
  {
    number: "02",
    title: "Strategy & 90-Day Roadmap",
    description:
      "A prioritized plan with specific milestones, projected outcomes, and the reasoning behind every decision. No vague recommendations concrete actions.",
  },
  {
    number: "03",
    title: "Technical Foundation",
    description:
      "On-page SEO, legal schema markup, Core Web Vitals, and GBP enhancement built correctly once so you're not paying to fix problems six months later.",
  },
  {
    number: "04",
    title: "Authority & Content Growth",
    description:
      "Practice area pages, local content, and authoritative link-building from legally-relevant sources. Designed to own searches that result in phone calls.",
  },
  {
    number: "05",
    title: "Reporting & Optimization",
    description:
      "Monthly reporting on consultations and conversion metrics. Continuous optimization based on real intake data, competitor shifts, and algorithm changes.",
  },
];

export function ProcessSection() {
  return (
    <section className="canvas-dark relative py-20 sm:py-28 overflow-hidden">
      {/* Background dot grid */}
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.07] blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #F5A623 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/40">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4 text-balance">
            A clear process from audit to growth
          </h2>
          <p className="text-base text-white/55 leading-relaxed">
            No mystery, no hand-waving. Every engagement follows a structured
            five-step system built around measurable outcomes.
          </p>
        </FadeIn>

        <StaggerChildren className="relative">
          {/* Vertical connector */}
          <div
            className="hidden lg:block absolute left-[2.4rem] top-6 bottom-6 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(245,166,35,0.3) 20%, rgba(245,166,35,0.3) 80%, transparent)" }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-5">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex gap-6 lg:gap-8 items-start glass-card rounded-xl p-5 lg:p-6 hover:border-white/14 transition-all duration-200">
                  {/* Circle */}
                  <div
                    className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 border"
                    style={{
                      background: "rgba(245,166,35,0.10)",
                      borderColor: "rgba(245,166,35,0.25)",
                    }}
                  >
                    <span className="text-[11px] font-bold font-mono" style={{ color: "#F5A623" }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-2.5">
                    <h3 className="text-base font-semibold text-white mb-1.5">{step.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed max-w-xl">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        {/* Link to full process page */}
        <FadeIn className="mt-10 flex justify-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-sm font-medium group"
            style={{ color: "#F5A623" }}
          >
            View our full process
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
