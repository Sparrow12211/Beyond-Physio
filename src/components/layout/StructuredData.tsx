import { CONTACT, DOCTOR, SITE, SOCIAL } from "@/lib/constants";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    founder: {
      "@type": "Person",
      name: DOCTOR.name,
      jobTitle: DOCTOR.title,
    },
    sameAs: [SOCIAL.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
