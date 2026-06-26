/**
 * Mums United design system — central Tailwind class tokens.
 * Adjust typography, spacing, and shared UI patterns here to update migrated pages.
 */

/** Typography — font size, weight, line-height, tracking only (no colour) */
export const typography = {
  /** Home hero h1 */
  heroHeading:
    "text-[36px] font-semibold leading-[44px] tracking-[-0.04em] md:text-[52px] md:leading-[62px] lg:text-[68px] lg:leading-[84px]",

  /** Inner-page hero h1 (About, Donate, Contact, etc.) */
  pageHeading:
    "text-[36px] font-semibold leading-[44px] tracking-[-0.04em] md:text-[52px] md:leading-[62px] lg:text-[76px] lg:leading-[80px]",

  /** Home section h2 scale */
  sectionHeading:
    "text-[28px] font-semibold leading-[34px] tracking-[-0.02em] md:text-[38px] md:leading-[44px] lg:text-[44px] lg:leading-[52px]",

  /** Inner-page section h2 scale */
  sectionHeadingPage:
    "text-[32px] font-semibold leading-[38px] tracking-[-0.02em] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[53px]",

  /** Standard card / stat title */
  cardHeading:
    "text-xl font-semibold leading-[26px] tracking-[-0.02em] lg:text-2xl lg:leading-[28px]",

  /** Homepage featured programme card title */
  cardHeadingFeatured:
    "text-2xl font-semibold leading-8 tracking-[-0.02em] lg:text-[32px] lg:leading-[32px]",

  /** Homepage secondary programme card title */
  cardHeadingProgramme:
    "text-xl font-semibold leading-8 tracking-[-0.02em] lg:text-2xl lg:leading-[32px]",

  /** Default body copy */
  body: "text-base font-normal leading-[22px]",

  /** Smaller supporting copy (forms, contact panels) */
  bodySmall: "text-sm font-normal leading-5",

  /** Section / block eyebrow pill label */
  eyebrow:
    "inline-flex w-fit rounded bg-[rgba(163,182,180,0.3)] px-3 py-2 text-[12px] font-medium leading-4 text-[#17171c]",

  /** Large impact / donation statistic numerals */
  statisticNumber:
    "text-[56px] font-light leading-none tracking-[-0.04em] md:text-[64px] lg:text-[76px]",

  /** Primary button label */
  buttonText: "text-base font-semibold leading-[22px]",

  /** Image CTA button label (responsive) */
  buttonTextCta:
    "text-sm font-semibold leading-[22px] tracking-[-0.04em] md:text-base",

  /** Form field labels */
  formLabel: "text-sm font-medium leading-5 text-[#17171c]",

  /** Form input text */
  formInput: "text-sm font-normal leading-5",

  /** Home: block label above card titles (e.g. “Featured current programme”) */
  blockLabel: "text-base font-normal leading-4",

  /** Home: semibold body on dark CTA */
  bodySemibold: "text-base font-semibold leading-[24px]",

  /** Home: uppercase-style CTA eyebrow line (typography only) */
  ctaEyebrow: "text-base font-semibold leading-4",
} as const;

/** Vertical rhythm between major sections */
export const spacing = {
  /** Single source for section stacks — 60px mobile, 80px desktop */
  sectionStack: "gap-[60px] md:gap-20",

  /** Space below centred section intros before content */
  sectionIntroBottom: "pb-[60px]",

  /** Main element bottom padding */
  mainBottom: "pb-[60px] md:pb-20",

  /** Hero vertical padding (symmetric) */
  heroPadding: "py-16 md:py-20 lg:py-[80px]",

  /** Hero top padding only — use when section gap handles bottom spacing */
  heroPaddingTop: "pt-16 md:pt-20 lg:pt-[80px]",
} as const;

/** Page layout containers */
export const containers = {
  page: "mx-auto w-full max-w-[1330px] px-6 lg:px-[60px]",

  pageStack:
    "mx-auto flex w-full max-w-[1330px] flex-col gap-[60px] px-6 md:gap-20 lg:px-[60px]",

  content: "flex w-full max-w-[1210px] flex-col items-center",

  contentCentered: "flex w-full max-w-[1210px] flex-col items-center gap-8",

  prose: "max-w-[910px]",

  proseMedium: "max-w-[790px]",
} as const;

/** Shared button patterns */
export const buttons = {
  primaryDark:
    "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#17171c] px-5 py-3.5 text-base font-semibold leading-[22px] text-white transition-colors hover:bg-[#2a2a30] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2",

  outlineDark:
    "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#17171c] px-5 py-3.5 text-base font-semibold leading-[22px] text-[#17171c] transition-colors hover:bg-[#17171c]/5 focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2",

  teal:
    "btn-interactive inline-flex w-fit shrink-0 items-center justify-center self-start rounded-full bg-[#446169] px-5 py-3.5 text-base font-semibold leading-[22px] text-white transition-colors hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#446169] focus:ring-offset-2",

  whiteSolid:
    "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-white px-5 py-3.5 text-base font-semibold leading-[22px] text-[#17171c] transition-colors hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2",

  imageCtaPrimary:
    "btn-interactive inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-3 text-sm font-semibold leading-[22px] tracking-[-0.04em] text-[#17171c] transition-colors hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-5 md:py-3.5 md:text-base",

  imageCtaSecondary:
    "btn-interactive inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white px-4 py-3 text-sm font-semibold leading-[22px] tracking-[-0.04em] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-5 md:py-3.5 md:text-base",
} as const;

/** Eyebrow / section tag labels (alias of typography.eyebrow for discoverability) */
export const eyebrowLabels = {
  default: typography.eyebrow,
} as const;

/** Card patterns */
export const cards = {
  interactive: "card-interactive",
} as const;

/** Statistic numerals (alias of typography.statisticNumber) */
export const statisticNumbers = {
  default: typography.statisticNumber,
} as const;

/** Image CTA section padding — mobile clamp defined in globals.css (.home-cta-content-padding) */
export const imageCtaPadding = {
  content:
    "home-cta-content-padding relative z-10 flex w-full flex-col items-center text-center md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]",

  buttons: "image-cta-buttons",
} as const;
