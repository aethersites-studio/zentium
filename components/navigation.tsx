"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AuditButton } from "@/components/ui/audit-button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Darken nav bar on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Scroll lock + ESC key + focus trap while menu is open
  useEffect(() => {
    if (!mobileOpen) return;

    // Lock scroll — using position:fixed to handle iOS Safari bounce
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // Move focus into menu
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC closes the menu
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }

      // Tab key focus trap
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restore scroll position
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  const navBg = scrolled
    ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/8 shadow-sm"
    : "bg-transparent";

  return (
    <>
      {/* ── Header bar (desktop + mobile) ── */}
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBg)}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="Zentium home">
              <span className="text-2xl font-semibold tracking-tight text-white transition-opacity group-hover:opacity-80">
                <span style={{ color: "#F5A623" }}>Z</span>entium
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === link.href ? "text-white" : "text-white/55 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <AuditButton />
            </div>

            {/* Mobile hamburger button */}
            <button
              className="md:hidden p-2 text-white hover:bg-white/10 transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen mobile overlay ── */}
      <div
        id="mobile-nav"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-[200] flex flex-col md:hidden bg-[#0A0A0A]",
          // visibility keeps it out of tab order when closed; opacity gives the fade
          "transition-[opacity,visibility] duration-200 ease-in-out",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {/* Top bar — mirrors the header height */}
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-white/[0.07] shrink-0">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
            className="text-2xl font-semibold tracking-tight text-white"
          >
            <span style={{ color: "#F5A623" }}>Z</span>entium
          </Link>
          <button
            ref={closeButtonRef}
            className="p-2 text-white hover:bg-white/10 transition-colors"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Nav links — large tap targets */}
        <nav
          className="flex flex-col flex-1 px-6 pt-4 overflow-y-auto"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? 0 : -1}
              className={cn(
                "flex items-center py-5 text-3xl font-semibold border-b border-white/[0.06] transition-colors",
                pathname === link.href
                  ? "text-white"
                  : "text-white/40 hover:text-white/80"
              )}
            >
              {pathname === link.href && (
                <span
                  className="w-1.5 h-1.5 rounded-full mr-3 shrink-0"
                  style={{ background: "#F5A623" }}
                  aria-hidden="true"
                />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-10 pt-6 shrink-0">
          <Link
            href="/free-audit"
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
            className="flex items-center justify-center w-full h-14 text-sm font-bold tracking-wide uppercase transition-opacity hover:opacity-90"
            style={{ background: "#F5A623", color: "#0A0A0A" }}
          >
            Get Your Free Audit
          </Link>
          <p className="text-center text-xs text-white/25 mt-4">
            No commitment. Results in 5 business days.
          </p>
        </div>
      </div>
    </>
  );
}
