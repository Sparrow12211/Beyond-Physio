import { Hero } from "@/components/home/Hero";
import { TrustFeatures } from "@/components/home/TrustFeatures";
import { ServicesPreview } from "@/components/services/ServiceCard";
import { CallToAction } from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustFeatures />
      <ServicesPreview />
      <CallToAction />
    </>
  );
}
