import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DOCTOR } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function DoctorProfile({ className }: { className?: string }) {
  return (
    <div className={cn("min-w-0 space-y-5 sm:space-y-6", className)}>
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-mint/60">
          <div className="relative aspect-[4/5] w-full max-h-[480px] sm:max-h-none sm:aspect-[3/4]">
            <Image
              src="/assets/images/dr-summaya-talha.jpg"
              alt={`${DOCTOR.name}, ${DOCTOR.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-[center_20%]"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-mint/60 sm:p-6">
          <h3 className="font-serif text-lg font-bold text-navy min-[375px]:text-xl">
            {DOCTOR.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-teal">
            {DOCTOR.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/65">
            {DOCTOR.credentials}
          </p>
          <p className="mt-3 rounded-lg bg-mint/50 px-3 py-2 text-xs font-medium text-navy">
            {DOCTOR.note}
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
