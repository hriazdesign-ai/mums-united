import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media | Mums United",
  description:
    "Explore media appearances, podcast episodes and stories from Mums United supporting families and communities across Sheffield.",
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
