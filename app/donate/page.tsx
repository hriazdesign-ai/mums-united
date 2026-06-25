import type { Metadata } from "next";
import Image from "next/image";
import { DonationAmountSelector } from "../components/DonationAmountSelector";
import { ImageCtaSection } from "../components/ImageCtaSection";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Donate | Mums United",
  description:
    "Support Mums United's work with mothers, young people and families in Sheffield.",
};

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
];

const impactExamples = [
  ["£10", "can help provide food support for a family facing hardship."],
  ["£25", "can help fund a community workshop or safe group session."],
  ["£50", "can help support mentoring activities for young people."],
  ["£100", "can help fund family support initiatives in Sheffield."],
];

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
];

export default function DonatePage() {
  return (
    <>
      <SiteHeader currentPath="/donate" />

      <main className="min-h-screen bg-[#FBF6F3] text-[#1F1F1D]">
        <section className="relative pb-[60px] md:pb-20">
          <div className="relative z-0 h-[280px] w-full overflow-hidden md:h-[460px] lg:h-[520px]">
            <Image
              src="/donation-feature.jpg"
              alt="Mums United supporting families and communities"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 mx-auto -mt-20 max-w-5xl px-6 text-center md:-mt-28 md:px-12 lg:-mt-32 lg:px-24">
            <div className="rounded-2xl bg-white p-6 shadow-lg md:p-10 lg:p-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Donate to Mums United
              </p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Help families feel safer, supported and heard.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#6F6864]">
                Your donation helps Mums United stand alongside mothers, young
                people and families affected by youth violence, exploitation,
                poverty and social isolation across Sheffield.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="#donation-options"
                  className="rounded-full bg-[#436169] px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                >
                  Donate Now
                </a>
                <a
                  href="#donation-impact"
                  className="rounded-full border border-[#DDD4CE] px-6 py-3 text-center font-semibold text-[#1F1F1D] transition-all duration-300 hover:scale-[1.02] hover:bg-[#FBF6F3] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                >
                  Learn About Our Impact
                </a>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-5xl md:mt-16">
              <aside
                aria-labelledby="hero-donation-card-heading"
                className="grid gap-8 rounded-3xl bg-[#436169] p-8 shadow-sm lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1fr)] lg:items-center"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#E2B39F]">
                    Make a donation
                  </p>
                  <h2
                    id="hero-donation-card-heading"
                    className="mt-3 text-2xl font-bold text-white"
                  >
                    Choose an amount to support local families.
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-white/85">
                    Every gift helps create safe spaces, practical help and trusted
                    relationships for local families.
                  </p>
                </div>

                <DonationAmountSelector />
              </aside>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="why-donate-heading"
          className="scroll-reveal bg-white px-6 section-padding-y md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Why Donate
              </p>
              <h2
                id="why-donate-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                Your gift helps people move from crisis toward hope.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {donationReasons.map(([title, text]) => (
                <article key={title} className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-4 leading-7 text-[#6F6864]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="donation-impact"
          aria-labelledby="donation-impact-heading"
          className="scroll-reveal px-6 section-padding-y md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Donation Impact Examples
              </p>
              <h2
                id="donation-impact-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                See what your donation can help make possible.
              </h2>
              <p className="mt-4 text-[#6F6864]">
                These examples are placeholders until live donation data and
                programme costs are confirmed.
              </p>
            </div>

            <div
              id="donation-options"
              className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {impactExamples.map(([amount, text]) => (
                <article
                  key={amount}
                  className="flex h-full flex-col rounded-3xl border border-[#DDD4CE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-4xl font-bold tracking-tight text-[#436169] md:text-5xl">
                    {amount}
                  </p>
                  <p className="mt-4 flex-1 leading-7 text-[#6F6864]">{text}</p>
                  <a
                    href="#final-donation"
                    aria-label={`Donate ${amount}`}
                    className="mt-6 inline-block shrink-0 self-start rounded-full bg-[#436169] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                  >
                    Donate {amount}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="trust-heading"
          className="scroll-reveal bg-white px-6 section-padding-y md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Trust & Accountability
              </p>
              <h2
                id="trust-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                We know trust has to be earned.
              </h2>
              <p className="mt-4 text-[#6F6864]">
                Mums United is committed to being open about who we are, where
                we work and how support reaches local families.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map(([title, text]) => (
                <article key={title} className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6F6864]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ImageCtaSection
          id="final-donation"
          eyebrow="Support Mums United"
          heading="Help a family know they are not facing this alone."
          body="Your donation helps Mums United continue supporting mothers, young people and families across Sheffield through practical help, trusted relationships and community support."
          buttons={[
            {
              label: "Donate Now",
              href: "#donation-options",
              variant: "primary",
            },
            {
              label: "Learn About Our Impact",
              href: "#donation-impact",
              variant: "secondary",
            },
          ]}
        />
      </main>
    </>
  );
}
