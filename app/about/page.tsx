import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageCtaSection } from "../components/ImageCtaSection";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About Us | Mums United",
  description:
    "Learn about Mums United, a community-led charity supporting mothers, young people and families across Sheffield.",
};

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
];

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
];

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
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader currentPath="/about" />

      <main className="min-h-screen bg-[#FBF6F3] text-[#1F1F1D]">
        <section className="scroll-reveal px-6 pt-20 pb-14 md:px-12 md:pb-16 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                About Mums United
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
                Supporting mothers, young people and families across Sheffield.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#6F6864]">
                Mums United is a community-led charity supporting vulnerable
                mothers, young people and families through practical help,
                trusted relationships and safe spaces.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#436169] px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                >
                  Get Support
                </Link>
                <Link
                  href="/donate"
                  className="rounded-full border border-[#DDD4CE] px-6 py-3 text-center font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
  aria-labelledby="our-story-heading"
  className="bg-white"
>
  <div className="grid lg:grid-cols-2">
    <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:min-h-[560px] lg:px-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
        Who We Are
      </p>
      <h2
        id="hero-image-2.jpg"
        className="mt-3 text-3xl font-bold md:text-5xl"
      >
        Our story
      </h2>
      <p className="mt-6 text-lg leading-8 text-[#6F6864]">
        Mums United was created to bring people together around practical
        support, prevention and community care. We work alongside families,
        young people and local partners to help build safer, stronger
        communities.
      </p>
    </div>

    <div className="relative aspect-[4/3] overflow-hidden bg-[#DDD4CE] lg:aspect-auto lg:min-h-[560px]">
      <Image
        src="/hero-image-2.jpg"
        alt="Mums United community members supporting one another"
        fill
        className="object-cover object-center"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  </div>
</section>

<section
  aria-labelledby="our-mission-heading"
  className="bg-[#436169]"
>
  <div className="grid lg:grid-cols-2">
    <div className="relative aspect-[4/3] overflow-hidden bg-[#DDD4CE] lg:aspect-auto lg:min-h-[560px]">
      <Image
        src="/lede.jpg"
        alt="Mums United supporting families in the community"
        fill
        className="object-cover object-center"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>

    <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:min-h-[560px] lg:px-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#E2B39F]">
        Our Mission
      </p>
      <h2
        id="our-mission-heading"
        className="mt-3 text-3xl font-bold text-white md:text-5xl"
      >
        Creating safer, stronger communities together.
      </h2>
      <p className="mt-6 text-lg leading-8 text-[#F6F1EE]">
        We support families through trusted relationships, practical guidance,
        community activities and early intervention.
      </p>
    </div>
  </div>
</section>

 

        <section
          aria-labelledby="our-values-heading"
          className="scroll-reveal px-6 py-20 md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Our Values
              </p>
              <h2
                id="our-values-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                What guides our work every day.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(([title, description]) => (
                <article
                  key={title}
                  className="flex h-full flex-col rounded-3xl border border-[#DDD4CE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-[#6F6864]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="about-impact-heading"
          className="scroll-reveal bg-white px-6 py-20 md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Our Impact
              </p>
              <h2
                id="about-impact-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                Making a difference across Sheffield.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map(([number, title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-4xl font-bold tracking-tight text-[#436169] md:text-5xl">
                    {number}
                  </p>
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6F6864]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="about-recognition-heading"
          className="bg-[#FBF6F3] px-6 pt-28 pb-20 md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Recognition & Trust
              </p>
              <h2
                id="about-recognition-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                A charity built on community trust.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6F6864]">
                Mums United is known for practical support, local partnerships
                and a strong commitment to families across Sheffield.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {recognitionItems.map(([title, description]) => (
                <article
                  key={title}
                  className="flex h-full flex-col rounded-3xl border border-[#DDD4CE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-[#6F6864]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ImageCtaSection
          heading="Want to learn more or get involved?"
          body="Whether you are looking for support, want to volunteer, or would like to partner with Mums United, we would love to hear from you."
          buttons={[
            { label: "Contact Us", href: "/contact", variant: "primary" },
            { label: "Donate", href: "/donate", variant: "secondary" },
          ]}
        />
      </main>
    </>
  );
}
