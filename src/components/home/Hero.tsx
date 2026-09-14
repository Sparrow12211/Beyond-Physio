"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DOCTOR, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="gradient-hero pattern-dots relative overflow-hidden">
      <Container as="section" className="relative py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left content */}
          <AnimatedSection className="order-2 min-w-0 lg:order-1">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-teal min-[375px]:mb-4 min-[375px]:text-xs min-[375px]:tracking-[0.25em]">
              {SITE.name.toUpperCase()}
            </p>
            <h1 className="font-serif text-[1.75rem] font-bold leading-[1.15] text-white min-[360px]:text-4xl sm:text-5xl lg:text-[3.25rem]">
              We Heal.
              <br />
              We Move.
              <br />
              <span className="text-[var(--color-teal)]">We Strengthen.</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/70 sm:mt-6 sm:text-base md:text-lg">
              {SITE.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8 sm:gap-4">
              <Button href="/contact" variant="primary" className="w-full min-[400px]:w-auto">
                Book an Appointment
              </Button>
              <Button href="/about" variant="outline" className="w-full min-[400px]:w-auto">
                Learn More
              </Button>
            </div>
          </AnimatedSection>

          {/* Right image */}
          <AnimatedSection delay={0.15} className="order-1 min-w-0 lg:order-2">
            <div className="relative mx-auto w-full max-w-md min-[400px]:max-w-lg lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[rgba(225,16,0,0.06)] to-[rgba(0,0,0,0.35)] blur-2xl sm:-inset-4" />
              <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-navy/5 lg:rounded-3xl">
                <div className="relative aspect-[4/5] w-full max-h-[420px] sm:max-h-none sm:aspect-[5/6] lg:aspect-[4/5]">
                  <Image
                    src="/assets/images/dr-summaya-talha.jpg"
                    alt={`${DOCTOR.name}, ${DOCTOR.title}, in her clinic`}
                    fill
                    priority
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[center_20%]"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-5 md:p-6">
                  <p className="font-serif text-base font-bold text-white sm:text-lg md:text-xl">
                    {DOCTOR.name}
                  </p>
                  <p className="text-sm text-[var(--muted-text)]">{DOCTOR.title}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

export function HeroCompact({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-mint pattern-dots">
      <Container as="section" className="py-10 sm:py-14 md:py-16 lg:py-20">
        <AnimatedSection className="text-center">
              <h1 className="font-serif text-3xl font-bold text-white min-[375px]:text-4xl sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-2xl px-1 text-base leading-relaxed text-foreground/70 sm:mt-4 sm:text-lg">
              {subtitle}
            </p>
          )}
        </AnimatedSection>
      </Container>
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal/5" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal/5" />
    </section>
  );
}
