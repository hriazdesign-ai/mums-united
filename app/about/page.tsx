import { buttons, cardSpacingClasses, typography } from "@/lib/design-system";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About Us | Mums United",
  description:
    "Learn about Mums United, a community-led charity supporting mothers, young people and families across Sheffield.",
};

const blockEyebrowClassName =
  "text-[12px] font-normal leading-4 text-[#17171c]";

const blockHeadingClassName =
  "text-[32px] font-semibold leading-[38px] tracking-[-0.02em] lg:text-[48px] lg:leading-[53px]";

const values = [
  [
    "Community First",
    "We listen to local families and shape our work around real community needs, experiences and voices.",
  ],
  [
    "Trust & Safety",
    "We create respectful, welcoming spaces where people feel heard, supported and able to ask for help.",
  ],
  [
    "Practical Support",
    "We focus on useful, everyday help that makes a difference for mothers, young people and families.",
  ],
  [
    "Hope & Prevention",
    "We work early and positively to help families build confidence, connection and safer choices.",
  ],
] as const;

const impactStats = [
  [
    "250+",
    "Families supported",
    "Practical help, guidance and safe spaces for parents and households.",
  ],
  [
    "600+",
    "Young people engaged",
    "Mentoring, workshops and activities that encourage positive choices.",
  ],
  [
    "80+",
    "Community events",
    "Meals, gatherings and outreach that bring local people together.",
  ],
  [
    "35+",
    "Programmes delivered",
    "Education, prevention and support shaped around community needs.",
  ],
] as const;

const recognitionItems = [
  [
    "Community-led charity",
    "Founded and shaped by people who understand local life and care deeply about Sheffield communities.",
  ],
  [
    "Rooted in Sheffield",
    "Working alongside mothers, young people and families in neighbourhoods across the city.",
  ],
  [
    "Trusted local relationships",
    "Building steady support through listening, practical help and long-term community connection.",
  ],
  [
    "Media and community recognition",
    "Recognised for community action, family support and positive work across local media and events.",
  ],
] as const;

