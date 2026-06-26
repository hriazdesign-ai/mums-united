"use client";

import { buttons, cardSpacingClasses, typography } from "@/lib/design-system";
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
    "/programmes-featured-figma.jpg"
  ),

  makeProgramme(
    "empowering-next-generation-creators",
    "Empowering the Next Generation of Creators",
    "Creative workshops helping young people explore ideas, build confidence and develop new skills.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/empowering.jpg"
  ),
  makeProgramme(
    "christmas-party",
    "Christmas Party",
    "A festive community celebration bringing families together through activities, food and support.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/xmas.jpg"
  ),
  makeProgramme(
    "mega-music-mingle",
    "Mega Music Mingle",
    "Music-focused activities encouraging creativity, participation and community connection.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/mega.jpg"
  ),
  makeProgramme(
    "netheredge-festival",
    "Netheredge Festival",
    "Community festival activities supporting local engagement and family participation.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/nether.jpg"
  ),
  makeProgramme(
    "pakistan-flood-appeal",
    "Pakistan Flood Appeal",
    "Fundraising and community support for families affected by flooding in Pakistan.",
    "Youth Development",
    "Completed",
    false,
    "/programmes/pk-1.jpg"
  ),
  makeProgramme(
    "building-resilience-after-trauma",
    "Building Resilience After Trauma",
    "Support sessions focused on recovery, resilience and emotional wellbeing.",
    "Youth Development",
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

const blockEyebrowClassName =
  "text-[12px] font-normal leading-4 text-[#17171c]";

const blockHeadingClassName =
  "text-[32px] font-semibold leading-[38px] tracking-[-0.02em] lg:text-[48px] lg:leading-[53px]";

const statusBadgeClassName =
  "inline-flex shrink-0 items-center justify-center rounded-full bg-[#17171c] px-[10px] py-2 text-[12px] font-semibold leading-3 text-white";

const categoryBadgeClassName =
  "inline-flex shrink-0 items-center justify-center rounded-full border border-[#17171c] px-[10px] py-2 text-[12px] font-semibold leading-3 text-[#17171c]";

function ProgrammeBadges({
  status,
  category,
  statusLabel,
}: {
  status: ProgrammeStatus;
  category: string;
  statusLabel?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className={statusBadgeClassName}>
        {statusLabel ?? status}
      </span>
      <span className={categoryBadgeClassName}>{category}</span>
    </div>
  );
}

function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <article
      id={programme.id}
      className="card-interactive flex flex-col overflow-hidden rounded-xl bg-white"
    >
      <div className="image-interactive relative h-[222px] w-full overflow-hidden">
        {programme.image ? (
          <Image
            src={programme.image}
            alt={programme.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#efeadf] px-6 text-center text-sm font-semibold text-[#6F6864]">
            Image Coming Soon
          </div>
        )}
      </div>
      <div className={cardSpacingClasses.contentWithImage}>
        <ProgrammeBadges
          status={programme.status}
          category={programme.category}
        />
        <div className={`${cardSpacingClasses.headingBody} ${cardSpacingClasses.tagsToHeading}`}>
          <h3 className="text-2xl font-semibold leading-[26px] tracking-[-0.02em]">
            {programme.title}
          </h3>
          <p className="text-base font-normal leading-[22px]">
            {programme.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function ProgrammeSection({
  title,
  label,
  programmes: sectionProgrammes,
}: {
  title: string;
  label: string;
  programmes: Programme[];
}) {
  if (sectionProgrammes.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-[18px] pb-10">
        <h3 className="text-2xl font-semibold leading-7 tracking-[-0.02em]">
          {title}
        </h3>
        <p className="text-base font-normal leading-[22px]">{label}</p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {sectionProgrammes.map((programme) => (
          <ProgrammeCard key={programme.id} programme={programme} />
        ))}
      </div>
    </div>
  );
}

export default function ProgrammesPage() {
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

      <main className="bg-white pb-[60px] text-[#17171c] md:pb-20">
        <div className="mx-auto flex w-full max-w-[1330px] flex-col px-6 lg:px-[60px]">
          {/* Hero + Featured Programme */}
          <section className="flex w-full flex-col">
            <div className="flex flex-col items-center px-0 py-16 text-center md:px-8 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <p className={typography.eyebrow}>Programmes &amp; Workshops</p>

                <h1 className={typography.pageHeading}>
                Programmes that bring people together.
                </h1>

                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Mums United delivers a range of activities, workshops and
                  support programmes designed to strengthen families, empower
                  young people and build safer communities.
                </p>
              </div>
            </div>

            {featuredProgramme ? (
              <div
                id="current-programme"
                className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1.04fr_0.51fr]"
              >
                <div className="image-interactive relative aspect-[881/455] w-full overflow-hidden rounded-xl lg:h-[455px] lg:aspect-auto">
                  {featuredProgramme.image ? (
                    <Image
                      src={featuredProgramme.image}
                      alt={featuredProgramme.imageAlt}
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(min-width: 1024px) 66vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#efeadf] px-6 text-center text-sm font-semibold text-[#6F6864]">
                      Image Coming Soon
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex flex-col gap-6 px-8 py-[42px]">
                    <p className={blockEyebrowClassName}>Current Programme</p>
                    <div className="flex flex-col gap-[22px]">
                      <h2 className={blockHeadingClassName}>
                        {featuredProgramme.title}
                      </h2>
                      <ProgrammeBadges
                        status={featuredProgramme.status}
                        category="Community Support"
                        statusLabel="Available"
                      />
                      <p className="text-base font-normal leading-[22px]">
                        {featuredProgramme.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </section>

          {/* Programme Archive */}
          <section
            aria-labelledby="programme-archive-heading"
            className="mt-[60px] flex w-full flex-col gap-10 lg:mt-20"
          >
            <div className="scroll-reveal flex flex-col gap-8">
              <span className="inline-flex w-fit items-center self-start rounded bg-[rgba(163,182,180,0.3)] px-3 py-1 text-xs font-normal leading-4 text-[#17171c]">
                Programme Archive
              </span>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <h2
                  id="programme-archive-heading"
                  className={`${typography.sectionHeadingPage} max-w-[720px]`}
                >
                  Programmes, workshops and community initiatives.
                </h2>

                <div
                  className="flex flex-wrap items-center gap-3 lg:shrink-0"
                  role="group"
                  aria-label="Filter programmes"
                >
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveFilter(filter)}
                      className={`btn-interactive rounded-full px-[10px] py-2 text-[12px] font-semibold leading-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2 ${
                        isActive
                          ? "bg-[#17171c] text-white"
                          : "border border-[#17171c] text-[#17171c] hover:bg-[#17171c]/5"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
                </div>
              </div>
            </div>

            {activeFilter === "All" ? (
              <div className="flex flex-col">
                <ProgrammeSection
                  title="Current Programmes"
                  label="Activities currently running in the community."
                  programmes={currentProgrammes}
                />

                {currentProgrammes.length > 0 &&
                completedProgrammes.length > 0 ? (
                  <hr className="my-[60px] border-0 border-t border-[#17171c]/15 md:my-20" />
                ) : null}

                <ProgrammeSection
                  title="Past Programmes"
                  label="A selection of programmes previously delivered by Mums United."
                  programmes={completedProgrammes}
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredProgrammes.map((programme) => (
                  <ProgrammeCard key={programme.id} programme={programme} />
                ))}
              </div>
            )}
          </section>

          {/* Bottom CTA */}
          <section
            aria-labelledby="programmes-cta-heading"
            className="scroll-reveal relative mt-[60px] flex min-h-[400px] items-center justify-center overflow-hidden rounded-xl md:h-[500px] lg:mt-20"
          >
            <div className="absolute inset-0 rounded-xl bg-black" aria-hidden />
            <Image
              src="/programmes-cta-figma.jpg"
              alt="Hands stacked together in a gesture of community support"
              fill
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
            <div className="home-cta-content-padding relative z-10 flex w-full flex-col items-center text-center text-white md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <h2
                  id="programmes-cta-heading"
                  className={typography.sectionHeadingPage}
                >
                  Want to get involved?
                </h2>
                <p className={`max-w-[910px] ${typography.bodySemibold} md:px-8 lg:px-[150px]`}>
                  Whether you are looking for support, volunteering
                  opportunities or community activities, we would love to hear
                  from you.
                </p>
                <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className={`${buttons.imageCtaPrimary} image-cta-btn`}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/donate"
                    className={`${buttons.imageCtaSecondary} image-cta-btn`}
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