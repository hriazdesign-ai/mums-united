import { cardSpacingClasses } from "@/lib/design-system";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Support Services | Mums United",
  description:
    "Practical support, safe spaces and trusted help for mothers, young people and families across Sheffield.",
};

const sectionTagClassName =
  "inline-flex rounded bg-[rgba(163,182,180,0.3)] px-3 py-2 text-[12px] font-semibold leading-4 text-[#17171c]";

const blockEyebrowClassName =
  "text-[12px] font-normal leading-4 text-[#17171c]";

const heroHeadingClassName =
  "text-[36px] font-semibold leading-[44px] tracking-[-0.04em] md:text-[52px] md:leading-[62px] lg:text-[70px] lg:leading-[78px] lg:tracking-[-0.02em]";

const sectionHeadingClassName =
  "text-[32px] font-semibold leading-[38px] tracking-[-0.02em] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[53px]";

const blockHeadingClassName =
  "text-[32px] font-semibold leading-[38px] tracking-[-0.02em] lg:text-[48px] lg:leading-[53px]";

const primaryDarkButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#17171c] px-5 py-3.5 text-base font-semibold leading-[22px] text-white transition-colors hover:bg-[#2a2a30] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

const outlineDarkButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#17171c] px-5 py-3.5 text-base font-semibold leading-[22px] text-[#17171c] transition-colors hover:bg-[#17171c]/5 focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

const statusBadgeClassName =
  "inline-flex shrink-0 items-center justify-center rounded-full bg-[#17171c] px-[10px] py-2 text-[12px] font-semibold leading-3 text-white";

const categoryBadgeClassName =
  "inline-flex shrink-0 items-center justify-center rounded-full border border-[#17171c] px-[10px] py-2 text-[12px] font-semibold leading-3 text-[#17171c]";

const supportServices = [
  {
    id: "community-centre-support",
    title: "Community Centre Support",
    description:
      "Safe spaces, activities and practical help for families looking for connection, guidance and community support.",
    category: "Community Support",
    status: "Available",
    image: "/support-community-figma.jpg",
    imageAlt: "Families gathering at a Mums United community centre support session",
  },
  {
    id: "steel-champ-academy",
    title: "Steel Champ Academy",
    description:
      "Positive activities and mentoring that help young people build confidence, discipline and safer choices.",
    category: "Youth Support",
    status: "Available",
    image: "/support-steel-figma.jpg",
    imageAlt: "Young people taking part in Steel Champ Academy activities",
  },
  {
    id: "mums-united-charitable-bank",
    title: "Mums United Charitable Bank",
    description:
      "Practical support for families facing hardship, helping with essentials and connecting people to trusted local help.",
    category: "Family Support",
    status: "Available",
    image: "/support-charity-figma.jpg",
    imageAlt: "Mums United Charitable Bank community support",
  },
] as const;

const supportSteps = [
  [
    "Reach Out",
    "Get in touch by phone, email or through our community networks when you need support or guidance.",
  ],
  [
    "Speak to someone trusted",
    "Talk with a member of the Mums United team who understands local challenges and listens without judgement.",
  ],
  [
    "Get connected to practical support",
    "We help connect you with safe spaces, activities and practical help that fits your family's needs.",
  ],
] as const;

const trustItems = [
  [
    "Rooted in Sheffield",
    "Support shaped around the real needs of mothers, young people and families in our local communities.",
  ],
  [
    "Trusted relationships",
    "We build steady, respectful connections so people feel heard, supported and not alone.",
  ],
  [
    "Safe spaces",
    "Welcoming environments where families can access help, take part in activities and find positive connection.",
  ],
  [
    "Community-led",
    "Support led by people who understand local life and work alongside families with care and commitment.",
  ],
] as const;

function ServiceBadges({
  status,
  category,
}: {
  status: string;
  category: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className={statusBadgeClassName}>{status}</span>
      <span className={categoryBadgeClassName}>{category}</span>
    </div>
  );
}

