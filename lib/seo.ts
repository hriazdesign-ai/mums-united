import type { Metadata } from "next";

export const siteConfig = {
  name: "Mums United",
  description:
    "Mums United supports vulnerable young people, mothers and families across Sheffield through mentoring, workshops, safe spaces and practical community support.",
  locale: "en_GB",
  twitterHandle: "@MumsUnited",
} as const;

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export function createPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title.includes("Mums United")
    ? title
    : `${title} | Mums United`;
  const url = `${getSiteUrl()}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path || "/",
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : { robots: { index: true, follow: true } }),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: siteConfig.twitterHandle,
    },
  };
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}
