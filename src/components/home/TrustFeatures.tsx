import {
  Activity,
  HeartPulse,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TRUST_FEATURES } from "@/lib/constants";

const iconMap = {
  stethoscope: Stethoscope,
  "user-check": UserCheck,
  activity: Activity,
  "heart-pulse": HeartPulse,
} as const;

export function TrustFeatures() {
  return (
    <section className="border-y border-[rgba(255,255,255,0.04)] bg-[var(--color-bg-light)] py-8 sm:py-10 md:py-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 min-[375px]:gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {TRUST_FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <AnimatedSection key={feature.title} delay={index * 0.08}>
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:items-center lg:text-center">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-deep-teal)] text-[var(--color-teal)] sm:mb-4 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-base font-bold text-white min-[375px]:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
