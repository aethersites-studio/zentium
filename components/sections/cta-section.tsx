"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion-primitives";

interface CtaSectionProps {
  heading?: string;
  subheading?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  variant?: "dark" | "light";
}

export function CtaSection({
  heading = "Ready to see what your firm's search presence is missing?",
  subheading = "The audit is free, the findings are yours to keep, and there's no pressure to continue. Most firms walk away with at least three things they can act on immediately.",
  primaryCta = "Get Your Free Visibility Audit",
  primaryHref = "/free-audit",
  secondaryCta = "See Our Services",
  secondaryHref = "/services",
  variant = "dark",
}: CtaSectionProps) {
  if (variant === "light") {
    return (
      <section className="canvas-tinted py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-5 text-balance">
              {heading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">{subheading}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-semibold transition-all group w-full sm:w-auto hover:opacity-90"
                style={{ background: "#F5A623", color: "#0A0D14" }}
              >
                {primaryCta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center h-12 px-7 border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors w-full sm:w-auto"
              >
                {secondaryCta}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="canvas-dark relative py-20 sm:py-28 overflow-hidden">
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
      {/* Glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[700px] h-[400px] opacity-[0.10] blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #F5A623 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-5 text-balance">
            {heading}
          </h2>
          <p className="text-base text-white/55 leading-relaxed mb-8">{subheading}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-semibold transition-all group w-full sm:w-auto hover:opacity-90"
              style={{ background: "#F5A623", color: "#0A0D14" }}
            >
              {primaryCta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center h-12 px-7 border border-white/15 text-white/80 text-sm font-medium hover:bg-white/5 hover:border-white/25 transition-all w-full sm:w-auto"
            >
              {secondaryCta}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