export default function SupportServicesPage() {
  return (
    <>
      <SiteHeader currentPath="/support-services" />

      <main className="bg-white pb-[60px] text-[#17171c] md:pb-20">
        <div className="mx-auto flex w-full max-w-[1330px] flex-col gap-[60px] px-6 md:gap-20 lg:px-[60px]">
          {/* Hero + Featured Support */}
          <section className="flex w-full flex-col">
            <div className="flex flex-col items-center px-0 py-16 text-center md:px-8 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <p className={sectionTagClassName}>Support Services</p>

                <h1 className={heroHeadingClassName}>
                  Practical support for families, young people and communities.
                </h1>

                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Mums United provides trusted support, safe spaces and practical
                  help for mothers, young people and families across Sheffield.
                </p>

                <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-7">
                  <Link href="/contact" className={primaryDarkButtonClassName}>
                    Get Support
                  </Link>
                  <Link href="/donate" className={outlineDarkButtonClassName}>
                    Donate
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="community-centre-support"
              className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1.04fr_0.51fr]"
            >
              <div className="image-interactive relative aspect-[881/455] w-full overflow-hidden rounded-xl lg:h-[455px] lg:aspect-auto">
                <Image
                  src="/support-featured-figma.jpg"
                  alt="Two women in conversation at a Mums United community support space"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width: 1024px) 66vw, 100vw"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex flex-col gap-6 px-8 py-[42px]">
                  <p className={blockEyebrowClassName}>Featured Support</p>
                  <div className="flex flex-col gap-[22px]">
                    <h2 className={blockHeadingClassName}>
                      Community Centre Support
                    </h2>
                    <ServiceBadges
                      status="Available"
                      category="Community Support"
                    />
                    <p className="text-base font-normal leading-[22px]">
                      A welcoming community space offering practical help,
                      activities and trusted support for mothers, young people
                      and local families across Sheffield.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Services */}
          <section
            aria-labelledby="support-services-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <div className="flex flex-col items-center px-0 pb-[60px] pt-0 text-center md:px-8 lg:px-[60px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <p className={sectionTagClassName}>Our Services</p>
                <h2
                  id="support-services-heading"
                  className={sectionHeadingClassName}
                >
                  Support shaped around community needs.
                </h2>
                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Explore the services Mums United offers to help families access
                  safe spaces, practical support and positive community
                  connection.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {supportServices.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="card-interactive flex flex-col overflow-hidden rounded-xl"
                >
                  <div className="image-interactive relative h-[222px] w-full">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className={`${cardSpacingClasses.contentWithImage} bg-[#efeadf]`}>
                    <ServiceBadges
                      status={service.status}
                      category={service.category}
                    />
                    <div className={`${cardSpacingClasses.headingBody} ${cardSpacingClasses.tagsToHeading}`}>
                      <h3 className="text-xl font-semibold leading-[22px] tracking-[-0.02em] lg:text-2xl">
                        {service.title}
                      </h3>
                      <p className="text-base font-normal leading-[22px]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* How Support Works */}
          <section
            aria-labelledby="how-support-works-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <div className="flex flex-col items-center px-0 pb-[60px] text-center md:px-8 lg:px-[60px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <p className={sectionTagClassName}>How Support Works</p>
                <h2
                  id="how-support-works-heading"
                  className={sectionHeadingClassName}
                >
                  A simple path to the help you need.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {supportSteps.map(([title, text], index) => (
                <article
                  key={title}
                  className={`${cardSpacingClasses.content} card-interactive flex flex-col rounded-xl bg-[rgba(163,182,180,0.3)]`}
                >
                  <div
                    className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-white"
                    aria-hidden
                  >
                    <span className="text-2xl font-semibold leading-[26.5px] tracking-[-0.02em] text-[#17171c]">
                      {index + 1}
                    </span>
                  </div>
                  <div className={`${cardSpacingClasses.headingBody} ${cardSpacingClasses.tagsToHeading}`}>
                    <h3 className="text-xl font-semibold leading-[26px] tracking-[-0.02em] lg:text-2xl">
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

          {/* Trust & Reassurance */}
          <section
            aria-labelledby="trust-support-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <div className="flex flex-col items-center px-0 pb-[60px] text-center md:px-8 lg:px-[60px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <p className={sectionTagClassName}>Trust & Reassurance</p>
                <h2
                  id="trust-support-heading"
                  className={sectionHeadingClassName}
                >
                  Support you can feel confident in.
                </h2>
                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Mums United is committed to offering respectful, practical and
                  community-rooted support for local families.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map(([title, text]) => (
                <article
                  key={title}
                  className={`${cardSpacingClasses.content} card-interactive flex flex-col rounded-xl bg-[#efeadf]`}
                >
                  <div className={cardSpacingClasses.headingBody}>
                    <h3 className="text-xl font-semibold leading-[22px] tracking-[-0.02em] lg:text-2xl">
                      {title}
                    </h3>
                    <p className="text-base font-normal leading-[22px]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section
            aria-labelledby="support-cta-heading"
            className="scroll-reveal relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-xl md:h-[500px]"
          >
            <div className="absolute inset-0 rounded-xl bg-black" aria-hidden />
            <Image
              src="/support-cta-figma.jpg"
              alt="Hands stacked together in a gesture of community support"
              fill
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
            <div className="home-cta-content-padding relative z-10 flex w-full flex-col items-center text-center text-white md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <h2
                  id="support-cta-heading"
                  className={sectionHeadingClassName}
                >
                  Need support or want to speak to us?
                </h2>
                <p className="max-w-[910px] text-base font-semibold leading-[22px] md:px-8 lg:px-[150px]">
                  Whether you are looking for practical help, community support
                  or a safe place to talk, Mums United is here to listen.
                </p>
                <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-interactive inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-3 text-sm font-semibold leading-[22px] tracking-[-0.04em] text-[#17171c] transition-colors hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-5 md:py-3.5 md:text-base"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/donate"
                    className="btn-interactive inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white px-4 py-3 text-sm font-semibold leading-[22px] tracking-[-0.04em] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-5 md:py-3.5 md:text-base"
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
