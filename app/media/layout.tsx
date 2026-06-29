import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Media",
  description:
    "Explore media appearances, podcast episodes and stories from Mums United supporting families and communities across Sheffield.",
  path: "/media",
});

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
