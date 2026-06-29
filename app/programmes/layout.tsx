import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Programmes",
  description:
    "Explore Mums United programmes, workshops and community initiatives supporting families and young people across Sheffield.",
  path: "/programmes",
});

export default function ProgrammesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
