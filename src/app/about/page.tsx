import type { Metadata } from "next";
import { HeroCompact } from "@/components/home/Hero";
import { DoctorProfile } from "@/components/about/DoctorProfile";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CallToAction } from "@/components/home/CallToAction";
import { DOCTOR, SITE, VALUE_STATEMENTS } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import {
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: `About Us | ${SITE.name}`,
  description: `Learn about ${SITE.name} and ${DOCTOR.name}, ${DOCTOR.title}. Dedicated to your movement, health and wellbeing.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <HeroCompact
        title="About Us"
        subtitle="Dedicated to Your Movement, Health & Wellbeing"
      />

      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection className="min-w-0">
              <h2 className="font-serif text-2xl font-bold text-navy min-[375px]:text-3xl sm:text-4xl">
                Welcome to {SITE.name}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
                <p>
                  {SITE.name} is a physiotherapy and rehabilitation clinic
                  committed to helping patients move with confidence, recover
                  from injury, and improve their quality of life through
                  evidence-based care.
                </p>
                <p>
                  Led by {DOCTOR.name}, {DOCTOR.title.toLowerCase()}, the
                  clinic provides personalized physiotherapy services in a
                  professional, welcoming environment. Every treatment plan is
                  tailored to the individual needs and goals of each patient.
                </p>
                <p>
                  Our approach combines thorough assessment, clear
                  communication, and modern physiotherapy techniques to support
                  effective recovery and long-term wellbeing.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                {VALUE_STATEMENTS.map((statement) => (
                  <div
                    key={statement}
                    className="flex items-center gap-2.5 rounded-lg bg-mint/40 px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                    <span className="text-sm font-medium text-navy">
                      {statement}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <DoctorProfile className="min-w-0" />
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
