import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Us | Mums United",
  description:
    "Get in touch with Mums United for support, volunteering, partnerships or general enquiries in Sheffield.",
};

const mapEmbedSrc =
  "https://maps.google.com/maps?q=Sharrow+Community+Forum,+South+View+Road,+Sheffield,+S7+1DB&hl=en&z=15&output=embed";

const sectionTagClassName =
  "inline-flex w-fit rounded bg-[rgba(163,182,180,0.3)] px-3 py-2 text-[12px] font-normal leading-4 text-[#17171c]";

const heroHeadingClassName =
  "text-[36px] font-semibold leading-[44px] tracking-[-0.04em] md:text-[52px] md:leading-[62px] lg:text-[76px] lg:leading-[80px]";

const sectionHeadingClassName =
  "text-[32px] font-semibold leading-[38px] tracking-[-0.02em] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[53px]";

const primaryDarkButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#17171c] px-5 py-3.5 text-base font-semibold leading-[22px] text-white transition-colors hover:bg-[#2a2a30] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

const outlineDarkButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#17171c] px-5 py-3.5 text-base font-semibold leading-[22px] text-[#17171c] transition-colors hover:bg-[#17171c]/5 focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

const helpCardButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-white px-5 py-3 text-base font-semibold leading-[22px] text-[#17171c] transition-colors hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

const iconStrokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function AddressIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 text-[#17171c]">
      <path {...iconStrokeProps} d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle {...iconStrokeProps} cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 text-[#17171c]">
      <path
        {...iconStrokeProps}
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 text-[#17171c]">
      <rect {...iconStrokeProps} x="3" y="5" width="18" height="14" rx="2" />
      <path {...iconStrokeProps} d="m3 7 9 6 9-6" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 text-[#17171c]">
      <path {...iconStrokeProps} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path {...iconStrokeProps} d="m9 12 2 2 4-4" />
    </svg>
  );
}

function VolunteerIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 text-[#17171c]">
      <path {...iconStrokeProps} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle {...iconStrokeProps} cx="9" cy="7" r="4" />
      <path {...iconStrokeProps} d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path {...iconStrokeProps} d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function PartnershipIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 text-[#17171c]">
      <path
        {...iconStrokeProps}
        d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4M7 11H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2m0-4h10m0 0h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2m-5 0v4"
      />
    </svg>
  );
}

function ContactInfoIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-white">
      {children}
    </span>
  );
}

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

const supportOptions = [
  {
    title: "Need Support?",
    description:
      "Contact our team and we will help connect you to the right service.",
    cta: "Get Support",
    href: "/support-services",
    icon: <SupportIcon />,
  },
  {
    title: "Volunteer With Us",
    description:
      "Find out how you can support local families and young people.",
    cta: "Volunteer",
    href: "#contact-form",
    icon: <VolunteerIcon />,
  },
  {
    title: "Partnership Enquiries",
    description: "Work with us to strengthen communities across Sheffield.",
    cta: "Get In Touch",
    href: "#contact-form",
    icon: <PartnershipIcon />,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <SiteHeader currentPath="/contact" />

      <main className="bg-white pb-[60px] text-[#17171c] md:pb-20">
        <div className="mx-auto flex w-full max-w-[1330px] flex-col gap-[60px] px-6 md:gap-20 lg:px-[60px]">
          {/* Hero */}
          <section className="flex w-full flex-col">
            <div className="flex flex-col items-center px-0 pt-16 text-center md:px-8 md:pt-20 lg:px-[60px] lg:pt-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <p className={sectionTagClassName}>Contact Us</p>

                <h1 className={heroHeadingClassName}>
                  We&apos;re here to listen and help.
                </h1>

                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Mums United provides trusted support, safe spaces and
                  practical help for mothers, young people and families across
                  Sheffield.
                </p>

                <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-7">
                  <Link href="#contact-form" className={primaryDarkButtonClassName}>
                    Get Support
                  </Link>
                  <Link href="/donate" className={outlineDarkButtonClassName}>
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Get In Touch */}
          <section
            id="contact"
            aria-labelledby="contact-section-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <SectionIntro
              tag="Get In Touch"
              heading="Send us a message or reach out directly."
              headingId="contact-section-heading"
              description="Our team will respond as soon as we can. If you need urgent support, please call us using the number below."
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <aside className="rounded-xl bg-[#e3e9e9] p-8">
                <h3 className="text-xl font-semibold leading-[22px] tracking-[-0.02em]">
                  Contact Information
                </h3>
                <ul className="mt-8 flex flex-col gap-8">
                  <li className="flex gap-4">
                    <ContactInfoIcon>
                      <AddressIcon />
                    </ContactInfoIcon>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium leading-5 text-[#17171c]">
                        Address
                      </p>
                      <address className="not-italic text-sm font-normal leading-5 text-[#17171c]">
                        Sharrow Community Forum
                        <br />
                        South View Road
                        <br />
                        Sheffield
                        <br />
                        S7 1DB
                      </address>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <ContactInfoIcon>
                      <PhoneIcon />
                    </ContactInfoIcon>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium leading-5 text-[#17171c]">
                        Phone
                      </p>
                      <a
                        href="tel:+447445911671"
                        className="text-sm font-normal leading-5 text-[#17171c] transition-colors hover:text-[#17171c]/70 focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2"
                      >
                        07445 911671
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <ContactInfoIcon>
                      <EmailIcon />
                    </ContactInfoIcon>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium leading-5 text-[#17171c]">
                        Email
                      </p>
                      <a
                        href="mailto:mumsunitedsheffield@gmail.com"
                        className="break-all text-sm font-normal leading-5 text-[#17171c] transition-colors hover:text-[#17171c]/70 focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2"
                      >
                        mumsunitedsheffield@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </aside>

              <div className="rounded-xl border border-[#c4c4c4] p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold leading-[22px] tracking-[-0.02em]">
                    Send a Message
                  </h3>
                  <p className="text-sm font-normal leading-5 tracking-[-0.04em]">
                    Complete the form below and we will get back to you as soon as
                    we can.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          {/* Visit Us / Map */}
          <section
            aria-labelledby="find-us-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <SectionIntro
              tag="Visit Us"
              heading="Find Us"
              headingId="find-us-heading"
              description="Visit us at our community hub in Sheffield."
            />

            <div className="relative h-[320px] w-full overflow-hidden rounded-xl md:h-[420px] lg:h-[520px]">
              <iframe
                title="Map showing Sharrow Community Forum, South View Road, Sheffield S7 1DB"
                src={mapEmbedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>

          {/* How Can We Help? */}
          <section
            aria-labelledby="support-options-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <SectionIntro
              tag="How Can We Help?"
              heading="Choose the option that fits you best."
              headingId="support-options-heading"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {supportOptions.map((option) => (
                <article
                  key={option.title}
                  className="card-interactive flex h-full flex-col rounded-xl bg-[#edeae1] px-6 py-10"
                >
                  <div
                    className="flex size-12 shrink-0 items-center justify-center opacity-80 mix-blend-multiply"
                    aria-hidden
                  >
                    {option.icon}
                  </div>
                  <div className="mt-20 flex min-h-0 flex-1 flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-2xl font-semibold leading-[22px] tracking-[-0.02em]">
                        {option.title}
                      </h3>
                      <p className="text-base font-normal leading-[22px]">
                        {option.description}
                      </p>
                    </div>
                    <Link href={option.href} className={`${helpCardButtonClassName} mt-auto`}>
                      {option.cta}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section
            aria-labelledby="contact-cta-heading"
            className="scroll-reveal relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-xl md:h-[500px]"
          >
            <div className="absolute inset-0 rounded-xl bg-black" aria-hidden />
            <Image
              src="/Donations-2.jpg"
              alt="Hands stacked together in a gesture of community support"
              fill
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
            <div className="home-cta-content-padding relative z-10 flex w-full flex-col items-center text-center text-white md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className="flex w-full max-w-[1210px] flex-col items-center gap-8">
                <h2 id="contact-cta-heading" className={sectionHeadingClassName}>
                  Together we can build stronger communities.
                </h2>
                <p className="max-w-[910px] text-base font-semibold leading-[22px] md:px-8 lg:px-[150px]">
                  Whether you&apos;re looking for support, volunteering
                  opportunities or ways to partner with us, we&apos;re ready to
                  help.
                </p>
                <div className="image-cta-buttons">
                  <Link
                    href="#contact-form"
                    className="btn-interactive inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-3 text-sm font-semibold leading-[22px] tracking-[-0.04em] text-[#17171c] transition-colors hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-5 md:py-3.5 md:text-base"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/donate"
                    className="btn-interactive inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white px-4 py-3 text-sm font-semibold leading-[22px] tracking-[-0.04em] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-5 md:py-3.5 md:text-base"
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
