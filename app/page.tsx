import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  const overlayOpacity = 0.5;

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FBF6F3] text-[#1F1F1D]">
      <section className="relative overflow-hidden px-6 py-20 md:px-12 lg:min-h-[650px] lg:px-24 lg:py-0">
        <div className="mx-auto grid max-w-6xl gap-12 lg:min-h-[650px] lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#436169]">
              Sheffield charity supporting mothers, young people and families
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Helping families feel safer, supported and heard.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6F6864]">
              Mums United supports vulnerable young people, mothers and local
              communities affected by youth violence, exploitation and hardship.
              Through mentoring, workshops, safe spaces and practical support,
              we help families build brighter futures.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/donate"
                className="rounded-full bg-[#436169] px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] active:scale-[0.98]"
              >
                Donate now
              </a>

              <a
                href="/contact"
                className="rounded-full border border-[#DDD4CE] px-6 py-3 text-center font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-white active:scale-[0.98]"
              >
                Get support
              </a>
            </div>
          </div>

          <div className="relative -mx-6 aspect-[4/3] overflow-hidden md:-mx-12 lg:hidden">
            <Image
              src="/hero-test.jpg"
              alt="Mums United supporting families and communities"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-[48vw] lg:block">
          <Image
            src="/hero-test.jpg"
            alt="Mums United supporting families and communities"
            fill
            className="object-cover object-center"
            priority
            sizes="48vw"
          />
        </div>
      </section>

      <section className="scroll-reveal border-y border-[#DDD4CE] bg-white px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
              Our Impact
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Creating safer, stronger communities together.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
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
            ].map(([number, title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-4xl font-bold tracking-tight text-[#436169] md:text-5xl">
                  {number}
                </p>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6F6864]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inverted section variant for visual rhythm */}
      <section
        aria-labelledby="featured-programmes-heading"
        className="scroll-reveal bg-[#446169] px-6 py-20 md:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#E2B39F]">
              Featured Programmes
            </p>
            <h2
              id="featured-programmes-heading"
              className="mt-3 text-3xl font-bold text-white md:text-4xl"
            >
              Practical support for every stage of family life.
            </h2>
            <p className="mt-4 text-[#F6F1EE]">
              Our programmes create safe, trusted spaces where families and
              young people can find guidance, connection and encouragement.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                  Featured Current Programme
                </p>
                <h3 className="mt-4 text-3xl font-bold">Project Serenity</h3>
                <p className="mt-4 text-[#6F6864]">
                  Free after-school boxing sessions and positive activities
                  supporting young people with confidence, discipline and
                  wellbeing.
                </p>
                <Link
                  href="/programmes#current-programme"
                  className="mt-6 inline-block rounded-full bg-[#436169] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] active:scale-[0.98]"
                >
                  Learn More
                </Link>
              </div>
              <div className="relative h-[220px] w-full md:h-[260px]">
                <Image
                  src="/project-serenity-3.jpg"
                  alt="Young people taking part in a positive community programme"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
            </article>

            <div className="grid gap-6">
              {[
                [
                  "MUSYC Holiday Club",
                  "Safe holiday activities that help young people learn, connect and enjoy positive experiences.",
                ],
                [
                  "Community Outreach Events",
                  "Local outreach that helps families find support, connection and trusted community spaces.",
                ],
              ].map(([title, text]) => (
                <article
                  key={title}
                  className="rounded-3xl border border-[#DDD4CE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-[#6F6864]">{text}</p>
                  <Link
                    href="/programmes"
                    aria-label={`Learn more about ${title}`}
                    className="mt-5 inline-block rounded-full bg-[#436169] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] active:scale-[0.98]"
                  >
                    Learn More
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/programmes"
              className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-[#446169] transition-all duration-300 hover:scale-[1.02] hover:bg-[#FBF6F3] active:scale-[0.98]"
            >
              View All Programmes
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="featured-in-heading"
        className="scroll-reveal px-6 py-20 md:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
              Trusted Across Sheffield
            </p>
            <h2
              id="featured-in-heading"
              className="mt-3 text-3xl font-bold md:text-4xl"
            >
              Recognised for supporting families, young people and communities.
            </h2>
            <p className="mt-4 text-[#6F6864]">
              Mums United has been featured across local media, community
              initiatives and public events, helping raise awareness, share
              stories and champion positive change.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "/radio-icon.png",
                "Radio Interviews",
                "Conversations highlighting family support, youth development and community impact.",
              ],
              [
                "/tv-1.png",
                "TV & Media Coverage",
                "Features showcasing programmes, events and community achievements.",
              ],
              [
                "/trophy-icon.png",
                "Community Recognition",
                "Awards, nominations and recognition for supporting local families.",
              ],
              [
                "/podcast-1.png",
                "Podcast & Stories",
                "Real conversations, experiences and voices from the community.",
              ],
            ].map(([icon, title, text]) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-3xl border border-[#DDD4CE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {icon.startsWith("/") ? (
                  <div className="flex size-12 items-center justify-center">
                    <Image
                      src={icon}
                      alt=""
                      width={48}
                      height={48}
                      className="size-10 object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#E2B39F]/35 text-sm font-bold text-[#436169]">
                    {icon}
                  </div>
                )}
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#6F6864]">
                  {text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/media"
              className="inline-block rounded-full bg-[#436169] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] active:scale-[0.98]"
            >
              View Media & Stories
            </Link>
            <p className="mt-4 text-sm text-[#6F6864]">
              Explore media appearances, podcast episodes and community stories.
            </p>
          </div>
        </div>
      </section>

      <section className="scroll-reveal relative flex min-h-[400px] items-center justify-center overflow-hidden px-6 py-20 text-white md:min-h-[550px] md:px-12 lg:px-24">
        <Image
          src="/Donations-2.jpg"
          alt="Community support"
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
          <p className="text-sm font-semibold uppercase tracking-wide text-[#E2B39F]">
            SUPPORT MUMS UNITED
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Help a family know they are not facing this alone.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Your donation helps Mums United continue supporting mothers, young
            people and families across Sheffield through practical help, trusted
            relationships and community support.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="rounded-full bg-[#436169] px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98]"
            >
              Donate Now
            </Link>
            <Link
              href="/impact"
              className="rounded-full border border-white px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98]"
            >
              Learn About Our Impact
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}