export default function AboutPage() {
  return (
    <>
      <SiteHeader currentPath="/about" />

      <main className="bg-white pb-[60px] text-[#17171c] md:pb-20">
        <div className="mx-auto flex w-full max-w-[1330px] flex-col gap-[60px] px-6 md:gap-20 lg:px-[60px]">
          {/* Hero */}
          <section className="flex w-full flex-col">
            <div className="flex flex-col items-center px-0 py-16 text-center md:px-8 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <p className={typography.eyebrow}>About Mums United</p>

                <h1 className={typography.pageHeading}>
                Building stronger communities.
                </h1>

                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Mums United is a community-led charity supporting vulnerable
                  mothers, young people and families through practical help,
                  trusted relationships and safe spaces.
                </p>

                <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-7">
                  <Link href="/contact" className={buttons.primaryDark}>
                    Get Support
                  </Link>
                  <Link href="/donate" className={buttons.outlineDark}>
                    Donate
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col max-md:gap-0 md:gap-20">
              {/* Our Story */}
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-[60px]">
                <div className="flex flex-col justify-center lg:min-h-[455px]">
                  <div className="flex flex-col gap-6 px-8 py-[42px]">
                    <p className={blockEyebrowClassName}>Who We Are</p>
                    <div className="flex flex-col gap-3">
                      <h2
                        id="our-story-heading"
                        className={blockHeadingClassName}
                      >
                        Our Story
                      </h2>
                      <p className="text-base font-normal leading-[22px]">
                        Mums United was created to bring people together around
                        practical support, prevention and community care. We work
                        alongside families, young people and local partners to
                        help build safer, stronger communities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="image-interactive relative aspect-[635/455] w-full overflow-hidden rounded-xl lg:h-[455px] lg:aspect-auto">
                  <Image
                    src="/about-story-figma.jpg"
                    alt="Community members holding an Enough is Enough banner at a peaceful protest"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Our Mission */}
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-[60px]">
                <div className="image-interactive relative aspect-[635/455] w-full overflow-hidden rounded-xl lg:order-none lg:h-[455px] lg:aspect-auto max-lg:order-2">
                  <Image
                    src="/about-mission-figma.jpg"
                    alt="Mums United community members walking together outdoors"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>

                <div className="flex flex-col justify-center max-lg:order-1 lg:min-h-[455px]">
                  <div className="flex flex-col gap-6 px-8 py-[42px]">
                    <p className={blockEyebrowClassName}>Our Mission</p>
                    <div className="flex flex-col gap-3">
                      <h2
                        id="our-mission-heading"
                        className={blockHeadingClassName}
                      >
                        Creating safer, stronger communities together.
                      </h2>
                      <p className="text-base font-normal leading-[22px]">
                        We support families through trusted relationships,
                        practical guidance, community activities and early
                        intervention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section
            aria-labelledby="our-values-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <div className="flex flex-col items-center px-0 pb-[60px] pt-0 text-center md:px-8 md:pt-20 lg:px-[60px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <p className={typography.eyebrow}>Our Values</p>
                <h2 id="our-values-heading" className={typography.sectionHeadingPage}>
                  What guides our work every day.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(([title, description]) => (
                <article
                  key={title}
                  className={`${cardSpacingClasses.content} card-interactive flex flex-col rounded-xl bg-[#efeadf]`}
                >
                  <div className={cardSpacingClasses.headingBody}>
                    <h3 className={typography.cardHeading}>
                      {title}
                    </h3>
                    <p className="text-base font-normal leading-[22px]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Our Impact */}
          <section
            aria-labelledby="about-impact-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <div className="flex flex-col items-center px-0 pb-[60px] text-center md:px-8 lg:px-[60px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <p className={typography.eyebrow}>Our Impact</p>
                <h2
                  id="about-impact-heading"
                  className={typography.sectionHeadingPage}
                >
                  Making a difference across Sheffield.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map(([number, title, text]) => (
                <article
                  key={title}
                  className={`${cardSpacingClasses.content} card-interactive flex flex-col rounded-xl bg-[#446169]`}
                >
                  <p className="text-[56px] font-light leading-none tracking-[-0.04em] text-white md:text-[64px] lg:text-[76px]">
                    {number}
                  </p>
                  <div className={`${cardSpacingClasses.headingBody} ${cardSpacingClasses.tagsToHeading} text-white`}>
                    <h3 className={typography.cardHeading}>
                      {title}
                    </h3>
                    <p className="text-base font-normal leading-[22px]">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Community trust */}
          <section
            aria-labelledby="about-recognition-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <div className="flex flex-col items-center px-0 pb-[60px] text-center md:px-8 lg:px-[60px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <p className={typography.eyebrow}>Our Values</p>
                <h2
                  id="about-recognition-heading"
                  className={typography.sectionHeadingPage}
                >
                  A charity built on community trust.
                </h2>
                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Mums United is known for practical support, local partnerships
                  and a strong commitment to families across Sheffield.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {recognitionItems.map(([title, description]) => (
                <article
                  key={title}
                  className={`${cardSpacingClasses.content} card-interactive flex flex-col rounded-xl bg-[rgba(163,182,180,0.3)]`}
                >
                  <div className={cardSpacingClasses.headingBody}>
                    <h3 className={typography.cardHeading}>
                      {title}
                    </h3>
                    <p className="text-base font-normal leading-[22px]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section
            aria-labelledby="about-cta-heading"
            className="scroll-reveal relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-xl md:h-[500px]"
          >
            <div className="absolute inset-0 rounded-xl bg-black" aria-hidden />
            <Image
              src="/about-cta-figma.jpg"
              alt="Hands stacked together in a gesture of community support"
              fill
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
            <div className="home-cta-content-padding relative z-10 flex w-full flex-col items-center text-center text-white md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <h2
                  id="about-cta-heading"
                  className={typography.sectionHeadingPage}
                >
                  Want to learn more or get involved?
                </h2>
                <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className={buttons.imageCtaPrimary}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/donate"
                    className={buttons.imageCtaSecondary}
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
