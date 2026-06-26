import type { ReactNode } from "react";
import {
  containers,
  spacing,
  typography,
} from "@/lib/design-system";

type PageHeroProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  actions?: ReactNode;
  /** Home uses heroHeading; inner pages use pageHeading */
  variant?: "home" | "page";
  /** Symmetric padding on home; top-only when section gap handles bottom spacing */
  padding?: "symmetric" | "topOnly";
  className?: string;
};

export function PageHero({
  eyebrow,
  heading,
  description,
  actions,
  variant = "page",
  padding = variant === "home" ? "symmetric" : "topOnly",
  className = "",
}: PageHeroProps) {
  const headingClassName =
    variant === "home" ? typography.heroHeading : typography.pageHeading;
  const paddingClassName =
    padding === "symmetric" ? spacing.heroPadding : spacing.heroPaddingTop;

  return (
    <section className={`flex w-full flex-col ${className}`.trim()}>
      <div
        className={`flex flex-col items-center px-0 text-center md:px-8 lg:px-[60px] ${paddingClassName}`}
      >
        <div className={containers.contentCentered}>
          <p className={typography.eyebrow}>{eyebrow}</p>
          <h1 className={headingClassName}>{heading}</h1>
          {description ? (
            <p
              className={`${containers.prose} ${typography.body} md:px-8 lg:px-[150px]`}
            >
              {description}
            </p>
          ) : null}
          {actions ? (
            <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-7">
              {actions}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
