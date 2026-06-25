"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageCtaSection } from "../components/ImageCtaSection";
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
    imageAlt: "Media coverage",
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
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DDD4CE] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="relative aspect-video bg-[#DDD4CE]"
        aria-label={item.image ? undefined : item.imageAlt}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.imageAlt ?? ""}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-[#6F6864]">
            Media image coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#E2B39F]/35 px-3 py-1 text-xs font-semibold text-[#1F1F1D]">
            {item.type}
          </span>
          <p className="text-sm text-[#6F6864]">{formatDate(item.date)}</p>
        </div>
        <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
        <p className="mt-4 flex-1 leading-7 text-[#6F6864]">
          {item.description}
        </p>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-[#436169] px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
        >
          View Coverage
        </a>
      </div>
    </article>
  );
}

function ArchiveMediaItem({ item }: { item: MediaItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-3xl border border-[#DDD4CE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#436169] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#E2B39F]/35 px-3 py-1 text-xs font-semibold text-[#1F1F1D]">
              {item.type}
            </span>
            <p className="text-sm text-[#6F6864]">{formatDate(item.date)}</p>
          </div>
          <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
          <p className="mt-2 leading-7 text-[#6F6864]">{item.description}</p>
        </div>

        <span className="shrink-0 rounded-full bg-[#436169] px-5 py-3 text-center text-sm font-semibold text-white">
          {getArchiveActionLabel(item.type)}
        </span>
      </div>
    </a>
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

      <main className="min-h-screen bg-[#FBF6F3] text-[#1F1F1D]">
        <section className="scroll-reveal px-6 pt-[60px] pb-16 md:px-12 md:pt-20 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Media & Stories
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
                Coverage, conversations and community voices from Mums United.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#6F6864]">
                Explore media appearances, podcast episodes and stories that
                show how Mums United supports families, young people and
                communities across Sheffield.
              </p>
            </div>

            <nav
              aria-label="Explore this page"
              className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="text-sm font-semibold text-[#1F1F1D]">
                Explore:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  ["Featured Media", "#featured-media"],
                  ["Media Archive", "#media-archive"],
                  ["Podcast", "#podcast"],
                  ["Recognition", "#recognition"],
                  ["Community Stories", "#community-stories"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="inline-flex rounded-full border border-[#DDD4CE] bg-white px-3 py-1.5 text-sm font-semibold text-[#1F1F1D] transition-colors duration-300 hover:border-[#436169] hover:bg-[#FBF6F3] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </section>

        <section
          id="featured-media"
          className="scroll-reveal scroll-mt-28 px-6 pt-[60px] pb-[60px] md:px-12 md:pb-20 md:pt-16 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Featured Media
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Recent coverage and community moments.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featuredMedia.map((item) => (
                <FeaturedMediaCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="media-archive"
          className="scroll-reveal scroll-mt-28 border-y border-[#DDD4CE] bg-white px-6 section-padding-y md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Media Timeline / Archive
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Stories, interviews and features.
              </h2>
            </div>

            <div
              aria-label="Filter media archive by year"
              className="mt-8 flex flex-wrap gap-3"
            >
              {yearFilters.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => {
                    setActiveYear(year);
                    setVisibleArchiveCount(archivePageSize);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98] ${
                    activeYear === year
                      ? "border-[#436169] bg-[#436169] text-white"
                      : "border-[#DDD4CE] bg-white text-[#1F1F1D] hover:bg-[#FBF6F3]"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            <div className="mt-10 space-y-12">
              {visibleArchiveYears.map((year) => (
                <section key={year} aria-labelledby={`media-year-${year}`}>
                  <h3 id={`media-year-${year}`} className="text-2xl font-bold">
                    {year}
                  </h3>

                  <div className="mt-6 space-y-8">
                    {Object.entries(archiveGroups[year] ?? {}).map(([month, items]) => (
                      <div key={`${year}-${month}`}>
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                          {month}
                        </p>
                        <div className="mt-3 space-y-4">
                          {items.map((item) => (
                            <ArchiveMediaItem key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {hasMoreArchiveItems ? (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleArchiveCount((count) => count + archivePageSize)
                  }
                  className="rounded-full bg-[#436169] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                >
                  Load more media
                </button>
              </div>
            ) : null}
          </div>
        </section>

        <section
          id="podcast"
          className="scroll-reveal scroll-mt-28 relative flex min-h-[400px] items-center overflow-hidden px-6 py-[60px] md:min-h-[550px] md:px-12 md:py-20 lg:px-24"
        >
          <Image
            src="/podcast-1.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 mx-auto w-full max-w-4xl rounded-3xl bg-white p-8 text-center shadow-lg md:p-12">
            <h2 className="text-3xl font-bold md:text-5xl">
              Listen to our podcast
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6F6864]">
              Hear conversations from the community, families and people working
              to create positive change.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-[#436169] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
            >
              Listen to Podcast
            </a>
          </div>
        </section>

        <section
          id="recognition"
          className="scroll-reveal scroll-mt-28 px-6 pt-[60px] pb-[60px] md:px-12 md:pt-28 md:pb-20 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Recognition
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Achievements & Recognition
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6F6864]">
                Mums United has been recognised for its work supporting
                families, young people and communities across Sheffield.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {recognitionItems.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-3xl border border-[#DDD4CE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {item.date ? (
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                      {item.date}
                    </p>
                  ) : null}
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-[#6F6864]">
                    {item.description}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block text-sm font-semibold text-[#436169] transition-all duration-300 hover:scale-[1.02] hover:text-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                    >
                      View recognition
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="community-stories"
          className="scroll-reveal scroll-mt-28 px-6 pb-[60px] md:px-12 md:pb-20 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Community Stories
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Voices from the community.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {communityStories.map((story) => (
                <blockquote
                  key={story.quote}
                  className="flex h-full flex-col rounded-3xl border border-[#DDD4CE] bg-[#F5EFEA] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span
                    aria-hidden="true"
                    className="block text-5xl leading-none text-[#1F1F1D]"
                  >
                    &ldquo;
                  </span>
                  <p className="-mt-1 flex-1 text-xl font-medium leading-8 text-[#1F1F1D]">
                    {story.quote}
                  </p>
                  <footer className="mt-6 shrink-0 text-sm font-medium text-[#6F6864]">
                    {story.attribution}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <ImageCtaSection
          heading="Want to speak to Mums United?"
          body="Whether you are looking for support, would like to discuss community initiatives, or want to learn more about our work, we'd love to hear from you."
          buttons={[
            { label: "Contact Us", href: "/contact", variant: "primary" },
            { label: "Donate", href: "/donate", variant: "secondary" },
          ]}
        />
      </main>
    </>
  );
}
