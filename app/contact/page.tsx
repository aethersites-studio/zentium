import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, CheckCircle, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Get Your Free Visibility & Intake Audit",
  description:
    "Request a free law firm SEO and intake audit. We'll analyze your search visibility, local rankings, Google Business Profile, and intake conversion flow no obligation.",
};

const auditIncludes = [
  "Local search visibility assessment",
  "Google Business Profile health check",
  "Core technical SEO signals",
  "Local competitor ranking snapshot",
  "Intake flow conversion review",
  "Written findings report (yours to keep)",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: info */}
          <div className="pt-6 lg:pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Free Audit
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-5 text-balance leading-[1.1]">
              See exactly where your firm&apos;s search presence stands
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              The audit is free, the findings are yours to keep, and there&apos;s
              zero pressure to continue. Most firms walk away with at least three
              actionable improvements they can make immediately whether they
              work with us or not.
            </p>

            {/* What's included */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-foreground mb-3">
                What&apos;s included:
              </p>
              <ul className="flex flex-col gap-2.5">
                {auditIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 p-3.5 rounded-lg border border-border bg-muted/40">
                <Clock className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">5 business days</span>{" "}
                  that&apos;s how long it takes to deliver your audit findings.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-lg border border-border bg-muted/40">
                <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">No sales call required</span>{" "}
                  we&apos;ll email your findings and let you decide what to do with them.
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 h-fit">
            <h2 className="text-lg font-semibold text-foreground mb-1">
              Request your free audit
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in the details below and we&apos;ll get started within 1 business day.
            </p>
            <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
