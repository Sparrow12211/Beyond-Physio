import {
  Activity,
  Brain,
  Bone,
  HeartHandshake,
  PersonStanding,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "musculoskeletal-rehabilitation",
    title: "Musculoskeletal Rehabilitation",
    description:
      "Relieve pain, improve strength and restore movement through targeted physiotherapy.",
    image: "/assets/images/clinic-treatment-beds.png",
    icon: Bone,
  },
  {
    slug: "sports-injury-treatment",
    title: "Sports Injury Treatment",
    description:
      "Specialized physiotherapy for sports-related injuries and recovery.",
    image: "/assets/images/clinic-exercise-area.png",
    icon: Trophy,
  },
  {
    slug: "post-surgical-recovery",
    title: "Post-Surgical Recovery",
    description:
      "Structured rehabilitation to support recovery after surgery.",
    image: "/assets/images/clinic-rehab-room.png",
    icon: Activity,
  },
  {
    slug: "neurological-rehabilitation",
    title: "Neurological Rehabilitation",
    description:
      "Physiotherapy support for neurological conditions and mobility challenges.",
    image: "/assets/images/clinic-equipment.png",
    icon: Brain,
  },
  {
    slug: "womens-health-physiotherapy",
    title: "Women's Health Physiotherapy",
    description:
      "Specialized physiotherapy care tailored to women's health needs.",
    image: "/assets/images/dr-summaya-talha.jpg",
    icon: HeartHandshake,
  },
  {
    slug: "geriatric-care",
    title: "Geriatric Care",
    description:
      "Helping improve mobility, balance, strength and independence.",
    image: "/assets/images/clinic-rehab-room.png",
    icon: PersonStanding,
  },
];
