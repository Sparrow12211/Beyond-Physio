import type { Metadata } from "next";
import { SITE } from "./constants";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
