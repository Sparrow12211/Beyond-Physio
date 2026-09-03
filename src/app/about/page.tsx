import type { Metadata } from "next";
import Image from "next/image";
import { DoctorProfile } from "@/components/about/DoctorProfile";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CallToAction } from "@/components/home/CallToAction";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DOCTOR, SITE, VALUE_STATEMENTS, TRUST_FEATURES } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: `About Us | ${SITE.name}`,
  description: `Meet ${DOCTOR.name} — Founder & Lead Physiotherapist at ${SITE.name}. We Heal. We Move. We Strengthen.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="gradient-hero py-12 sm:py-16 md:py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <SectionHeading
                eyebrow="About Beyond Physio"
                title={`Meet ${DOCTOR.name}`}
                subtitle={`Founder & Lead Physiotherapist — ${DOCTOR.title}. ${SITE.tagline}`}
                align="left"
                light
              />

              <p className="max-w-2xl text-lg leading-relaxed text-white/90">
                {"Dr. Summaya Talha is a dedicated physiotherapist committed to professional, compassionate and patient-centered care for women and children. She leads Beyond Physio with a focus on evidence-based assessment, tailored rehabilitation and progressive strengthening so patients return to activity with confidence."}
              </p>

              <div className="mt-6 flex gap-3">
                <Button href="/contact" variant="primary">Book an Appointment</Button>
                <Button href="/services" variant="outline">Our Services</Button>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="mx-auto w-full max-w-md">
                <DoctorProfile />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Professional Profile */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">Professional Profile</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                Dr. Summaya provides personalized physiotherapy services from a professional, patient-friendly clinic in Saeedabad, Baldia Town, Karachi. Her care focuses on helping patients move beyond pain and limitations toward improved function, strength and everyday participation.
              </p>
            </AnimatedSection>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <AnimatedSection>
                <h4 className="text-lg font-semibold text-white">Qualifications</h4>
                <ul className="mt-3 list-inside list-disc text-foreground/75">
                  <li>MPhil in Physiotherapy — Ziauddin University</li>
                  <li>Doctor of Physical Therapy (DPT) — Dow University of Health Sciences</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection>
                <h4 className="text-lg font-semibold text-white">Professional Certifications</h4>
                <ul className="mt-3 list-inside list-disc text-foreground/75">
                  <li>Dry Cupping Therapy — UK</li>
                  <li>Kinesio Taping (KT) — UK</li>
                  <li>Dry Needling / Trigger Point Therapy — UK</li>
                  <li>Soft Tissue Management — UK</li>
                  <li>OMTC — UK</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Areas of Expertise */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--color-mint)]">
        <Container>
          <SectionHeading title="Areas of Expertise" subtitle="Conditions and problems commonly treated at Beyond Physio" align="center" />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Back and neck pain',
              'Shoulder pain and dysfunction',
              'Knee and joint problems',
              'Muscle and soft-tissue conditions',
              'Postural problems',
              'Sports and activity-related injuries',
            ].map((area) => (
              <AnimatedSection key={area} className="rounded-lg bg-[var(--color-deep-teal)] p-5 shadow-sm">
                <h5 className="font-medium text-white">{area}</h5>
                <p className="mt-2 text-sm text-foreground/70">Assessment and individualized rehabilitation to restore function and reduce pain.</p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Treatment Approach */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionHeading eyebrow="Our Philosophy" title="We Heal. We Move. We Strengthen." subtitle="A progressive, evidence-informed approach focused on recovery, mobility and long-term strength." align="center" />

            <AnimatedSection>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-lg font-semibold text-white">How We Treat</h4>
                  <ul className="mt-3 list-inside list-disc text-foreground/75">
                    <li>Comprehensive physiotherapy assessment</li>
                    <li>Therapeutic exercises &amp; strength training</li>
                    <li>Manual therapy and soft tissue techniques</li>
                    <li>Dry cupping, dry needling and kinesio taping when indicated</li>
                    <li>Functional and corrective rehabilitation</li>
                    <li>Individualized home exercise programs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white">Patient-Centred Care</h4>
                  <p className="mt-3 text-foreground/75">Building trust and understanding each patient’s goals is central to treatment. Plans are practical, measurable and designed to reduce dependency while improving confidence and physical capacity.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Feature Boxes integrated */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--background)]">
        <Container>
          <div className="mx-auto max-w-5xl">
            <SectionHeading title="What We Offer" subtitle="Personalized care backed by evidence and delivered with compassion." align="center" />

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {VALUE_STATEMENTS.map((statement) => (
                <AnimatedSection key={statement} className="rounded-lg bg-[var(--color-mint)] p-5 shadow-sm ring-1 ring-[var(--color-deep-teal)]">
                  <h5 className="text-sm font-semibold text-white">{statement}</h5>
                  <p className="mt-2 text-sm text-foreground/70">{/* short supporting text derived from the PDF */}
                    {statement === 'Personalized Care' && 'Individual assessment and tailored rehabilitation plans.'}
                    {statement === 'Patient-Centered Approach' && 'Care that respects patient goals, privacy and comfort.'}
                    {statement === 'Evidence-Based Treatment' && 'Treatments aligned with best practice and clinical evidence.'}
                    {statement === 'Focus on Long-Term Recovery' && 'Progressive strength and function to maintain gains.'}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
