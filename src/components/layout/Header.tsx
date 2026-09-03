"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-3 sm:gap-4">
      <div className="relative h-12 w-44 min-w-[100px] shrink-0">
        <Image
          src="/assets/images/Logo.png"
          alt={`${SITE.name} logo`}
          fill
          sizes="(max-width: 640px) 160px, 220px"
          className="object-contain"
          priority
        />
      </div>
      <div className="min-w-0">
        <p
          className={cn(
            "truncate font-serif font-bold leading-tight text-white",
            compact ? "text-base sm:text-lg lg:text-xl" : "text-lg sm:text-xl",
          )}
        >
          {SITE.name}
        </p>
        {!compact && (
          <p className="hidden text-[10px] font-medium uppercase tracking-wider text-[var(--color-teal)] lg:block">
            {SITE.tagline}
          </p>
        )}
      </div>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [scrolled, mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-[rgba(255,255,255,0.06)] bg-[var(--color-deep-teal)] py-2 shadow-sm backdrop-blur-md"
            : "bg-transparent py-3 backdrop-blur-sm sm:py-4",
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <Logo compact={scrolled} />

            <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-[var(--color-teal)]",
                    pathname === link.href ? "text-[var(--color-teal)]" : "text-white/80",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <Button href="/contact" variant="primary" className="hidden px-4 py-2.5 text-xs sm:inline-flex sm:px-5 sm:text-sm">
                Book an Appointment
              </Button>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.06)] text-white transition-colors hover:bg-[rgba(255,255,255,0.03)] xl:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile menu backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 xl:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        style={{ top: headerHeight }}
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 bg-[var(--color-deep-teal)] shadow-xl transition-transform duration-300 ease-out xl:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex h-full flex-col overflow-y-auto overscroll-contain px-5 py-6 sm:px-6 sm:py-8" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "min-h-[48px] border-b border-[rgba(255,255,255,0.04)] py-3.5 text-base font-medium transition-colors sm:text-lg",
                pathname === link.href ? "text-[var(--color-teal)]" : "text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 pb-4">
            <Button href="/contact" variant="primary" className="w-full">
              Book an Appointment
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
