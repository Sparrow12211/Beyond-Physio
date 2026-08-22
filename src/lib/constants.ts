export const SITE = {
  name: "Beyond Physio",
  tagline: "Move Better. Feel Better. Live Better.",
  description:
    "Personalized physiotherapy care designed to help you move with confidence, recover from injury, and improve your quality of life.",
  url: "https://beeyondphysio.com",
} as const;

export const DOCTOR = {
  name: "Dr. Summaya Talha",
  title: "Consultant Physiotherapist",
  credentials: "DPT (DOW) · MPHIL (ZIAUDDIN) · DN · KT · CT (UK)",
  note: "Women & Children Only Clinic",
} as const;

export const CONTACT = {
  phone: "0300-2984021",
  phoneHref: "tel:+923002984021",
  whatsapp: "https://wa.me/923002984021",
  email: "[Replace with actual email]",
  emailHref: "mailto:info@beeyondphysio.com",
  address:
    "Besides Aga Khan Lab & Chughtai Lab, Saeedabad, Baldia Town, Karachi",
} as const;

export const SOCIAL = {
  facebook:
    "https://www.facebook.com/people/Beyond-Physio-by-Dr-Summaya-Talha/61561374382022/",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions We Treat", href: "/conditions" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const TRUST_FEATURES = [
  {
    title: "Expert Care",
    description:
      "Evidence-based physiotherapy from a qualified professional.",
    icon: "stethoscope" as const,
  },
  {
    title: "Personalized Plans",
    description: "Treatment tailored to individual needs and goals.",
    icon: "user-check" as const,
  },
  {
    title: "Advanced Techniques",
    description:
      "Modern physiotherapy approaches focused on effective recovery.",
    icon: "activity" as const,
  },
  {
    title: "Better Outcomes",
    description:
      "Supporting long-term mobility, strength and wellbeing.",
    icon: "heart-pulse" as const,
  },
] as const;

export const VALUE_STATEMENTS = [
  "Personalized Care",
  "Patient-Centered Approach",
  "Evidence-Based Treatment",
  "Focus on Long-Term Recovery",
] as const;
