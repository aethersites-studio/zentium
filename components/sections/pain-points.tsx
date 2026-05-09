"use client";

import { X, ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion-primitives";

const painPoints = [
  {
    problem: "Rankings went up. Consultations didn't.",
    solution: "We track qualified consultations and intake conversions from week one not vanity metrics.",
  },
  {
    problem: "Monthly reports nobody could interpret.",
    solution: "Plain-English dashboards showing exactly what changed, why it matters, and what's next.",
  },
  {
    problem: "The agency never understood how intake works.",
    solution: "We study your intake flow before writing a single piece of content.",
  },
  {
    problem: "Three strategy pivots in six months.",
    solution: "A clear 90-day roadmap built upfront. No guessing, no pivoting without data.",
  },
  {
    problem: "Zero visibility into actual work being done.",
    solution: "Async updates, shared task boards, and weekly reports always.",
  },
  {
    problem: "Clearly a low-priority account at a large agency.",
    solution: "A small, focused client roster. Your firm gets senior-level attention, always.",
  },
];

export function PainPoints() {
  return (
    <section className="canvas-tinted py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
             style={{ color: "#F5A623" }}>
            Sound Familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4 text-balance">
            Common complaints about generic agencies
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We built Zentium because these frustrations are nearly universal
            among law firms that have tried generalist agencies.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((item) => (
            <StaggerItem key={item.problem} className="h-full">
              <div className="h-full p-5 rounded-xl border border-border bg-card shadow-premium hover:shadow-premium-hover transition-all duration-250 group">
                {/* Problem */}
                <div className="flex items-start gap-3 mb-3 pb-3 border-b border-border/60">
                  <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                       style={{ background: "rgba(239,68,68,0.12)" }}>
                    <X className="w-3 h-3 text-red-400" strokeWidth={2.5} />
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-snug">
                    &ldquo;{item.problem}&rdquo;
                  </p>
                </div>
                {/* Solution */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                       style={{ background: "rgba(245,166,35,0.12)" }}>
                    <ArrowRight className="w-3 h-3" style={{ color: "#F5A623" }} strokeWidth={2.5} />
                  </div>
                  <p className="text-sm text-foreground leading-snug font-medium">
                    {item.solution}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
