import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  CONTACT,
  DOCTOR,
  NAV_LINKS,
  SITE,
  SOCIAL,
} from "@/lib/constants";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gradient-cta text-white">
      <Container as="footer" className="py-10 sm:py-12 lg:py-16">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="min-w-0 lg:col-span-1 flex items-start gap-4">
            <div className="relative h-16 w-44 flex-shrink-0">
              <Image
                src="/assets/images/Logo.png"
                alt={`${SITE.name} logo`}
                fill
                sizes="(max-width: 640px) 160px, 220px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-serif text-xl font-bold sm:text-2xl">{SITE.name}</p>
              <p className="mt-2 text-sm font-medium text-[var(--muted-text)]/90">
                {SITE.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Professional physiotherapy care by {DOCTOR.name},{" "}
                {DOCTOR.title.toLowerCase()}.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--muted-text)]">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--muted-text)]">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--muted-text)]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-start gap-2.5 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-teal)]" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-start gap-2.5 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-teal)]" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 break-words text-sm text-white/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-teal)]" />
                  {CONTACT.address}
                </span>
              </li>
            </ul>

            <div className="mt-5 flex gap-3">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 transition-colors hover:bg-white/12"
                aria-label="Follow us on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 transition-colors hover:bg-white/12"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 transition-colors hover:bg-white/12"
                aria-label="Watch us on YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 transition-colors hover:bg-white/12"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-6 text-center text-xs text-white/60 sm:mt-12">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7V24h-4v-8.2c0-2 0-4.6-2.8-4.6-2.8 0-3.2 2.1-3.2 4.4V24h-4V8z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.9 2 12 2 12 2s-4.9 0-8.6.8c-.4.1-1.3.1-2.1 1C.6 4.5.5 6.2.5 6.2S.2 8 .2 9.8v2.4C.2 14.6.5 16.5.5 16.5s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.1.8 8.1.8s4.9 0 8.6-.8c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-1.9.2-3.7V9.8c0-1.8-.2-3.6-.2-3.6zM9.7 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.4 1.4.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.4 1.4-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.4-1.4-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.4-1.4.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.6.5 3.8.9c-.9.5-1.6 1.2-2.1 2.1C1.2 4 .9 5 .8 6.4.7 7.8.7 8.2.7 12s0 4.2.1 5.6c.1 1.4.4 2.4.9 3.2.5.9 1.2 1.6 2.1 2.1.8.5 1.8.8 3.2.9 1.4.1 1.8.1 5.6.1s4.2 0 5.6-.1c1.4-.1 2.4-.4 3.2-.9.9-.5 1.6-1.2 2.1-2.1.5-.8.8-1.8.9-3.2.1-1.4.1-1.8.1-5.6s0-4.2-.1-5.6c-.1-1.4-.4-2.4-.9-3.2-.5-.9-1.2-1.6-2.1-2.1-.8-.5-1.8-.8-3.2-.9C16.2 0 15.8 0 12 0z" />
    </svg>
  );
}
