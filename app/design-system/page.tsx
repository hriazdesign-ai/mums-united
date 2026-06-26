import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  buttons,
  cards,
  containers,
  spacing,
  typography,
} from "@/lib/design-system";

export const metadata: Metadata = {
  title: "Design System Preview | Mums United",
  description: "Internal visual reference for Mums United design tokens.",
  robots: { index: false, follow: false },
};

const siteColours = [
  { name: "Ink", hex: "#17171c", note: "Primary text & dark buttons" },
  { name: "Teal", hex: "#446169", note: "Stat cards, donation panel" },
  { name: "Forest", hex: "#4c7a65", note: "Donation impact cards" },
  { name: "Teal hover", hex: "#344C52", note: "Teal button hover" },
  { name: "Beige", hex: "#efeadf", note: "Standard content cards" },
  { name: "Contact panel", hex: "#e3e9e9", note: "Contact information" },
  { name: "Help card", hex: "#edeae1", note: "How can we help cards" },
  { name: "Sage tint", hex: "rgba(163,182,180,0.3)", note: "Eyebrows & media cards" },
  { name: "Border", hex: "#c4c4c4", note: "Form & panel borders" },
  { name: "White", hex: "#ffffff", note: "Page background" },
] as const;

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${typography.sectionHeadingPage} text-[#17171c]`}>
          {title}
        </h2>
        {description ? (
          <p className={`mt-2 ${typography.bodySmall} text-[#17171c]/70`}>
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function TokenLabel({ name }: { name: string }) {
  return (
    <p className={`${typography.bodySmall} font-mono text-[#17171c]/50`}>
      typography.{name}
    </p>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-white text-[#17171c]">
      <header className="border-b border-[#c4c4c4] bg-[#efeadf]/40">
        <div className={`${containers.page} py-6`}>
          <p className={typography.eyebrow}>Internal review</p>
          <h1 className={`mt-4 ${typography.pageHeading}`}>
            Design System Preview
          </h1>
          <p className={`mt-4 max-w-2xl ${typography.body}`}>
            Visual reference for tokens in{" "}
            <code className="rounded bg-[#e3e9e9] px-1.5 py-0.5 font-mono text-sm">
              lib/design-system.ts
            </code>
            . Not linked from site navigation.
          </p>
        </div>
      </header>

      <main className={`${containers.pageStack} py-12 md:py-20`}>
        {/* Typography */}
        <Section
          title="Typography"
          description="Font scale extracted from completed pages. Colours applied separately where needed."
        >
          <div className="flex flex-col gap-8 rounded-xl border border-[#c4c4c4] p-6 md:p-8">
            <div className="flex flex-col gap-2 border-b border-[#c4c4c4]/60 pb-6">
              <TokenLabel name="heroHeading" />
              <p className={typography.heroHeading}>
                Hero heading — helping families feel supported
              </p>
            </div>

            <div className="flex flex-col gap-2 border-b border-[#c4c4c4]/60 pb-6">
              <TokenLabel name="pageHeading" />
              <p className={typography.pageHeading}>
                Page heading — inner page hero scale
              </p>
            </div>

            <div className="flex flex-col gap-2 border-b border-[#c4c4c4]/60 pb-6">
              <TokenLabel name="sectionHeading" />
              <p className={typography.sectionHeading}>
                Section heading — home scale
              </p>
            </div>

            <div className="flex flex-col gap-2 border-b border-[#c4c4c4]/60 pb-6">
              <TokenLabel name="cardHeading" />
              <p className={typography.cardHeading}>
                Card heading — families supported
              </p>
            </div>

            <div className="flex flex-col gap-2 border-b border-[#c4c4c4]/60 pb-6">
              <TokenLabel name="body" />
              <p className={typography.body}>
                Body — Mums United supports vulnerable young people, mothers and
                local communities across Sheffield.
              </p>
            </div>

            <div className="flex flex-col gap-2 border-b border-[#c4c4c4]/60 pb-6">
              <TokenLabel name="bodySmall" />
              <p className={typography.bodySmall}>
                Body small — supporting copy for forms and contact panels.
              </p>
            </div>

            <div className="flex flex-col gap-2 border-b border-[#c4c4c4]/60 pb-6">
              <TokenLabel name="eyebrow" />
              <p className={typography.eyebrow}>Eyebrow label</p>
            </div>

            <div className="flex flex-col gap-2 border-b border-[#c4c4c4]/60 pb-6">
              <TokenLabel name="statisticNumber" />
              <p className={`${typography.statisticNumber} text-[#446169]`}>
                250+
              </p>
            </div>

            <div className="flex flex-col gap-2 border-b border-[#c4c4c4]/60 pb-6">
              <TokenLabel name="buttonText" />
              <p className={typography.buttonText}>Button label text</p>
            </div>

            <div className="flex flex-col gap-2 border-b border-[#c4c4c4]/60 pb-6">
              <TokenLabel name="formLabel" />
              <label htmlFor="ds-demo-input" className={typography.formLabel}>
                Form label
              </label>
            </div>

            <div className="flex flex-col gap-2">
              <TokenLabel name="formInput" />
              <input
                id="ds-demo-input"
                type="text"
                readOnly
                value="Form input text"
                className={`w-full max-w-md rounded-lg border border-[#c4c4c4] bg-white px-4 py-3 ${typography.formInput} text-[#17171c]`}
              />
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section
          title="Buttons"
          description="Shared button tokens from buttons.*"
        >
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-[#c4c4c4] p-6 md:p-8">
            <div className="flex flex-col gap-2">
              <span className={`${typography.bodySmall} text-[#17171c]/50`}>
                buttons.primaryDark
              </span>
              <button type="button" className={buttons.primaryDark}>
                Primary
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <span className={`${typography.bodySmall} text-[#17171c]/50`}>
                buttons.teal
              </span>
              <button type="button" className={buttons.teal}>
                Secondary
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <span className={`${typography.bodySmall} text-[#17171c]/50`}>
                buttons.outlineDark
              </span>
              <button type="button" className={buttons.outlineDark}>
                Outline
              </button>
            </div>
          </div>
        </Section>

        {/* Cards */}
        <Section title="Cards" description="Common card surfaces used on live pages.">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article
              className={`${cards.interactive} flex flex-col gap-4 rounded-xl bg-[#efeadf] px-6 py-[34px]`}
            >
              <p className={`${typography.bodySmall} text-[#17171c]/50`}>
                Beige card
              </p>
              <h3 className={typography.cardHeading}>Trust & reassurance</h3>
              <p className={typography.body}>
                Welcoming environments where families can access help and find
                positive connection.
              </p>
            </article>

            <article
              className={`${cards.interactive} flex flex-col gap-20 rounded-xl bg-[#446169] px-6 py-10`}
            >
              <p className={`${typography.statisticNumber} text-white`}>600+</p>
              <div className="flex flex-col gap-[18px] text-white">
                <h3 className={typography.cardHeading}>Young people engaged</h3>
                <p className={`${typography.body} leading-[24px]`}>
                  Mentoring, workshops and activities that encourage positive
                  choices.
                </p>
              </div>
            </article>

            <aside className="rounded-xl bg-[#e3e9e9] p-8">
              <p className={`${typography.bodySmall} text-[#17171c]/50`}>
                Contact info panel
              </p>
              <h3 className={`mt-4 text-xl font-semibold leading-[22px] tracking-[-0.02em]`}>
                Contact Information
              </h3>
              <div className="mt-6 flex gap-4">
                <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-white">
                  <span className="text-lg" aria-hidden>
                    ✉
                  </span>
                </span>
                <div className="flex flex-col gap-2">
                  <p className={typography.formLabel}>Email</p>
                  <p className={typography.bodySmall}>
                    mumsunitedsheffield@gmail.com
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Section>

        {/* Eyebrow labels */}
        <Section
          title="Eyebrow labels"
          description="12px pill labels — inline-flex, width fit-content."
        >
          <div className="flex flex-wrap gap-4 rounded-xl border border-[#c4c4c4] p-6 md:p-8">
            <span className={typography.eyebrow}>Contact Us</span>
            <span className={typography.eyebrow}>Our Impact</span>
            <span className={typography.eyebrow}>Featured Programmes</span>
          </div>
        </Section>

        {/* Spacing */}
        <Section
          title="Spacing"
          description="Major section rhythm — one source via spacing.sectionStack."
        >
          <div className="flex flex-col gap-8 rounded-xl border border-[#c4c4c4] p-6 md:p-8">
            <div>
              <p className={`mb-4 ${typography.bodySmall} text-[#17171c]/50`}>
                Mobile — 60px (gap-[60px])
              </p>
              <div className="flex flex-col gap-[60px] md:hidden">
                <div className="rounded-lg bg-[#446169]/20 px-4 py-6 text-center">
                  <p className={typography.bodySmall}>Block A</p>
                </div>
                <div className="relative rounded-lg bg-[#efeadf] px-4 py-6 text-center">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-[#17171c] px-2 py-0.5 text-[10px] font-medium text-white">
                    60px
                  </span>
                  <p className={typography.bodySmall}>Block B</p>
                </div>
              </div>
            </div>

            <div>
              <p className={`mb-4 ${typography.bodySmall} text-[#17171c]/50`}>
                Desktop — 80px (md:gap-20)
              </p>
              <div className={`hidden flex-col md:flex ${spacing.sectionStack}`}>
                <div className="rounded-lg bg-[#446169]/20 px-4 py-6 text-center">
                  <p className={typography.bodySmall}>Block A</p>
                </div>
                <div className="relative rounded-lg bg-[#efeadf] px-4 py-6 text-center">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-[#17171c] px-2 py-0.5 text-[10px] font-medium text-white">
                    80px
                  </span>
                  <p className={typography.bodySmall}>Block B</p>
                </div>
              </div>
            </div>

            <p className={typography.bodySmall}>
              Token:{" "}
              <code className="font-mono">spacing.sectionStack</code> →{" "}
              <code className="font-mono">gap-[60px] md:gap-20</code>
            </p>
          </div>
        </Section>

        {/* Colours */}
        <Section title="Colours" description="Primary palette used across Mums United.">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {siteColours.map((colour) => (
              <div
                key={colour.name}
                className="flex flex-col overflow-hidden rounded-xl border border-[#c4c4c4]"
              >
                <div
                  className="h-20 w-full border-b border-[#c4c4c4]/40"
                  style={{ backgroundColor: colour.hex }}
                />
                <div className="flex flex-col gap-1 p-3">
                  <p className={`${typography.bodySmall} font-semibold`}>
                    {colour.name}
                  </p>
                  <p className="font-mono text-[11px] leading-4 text-[#17171c]/60">
                    {colour.hex}
                  </p>
                  <p className={`${typography.bodySmall} text-[#17171c]/60`}>
                    {colour.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
