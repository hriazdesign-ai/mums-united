/**
 * Layout and spacing tokens — canonical source for page structure rhythm.
 * Typography, colour, and component patterns live in lib/design-system.ts.
 */

export {
  cardSpacing,
  cardSpacingClasses,
  containers,
  spacing,
} from "./design-system";

/** Full-bleed section spacing before the next block (60px mobile, 80px desktop) */
export const sectionMarginTop = "mt-[60px] lg:mt-20";

/** Full-bleed section bottom padding (60px mobile, 80px desktop) */
export const sectionPaddingBottom = "pb-[60px] md:pb-[80px]";

/** Offset anchored sections below the sticky header */
export const scrollAnchor = "scroll-mt-28";

/** Background image crop for emotional full-bleed CTA sections */
export const imageCrops = {
  emotionalCta: "object-cover object-[center_35%]",
  standard: "object-cover object-center",
} as const;
