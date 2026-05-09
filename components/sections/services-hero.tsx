"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6 text-balance leading-[1.1]">
            Focused packages for law firm growth
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Three engagement tiers each built around the same core principle:
            attracting qualified consultations, not just traffic. Every package
            starts with a free visibility audit so we both understand the
            baseline before committing to a strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
