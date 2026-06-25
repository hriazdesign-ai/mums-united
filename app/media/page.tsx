"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";

type MediaType = "Radio" | "TV" | "Press" | "Podcast" | "Community";

type MediaItem = {
  id: string;
  title: string;
  type: MediaType;
  description: string;
  date: string;
  href: string;
  featured: boolean;
  image?: string;
  imageAlt?: string;
};

type MediaLinkSource = {
  title?: string;
  date: string;
  href: string;
};

type RecognitionItem = {
  title: string;
  description: string;
  date?: string;
  href?: string;
};

// To add a new media item:
// 1. Copy one media object
// 2. Update title, type, description, date, href and featured
// 3. Use YYYY-MM-DD for date so the archive sorts correctly
// 4. Paste the real media URL into href
// 5. Set featured: true only for important items shown at the top
const mediaLinkSources: MediaLinkSource[] = [
  { title: "ITV News: Community Fears Following Sheffield Shooting", date: "2025-12-01", href: "https://www.itv.com/watch/news/communitys-fears-in-wake-of-shooting-in-sheffield/zdzp13h" },
  { date: "2025-12-01", href: "https://www.examinerlive.co.uk/news/local-news/i-moved-home-yorkshire-because-33007593" },
  { date: "2025-11-01", href: "https://www.thestar.co.uk/news/crime/sheffield-shooting-sahira-irshad-call-for-calm-5416991" },
  { date: "2025-07-01", href: "https://www.youtube.com/watch?v=mTbxmu9z_d4" },
  { date: "2025-07-01", href: "https://www.theguardian.com/uk-news/2025/feb/08/hundreds-join-sheffield-march-for-boy-fatally-stabbed-at-school" },
  { date: "2025-07-01", href: "https://www.bbc.co.uk/news/articles/czxkq59x4xwo" },
  { date: "2025-07-01", href: "https://www.thestar.co.uk/news/theres-only-one-harvey-willgoose-sheffield-honours-teen-with-moving-memorial-march-towards-bramall-lane-4981675" },
  { date: "2025-07-01", href: "https://www.youtube.com/watch?v=yCak8NehiJE" },
  { date: "2025-03-01", href: "https://www.sheffieldtribune.co.uk/sheffields-mums-have-united-against-gangs-now-they-want-to-bring-the-rest-of-the-city-with-them/" },
  { date: "2024-11-01", href: "https://researchforaction.uk/democratising-governance-report" },
  { date: "2024-10-01", href: "https://sheffood.org.uk/blog/mums-united-building-stronger-communities/" },
  { date: "2024-09-01", href: "https://www.youtube.com/watch?v=xuu5Kr9AOB8" },
  { date: "2024-09-01", href: "https://researchforaction.uk/democratising-governance-report" },
  { date: "2023-12-01", href: "https://www.youtube.com/watch?v=sGQ66hZ-iY0" },
  { date: "2023-11-01", href: "https://www.facebook.com/1574154482711200/posts/7023821907744403/" },
  { date: "2023-08-01", href: "https://www.youtube.com/watch?v=SZ5nqm_qO_o" },
  { date: "2023-07-01", href: "https://raceequalityfoundation.org.uk/health-and-care/not-by-choice-the-unequal-impact-of-the-covid-19-pandemic/" },
  { date: "2023-03-01", href: "https://www.youtube.com/watch?v=q6GF80zFBpg" },
  { date: "2023-01-01", href: "https://www.thestar.co.uk/news/crime/mums-united-critical-over-lack-of-involvement-in-crime-action-plan-for-sheffield-estate-3975969" },
  { date: "2022-09-01", href: "https://www.youtube.com/watch?v=64kdZy-MoX8" },
  { date: "2022-08-01", href: "https://www.youtube.com/watch?v=k7oDN-2hB7k" },
  { date: "2022-08-01", href: "https://www.bbc.co.uk/iplayer/episode/m001bmrg" },
  { date: "2022-06-01", href: "https://www.youtube.com/watch?v=vI0ed2z5Fh4" },
  { date: "2022-06-01", href: "https://www.youtube.com/watch?v=lwRjBde4rKc" },
  { date: "2022-04-01", href: "https://www.thestar.co.uk/news/people/the-fantastic-finalists-in-the-inspirational-women-of-sheffield-awards-2022-3670435" },
  { date: "2022-04-01", href: "https://twitter.com/GBNEWS/status/1512872864533098498" },
  { date: "2022-04-01", href: "https://www.thestar.co.uk/news/crime/police-urged-to-admit-how-serious-sheffields-gun-and-knife-crime-problems-are-3646162" },
  { date: "2022-04-01", href: "https://www.youtube.com/watch?v=7p0C7q28Qxg" },
  { date: "2022-04-01", href: "https://www.youtube.com/watch?v=9cuXdyWm9E0" },
  { date: "2022-04-01", href: "https://www.youtube.com/watch?v=w3HQOxgIAsw" },
  { date: "2022-03-01", href: "https://www.youtube.com/watch?v=w3HQOxgIAsw" },
  { date: "2022-03-01", href: "https://www.youtube.com/watch?v=9cuXdyWm9E0" },
  { date: "2022-03-01", href: "https://www.facebook.com/1574154482711200/posts/4700614873398463/?d=n" },
  { date: "2022-03-01", href: "https://www.facebook.com/1574154482711200/posts/4712800228846594/?d=n" },
  { date: "2022-02-01", href: "https://www.thestar.co.uk/news/people/sheffield-activists-to-protest-against-new-immigration-bill-that-will-treat-people-as-second-class-citizens-3542412" },
  { date: "2022-01-01", href: "https://www.youtube.com/watch?v=zutcG2qGnG0" },
  { date: "2021-12-01", href: "https://www.youtube.com/watch?v=I2SUmo4Zawo" },
  { date: "2021-12-01", href: "https://www.youtube.com/watch?v=H5Us8WqTOvE" },
  { date: "2021-11-01", href: "https://7c89079c.flowpaper.com/SYCFVitalSignsReport2021Digital20210928/" },
  { date: "2021-11-01", href: "https://www.thestar.co.uk/news/crime/sheffield-charity-mums-united-recognised-by-prime-minister-boris-johnson-with-points-of-light-award-3458093" },
  { date: "2021-09-01", href: "https://www.itv.com/news/calendar/2021-08-30/donations-pour-in-for-afghan-refugees-in-sheffield" },
  { date: "2021-09-01", href: "https://www.youtube.com/watch?v=Q6R7M0feDIo" },
  { date: "2021-08-01", href: "https://www.youtube.com/watch?v=WlDxU2SSLNc" },
  { date: "2021-08-01", href: "https://www.youtube.com/watch?v=tXcjiEoAwUI" },
  { date: "2021-07-01", href: "https://www.youtube.com/watch?v=WlDxU2SSLNc" },
  { date: "2021-07-01", href: "https://www.youtube.com/watch?v=q4B4YnCQSjo" },
  { date: "2021-06-01", href: "https://www.youtube.com/watch?v=vo3BtZ5g64A" },
  { date: "2021-06-01", href: "https://www.youtube.com/watch?v=8WITQjE7AqA" },
  { date: "2021-05-27", href: "https://morningstaronline.co.uk/article/b/mothers-and-children-march-through-sheffield-demanding-action-against-gang-violence" },
  { date: "2021-05-24", href: "https://www.facebook.com/609632969065582/posts/4586266121402227/?d=n" },
  { date: "2021-05-24", href: "https://www.youtube.com/watch?v=ai3vtRBQ-h0" },
  { date: "2021-05-24", href: "https://www.youtube.com/watch?v=4njShq3vIRA" },
  { date: "2021-05-22", href: "https://www.youtube.com/watch?v=WnxTGiUaYhI" },
  { date: "2021-05-22", href: "https://www.thestar.co.uk/news/people/a-threat-to-every-family-in-this-city-sheffield-mums-come-together-to-make-a-stand-against-gang-violence-3246814" },
  { date: "2021-05-22", href: "https://www.examinerlive.co.uk/news/local-news/sheffield-mums-dads-kids-march-20657677" },
  { date: "2021-05-21", href: "https://www.youtube.com/watch?v=J5aBj8Cx4Tc" },
  { date: "2021-05-21", href: "https://www.thestar.co.uk/news/crime/enough-is-enough-sheffield-residents-to-march-through-city-in-stand-against-gangs-3245345" },
  { date: "2021-05-16", href: "https://www.youtube.com/watch?v=45pYw1cgQm0" },
  { date: "2021-05-13", href: "https://www.thestar.co.uk/news/people/help-us-make-our-beautiful-city-safer-for-everyone-3234978" },
  { date: "2021-05-07", href: "https://www.sheffieldwire.co.uk/2021/05/07/charity-calls-on-sheffields-police-and-councillors-to-tackle-youth-violence/" },
  { date: "2021-05-04", href: "https://www.yorkshirepost.co.uk/news/crime/police-in-sheffield-insist-they-can-robustly-respond-to-rising-gang-violence-and-gun-crime-in-city-3222119" },
  { date: "2021-05-02", href: "https://www.youtube.com/watch?v=uSd9YEPL7c4" },
  { date: "2021-04-26", href: "https://www.sheffieldtribune.co.uk/a-culture-of-silence-exists-in-close/" },
  { date: "2021-04-12", href: "https://www.facebook.com/609632969065582/posts/4445221158830068/?d=n" },
  { date: "2021-04-11", href: "https://www.thestar.co.uk/news/crime/sheffield-community-group-calls-for-action-after-bramall-lane-fatal-shooting-3195858" },
  { date: "2021-01-14", href: "https://www.youtube.com/watch?v=ets4fcfOT0k" },
  { date: "2021-01-03", href: "https://www.youtube.com/watch?v=Gb65Ej0vypQ" },
  { date: "2020-11-06", href: "https://www.thestar.co.uk/news/crime/community-group-called-cctv-sheffield-estate-three-years-murder-3036965" },
  { date: "2020-09-30", href: "https://www.examinerlive.co.uk/news/local-news/sheffield-mum-community-leader-speaks-19019841" },
  { date: "2020-09-26", href: "https://www.itv.com/news/calendar/2020-09-25/its-okay-to-be-vulnerable-mental-health-struggles-of-one-mum-during-lockdown" },
  { date: "2020-09-19", href: "https://www.thestar.co.uk/news/crime/we-are-losing-generation-early-intervention-call-troubled-sheffield-neighbourhood-2974829" },
  { date: "2020-08-05", href: "https://www.thestar.co.uk/news/crime/residents-police-and-council-must-join-forces-tackle-gang-culture-behind-multiple-shootings-nether-edge-2934260" },
  { date: "2020-07-24", href: "https://www.thestar.co.uk/news/crime/dog-shot-and-killed-sheffield-street-belonged-suspected-gang-member-2923568" },
  { date: "2020-05-21", href: "https://www.youtube.com/watch?v=5dkJXv4BHEE" },
  { date: "2020-05-13", href: "https://www.thestar.co.uk/news/crime/police-council-and-community-members-set-meet-after-spate-shootings-sheffield-suburbs-2852542" },
  { date: "2020-03-11", href: "https://sharrowcf.org.uk/wp-content/uploads/2020/11/ST-March-2020-pdf.pdf" },
  { date: "2020-03-09", href: "https://www.thestar.co.uk/news/people/sheffield-celebrates-its-inspirational-women-sheffield-award-winners-2020-pictures-2441982" },
  { date: "2020-02-27", href: "https://www.shefnews.co.uk/2020/02/27/mums-united-founder-becomes-the-first-british-asian-finalist-of-sheffield-inspirational-women-award-for-community/" },
  { date: "2020-01-28", href: "https://www.thestar.co.uk/news/crime/walk-peace-response-increase-violence-sheffield-streets-1377069" },
  { date: "2020-01-13", href: "https://youtu.be/41ug6X0Ggkw" },
  { date: "2020-01-13", href: "https://youtu.be/pPHEdrAAzeY" },
  { date: "2020-01-13", href: "https://youtu.be/hYrkFa54ctk" },
  { date: "2020-01-13", href: "https://youtu.be/nrNeMkjbR6E" },
  { date: "2019-11-02", href: "https://www.thestar.co.uk/news/crime/parents-must-take-responsibility-over-crime-sheffield-suburb-825248" },
  { date: "2019-11-01", href: "https://www.thestar.co.uk/news/crime/mums-group-call-cctv-sheffield-suburb-overrun-crime-and-anti-social-behavior-825012" },
  { date: "2019-10-07", href: "https://www.itv.com/news/calendar/2019-10-07/sheffield-mosque-and-mums-group-join-forces-to-tackle-knife-crime" },
  { date: "2019-05-16", href: "https://www.shefnews.co.uk/2019/05/16/sheffield-mums-want-to-raise-awareness-on-anti-social-behaviour-among-youths/" },
  { date: "2019-05-07", href: "https://www.thestar.co.uk/news/people/walk-peace-calls-reduction-crime-sheffield-suburb-38821" },
];

