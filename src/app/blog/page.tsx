import type { Metadata } from "next";
import { HeroCompact } from "@/components/home/Hero";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: `Blog | ${SITE.name}`,
  description:
    "Health tips, physiotherapy insights, and wellness articles from Beyond Physio. Coming soon.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <HeroCompact
        title="Blog"
        subtitle="Health Tips & Physiotherapy Insights"
      />

      <section className="py-12 sm:py-16 md:py-20">
        <Container>
          <AnimatedSection className="mx-auto max-w-lg text-center">
            <p className="text-base leading-relaxed text-foreground/70">
              Our blog is coming soon. Check back for helpful articles on
              movement, recovery, and wellbeing.
            </p>
            <div className="mt-8">
              <Button href="/" variant="outline" className="w-full sm:w-auto">
                Back to Home
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
