import type { MetadataRoute } from "next";
import { getMetadataBase } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getMetadataBase().origin;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design-system", "/palette"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
