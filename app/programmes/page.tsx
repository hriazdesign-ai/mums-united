"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";

type ProgrammeStatus = "Current" | "Completed";

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

const makeProgramme = (
  id: string,
  title: string,
  description: string,
  category: string,
  status: ProgrammeStatus = "Completed",
  featured = false,
  image = "/programmes/placeholder.jpg",
): Programme => ({
  id,
  title,
  description,
  category,
  status,
  featured,
  image,
  imageAlt: image ? title : "Programme image placeholder",
});

const programmes: Programme[] = [
  makeProgramme(
    "project-serenity-current",
    "Project Serenity",
    "Free after-school boxing sessions and positive activities supporting young people with confidence, discipline and wellbeing.",
    "Youth Development",
    "Current",
    true,
    "/IMG_2372.jpg"
  ),

  makeProgramme(
    "empowering-next-generation-creators",
    "Empowering the Next Generation of Creators",
    "Creative workshops helping young people explore ideas, build confidence and develop new skills.",
    "Creative Skills",
    "Completed",
    false,
    "/programmes/empowering.jpg"
  ),
  makeProgramme(
    "christmas-party",
    "Christmas Party",
    "A festive community celebration bringing families together through activities, food and support.",
    "Community Events",
    "Completed",
    false,
    "/programmes/xmas.jpg"
  ),
  makeProgramme(
    "mega-music-mingle",
    "Mega Music Mingle",
    "Music-focused activities encouraging creativity, participation and community connection.",
    "Community Events",
    "Completed",
    false,
    "/programmes/mega.jpg"
  ),
  makeProgramme(
    "netheredge-festival",
    "Netheredge Festival",
    "Community festival activities supporting local engagement and family participation.",
    "Community Events",
    "Completed",
    false,
    "/programmes/nether.jpg"
  ),
  makeProgramme(
    "pakistan-flood-appeal",
    "Pakistan Flood Appeal",
    "Fundraising and community support for families affected by flooding in Pakistan.",
    "Fundraising",
    "Completed",
    false,
    "/programmes/pk-1.jpg"
  ),
  makeProgramme(
    "building-resilience-after-trauma",
    "Building Resilience After Trauma",
    "Support sessions focused on recovery, resilience and emotional wellbeing.",
    "Health & Wellbeing",
    "Completed",
    false,
    "/programmes/resilience.jpg"
  ),
  makeProgramme(
    "mums-united-swfc",
    "Mums United And SWFC",
    "Partnership activities supporting young people through sport and positive engagement.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/owls.jpg"
  ),
  makeProgramme(
    "musyc-holiday-club-1",
    "MUSYC Holiday Club",
    "Holiday activities providing positive experiences and safe spaces for young people.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/musyc-1.jpg"
  ),
  makeProgramme(
    "time-to-cook-1",
    "Time To Cook",
    "Cooking sessions helping families build confidence and practical food skills.",
    "Health & Wellbeing",
    "Completed",
    false,
    "/programmes/cook.jpg"
  ),
  makeProgramme(
    "da-beat-down-workshop",
    "Da Beat Down Workshop",
    "Creative music workshops encouraging self-expression and participation.",
    "Creative Skills",
    "Completed",
    false,
    "/programmes/beat.jpg"
  ),
  makeProgramme(
    "recycling-art-project-1",
    "Recycling Art Project",
    "Creative workshops using recycled materials to promote creativity and sustainability.",
    "Creative Wellbeing",
    "Completed",
    false,
    "/programmes/recycling.jpg"
  ),
  makeProgramme(
    "first-aid",
    "First Aid",
    "Practical first aid training for young people and families.",
    "Skills Development",
    "Completed",
    false,
    "/programmes/aid.jpg"
  ),
  makeProgramme(
    "importance-of-healthy-eating",
    "Importance of Healthy Eating",
    "Workshops promoting healthy choices, nutrition and wellbeing.",
    "Health & Wellbeing",
    "Completed",
    false,
    "/programmes/health.jpg"
  ),
  makeProgramme(
    "recycling-art-project-2",
    "Recycling Art Project",
    "Creative environmental workshops encouraging imagination and practical skills.",
    "Creative Wellbeing",
    "Completed",
    false,
    "/programmes/recycling-2.jpg"
  ),
  makeProgramme(
    "stop-motion-animation",
    "Building Confidence & Stop Motion Animation",
    "Animation workshops helping young people develop confidence and storytelling skills.",
    "Creative Skills",
    "Completed",
    false,
    "/programmes/stop-motion.jpg"
  ),
  makeProgramme(
    "strength-in-me",
    "Strength In Me",
    "Personal development activities supporting confidence and resilience.",
    "Family Support",
    "Completed",
    false,
    "/programmes/strength.jpg"
  ),
  makeProgramme(
    "drayton-manor-resort",
    "Day Trip to Drayton Manor Resort",
    "A family day trip providing positive experiences, fun and opportunities for young people to build friendships.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/drayton.jpg"
  ),
  makeProgramme(
    "day-trip-blackpool",
    "Day Trip to Blackpool",
    "A community trip bringing families together through shared experiences and positive activities.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/blackpool.jpg"
  ),
  makeProgramme(
    "jubilee",
    "Jubilee",
    "Community celebrations marking the Queen's Platinum Jubilee with local families and residents.",
    "Community Events",
    "Completed",
    false,
    "/programmes/jubilee.jpg"
  ),
  makeProgramme(
    "kite-making-workshop",
    "Kite Making Workshop",
    "Creative workshops helping children design, build and fly their own kites.",
    "Creative Wellbeing",
    "Completed",
    false,
    "/programmes/kite.jpg"
  ),
  makeProgramme(
    "on-the-way-home",
    "Free Screening of the film 'On The Way Home'",
    "A community film screening creating discussion, learning and awareness around important social issues.",
    "Community Learning",
    "Completed",
    false,
    "/programmes/palfest.jpg"
  ),
  makeProgramme(
    "sheffield-leaving-care-service",
    "Sheffield Leaving Care Service",
    "Providing practical support, food packages and essential items for vulnerable young people.",
    "Practical Support",
    "Completed",
    false,
    "/programmes/ramadhan.jpg"
  ),
  makeProgramme(
    "ukrainian-people",
    "Ukrainian People",
    "Collecting and distributing donations to support displaced Ukrainian families.",
    "Practical Support",
    "Completed",
    false,
    "/programmes/ukraine.jpg"
  ),
  makeProgramme(
    "nationalities-borders-bill",
    "Oppose the Nationalities & Borders Bill March & Rally",
    "Community action raising awareness and encouraging participation around immigration policy issues.",
    "Community Campaigns",
    "Completed",
    false,
    "/programmes/section9.jpg"
  ),
  makeProgramme(
    "alison-cope-speaks",
    "Alison Cope Speaks To MU",
    "A powerful community session sharing lived experiences and raising awareness around youth violence.",
    "Community Learning",
    "Completed",
    false,
    "/programmes/alison.jpg"
  ),
  makeProgramme(
    "musyc-programme",
    "MUSYC Programme",
    "Activities designed to engage young people through creativity, support and positive experiences.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/musyc2.jpg"
  ),
  makeProgramme(
    "kelham-island",
    "Kelham Island",
    "Educational visits helping young people explore local history, culture and community heritage.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/kelham.jpg"
  ),
  makeProgramme(
    "alton-towers",
    "Alton Towers",
    "A reward trip providing positive experiences and memorable opportunities for young people.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/alton.jpg"
  ),
  makeProgramme(
    "free-arabic-lessons",
    "Free Arabic Lessons",
    "Community language classes supporting learning, confidence and cultural understanding.",
    "Education",
    "Completed",
    false,
    "/programmes/arabic.jpg"
  ),
  makeProgramme(
    "power-in-me-mothers",
    "Power In Me - Workshop for Mothers",
    "Workshops supporting mothers with confidence, wellbeing and personal development.",
    "Family Support",
    "Completed",
    false,
    "/programmes/pim-mothers.jpg"
  ),
  makeProgramme(
    "power-in-me-fathers",
    "Power In Me - Workshop for Fathers",
    "Sessions helping fathers build confidence, strengthen family relationships and improve wellbeing.",
    "Family Support",
    "Completed",
    false,
    "/programmes/pim-fathers.jpg"
  ),
  makeProgramme(
    "mu-clubs-meersbrook",
    "MU Clubs - Meersbrook",
    "Community club sessions supporting young people and families through activities, learning and positive engagement.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/muclub-1.jpg"
  ),
  makeProgramme(
    "mu-club-netheredge",
    "MU Club - Netheredge",
    "Local community sessions helping young people build confidence, friendships and new skills.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/muclub-2.jpg"
  ),
  makeProgramme(
    "healthy-eating-activities-may",
    "Healthy Eating Activities in May",
    "Interactive sessions promoting healthier food choices, wellbeing and family participation.",
    "Health & Wellbeing",
    "Completed",
    false,
    "/programmes/hea-may.jpg"
  ),
  makeProgramme(
    "creative-arts-project",
    "Creative Arts Project",
    "Creative workshops encouraging self-expression, confidence and personal development.",
    "Creative Wellbeing",
    "Completed",
    false,
    "/programmes/creative-arts.jpg"
  ),
  makeProgramme(
    "empowering-the-youth-with-a-pen",
    "Empowering The Youth With A Pen",
    "Writing and storytelling activities helping young people develop confidence and communication skills.",
    "Creative Skills",
    "Completed",
    false,
    "/programmes/empowering-youth-1.png"
  ),
  makeProgramme(
    "conflict-resolution-training",
    "Conflict Resolution Training",
    "Practical workshops supporting healthier relationships, communication and conflict management.",
    "Community Safety",
    "Completed",
    false,
    "/programmes/conflict.jpg"
  ),
  makeProgramme(
    "healthy-eating-activities-april-21",
    "Healthy Eating Activities April 21",
    "Family-focused wellbeing sessions promoting healthy eating and positive lifestyle choices.",
    "Health & Wellbeing",
    "Completed",
    false,
    "/programmes/hea-april.jpg"
  ),
  makeProgramme(
    "swfc-mu-online-games-workshop",
    "SWFC + MU Online Games Workshop",
    "Partnership workshops encouraging safe online engagement, teamwork and digital wellbeing.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/online.png"
  ),
  makeProgramme(
    "mu-online-games-workshop",
    "MU Clubs - Online Games Workshop",
    "Online activities helping young people connect safely while developing social and communication skills.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/muc-3.jpg"
  ),
  makeProgramme(
    "mu-clubs-lansdowne",
    "MU Clubs - Lansdowne",
    "Community club activities supporting young people through learning, creativity and positive engagement.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/muc-4.jpg"
  ),
  makeProgramme(
    "young-people-volunteer",
    "Young People Volunteer",
    "Volunteer opportunities helping young people gain confidence, experience and community involvement.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/placeholder.jpg"
  ),
  makeProgramme(
    "mums-united-covid-services",
    "Mums United COVID Services",
    "Community support initiatives helping families access practical assistance during the pandemic.",
    "Community Support",
    "Completed",
    false,
    "/programmes/placeholder.jpg"
  ),
  makeProgramme(
    "afghan-women-children",
    "Donations for Afghan Women and Children",
    "Collecting donations and essential items to support Afghan women and children arriving in the UK.",
    "Practical Support",
    "Completed",
    false,
    "/programmes/placeholder.jpg"
  ),
  makeProgramme(
    "movie-time",
    "Movie Time",
    "Film-based activities creating opportunities for young people and families to connect and engage.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/movie.jpg"
  ),
  makeProgramme(
    "healthy-eating-multi-sports",
    "Healthy Eating & Multi Sports Sessions",
    "Activities combining healthy lifestyles, physical activity and wellbeing education.",
    "Health & Wellbeing",
    "Completed",
    false,
    "/programmes/health-1.jpg"
  ),
  makeProgramme(
    "sfsc-1",
    "SFSC",
    "A youth development programme supporting safer choices, confidence and positive futures.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/sfsc.jpg"
  ),
  makeProgramme(
    "fun-days-at-flicks",
    "Fun Days at Flicks",
    "Fun activity sessions providing young people with positive experiences and community engagement.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/recycling.jpg"
  ),
  makeProgramme(
    "time-to-cook-2",
    "Time To Cook",
    "Practical cooking sessions helping families build confidence and healthy food habits.",
    "Health & Wellbeing",
    "Completed",
    false,
    "/programmes/cook.jpg"
  ),
  makeProgramme(
    "christmas-itinerary",
    "Christmas Itinerary",
    "A festive programme of activities and support for local families during the holiday period.",
    "Community Events",
    "Completed",
    false,
    "/programmes/xmas-2.jpg"
  ),
  makeProgramme(
    "musyc-holiday-club-2",
    "MUSYC Holiday Club",
    "Holiday activities supporting young people through creativity, learning and fun experiences.",
    "Youth Activities",
    "Completed",
    false,
    "/programmes/musyc-1.jpg"
  ),
];

