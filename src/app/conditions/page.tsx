import type { Metadata } from "next";
import { HeroCompact } from "@/components/home/Hero";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CallToAction } from "@/components/home/CallToAction";
import {
  conditions,
  CONDITIONS_DISCLAIMER,
} from "@/data/conditions";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: `Conditions We Treat | ${SITE.name}`,
  description:
    "Physiotherapy support for back pain, joint pain, sports injuries, mobility problems, and more. Individual assessment determines treatment suitability.",
  path: "/conditions",
});

export default function ConditionsPage() {
  return (
    <>
      <HeroCompact
        title="Conditions We Treat"
        subtitle="Physiotherapy Support for a Wide Range of Concerns"
      />

      <section className="py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition, index) => (
              <AnimatedSection key={condition.title} delay={index * 0.05}>
                <article className="h-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-mint/60 transition-shadow hover:shadow-md">
                  <h3 className="font-serif text-lg font-bold text-navy">
                    {condition.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {condition.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10">
            <p className="rounded-lg bg-mint/40 px-5 py-4 text-center text-sm text-foreground/70">
              {CONDITIONS_DISCLAIMER}
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-8 text-center">
            <Button href="/contact" variant="primary">
              Book a Consultation
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
