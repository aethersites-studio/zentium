import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, CheckCircle, MessageSquare, Shield } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Free Visibility & Intake Audit for Law Firms",
  description:
    "Request a free law firm SEO and intake audit. We analyze your search visibility, local rankings, Google Business Profile, and intake conversion no obligation.",
};

const auditIncludes = [
  "Local search visibility assessment",
  "Google Business Profile health check",
  "Core technical SEO signals",
  "Local competitor ranking snapshot",
  "Intake flow conversion review",
  "Written findings report (yours to keep)",
];

export default function FreeAuditPage() {
  return (
    <div className="min-h-screen">
      {/* Dark header */}
      <div className="canvas-dark relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="absolute right-0 top-0 w-[400px] h-[400px] opacity-[0.08] blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
            Free Audit
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-5 text-balance leading-[1.1] max-w-2xl">
            See exactly where your firm&apos;s search presence stands
          </h1>
          <p className="text-base text-white/55 leading-relaxed max-w-xl">
            The audit is free, the findings are yours to keep, and there&apos;s
            zero pressure to continue. Most firms walk away with at least three
            actionable improvements whether they work with us or not.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: info */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-5">
              What&apos;s included in the audit
            </h2>
            <ul className="flex flex-col gap-3 mb-8">
              {auditIncludes.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(245,166,35,0.12)" }}
                  >
                    <CheckCircle className="w-3 h-3" style={{ color: "#F5A623" }} />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust signals */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: Clock,
                  bold: "5 business days",
                  text: " that's how long it takes to deliver your audit findings.",
                },
                {
                  icon: MessageSquare,
                  bold: "No sales call required",
                  text: " we email your findings and let you decide what to do with them.",
                },
                {
                  icon: Shield,
                  bold: "No obligation",
                  text: " the audit is genuinely free. We earn your trust with the findings.",
                },
              ].map(({ icon: Icon, bold, text }) => (
                <div
                  key={bold}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card shadow-premium"
                >
                  <Icon className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{bold}</span> {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-border bg-card shadow-premium p-6 sm:p-8 h-fit">
            <h2 className="text-lg font-semibold text-foreground mb-1">
              Request your free audit
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in the details below and we&apos;ll get started within 1 business day.
            </p>
            <Suspense
              fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
