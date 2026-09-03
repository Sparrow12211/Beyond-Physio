import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DOCTOR } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function DoctorProfile({ className }: { className?: string }) {
  return (
    <div className={cn("min-w-0 space-y-5 sm:space-y-6", className)}>
      <AnimatedSection>
        <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-mint/60">
          <div className="relative aspect-[4/5] w-full max-h-[520px] sm:aspect-[3/4]">
            <Image
              src="/assets/images/dr-summaya-talha.jpg"
              alt={`${DOCTOR.name}, ${DOCTOR.title}`}
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <div className="rounded-xl bg-[var(--color-mint)] p-5 shadow-sm ring-1 ring-[var(--color-deep-teal)] sm:p-6">
          <h3 className="font-serif text-xl font-bold text-white">{DOCTOR.name}</h3>
          <p className="mt-1 text-sm font-medium text-[var(--color-teal)]">{DOCTOR.title}</p>

          <p className="mt-3 text-sm leading-relaxed text-foreground/85">
            Founder &amp; Lead Physiotherapist at Beyond Physio. Committed to professional,
            compassionate and patient-centered physiotherapy care for women and children.
          </p>

          <p className="mt-3 text-sm text-foreground/70">{DOCTOR.credentials}</p>
          <div className="mt-3 inline-block rounded-lg bg-[var(--color-deep-teal)] px-3 py-2 text-xs font-medium text-white">
            {DOCTOR.note}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
