import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageCtaSection } from "../components/ImageCtaSection";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Support Services | Mums United",
  description:
    "Practical support, safe spaces and trusted help for mothers, young people and families across Sheffield.",
};

type SupportService = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  image?: string;
  imageAlt: string;
};

// To add a new support service:
// 1. Copy one service object below
// 2. Update id, title, description, category, status, image and imageAlt
// 3. Save the file
const featuredService = {
  title: "Community Centre Support",
  description:
    "A welcoming community space offering practical help, activities and trusted support for mothers, young people and local families across Sheffield.",
  category: "Community Support",
  status: "Available",
  image: "/hero-test.jpg",
  imageAlt: "Families and community members at a Mums United support space",
};

const supportServices: SupportService[] = [
  {
    id: "community-centre-support",
    title: "Community Centre Support",
    description:
      "Safe spaces, activities and practical help for families looking for connection, guidance and community support.",
    category: "Community Support",
    status: "Available",
    image: "/service/community.jpg",
    imageAlt: "Community centre support activities",
  },
  {
    id: "steel-champ-academy",
    title: "Steel Champ Academy",
    description:
      "Positive activities and mentoring that help young people build confidence, discipline and safer choices.",
    category: "Youth Support",
    status: "Available",
    image: "/service/steel.jpg",
    imageAlt: "Steel Champ Academy programme image placeholder",
  },
  {
    id: "mums-united-charitable-bank",
    title: "Mums United Charitable Bank",
    description:
      "Practical support for families facing hardship, helping with essentials and connecting people to trusted local help.",
    category: "Family Support",
    status: "Available",
    image: "/service/charity.jpg",
    imageAlt: "Mums United Charitable Bank image placeholder",
  },
];

const supportSteps = [
  [
    "Reach out",
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
];

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
];

function ServiceStatusBadge({ status }: { status: string }) {
  return (
    <span className="rounded-full bg-[#E2B39F]/35 px-3 py-1 text-xs font-semibold text-[#1F1F1D]">
      {status}
    </span>
  );
}

function ServiceImage({
  service,
  className = "",
}: {
  service: Pick<SupportService, "image" | "imageAlt">;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-video overflow-hidden bg-[#DDD4CE] ${className}`}
      aria-label={service.image ? undefined : service.imageAlt}
    >
      {service.image ? (
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      ) : (
        <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-[#6F6864]">
          Image Coming Soon
        </div>
      )}
    </div>
  );
}

function SupportServiceCard({ service }: { service: SupportService }) {
  return (
    <article
      id={service.id}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DDD4CE] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <ServiceImage service={service} className="rounded-t-3xl" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3">
          <ServiceStatusBadge status={service.status} />
          <p className="text-sm font-semibold text-[#436169]">
            {service.category}
          </p>
        </div>
        <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
        <p className="mt-4 flex-1 leading-7 text-[#6F6864]">
          {service.description}
        </p>
      </div>
    </article>
  );
}

function FeaturedSupportSection() {
  return (
    <article
      id="community-centre-support"
      className="group grid bg-[#436169] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#DDD4CE] lg:aspect-auto lg:min-h-[620px]">
        {featuredService.image ? (
          <Image
            src={featuredService.image}
            alt={featuredService.imageAlt}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-[#6F6864]">
            Image Coming Soon
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:min-h-[620px] lg:px-20 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#E2B39F]">
          Featured Support
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          {featuredService.title}
        </h2>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#E2B39F] px-3 py-1 text-xs font-semibold text-[#1F1F1D]">
            {featuredService.status}
          </span>
          <span className="rounded-full border border-white/35 px-3 py-1 text-xs font-semibold text-white">
            {featuredService.category}
          </span>
        </div>
        <p className="mt-6 text-lg leading-8 text-[#F6F1EE]">
          {featuredService.description}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#436169] transition-all duration-300 hover:scale-[1.02] hover:bg-[#FBF6F3] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#436169] active:scale-[0.98]"
          >
            Get Support
          </Link>
          <Link
            href="/donate"
            className="rounded-full border border-white px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#436169] active:scale-[0.98]"
          >
            Donate
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function SupportServicesPage() {
  return (
    <>
      <SiteHeader currentPath="/support-services" />

      <main className="min-h-screen bg-[#FBF6F3] text-[#1F1F1D]">
        <section className="scroll-reveal px-6 pt-[60px] pb-14 md:px-12 md:pb-16 md:pt-20 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Support Services
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
                Practical support for families, young people and communities.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#6F6864]">
                Mums United provides trusted support, safe spaces and practical
                help for mothers, young people and families across Sheffield.
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

        <section className="scroll-reveal bg-[#436169]">
          <FeaturedSupportSection />
        </section>

        <section
          aria-labelledby="support-services-heading"
          className="scroll-reveal bg-white px-6 section-padding-y md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Our Services
              </p>
              <h2
                id="support-services-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                Support shaped around community needs.
              </h2>
              <p className="mt-4 text-[#6F6864]">
                Explore the services Mums United offers to help families access
                safe spaces, practical support and positive community connection.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {supportServices.map((service) => (
                <SupportServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="how-support-works-heading"
          className="scroll-reveal px-6 section-padding-y md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                How Support Works
              </p>
              <h2
                id="how-support-works-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                A simple path to the help you need.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {supportSteps.map(([title, text], index) => (
                <div
                  key={title}
                  className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-4xl font-bold tracking-tight text-[#436169] md:text-5xl">
                    {index + 1}
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
          aria-labelledby="trust-support-heading"
          className="scroll-reveal px-6 pb-[60px] md:px-12 md:pb-20 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Trust & Reassurance
              </p>
              <h2
                id="trust-support-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                Support you can feel confident in.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6F6864]">
                Mums United is committed to offering respectful, practical and
                community-rooted support for local families.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map(([title, text]) => (
                <article
                  key={title}
                  className="flex h-full flex-col rounded-3xl border border-[#DDD4CE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-[#6F6864]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ImageCtaSection
          heading="Need support or want to speak to us?"
          body="Whether you are looking for practical help, community support or a safe place to talk, Mums United is here to listen."
          buttons={[
            { label: "Contact Us", href: "/contact", variant: "primary" },
            { label: "Donate", href: "/donate", variant: "secondary" },
          ]}
        />
      </main>
    </>
  );
}
