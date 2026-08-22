"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-white transition-transform group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="M12 3c-2 4-6 5-6 10a6 6 0 0012 0c0-5-4-6-6-10z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="14" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className={cn(compact && "hidden sm:block")}>
        <p className="font-serif text-lg font-bold leading-tight text-navy sm:text-xl">
          {SITE.name}
        </p>
        {!compact && (
          <p className="hidden text-[10px] font-medium uppercase tracking-wider text-teal lg:block">
            {SITE.tagline}
          </p>
        )}
      </div>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-mint/60 bg-white/95 py-2 shadow-sm backdrop-blur-md"
          : "bg-white/80 py-4 backdrop-blur-sm",
      )}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          <Logo compact={scrolled} />

          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-teal",
                  pathname === link.href
                    ? "text-teal"
                    : "text-navy/80",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              className="hidden px-5 py-2.5 text-xs sm:inline-flex sm:text-sm"
            >
              Book an Appointment
            </Button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mint text-navy transition-colors hover:bg-mint xl:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[60px] z-40 bg-white transition-transform duration-300 xl:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="flex h-full flex-col overflow-y-auto px-6 py-8"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "border-b border-mint/50 py-4 text-lg font-medium transition-colors",
                pathname === link.href ? "text-teal" : "text-navy",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Button href="/contact" variant="primary" className="w-full">
              Book an Appointment
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
