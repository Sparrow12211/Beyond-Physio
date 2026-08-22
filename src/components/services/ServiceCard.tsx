import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import type { Service } from "@/data/services";
import { services as serviceList } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

export function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-mint/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        variant === "compact" && "flex flex-col",
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-teal shadow-sm">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-serif text-xl font-bold text-navy">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/65">
          {service.description}
        </p>
        <Link
          href="/services"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-deep-teal"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

interface ServicesGridProps {
  services: Service[];
  columns?: 2 | 3;
}

export function ServicesGrid({ services, columns = 3 }: ServicesGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 3
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "md:grid-cols-2",
      )}
    >
      {services.map((service, index) => (
        <AnimatedSection key={service.slug} delay={index * 0.06}>
          <ServiceCard service={service} />
        </AnimatedSection>
      ))}
    </div>
  );
}

export function ServicesPreview() {
  return (
    <section className="bg-bg-light py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          title="Our Physiotherapy Services"
          subtitle="Comprehensive care designed around your recovery and wellbeing."
        />
        <ServicesGrid services={serviceList} columns={3} />
        <AnimatedSection className="mt-10 text-center">
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
