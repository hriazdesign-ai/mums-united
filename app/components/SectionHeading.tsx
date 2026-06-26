import type { ReactNode } from "react";
import { typography } from "@/lib/design-system";

type SectionHeadingProps = {
  children: ReactNode;
  id?: string;
  /** Home sections use sectionHeading; inner pages use sectionHeadingPage */
  variant?: "home" | "page";
  className?: string;
};

export function SectionHeading({
  children,
  id,
  variant = "page",
  className = "",
}: SectionHeadingProps) {
  const classNames =
    variant === "home" ? typography.sectionHeading : typography.sectionHeadingPage;

  return (
    <h2 id={id} className={`${classNames} ${className}`.trim()}>
      {children}
    </h2>
  );
}
