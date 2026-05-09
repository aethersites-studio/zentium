"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: 76,
    suffix: "%",
    label: "of local searches result in a visit or contact within 24 hours",
    color: "#F5A623",
  },
  {
    value: 3,
    suffix: "×",
    label: "more consultations from map pack position #1 vs. page-two organic",
    color: "#10B981",
  },
  {
    value: 48,
    suffix: "hrs",
    label: "average time between a family law search and hiring decision",
    color: "#F59E0B",
  },
  {
    value: 90,
    suffix: "%",
    label: "of users never scroll past the first page of local search results",
    color: "#F5A623",
  },
];

function AnimatedNumber({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums" style={{ color }}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="canvas-dark relative py-16 sm:py-20 overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0A0A0A] px-6 py-8 flex flex-col gap-2"
            >
              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} color={stat.color} />
              </p>
              <p className="text-xs text-white/45 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
