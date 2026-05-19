"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { m } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="canvas-dark relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-100" aria-hidden="true" />

      {/* Orb glows — hidden on mobile to reduce GPU cost */}
      <div
        className="hidden sm:block absolute -left-48 top-1/4 w-[600px] h-[600px] rounded-full opacity-[0.10] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="hidden sm:block absolute -right-48 bottom-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFD97D 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        {/* Eyebrow */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="block w-6 h-px" style={{ background: "#F5A623" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#F5A623" }}>
            Specialized SEO Growth for Family Law Firms
          </span>
          <span className="block w-6 h-px" style={{ background: "#F5A623" }} />
        </m.div>

        {/* Headline */}
        <m.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-tight text-white leading-[1.06] text-balance mb-6"
        >
          Turn Search Into{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient-brand">Retained Cases</span>
        </m.h1>

        {/* Sub */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="max-w-xl mx-auto text-base sm:text-lg text-white/55 leading-relaxed mb-10 text-balance"
        >
          We help family law firms dominate local search, convert qualified
          consultations, and grow retained cases with full operational
          transparency at every step.
        </m.p>

        {/* CTAs */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-semibold transition-all group w-full sm:w-auto hover:opacity-90"
            style={{ background: "#F5A623", color: "#0A0D14" }}
          >
            Get Your Free Visibility Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center justify-center h-12 px-7 border border-white/15 text-white/80 text-sm font-medium hover:bg-white/5 hover:border-white/25 transition-all w-full sm:w-auto"
          >
            See How It Works
          </Link>
        </m.div>

        {/* Trust row */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { stat: "90-Day", label: "Results Roadmap" },
            { stat: "Law Firms", label: "No Generalists" },
            { stat: "Zero", label: "Long-Term Contracts" },
          ].map((item) => (
            <div key={item.stat} className="flex items-center gap-2">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm font-semibold text-white">{item.stat}</span>
                <span className="text-xs text-white/40">{item.label}</span>
              </div>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
