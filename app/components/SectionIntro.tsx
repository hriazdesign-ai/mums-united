import type { ReactNode } from "react";
import {
  containers,
  spacing,
  typography,
} from "@/lib/design-system";
import { SectionHeading } from "./SectionHeading";

type SectionIntroProps = {
  tag: ReactNode;
  heading: string;
  headingId: string;
  description?: string;
  variant?: "home" | "page";
  className?: string;
};

export function SectionIntro({
  tag,
  heading,
  headingId,
  description,
  variant = "page",
  className = "",
}: SectionIntroProps) {
  return (
    <div
      className={`flex flex-col items-center px-0 text-center md:px-8 lg:px-[60px] ${spacing.sectionIntroBottom} ${className}`.trim()}
    >
      <div className={containers.contentCentered}>
        {typeof tag === "string" ? (
          <p className={typography.eyebrow}>{tag}</p>
        ) : (
          tag
        )}
        <SectionHeading id={headingId} variant={variant}>
          {heading}
        </SectionHeading>
        {description ? (
          <p
            className={`${containers.prose} ${typography.body} md:px-8 lg:px-[150px]`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
