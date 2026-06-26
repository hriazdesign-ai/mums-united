import type { ReactNode } from "react";
import {
  containers,
  imageCtaPadding,
  typography,
} from "@/lib/design-system";
import { SectionHeading } from "./SectionHeading";

type CtaContentProps = {
  heading: string;
  headingId?: string;
  body?: string;
  eyebrow?: string;
  actions?: ReactNode;
  /** Home image CTAs use sectionHeading; inner pages use sectionHeadingPage */
  variant?: "home" | "page";
  className?: string;
};

export function CtaContent({
  heading,
  headingId,
  body,
  eyebrow,
  actions,
  variant = "page",
  className = "",
}: CtaContentProps) {
  return (
    <div className={`${imageCtaPadding.content} ${className}`.trim()}>
      <div className={`${containers.contentCentered} text-white`}>
        {eyebrow ? (
          <p className={`${typography.ctaEyebrow} text-white`}>{eyebrow}</p>
        ) : null}
        <SectionHeading id={headingId} variant={variant}>
          {heading}
        </SectionHeading>
        {body ? (
          <p
            className={`${containers.prose} ${typography.bodySemibold} md:px-8 lg:px-[150px]`}
          >
            {body}
          </p>
        ) : null}
        {actions ? (
          <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
}
