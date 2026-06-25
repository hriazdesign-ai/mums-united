import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes | Mums United",
  description:
    "Explore Mums United programmes, workshops and community initiatives supporting families and young people across Sheffield.",
};

export default function ProgrammesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
