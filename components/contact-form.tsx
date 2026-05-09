"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

const packageOptions = [
  { value: "", label: "Not sure yet" },
  { value: "foundation", label: "Foundation" },
  { value: "growth", label: "Growth" },
  { value: "authority", label: "Authority" },
  { value: "audit-only", label: "Just the free audit" },
];

const practiceAreas = [
  "Family Law / Divorce",
  "Child Custody",
  "Child Support",
  "Adoption",
  "Estate Planning / Probate",
  "Personal Injury",
  "Criminal Defense",
  "Immigration",
  "Other",
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultPackage = searchParams.get("package") ?? "";

  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    firmName: "",
    email: "",
    phone: "",
    website: "",
    practiceArea: "",
    package: defaultPackage,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate async submission wire to your API/form provider here
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6 text-brand" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          We&apos;ll be in touch within 1 business day
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          Thank you for reaching out. A member of our team will review your
          information and send you your audit findings report shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Your Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
          />
        </div>
        <div>
          <label
            htmlFor="firmName"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Firm Name <span className="text-destructive">*</span>
          </label>
          <input
            id="firmName"
            name="firmName"
            type="text"
            required
            value={form.firmName}
            onChange={handleChange}
            placeholder="Smith Family Law"
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@smithfamilylaw.com"
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Firm Website <span className="text-destructive">*</span>
        </label>
        <input
          id="website"
          name="website"
          type="url"
          required
          value={form.website}
          onChange={handleChange}
          placeholder="https://smithfamilylaw.com"
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="practiceArea"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Primary Practice Area
          </label>
          <select
            id="practiceArea"
            name="practiceArea"
            value={form.practiceArea}
            onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow appearance-none cursor-pointer"
          >
            <option value="">Select one</option>
            {practiceAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="package"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Package of Interest
          </label>
          <select
            id="package"
            name="package"
            value={form.package}
            onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow appearance-none cursor-pointer"
          >
            {packageOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your current situation, goals, or any specific concerns about your online presence..."
          className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow resize-none"
        />
      </div>

      <p className="text-xs text-muted-foreground">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:no-underline">
          Privacy Policy
        </a>
        . We don&apos;t share your information and you won&apos;t be added to
        any marketing list.
      </p>

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
      >
        {formState === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request Free Audit
          </>
        )}
      </button>
    </form>
  );
}
