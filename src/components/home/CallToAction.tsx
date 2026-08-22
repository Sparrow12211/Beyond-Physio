import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section className="gradient-cta relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        <svg
          className="absolute -right-10 top-1/2 hidden h-64 w-64 -translate-y-1/2 text-white sm:block"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M40 100c20-40 60-60 100-40s40 80 0 100-80 20-100-60z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
        </svg>
        <svg
          className="absolute -left-16 bottom-0 hidden h-48 w-48 text-white sm:block"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 160 Q60 80 120 100 T180 60"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <Container className="relative">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionHeading
            title="Ready to Take the First Step?"
            subtitle="Book your appointment and start your journey toward better movement, recovery and wellbeing."
            light
          />
          <Button href="/contact" variant="white" className="mt-2 w-full sm:w-auto">
            Book an Appointment
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