const filters: Array<"All" | ProgrammeStatus> = ["All", "Current", "Completed"];

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
    <div className={`relative aspect-video overflow-hidden bg-[#DDD4CE] ${className}`}>
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
      <div className="relative aspect-[4/3] overflow-hidden bg-[#DDD4CE] lg:aspect-auto lg:min-h-[620px]">
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
        <p className="mt-6 text-lg leading-8 text-[#F6F1EE]">
          {programme.description}
        </p>
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
  if (programmes.length === 0) return null;

  return (
    <section>
      <div className="max-w-2xl">
        <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
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
  const currentProgrammes = useMemo(
    () => programmes.filter((programme) => programme.status === "Current"),
    []
  );
  
  const completedProgrammes = useMemo(
    () => programmes.filter((programme) => programme.status === "Completed"),
    []
  );

  const filteredProgrammes = useMemo(() => {
    if (activeFilter === "All") return programmes;
    if (activeFilter === "Current") return currentProgrammes;
    if (activeFilter === "Completed") return completedProgrammes;
    return programmes;
  }, [activeFilter, currentProgrammes, completedProgrammes]);

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
            </div>
          </div>
        </section>

        {featuredProgramme ? (
          <section className="bg-[#446169]">
            <FeaturedProgrammeCard programme={featuredProgramme} />
          </section>
        ) : null}

        <section
          id="programme-list-heading"
          className="bg-white px-6 py-20 md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                  Programme Archive
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Programmes, workshops and community initiatives.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${
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

        <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden px-6 py-20 text-white md:min-h-[550px] md:px-12 lg:px-24">
          <Image
            src="/Donations-2.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
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
                className="rounded-full bg-[#436169] px-6 py-3 text-center font-semibold text-white hover:bg-[#344C52]"
              >
                Contact Us
              </Link>
              <Link
                href="/donate"
                className="rounded-full border border-white px-6 py-3 text-center font-semibold text-white hover:bg-white/10"
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