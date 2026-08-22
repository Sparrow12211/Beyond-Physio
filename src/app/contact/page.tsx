import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { HeroCompact } from "@/components/home/Hero";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CONTACT, SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: `Contact & Appointments | ${SITE.name}`,
  description:
    "Book your physiotherapy appointment at Beeyond Physio. Contact us by phone, WhatsApp, or request an appointment online.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <HeroCompact
        title="Contact Us"
        subtitle="Book Your Appointment Today"
      />

      <section className="py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact info */}
            <AnimatedSection className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-navy">
                Book an Appointment
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Take the first step toward better movement and recovery. Contact
                us to schedule your consultation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={CONTACT.whatsapp} variant="primary">
                  WhatsApp Us
                </Button>
                <Button href={CONTACT.phoneHref} variant="outline">
                  Call Now
                </Button>
              </div>

              <h3 className="mt-10 font-serif text-xl font-bold text-navy">
                Contact Information
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href={CONTACT.phoneHref}
                    className="flex items-start gap-3 text-sm text-foreground/70 transition-colors hover:text-teal"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.emailHref}
                    className="flex items-start gap-3 text-sm text-foreground/70 transition-colors hover:text-teal"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-3 text-sm text-foreground/70">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    {CONTACT.address}
                  </span>
                </li>
              </ul>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.1} className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-mint/60 sm:p-8">
                <h2 className="font-serif text-2xl font-bold text-navy">
                  Request an Appointment
                </h2>
                <p className="mt-2 text-sm text-foreground/60">
                  Fill in the form below and we will get back to you.
                </p>
                <div className="mt-6">
                  <AppointmentForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
