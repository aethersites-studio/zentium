"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion-primitives";

const faqs = [
  {
    q: "How long until we see results from SEO?",
    a: "Local SEO improvements especially GBP optimization and technical fixes can show results in 4–8 weeks. Meaningful organic ranking improvements typically take 3–6 months depending on your market. We set clear expectations in your roadmap and report on leading indicators from week one.",
  },
  {
    q: "Do you work exclusively with family law firms?",
    a: "We're built for family law initially, but our system applies to all legal practice areas. What we don't do is work with non-legal industries. Specialization is the point.",
  },
  {
    q: "What makes Zentium different from other SEO agencies?",
    a: "Three things: specialization, accountability, and intake focus. We don't manage e-commerce or SaaS only law firms. We track metrics tied to revenue, not vanity numbers. And we study your intake process because getting someone to your site is only half the job.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. We operate on monthly retainers with 30-day cancellation after an initial 90-day commitment. The 90 days gives the strategy enough time to show real results.",
  },
  {
    q: "What does the free audit include?",
    a: "Local search visibility, Google Business Profile health, core technical SEO signals, competitor ranking snapshot, and an intake conversion review. You get a written findings report not a lead-gen PDF. No obligation to continue.",
  },
  {
    q: "How do you measure success?",
    a: "Phone calls, form submissions, and consultation requests alongside organic traffic and local rankings. We build custom dashboards so you see the metrics that matter to your firm not just keyword positions.",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left */}
          <FadeIn direction="right" className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
               style={{ color: "#F5A623" }}>
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4 text-balance">
              Frequently asked questions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Questions we hear from law firms before starting an engagement.
              If yours isn&apos;t here, ask us directly.
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 text-sm font-semibold group"
              style={{ color: "#F5A623" }}
            >
              Request your free audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>

          {/* Right */}
          <FadeIn className="lg:col-span-2">
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={index}>
                  <AccordionTrigger className="text-sm font-medium text-left text-foreground hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
