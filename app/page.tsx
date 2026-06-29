import Image from "next/image";
import Link from "next/link";
import { buttons, cardSpacingClasses, typography } from "@/lib/design-system";
import { DONATE_HREF } from "@/lib/donate";
import { containers, imageCrops, spacing } from "@/lib/layout";
import { createPageMetadata, siteConfig } from "@/lib/seo";
import { SiteHeader } from "./components/SiteHeader";

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

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

const mediaCards = [
  [
    "/radio-icon.png",
    "Radio Interviews",
    "Conversations highlighting family support, youth development and community impact.",
  ],
  [
    "/tv-1.png",
    "TV & Media Coverage",
    "Features showcasing programmes, events and community achievements.",
  ],
  [
    "/trophy-icon.png",
    "Community Recognition",
    "Awards, nominations and recognition for supporting local families.",
  ],
  [
    "/podcast-1.png",
    "Podcast & Stories",
    "Real conversations, experiences and voices from the community.",
  ],
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader currentPath="/" />

      <main className={`bg-white text-[#17171c] ${spacing.mainBottom}`}>
        <div className={containers.pageStack}>
          {/* Hero */}
          <section className="flex w-full flex-col">
            <div className={`flex flex-col items-center px-0 text-center md:px-8 lg:px-[60px] ${spacing.heroPadding}`}>
              <div className={containers.contentCentered}>
                <p className={typography.eyebrow}>
                  Sheffield Charity Supporting Mothers, Young People and
                  Families
                </p>

                <h1 className={typography.heroHeading}>
                  Helping families feel safer, supported and heard
                </h1>

                <p
                  className={`max-w-[910px] ${typography.body} md:px-8 lg:px-[150px]`}
                >
                  Mums United supports vulnerable young people, mothers and
                  local communities affected by youth violence, exploitation and
                  hardship. Through mentoring, workshops, safe spaces and
                  practical support, we help families build brighter futures.
                </p>

                <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-7">
                  <Link href={DONATE_HREF} className={buttons.primaryDark}>
                    Donate
                  </Link>
                  <Link href="/contact" className={buttons.outlineDark}>
                    Get Supported
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col lg:flex-row lg:gap-4">
              <div className="image-interactive relative aspect-[814/698] w-full overflow-hidden rounded-xl lg:flex-1 lg:aspect-auto lg:h-[698px]">
                <Image
                  src="/hero-left.jpg"
                  alt="Community members holding an Enough is Enough banner at a peaceful protest"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width: 1024px) 62vw, 100vw"
                />
              </div>
              <div className="image-interactive relative hidden aspect-[500/698] w-full overflow-hidden rounded-xl lg:block lg:h-[698px] lg:w-[500px] lg:shrink-0">
                <Image
                  src="/hero-right.jpg"
                  alt="Mums United volunteer carrying a box of community aid"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width: 1024px) 500px, 100vw"
                />
              </div>
            </div>
          </section>

          {/* Impact */}
          <section
            aria-labelledby="impact-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <div className={`flex flex-col items-center px-0 text-center md:px-8 lg:px-[60px] ${spacing.sectionIntroBottom}`}>
              <div className={containers.contentCentered}>
                <p className={typography.eyebrow}>Our Impact</p>
                <h2 id="impact-heading" className={typography.sectionHeading}>
                  Creating safer, stronger communities together.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map(([number, title, text]) => (
                <article
                  key={title}
                  className={`${cardSpacingClasses.content} card-interactive flex flex-col rounded-xl bg-[#446169]`}
                >
                  <p className={`${typography.statisticNumber} text-white`}>
                    {number}
                  </p>
                  <div className={`${cardSpacingClasses.headingBody} ${cardSpacingClasses.tagsToHeading} text-white`}>
                    <h3 className={typography.cardHeading}>{title}</h3>
                    <p className={`${typography.body} leading-[24px]`}>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Featured Programmes */}
          <section
            aria-labelledby="featured-programmes-heading"
            className="scroll-reveal flex w-full flex-col items-center rounded-xl bg-[rgba(237,234,225,0.7)] px-6 max-md:py-[60px] md:px-8 md:pb-20 lg:px-[60px]"
          >
            <div className={`flex w-full flex-col items-center px-0 text-center md:px-8 lg:px-[60px] ${spacing.sectionIntroBottom} md:pt-20`}>
              <div className={`${containers.contentCentered} max-w-[1090px]`}>
                <p className={typography.eyebrow}>Featured Programmes</p>
                <h2
                  id="featured-programmes-heading"
                  className={typography.sectionHeading}
                >
                  Practical support for every stage of family life
                </h2>
                <p
                  className={`mx-auto w-full max-w-[790px] ${typography.body}`}
                >
                  Our programmes create safe, trusted spaces where families and
                  young people can find guidance, connection and encouragement.
                </p>
              </div>
            </div>

            <div className={`flex w-full flex-col items-center ${spacing.section}`}>
              <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
                <article className="card-interactive overflow-hidden rounded-xl bg-white">
                  <div className="flex flex-col items-start p-8">
                    <p className={typography.blockLabel}>Featured current programme</p>
                    <div className={`${cardSpacingClasses.headingBody} ${cardSpacingClasses.tagsToHeading}`}>
                      <h3 className={typography.cardHeadingFeatured}>
                        Project Serenity
                      </h3>
                      <p className={typography.body}>
                        Free after-school boxing sessions and positive
                        activities supporting young people with confidence,
                        discipline and wellbeing.
                      </p>
                    </div>
                    <Link
                      href="/programmes#current-programme"
                      className={`${buttons.teal} ${cardSpacingClasses.bodyToButton}`}
                    >
                      Learn More
                    </Link>
                  </div>
                  <div className="image-interactive relative h-[225px] w-full">
                    <Image
                      src="/project-serenity-figma.jpg"
                      alt="Young person wearing red boxing gloves during Project Serenity"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </article>

                <div className="flex flex-col gap-4">
                  {[
                    [
                      "MUSYC Holiday Club",
                      "Safe holiday activities that help young people learn, connect and enjoy positive experiences.",
                    ],
                    [
                      "Community Outreach Events",
                      "Local outreach that helps families find support, connection and trusted community spaces.",
                    ],
                  ].map(([title, text]) => (
                    <article
                      key={title}
                      className="card-interactive flex flex-1 flex-col rounded-xl bg-white"
                    >
                      <div className="flex h-full flex-col items-start p-8">
                        <div className={cardSpacingClasses.headingBody}>
                          <h3 className={typography.cardHeadingProgramme}>
                            {title}
                          </h3>
                          <p className={typography.body}>{text}</p>
                        </div>
                        <Link
                          href="/programmes"
                          aria-label={`Learn more about ${title}`}
                          className={`${buttons.teal} ${cardSpacingClasses.bodyToButton}`}
                        >
                          Learn More
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <Link href="/programmes" className={buttons.whiteSolid}>
                View All Programmes
              </Link>
            </div>
          </section>

          {/* Media & Recognition */}
          <section
            aria-labelledby="featured-in-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <div className={`flex flex-col items-center px-0 text-center md:px-8 lg:px-[60px] ${spacing.sectionIntroBottom}`}>
              <div className={containers.contentCentered}>
                <p className={typography.eyebrow}>Trusted Across Sheffield</p>
                <h2 id="featured-in-heading" className={typography.sectionHeading}>
                  Recognised for supporting families, young people and
                  communities.
                </h2>
                <p
                  className={`mx-auto w-full max-w-[910px] ${typography.body} tracking-[-0.02em]`}
                >
                  Mums United has been featured across local media, community
                  initiatives and public events, helping raise awareness, share
                  stories and champion positive change.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-12">
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {mediaCards.map(([icon, title, text]) => (
                  <article
                    key={title}
                    className={`${cardSpacingClasses.content} card-interactive flex h-full flex-col rounded-xl bg-[rgba(163,182,180,0.3)]`}
                  >
                    <div className="relative size-12 shrink-0">
                      <Image
                        src={icon}
                        alt=""
                        aria-hidden
                        width={48}
                        height={48}
                        className="size-12 object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className={`${cardSpacingClasses.headingBody} ${cardSpacingClasses.tagsToHeading}`}>
                      <h3 className={typography.cardHeading}>{title}</h3>
                      <p className={`${typography.body} leading-[24px]`}>{text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4">
                <Link href="/media" className={buttons.primaryDark}>
                  View Media & Stories
                </Link>
                <p
                  className={`max-w-[1330px] text-center ${typography.body} tracking-[-0.02em]`}
                >
                  Explore media appearances, podcast episodes and community
                  stories.
                </p>
              </div>
            </div>
          </section>

          {/* Donate CTA */}
          <section
            aria-labelledby="donate-cta-heading"
            className="scroll-reveal relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-xl md:h-[500px]"
          >
            <div className="absolute inset-0 rounded-xl bg-black" aria-hidden />
            <Image
              src="/donations-cta-figma.jpg"
              alt="Hands stacked together in a gesture of community support"
              fill
              className={`${imageCrops.emotionalCta} opacity-60`}
              sizes="100vw"
            />
            <div className="home-cta-content-padding relative z-10 flex w-full flex-col items-center text-center text-white md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className={containers.contentCentered}>
                <p className={`${typography.ctaEyebrow} text-white`}>
                  SUPPORT MUMS UNITED
                </p>
                <h2
                  id="donate-cta-heading"
                  className={typography.sectionHeading}
                >
                  Help a family know they are not facing this alone.
                </h2>
                <p
                  className={`max-w-[910px] ${typography.bodySemibold} md:px-8 lg:px-[150px]`}
                >
                  Your donation helps Mums United continue supporting mothers,
                  young people and families across Sheffield through practical
                  help, trusted relationships and community support.
                </p>
                <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
                  <Link
                    href={DONATE_HREF}
                    className={buttons.imageCtaPrimary}
                  >
                    Donate Now
                  </Link>
                  <Link
                    href="/about#about-impact-heading"
                    className={buttons.imageCtaSecondary}
                  >
                    Learn About Our Impact
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
