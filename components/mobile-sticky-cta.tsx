"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/free-audit") return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 p-4 bg-background/95 backdrop-blur-sm border-t border-border",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <Link
        href="/free-audit"
        className="flex items-center justify-center w-full h-12 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        style={{ background: "#F5A623", color: "#0A0D14" }}
      >
        Get Your Free Visibility Audit
      </Link>
    </div>
  );
}
