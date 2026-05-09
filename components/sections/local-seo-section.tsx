"use client";

import { Phone, MapPin, Star, FileText, Search, Users } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion-primitives";
import { motion } from "framer-motion";

const focusAreas = [
  { icon: MapPin, label: "Google Business Profile", description: "Fully optimized GBP with accurate categories, services, photos, Q&A, and review response strategy." },
  { icon: Phone, label: "Intake Conversion", description: "Intake flow review and CRO improvements so more visitors become consultation requests." },
  { icon: Star, label: "Reputation Strategy", description: "Systematic approach to generating, monitoring, and responding to reviews across key platforms." },
  { icon: FileText, label: "Practice Area Pages", description: "Locally optimized pages for divorce, custody, support, and other practice areas your firm handles." },
  { icon: Search, label: "Local Pack Ranking", description: "Dedicated local pack strategy targeting the map results that drive the highest call volume." },
  { icon: Users, label: "Competitor Intelligence", description: "Ongoing visibility tracking of competitor rankings, content, and GBP activity in your market." },
];

/* Inline dashboard mockup pure CSS/Tailwind, no images */
function DashboardMockup() {
  const bars = [62, 78, 55, 90, 71, 84, 95];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border bg-card shadow-premium overflow-hidden"
    >
      {/* Header bar */}
      <div className="px-5 py-3.5 border-b border-border flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">visibility-dashboard.zentium.co</span>
      </div>

      <div className="p-5 space-y-5">
        {/* Top stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Local Pack", value: "#1", delta: "+6", color: "#10B981" },
            { label: "Consultations", value: "47", delta: "+43%", color: "#F5A623" },
            { label: "GBP Views", value: "2.4k", delta: "+28%", color: "#FFD97D" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-border p-3 bg-muted/30">
              <p className="text-[10px] text-muted-foreground mb-1">{s.label}</p>
              <p className="text-lg font-bold text-foreground leading-none mb-0.5">{s.value}</p>
              <p className="text-[10px] font-semibold" style={{ color: s.color }}>{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div>
          <p className="text-[10px] text-muted-foreground mb-2.5 font-medium">Weekly Organic Clicks</p>
          <div className="flex items-end gap-1.5 h-20">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h}%`, background: i === 6 ? "#F5A623" : "rgba(255,255,255,0.08)" }}
                initial={{ scaleY: 0, originY: 1 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className="flex-1 text-center text-[9px] text-muted-foreground">{d}</span>
            ))}
          </div>
        </div>

        {/* Ranking list */}
        <div>
          <p className="text-[10px] text-muted-foreground mb-2 font-medium">Top Keyword Positions</p>
          <div className="space-y-1.5">
            {[
              { kw: "divorce attorney [city]", pos: 1 },
              { kw: "family law firm near me", pos: 2 },
              { kw: "child custody lawyer [city]", pos: 1 },
            ].map((row) => (
              <div key={row.kw} className="flex items-center justify-between text-[11px]">
                <span className="text-foreground/70 truncate max-w-[68%]">{row.kw}</span>
                <span
                  className="font-bold rounded px-1.5 py-0.5 text-[10px]"
                  style={{
                    background: row.pos === 1 ? "rgba(16,185,129,0.14)" : "rgba(245,166,35,0.14)",
                    color: row.pos === 1 ? "#10B981" : "#F5A623",
                  }}
                >
                  #{row.pos}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function LocalSeoSection() {
  return (
    <section className="canvas-tinted py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <FadeIn direction="right">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
               style={{ color: "#F5A623" }}>
              Local SEO & Intake
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-5 text-balance">
              The searches that matter happen 5 miles from your office
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              Most family law clients search locally and hire within days.
              Your firm needs to rank where it matters in the map pack, in
              local organic results, with a GBP that converts searchers into callers.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We build local SEO systems specific to your market, your
              competitors, and the specific cases your firm wants to attract.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "76%", label: "of people who search locally visit or contact within 24 hours" },
                { stat: "3×", label: "more consultations from map pack positions vs. page-two organic" },
              ].map((item) => (
                <div key={item.stat} className="p-4 rounded-xl border border-border bg-card shadow-premium">
                  <p className="text-2xl font-bold mb-1" style={{ color: "#F5A623" }}>{item.stat}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: dashboard + features */}
          <div className="space-y-6">
            <DashboardMockup />
            <StaggerChildren className="grid grid-cols-2 gap-3">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <StaggerItem key={area.label}>
                    <div className="p-3.5 rounded-lg border border-border bg-card hover:shadow-sm transition-all duration-200">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: "#F5A623" }} strokeWidth={1.75} />
                        <span className="text-xs font-semibold text-foreground">{area.label}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{area.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
