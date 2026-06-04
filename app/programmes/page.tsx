"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";

type ProgrammeStatus = "Current" | "Completed" | "On Hold";

type Programme = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: ProgrammeStatus;
  featured: boolean;
  image?: string;
  imageAlt: string;
};

// To add a new programme:
// 1. Copy one programme object below
// 2. Change the id, title, description, category, status, featured, image and imageAlt
// 3. Save the file
// Keep descriptions short so the page stays easy to maintain
const programmes: Programme[] = [
  {
    id: "project-serenity",
    title: "Project Serenity",
    description:
      "Free after-school boxing sessions and positive activities supporting young people with confidence, discipline and wellbeing.",
    category: "Youth Development",
    status: "Current",
    featured: true,
    image: "/project-serenity-3.jpg",
    imageAlt: "Young people taking part in a positive community programme",
  },
  {
    id: "musyc-holiday-club",
    title: "MUSYC Holiday Club",
    description:
      "Holiday activities that give young people a safe place to learn, connect and enjoy positive experiences.",
    category: "Youth Activities",
    status: "Completed",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
  {
    id: "power-in-me-mothers",
    title: "Power In Me - Mothers",
    description:
      "Supportive sessions helping mothers build confidence, share experiences and access practical guidance.",
    category: "Family Support",
    status: "Completed",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
  {
    id: "power-in-me-fathers",
    title: "Power In Me - Fathers",
    description:
      "A space for fathers to strengthen family relationships, wellbeing and positive community connection.",
    category: "Family Support",
    status: "Completed",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
  {
    id: "creative-arts-project",
    title: "Creative Arts Project",
    description:
      "Creative workshops giving young people and families new ways to express themselves and build confidence.",
    category: "Creative Wellbeing",
    status: "Completed",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
  {
    id: "conflict-resolution-training",
    title: "Conflict Resolution Training",
    description:
      "Practical learning that supports safer conversations, stronger relationships and peaceful communities.",
    category: "Community Safety",
    status: "Completed",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
  {
    id: "sfsc-young-people-programme",
    title: "SFSC Young People Programme",
    description:
      "Structured sessions supporting young people with communication, resilience and positive decision-making.",
    category: "Youth Development",
    status: "On Hold",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
  {
    id: "lights-camera-action",
    title: "Lights Camera Action",
    description:
      "A media-based project helping young people tell stories, learn skills and grow their self-belief.",
    category: "Creative Skills",
    status: "Completed",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
  {
    id: "time-to-cook",
    title: "Time To Cook",
    description:
      "Food sessions that bring families together around practical cooking skills, confidence and connection.",
    category: "Health & Wellbeing",
    status: "Completed",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
  {
    id: "healthy-eating-activities",
    title: "Healthy Eating Activities",
    description:
      "Community activities encouraging healthier choices, shared meals and accessible family wellbeing.",
    category: "Health & Wellbeing",
    status: "Completed",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
  {
    id: "community-outreach-events",
    title: "Community Outreach Events",
    description:
      "Local events and outreach that help families find support, connection and trusted community spaces.",
    category: "Community Outreach",
    status: "Current",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
  {
    id: "mums-united-charitable-bank",
    title: "Mums United Charitable Bank",
    description:
      "Practical support helping families access essentials during hardship and moments of urgent need.",
    category: "Practical Support",
    status: "Current",
    featured: false,
    image: "",
    imageAlt: "Programme image placeholder",
  },
];

const filters: Array<"All" | ProgrammeStatus> = [
  "All",
  "Current",
  "Completed",
  "On Hold",
];

function StatusBadge({ status }: { status: ProgrammeStatus }) {
  return (
    <span className="rounded-full bg-[#E2B39F]/35 px-3 py-1 text-xs font-semibold text-[#1F1F1D]">
      {status}
    </span>
  );
}

function ProgrammeImage({
  programme,
  className = "",
}: {
  programme: Programme;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-video overflow-hidden bg-[#DDD4CE] ${className}`}
      aria-label={programme.image ? undefined : programme.imageAlt}
    >
      {programme.image ? (
        <Image
          src={programme.image}
          alt={programme.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
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

function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <article
      id={programme.id}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DDD4CE] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <ProgrammeImage programme={programme} className="rounded-t-3xl" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={programme.status} />
          <p className="text-sm font-semibold text-[#436169]">
            {programme.category}
          </p>
        </div>
        <h3 className="mt-5 text-2xl font-bold">{programme.title}</h3>
        <p className="mt-4 flex-1 leading-7 text-[#6F6864]">
          {programme.description}
        </p>
      </div>
    </article>
  );
}

function FeaturedProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <article
      id="current-programme"
      className="group grid bg-[#446169] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
    >
      <div
        className="relative aspect-[4/3] overflow-hidden bg-[#DDD4CE] lg:aspect-auto lg:min-h-[620px]"
        aria-label={programme.image ? undefined : programme.imageAlt}
      >
        {programme.image ? (
          <Image
            src={programme.image}
            alt={programme.imageAlt}
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
          Current Programme
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          {programme.title}
        </h2>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#E2B39F] px-3 py-1 text-xs font-semibold text-[#1F1F1D]">
            {programme.status}
          </span>
          <span className="rounded-full border border-white/35 px-3 py-1 text-xs font-semibold text-white">
            {programme.category}
          </span>
        </div>
        <p className="mt-6 text-lg leading-8 text-[#F6F1EE]">
          {programme.description}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#current-programme"
            className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#446169] transition-all duration-300 hover:scale-[1.02] hover:bg-[#FBF6F3] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#446169] active:scale-[0.98]"
          >
            View Current Programme
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-white px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#446169] active:scale-[0.98]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProgrammeSection({
  title,
  label,
  programmes,
}: {
  title: string;
  label: string;
  programmes: Programme[];
}) {
  if (programmes.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby={`${title.toLowerCase().replaceAll(" ", "-")}-heading`}>
      <div className="max-w-2xl">
        <h3
          id={`${title.toLowerCase().replaceAll(" ", "-")}-heading`}
          className="text-2xl font-bold md:text-3xl"
        >
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#6F6864]">{label}</p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programmes.map((programme) => (
          <ProgrammeCard key={programme.id} programme={programme} />
        ))}
      </div>
    </section>
  );
}

export default function ProgrammesPage() {
  const overlayOpacity = 0.5;
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const featuredProgramme = programmes.find((programme) => programme.featured);
  const filteredProgrammes = useMemo(() => {
    if (activeFilter === "All") {
      return programmes;
    }

    return programmes.filter((programme) => programme.status === activeFilter);
  }, [activeFilter]);
  const currentProgrammes = programmes.filter(
    (programme) => programme.status === "Current",
  );
  const onHoldProgrammes = programmes.filter(
    (programme) => programme.status === "On Hold",
  );
  const completedProgrammes = programmes.filter(
    (programme) => programme.status === "Completed",
  );

  return (
    <>
      <SiteHeader currentPath="/programmes" />

      <main className="min-h-screen bg-[#FBF6F3] text-[#1F1F1D]">
        <section className="px-6 pb-14 pt-20 md:px-12 md:pb-16 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Programmes & Workshops
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
                Supporting families through practical programmes, workshops and
                community initiatives.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#6F6864]">
                Mums United delivers a range of activities, workshops and
                support programmes designed to strengthen families, empower
                young people and build safer communities.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#current-programme"
                  className="rounded-full bg-[#436169] px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                >
                  View Current Programme
                </a>
                <Link
                  href="/contact"
                  className="rounded-full border border-[#DDD4CE] px-6 py-3 text-center font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {featuredProgramme ? (
          <section className="scroll-reveal bg-[#446169]">
            <FeaturedProgrammeCard programme={featuredProgramme} />
          </section>
        ) : null}

        <section
          aria-labelledby="programme-list-heading"
          className="scroll-reveal bg-white px-6 py-20 md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                  Programme Archive
                </p>
                <h2
                  id="programme-list-heading"
                  className="mt-3 text-3xl font-bold md:text-4xl"
                >
                  Programmes, workshops and community initiatives.
                </h2>
              </div>

              <div
                aria-label="Filter programmes"
                className="flex flex-wrap gap-3"
              >
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98] ${
                      activeFilter === filter
                        ? "border-[#436169] bg-[#436169] text-white"
                        : "border-[#DDD4CE] bg-white text-[#1F1F1D] hover:bg-[#FBF6F3]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {activeFilter === "All" ? (
              <div className="mt-10 space-y-16">
                <ProgrammeSection
                  title="Current Programmes"
                  label="Activities currently running in the community."
                  programmes={currentProgrammes}
                />
                <ProgrammeSection
                  title="On Hold Programmes"
                  label="Programmes paused for now, ready to return when capacity and funding allow."
                  programmes={onHoldProgrammes}
                />
                <ProgrammeSection
                  title="Past Programmes"
                  label="A selection of programmes previously delivered by Mums United."
                  programmes={completedProgrammes}
                />
              </div>
            ) : (
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProgrammes.map((programme) => (
                  <ProgrammeCard key={programme.id} programme={programme} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="scroll-reveal relative flex min-h-[400px] items-center justify-center overflow-hidden px-6 py-20 text-white md:min-h-[550px] md:px-12 lg:px-24">
          <Image
            src="/Donations-2.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
            }}
          />
          <div className="relative z-10 mx-auto max-w-[700px] text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Want to get involved?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Whether you are looking for support, volunteering opportunities or
              community activities, we would love to hear from you.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#436169] px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98]"
              >
                Contact Us
              </Link>
              <Link
                href="/donate"
                className="rounded-full border border-white px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98]"
              >
                Donate
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
