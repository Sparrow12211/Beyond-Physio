import type { Metadata } from "next";
import { HeroCompact } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { CallToAction } from "@/components/home/CallToAction";
import { services } from "@/data/services";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: `Our Services | ${SITE.name}`,
  description:
    "Expert physiotherapy care for every stage of life. Explore our comprehensive range of treatments and rehabilitation services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <HeroCompact
        title="Our Services"
        subtitle="Expert Physiotherapy Care for Every Stage of Life"
      />

      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <ServicesGrid services={services} columns={2} />
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
