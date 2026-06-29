import type { MetadataRoute } from "next";
import { getMetadataBase } from "@/lib/seo";

const publicRoutes = [
  "/",
  "/about",
  "/support-services",
  "/programmes",
  "/media",
  "/donate",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getMetadataBase().origin;

  return publicRoutes.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