function getMediaUrl(href: string) {
  return new URL(href);
}

function getSourceName(hostname: string) {
  const host = hostname.replace(/^www\./, "");

  if (host.includes("itv.com")) return "ITV";
  if (host.includes("bbc.co.uk")) return "BBC";
  if (host.includes("youtube.com") || host.includes("youtu.be")) {
    return "YouTube";
  }
  if (host.includes("thestar.co.uk")) return "The Star";
  if (host.includes("examinerlive.co.uk")) return "Examiner Live";
  if (host.includes("theguardian.com")) return "The Guardian";
  if (host.includes("sheffieldtribune.co.uk")) return "The Sheffield Tribune";
  if (host.includes("researchforaction.uk")) return "Research for Action";
  if (host.includes("sheffood.org.uk")) return "ShefFood";
  if (host.includes("facebook.com")) return "Facebook";
  if (host.includes("raceequalityfoundation.org.uk")) {
    return "Race Equality Foundation";
  }
  if (host.includes("twitter.com")) return "X";
  if (host.includes("morningstaronline.co.uk")) return "Morning Star";
  if (host.includes("sheffieldwire.co.uk")) return "Sheffield Wire";
  if (host.includes("yorkshirepost.co.uk")) return "The Yorkshire Post";
  if (host.includes("sharrowcf.org.uk")) return "Sharrow Community Forum";
  if (host.includes("shefnews.co.uk")) return "ShefNews";
  if (host.includes("flowpaper.com")) return "South Yorkshire Community Foundation";

  return host
    .split(".")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function titleCase(text: string) {
  return text
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      if (["bbc", "itv", "cctv", "gbnews"].includes(word.toLowerCase())) {
        return word.toUpperCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function formatMonthYear(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function getMediaTitle(source: MediaLinkSource) {
  const url = getMediaUrl(source.href);
  const sourceName = getSourceName(url.hostname);
  const lastPathPart = url.pathname.split("/").filter(Boolean).at(-1) ?? "";

  if (url.hostname.includes("youtube.com") || url.hostname.includes("youtu.be")) {
    return `Mums United community video - ${formatMonthYear(source.date)}`;
  }

  if (url.hostname.includes("facebook.com")) {
    return `Mums United social media update - ${formatMonthYear(source.date)}`;
  }

  if (url.hostname.includes("twitter.com")) {
    return "GB News interview";
  }

  if (url.hostname.includes("flowpaper.com")) {
    return "South Yorkshire Community Foundation Vital Signs report";
  }

  if (lastPathPart.includes("democratising-governance-report")) {
    return "Democratising Governance report";
  }

  if (lastPathPart.includes("not-by-choice")) {
    return "Not By Choice report";
  }

  if (!lastPathPart || /^m?\d/.test(lastPathPart)) {
    return `${sourceName} coverage - ${formatMonthYear(source.date)}`;
  }

  const readableTitle = lastPathPart
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/-\d+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return readableTitle ? titleCase(readableTitle) : `${sourceName} coverage`;
}

function getMediaType(href: string): MediaType {
  const url = getMediaUrl(href);
  const host = url.hostname;

  if (host.includes("itv.com") || url.pathname.includes("iplayer")) {
    return "TV";
  }

  if (
    host.includes("youtube.com") ||
    host.includes("youtu.be") ||
    host.includes("facebook.com") ||
    host.includes("twitter.com")
  ) {
    return "Community";
  }

  return "Press";
}

function getMediaDescription(type: MediaType, href: string) {
  const sourceName = getSourceName(getMediaUrl(href).hostname);

  if (type === "TV") {
    return `${sourceName} broadcast coverage from Mums United's media archive.`;
  }

  if (type === "Community") {
    return `${sourceName} media from Mums United's archive, sharing community activity, campaigns or updates.`;
  }

  return `${sourceName} coverage from Mums United's media archive.`;
}

function getMediaId(source: MediaLinkSource, index: number) {
  const url = getMediaUrl(source.href);
  const host = url.hostname.replace(/^www\./, "").split(".")[0];
  const pathPart = url.pathname.split("/").filter(Boolean).at(-1) ?? host;
  const slug = `${host}-${pathPart}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);

  return `${source.date}-${slug}-${index + 1}`;
}

const mediaItems: MediaItem[] = mediaLinkSources.map((source, index) => {
  const type = getMediaType(source.href);

  return {
    id: getMediaId(source, index),
    title: source.title ?? getMediaTitle(source),
    type,
    description: getMediaDescription(type, source.href),
    date: source.date,
    href: source.href,
    featured: index < 3,
    image:
      index === 0
        ? "/media/featured-media-1.jpg"
        : index === 1
          ? "/media/featured-media-2.jpg"
          : index === 2
            ? "/media/featured-media-3.jpg"
            : "",
    imageAlt: `${source.title ?? getMediaTitle(source)} media coverage`,
  };
});

const recognitionItems: RecognitionItem[] = [
  {
    title: "Points of Light Award",
    description:
      "Recognition for Mums United's work supporting young people, mothers and vulnerable families in Sheffield.",
    date: "2021",
    href: "https://www.pointsoflight.gov.uk/mums-united/",
  },
  {
    title: "Inspirational Women of Sheffield",
    description:
      "Celebrating leadership, community action and the contribution of women making a difference locally.",
    date: "2022",
  },
  {
    title: "National Diversity Awards",
    description:
      "Recognition connected to inclusive community work and support for families from diverse backgrounds.",
    date: "Recognition",
  },
  {
    title: "Community Recognition",
    description:
      "Local recognition for practical support, youth violence prevention and community-led campaigning.",
    date: "Ongoing",
  },
];

const communityStories = [
  {
    quote:
      "Mums United helped us feel listened to when we needed support most.",
    attribution: "Parent, Sheffield",
  },
  {
    quote:
      "The activities gave young people somewhere positive to go and people they could trust.",
    attribution: "Community Member",
  },
  {
    quote:
      "You can feel the care and commitment Mums United brings to the community.",
    attribution: "Volunteer Parent",
  },
];

const archivePageSize = 5;

const sectionTagClassName =
  "inline-flex w-fit items-center rounded bg-[rgba(163,182,180,0.3)] px-3 py-2 text-[12px] font-normal leading-4 text-[#17171c]";

const heroHeadingClassName =
  "text-[36px] font-semibold leading-[44px] tracking-[-0.04em] md:text-[52px] md:leading-[62px] lg:text-[76px] lg:leading-[80px]";

const sectionHeadingClassName =
  "text-[32px] font-semibold leading-[38px] tracking-[-0.02em] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[53px]";

const statusBadgeClassName =
  "inline-flex shrink-0 items-center justify-center rounded-full bg-[#17171c] px-[10px] py-2 text-[12px] font-semibold leading-3 text-white";

const primaryDarkButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#17171c] px-5 py-3 text-base font-semibold leading-[22px] text-white transition-colors hover:bg-[#2a2a30] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

const outlineDarkButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#17171c] bg-white px-5 py-3 text-base font-semibold leading-[22px] text-[#17171c] transition-colors hover:bg-[#17171c]/5 focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

const exploreLinks = [
  ["Featured Media", "#featured-media"],
  ["Media Archive", "#media-archive"],
  ["Podcast", "#podcast"],
  ["Recognition", "#recognition"],
  ["Community Stories", "#community-stories"],
] as const;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function getArchiveActionLabel(type: MediaType) {
  if (type === "Podcast" || type === "Radio") {
    return "Listen";
  }

  if (type === "Press") {
    return "Read";
  }

  return "View";
}

function groupMediaByYearAndMonth(items: MediaItem[]) {
  return items.reduce<Record<string, Record<string, MediaItem[]>>>(
    (groups, item) => {
      const [year] = item.date.split("-");
      const monthLabel = new Intl.DateTimeFormat("en-GB", {
        month: "long",
      }).format(new Date(`${item.date}T00:00:00`));

      groups[year] ??= {};
      groups[year][monthLabel] ??= [];
      groups[year][monthLabel].push(item);

      return groups;
    },
    {},
  );
}

function FeaturedMediaCard({ item }: { item: MediaItem }) {
  return (
    <article className="card-interactive flex flex-col overflow-hidden rounded-xl bg-white">
      <div className="image-interactive relative h-[222px] w-full overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.imageAlt ?? ""}
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#efeadf] px-6 text-center text-sm font-semibold text-[#6F6864]">
            Media image coming soon
          </div>
        )}
      </div>

      <div className="flex flex-col gap-10 px-6 pb-6 pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className={statusBadgeClassName}>{item.type}</span>
          <span className="text-[12px] font-semibold leading-3 text-[#17171c]">
            {formatDate(item.date)}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-[18px]">
          <h3 className="text-2xl font-semibold leading-[26px] tracking-[-0.02em]">
            {item.title}
          </h3>
          <p className="text-base font-normal leading-[22px]">
            {item.description}
          </p>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${primaryDarkButtonClassName} mt-2`}
          >
            View Coverage
          </a>
        </div>
      </div>
    </article>
  );
}

function ArchiveMediaItem({ item }: { item: MediaItem }) {
  return (
    <article className="card-interactive overflow-hidden rounded-xl bg-white">
      <div className="flex flex-col gap-10 px-6 py-[34px] lg:flex-row lg:items-start lg:justify-between lg:gap-[70px]">
        <div className="flex min-w-0 flex-1 flex-col gap-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className={statusBadgeClassName}>{item.type}</span>
            <span className="text-[12px] font-semibold leading-3 text-[#17171c]">
              {formatDate(item.date)}
            </span>
          </div>
          <div className="flex flex-col gap-[18px]">
            <h3 className="text-2xl font-semibold leading-[26px] tracking-[-0.02em]">
              {item.title}
            </h3>
            <p className="text-base font-normal leading-[22px]">
              {item.description}
            </p>
          </div>
        </div>

        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${primaryDarkButtonClassName} shrink-0 self-start px-5 py-2.5`}
        >
          {getArchiveActionLabel(item.type)}
        </a>
      </div>
    </article>
  );
}

export default function MediaPage() {
  const [activeYear, setActiveYear] = useState("All");
  const [visibleArchiveCount, setVisibleArchiveCount] =
    useState(archivePageSize);
  const featuredMedia = mediaItems.filter((item) => item.featured).slice(0, 3);
  const archiveMedia = mediaItems
    .filter((item) => !item.featured)
    .sort((a, b) => b.date.localeCompare(a.date));
  const archiveYears = Array.from(
    new Set(archiveMedia.map((item) => item.date.split("-")[0])),
  ).sort((a, b) => b.localeCompare(a));
  const yearFilters = ["All", ...archiveYears];
  const filteredArchiveMedia =
    activeYear === "All"
      ? archiveMedia
      : archiveMedia.filter((item) => item.date.startsWith(`${activeYear}-`));
  const visibleArchiveMedia = filteredArchiveMedia.slice(
    0,
    visibleArchiveCount,
  );
  const archiveGroups = groupMediaByYearAndMonth(visibleArchiveMedia);
  const visibleArchiveYears =
    activeYear === "All"
      ? archiveYears.filter((year) => archiveGroups[year])
      : archiveYears.filter((year) => year === activeYear);
  const hasMoreArchiveItems =
    visibleArchiveCount < filteredArchiveMedia.length;

  return (
    <>
      <SiteHeader currentPath="/media" />

      <main className="bg-white pb-[60px] text-[#17171c] md:pb-20">
        <div className="mx-auto w-full max-w-[1330px] px-6 lg:px-[60px]">
          {/* Hero + Featured Media */}
          <section
            id="featured-media"
            aria-labelledby="featured-media-heading"
            className="flex w-full flex-col"
          >
            <div className="flex flex-col items-center px-0 py-16 text-center md:px-8 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <span className={sectionTagClassName}>Media &amp; Stories</span>

                <h1 className={heroHeadingClassName}>
                  Coverage, conversations and community voices from Mums United.
                </h1>

                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Explore media appearances, podcast episodes and stories that
                  show how Mums United supports families, young people and
                  communities across Sheffield.
                </p>

                <nav
                  aria-label="Explore this page"
                  className="flex flex-wrap items-center justify-center gap-3"
                >
                  {exploreLinks.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="btn-interactive rounded-full border border-[#17171c] px-[10px] py-2 text-[12px] font-semibold leading-3 text-[#17171c] transition-colors hover:bg-[#17171c]/5 focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="scroll-reveal flex flex-col items-center px-0 pb-10 text-center md:px-8 lg:px-[60px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <span className={sectionTagClassName}>Featured Media</span>
                <h2
                  id="featured-media-heading"
                  className={sectionHeadingClassName}
                >
                  Recent coverage and community moments.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredMedia.map((item) => (
                <FeaturedMediaCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>

        {/* Media Archive */}
        <section
          id="media-archive"
          aria-labelledby="media-archive-heading"
          className="scroll-mt-28 mt-[60px] bg-[#efeadf] lg:mt-20"
        >
          <div className="mx-auto w-full max-w-[1330px] px-6 pt-[60px] lg:px-[60px] lg:pt-20">
            <div className="scroll-reveal flex flex-col items-center pb-10 text-center">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <span className={sectionTagClassName}>
                  Media Timeline / Archive
                </span>
                <h2
                  id="media-archive-heading"
                  className={sectionHeadingClassName}
                >
                  Stories, interviews and features.
                </h2>

                <div
                  aria-label="Filter media archive by year"
                  className="flex flex-wrap items-center justify-center gap-3"
                  role="group"
                >
                  {yearFilters.map((year) => {
                    const isActive = activeYear === year;
                    return (
                      <button
                        key={year}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => {
                          setActiveYear(year);
                          setVisibleArchiveCount(archivePageSize);
                        }}
                        className={`btn-interactive rounded-full px-[10px] py-2 text-[12px] font-semibold leading-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2 ${
                          isActive
                            ? "bg-[#17171c] text-white"
                            : "border border-[#17171c] text-[#17171c] hover:bg-[#17171c]/5"
                        }`}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {visibleArchiveYears.map((year) => (
                <div key={year} aria-labelledby={`media-year-${year}`}>
                  <h3
                    id={`media-year-${year}`}
                    className="pb-5 text-2xl font-semibold leading-[26px] tracking-[-0.02em]"
                  >
                    {year}
                  </h3>

                  <div className="flex flex-col gap-4">
                    {Object.entries(archiveGroups[year] ?? {}).map(
                      ([month, items]) => (
                        <div key={`${year}-${month}`}>
                          <p className="pb-5 text-base font-normal leading-4">
                            {month}
                          </p>
                          <div className="flex flex-col gap-4">
                            {items.map((item) => (
                              <ArchiveMediaItem key={item.id} item={item} />
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            {hasMoreArchiveItems ? (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleArchiveCount((count) => count + archivePageSize)
                  }
                  className={outlineDarkButtonClassName}
                >
                  Load More Media
                </button>
              </div>
            ) : null}
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1330px] px-6 lg:px-[60px]">
          {/* Podcast */}
          <section
            id="podcast"
            aria-labelledby="podcast-heading"
            className="scroll-reveal scroll-mt-28 relative mt-[60px] flex min-h-[400px] items-center justify-center overflow-hidden rounded-xl md:h-[500px] lg:mt-20"
          >
            <div className="absolute inset-0 rounded-xl bg-black" aria-hidden />
            <Image
              src="/media/media-podcast-figma.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
            <div className="home-cta-content-padding relative z-10 flex w-full justify-center md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8 bg-white px-6 py-[60px] text-center md:px-12">
                <h2
                  id="podcast-heading"
                  className={sectionHeadingClassName}
                >
                  Listen to our podcast
                </h2>
                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Hear conversations from the community, families and people
                  working to create positive change.
                </p>
                <a href="#" className={primaryDarkButtonClassName}>
                  Listen to Podcast
                </a>
              </div>
            </div>
          </section>

          {/* Recognition */}
          <section
            id="recognition"
            aria-labelledby="recognition-heading"
            className="scroll-reveal scroll-mt-28 mt-[60px] flex w-full flex-col lg:mt-20"
          >
            <div className="flex flex-col items-center px-0 pb-10 text-center md:px-8 lg:px-[60px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <span className={sectionTagClassName}>Recognition</span>
                <h2
                  id="recognition-heading"
                  className={sectionHeadingClassName}
                >
                  Achievements &amp; Recognition
                </h2>
                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Mums United has been recognised for its work supporting
                  families, young people and communities across Sheffield.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {recognitionItems.map((item) => (
                <article
                  key={item.title}
                  className="card-interactive flex flex-col gap-10 rounded-xl bg-[#efeadf] px-6 py-[34px]"
                >
                  {item.date ? (
                    <p className="text-[12px] font-semibold leading-3 text-[#17171c]">
                      {item.date}
                    </p>
                  ) : null}
                  <div className="flex flex-col gap-[18px]">
                    <h3 className="text-2xl font-semibold leading-[26px] tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="text-base font-normal leading-[22px]">
                      {item.description}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-interactive w-fit text-base font-semibold leading-[22px] text-[#17171c] underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2"
                      >
                        View recognition
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Community Stories */}
          <section
            id="community-stories"
            aria-labelledby="community-stories-heading"
            className="scroll-reveal scroll-mt-28 mt-[60px] flex w-full flex-col lg:mt-20"
          >
            <div className="flex flex-col items-center px-0 pb-10 text-center md:px-8 lg:px-[60px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <span className={sectionTagClassName}>Community Stories</span>
                <h2
                  id="community-stories-heading"
                  className={sectionHeadingClassName}
                >
                  Voices from the Community
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {communityStories.map((story) => (
                <blockquote
                  key={story.quote}
                  className="card-interactive flex flex-col gap-10 rounded-xl bg-[#efeadf] px-6 py-[34px]"
                >
                  <span
                    aria-hidden
                    className="text-[52px] font-semibold leading-[52px] tracking-[-0.04em] text-[#17171c]"
                  >
                    &ldquo;
                  </span>
                  <div className="flex flex-col gap-[18px]">
                    <p className="text-2xl font-semibold leading-[26px] tracking-[-0.02em]">
                      {story.quote}
                    </p>
                    <footer className="text-base font-normal leading-[22px] text-[#17171c]">
                      {story.attribution}
                    </footer>
                  </div>
                </blockquote>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section
            aria-labelledby="media-cta-heading"
            className="scroll-reveal relative mt-[60px] flex min-h-[400px] items-center justify-center overflow-hidden rounded-xl md:h-[500px] lg:mt-20"
          >
            <div className="absolute inset-0 rounded-xl bg-black" aria-hidden />
            <Image
              src="/media/media-cta-figma.jpg"
              alt="Hands stacked together in a gesture of community support"
              fill
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
            <div className="home-cta-content-padding relative z-10 flex w-full flex-col items-center text-center text-white md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <h2
                  id="media-cta-heading"
                  className={sectionHeadingClassName}
                >
                  Want to speak to Mums United?
                </h2>
                <p className="max-w-[910px] text-base font-semibold leading-[22px] md:px-8 lg:px-[150px]">
                  Whether you are looking for practical help, community support
                  or a safe place to talk, Mums United is here to listen.
                </p>
                <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
                  <a
                    href="/contact"
                    className="btn-interactive image-cta-btn inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-3 text-sm font-semibold leading-[22px] tracking-[-0.04em] text-[#17171c] transition-colors hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-5 md:py-3.5 md:text-base"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/donate"
                    className="btn-interactive image-cta-btn inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white px-4 py-3 text-sm font-semibold leading-[22px] tracking-[-0.04em] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-5 md:py-3.5 md:text-base"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
