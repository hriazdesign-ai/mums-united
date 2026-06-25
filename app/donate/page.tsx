import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DonationAmountSelector } from "../components/DonationAmountSelector";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Donate | Mums United",
  description:
    "Support Mums United's work with mothers, young people and families in Sheffield.",
};

const sectionTagClassName =
  "inline-flex w-fit rounded bg-[rgba(163,182,180,0.3)] px-3 py-2 text-[12px] font-normal leading-4 text-[#17171c]";

const heroHeadingClassName =
  "text-[36px] font-semibold leading-[44px] tracking-[-0.04em] md:text-[52px] md:leading-[62px] lg:text-[76px] lg:leading-[80px]";

const sectionHeadingClassName =
  "text-[32px] font-semibold leading-[38px] tracking-[-0.02em] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[53px]";

const cardTitleClassName =
  "min-h-[52px] text-xl font-semibold leading-[26px] tracking-[-0.02em] lg:text-2xl";

const primaryDarkButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#17171c] px-5 py-3.5 text-base font-semibold leading-[22px] text-white transition-colors hover:bg-[#2a2a30] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

const outlineDarkButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#17171c] px-5 py-3.5 text-base font-semibold leading-[22px] text-[#17171c] transition-colors hover:bg-[#17171c]/5 focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

const impactAmountClassName =
  "text-[56px] font-light leading-none tracking-[-0.04em] text-white md:text-[64px] lg:text-[76px]";

const impactDonateButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-white px-5 py-3 text-base font-semibold leading-[22px] text-[#17171c] transition-colors hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4c7a65]";

const donationReasons = [
  [
    "Families feel less alone",
    "Your support helps mothers and carers find trusted people to talk to when life feels heavy or unsafe.",
  ],
  [
    "Young people see safer choices",
    "Donations help create steady, positive spaces where young people can build confidence and feel valued.",
  ],
  [
    "Communities grow stronger",
    "Every gift helps neighbours come together around practical support, shared meals and local connection.",
  ],
] as const;

const impactExamples = [
  ["£10", "can help provide food support for a family facing hardship."],
  ["£25", "can help fund a community workshop or safe group session."],
  ["£50", "can help support mentoring activities for young people."],
  ["£100", "can help fund family support initiatives in Sheffield."],
] as const;

const trustItems = [
  [
    "Charity registration",
    "Registered charity number placeholder to be added once confirmed.",
  ],
  [
    "Awards and recognition",
    "Placeholder for local awards, partner recognition and community acknowledgements.",
  ],
  [
    "Media coverage",
    "Placeholder for press features and stories about Mums United's community work.",
  ],
  [
    "Rooted in Sheffield",
    "Based in Sheffield and working alongside mothers, young people and local families.",
  ],
] as const;

function SectionIntro({
  tag,
  heading,
  headingId,
  description,
}: {
  tag: string;
  heading: string;
  headingId: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center px-0 pb-[60px] text-center md:px-8 lg:px-[60px]">
      <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
        <p className={sectionTagClassName}>{tag}</p>
        <h2 id={headingId} className={sectionHeadingClassName}>
          {heading}
        </h2>
        {description ? (
          <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function InfoCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <article className="card-interactive flex h-full flex-col rounded-xl bg-[#efeadf] px-6 py-[34px]">
      <h3 className={cardTitleClassName}>{title}</h3>
      <p className="mt-20 text-base font-normal leading-[22px]">{body}</p>
    </article>
  );
}

function ImpactCard({
  amount,
  body,
}: {
  amount: string;
  body: string;
}) {
  return (
    <article className="card-interactive flex h-full flex-col rounded-xl bg-[#4c7a65] px-6 py-[34px]">
      <p className={impactAmountClassName}>{amount}</p>
      <div className="mt-20 flex flex-col gap-[18px]">
        <p className="text-base font-normal leading-[22px] text-white">{body}</p>
        <Link
          href="#final-donation"
          aria-label={`Donate ${amount}`}
          className={impactDonateButtonClassName}
        >
          Donate {amount}
        </Link>
      </div>
    </article>
  );
}

export default function DonatePage() {
  return (
    <>
      <SiteHeader currentPath="/donate" />

      <main className="bg-white pb-[60px] text-[#17171c] md:pb-20">
        <div className="relative h-[280px] w-full overflow-hidden md:h-[460px] lg:h-[520px]">
          <Image
            src="/donation-feature.jpg"
            alt="Mums United supporting families and communities"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        <div className="mx-auto flex w-full max-w-[1330px] flex-col gap-[60px] px-6 md:gap-20 lg:px-[60px]">
          {/* Hero card + quick donation */}
          <section
            aria-labelledby="hero-donation-card-heading"
            className="relative z-10 -mt-20 flex flex-col gap-[60px] md:-mt-28 md:gap-20 lg:-mt-32"
          >
            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-[0_4px_4px_rgba(0,0,0,0.12)] md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="mx-auto flex w-full max-w-[830px] flex-col items-center gap-8">
                <div className="flex w-full flex-col items-center gap-5">
                  <p className={sectionTagClassName}>Donate to Mums United</p>
                  <h1 className={heroHeadingClassName}>
                    Help families feel safer, supported and heard.
                  </h1>
                </div>
                <p className="max-w-[910px] text-base font-normal leading-[22px]">
                  Your donation helps Mums United stand alongside mothers, young
                  people and families affected by youth violence, exploitation,
                  poverty and social isolation across Sheffield.
                </p>
                <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-7">
                  <Link
                    href="#donation-options"
                    className={primaryDarkButtonClassName}
                  >
                    Donate Now
                  </Link>
                  <Link
                    href="#donation-impact"
                    className={outlineDarkButtonClassName}
                  >
                    Learn About Our Impact
                  </Link>
                </div>
              </div>
            </div>

            <aside className="rounded-xl bg-[#446169] p-8 lg:p-10">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[60px]">
                <div className="flex flex-1 flex-col items-center gap-[18px] text-center text-white">
                  <span className="inline-flex w-fit rounded bg-[rgba(163,182,180,0.3)] px-3 py-2 text-[12px] font-normal leading-4 text-white">
                    Make a donation
                  </span>
                  <h2
                    id="hero-donation-card-heading"
                    className="text-2xl font-semibold leading-[26px] tracking-[-0.02em]"
                  >
                    Choose an amount to support local families.
                  </h2>
                  <p className="text-base font-normal leading-[22px]">
                    Every gift helps create safe spaces, practical help and
                    trusted relationships for local families.
                  </p>
                </div>

                <div className="w-full shrink-0 lg:w-[280px]">
                  <DonationAmountSelector />
                </div>
              </div>
            </aside>
          </section>

          {/* Why Donate */}
          <section
            aria-labelledby="why-donate-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <SectionIntro
              tag="Why Donate"
              heading="Your gift helps people move from crisis toward hope."
              headingId="why-donate-heading"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {donationReasons.map(([title, text]) => (
                <InfoCard key={title} title={title} body={text} />
              ))}
            </div>
          </section>

          {/* Donation Impact Examples */}
          <section
            id="donation-impact"
            aria-labelledby="donation-impact-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <SectionIntro
              tag="Donation Impact Examples"
              heading="See what your donation can help make possible."
              headingId="donation-impact-heading"
              description="These examples are placeholders until live donation data and programme costs are confirmed."
            />

            <div
              id="donation-options"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {impactExamples.map(([amount, text]) => (
                <ImpactCard key={amount} amount={amount} body={text} />
              ))}
            </div>
          </section>

          {/* Trust & Accountability */}
          <section
            aria-labelledby="trust-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <SectionIntro
              tag="Trust & Accountability"
              heading="We know trust has to be earned."
              headingId="trust-heading"
              description="Mums United is committed to being open about who we are, where we work and how support reaches local families."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map(([title, text]) => (
                <InfoCard key={title} title={title} body={text} />
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section
            id="final-donation"
            aria-labelledby="donate-cta-heading"
            className="scroll-reveal relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-xl md:h-[500px]"
          >
            <div className="absolute inset-0 rounded-xl bg-black" aria-hidden />
            <Image
              src="/donations-cta-figma.jpg"
              alt="Hands stacked together in a gesture of community support"
              fill
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
            <div className="home-cta-content-padding relative z-10 flex w-full flex-col items-center text-center text-white md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <h2 id="donate-cta-heading" className={sectionHeadingClassName}>
                  Help a family know they are not facing this alone.
                </h2>
                <p className="max-w-[910px] text-base font-semibold leading-[22px] md:px-8 lg:px-[150px]">
                  Your donation helps Mums United continue supporting mothers,
                  young people and families across Sheffield through practical
                  help, trusted relationships and community support.
                </p>
                <div className="image-cta-buttons">
                  <Link
                    href="#donation-options"
                    className="btn-interactive inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-3 text-sm font-semibold leading-[22px] tracking-[-0.04em] text-[#17171c] transition-colors hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-5 md:py-3.5 md:text-base"
                  >
                    Donate Now
                  </Link>
                  <Link
                    href="#donation-impact"
                    className="btn-interactive inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white px-4 py-3 text-sm font-semibold leading-[22px] tracking-[-0.04em] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-5 md:py-3.5 md:text-base"
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
