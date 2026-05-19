"use client";

import Link from "next/link";
import Image from "next/image";
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
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // All pages are dark nav is always transparent, darkens on scroll
  const isDarkHero = true;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMobileMenuMounted(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const navBg = scrolled
    ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/8 shadow-sm"
    : "bg-transparent";

  const linkColor = "text-white/55 hover:text-white";
  const activeLinkColor = "text-white";

  const openMobileMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMobileMenuMounted(true);
    requestAnimationFrame(() => setMobileOpen(true));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setMobileMenuMounted(false);
      closeTimerRef.current = null;
    }, 220);
  };

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBg)}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Zentium home">
            <Image
              src="/logos/zentium-website-logo.png"
              alt="Zentium"
              width={688}
              height={62}
              priority
              className="h-5 w-auto transition-opacity group-hover:opacity-80 [filter:brightness(0)_invert(1)]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href ? activeLinkColor : linkColor
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

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md transition-colors text-white hover:bg-white/10"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => (mobileOpen ? closeMobileMenu() : openMobileMenu())}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuMounted && (
        <div
          className={cn(
            "fixed inset-0 z-[70] md:hidden backdrop-blur-xl supports-[backdrop-filter]:bg-[#1c222b]/28 transition-opacity duration-200 ease-out",
            mobileOpen ? "opacity-100 bg-[#1c222b]/35" : "pointer-events-none opacity-0 bg-[#1c222b]/0"
          )}
        >
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              className="p-2 rounded-md transition-colors text-white hover:bg-white/10"
              aria-label="Close menu"
              onClick={closeMobileMenu}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className={cn(
              "flex h-[100dvh] flex-col items-center justify-center px-6 py-10 transition-all duration-200 ease-out will-change-transform",
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
            )}
          >
            <Link
              href="/"
              className="absolute top-8 left-1/2 -translate-x-1/2 group"
              aria-label="Zentium home"
              onClick={closeMobileMenu}
            >
              <Image
                src="/logos/zentium-website-logo.png"
                alt="Zentium"
                width={688}
                height={62}
                priority
                className="h-5 w-auto transition-opacity group-hover:opacity-80 [filter:brightness(0)_invert(1)]"
              />
            </Link>

            <nav className="mt-10 flex flex-col items-center gap-6" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch
                  onClick={closeMobileMenu}
                  className={cn(
                    "text-3xl font-semibold tracking-tight transition-colors",
                    pathname === link.href ? "text-white" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-10">
              <AuditButton label="Free Visibility Review" onClick={closeMobileMenu} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
