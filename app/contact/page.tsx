import { buttons, cardSpacingClasses, typography } from "@/lib/design-system";
import { DONATE_HREF } from "@/lib/donate";
import { containers, imageCrops, spacing } from "@/lib/layout";
import { createPageMetadata } from "@/lib/seo";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, HeartHandshake, LifeBuoy, type LucideIcon } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { SiteHeader } from "../components/SiteHeader";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Mums United for support, volunteering, partnerships or general enquiries in Sheffield.",
  path: "/contact",
});

const mapEmbedSrc =
  "https://maps.google.com/maps?q=Sharrow+Community+Forum,+South+View+Road,+Sheffield,+S7+1DB&hl=en&z=15&output=embed";

const iconStrokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function AddressIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5 text-[#17171c]">
      <path {...iconStrokeProps} d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle {...iconStrokeProps} cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5 text-[#17171c]">
      <path
        {...iconStrokeProps}
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5 text-[#17171c]">
      <rect {...iconStrokeProps} x="3" y="5" width="18" height="14" rx="2" />
      <path {...iconStrokeProps} d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ContactInfoIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-white">
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
    <div className={`flex flex-col items-center px-0 text-center md:px-8 lg:px-[60px] ${spacing.sectionIntroBottom}`}>
      <div className={containers.contentCentered}>
        <p className={typography.eyebrow}>{tag}</p>
        <h2 id={headingId} className={typography.sectionHeadingPage}>
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

const helpCardIconClassName = "size-9 shrink-0 text-[#17171c]";

const supportOptions: {
  title: string;
  description: string;
  cta: string;
  href: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Need Support?",
    description:
      "Contact our team and we will help connect you to the right service.",
    cta: "Get Support",
    href: "/support-services",
    Icon: LifeBuoy,
  },
  {
    title: "Volunteer With Us",
    description:
      "Find out how you can support local families and young people.",
    cta: "Volunteer",
    href: "#contact-form",
    Icon: HeartHandshake,
  },
  {
    title: "Partnership Enquiries",
    description: "Work with us to strengthen communities across Sheffield.",
    cta: "Get In Touch",
    href: "#contact-form",
    Icon: Building2,
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader currentPath="/contact" />

      <main className={`bg-white text-[#17171c] ${spacing.mainBottom}`}>
        <div className={containers.pageStack}>
          {/* Hero */}
          <section className="flex w-full flex-col">
            <div className={`flex flex-col items-center px-0 text-center md:px-8 lg:px-[60px] ${spacing.heroPaddingTop}`}>
              <div className={containers.contentCentered}>
                <p className={typography.eyebrow}>Contact Us</p>

                <h1 className={typography.pageHeading}>
                  We&apos;re here to listen and help.
                </h1>

                <p className="max-w-[910px] text-base font-normal leading-[22px] md:px-8 lg:px-[150px]">
                  Mums United provides trusted support, safe spaces and
                  practical help for mothers, young people and families across
                  Sheffield.
                </p>

                <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-7">
                  <Link href="#contact-form" className={buttons.primaryDark}>
                    Get Support
                  </Link>
                  <Link href={DONATE_HREF} className={buttons.outlineDark}>
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information + Form */}
          <section
            id="contact"
            aria-labelledby="contact-section-heading"
            className="scroll-reveal flex w-full flex-col"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <aside className="rounded-xl bg-[#e3e9e9] p-8">
                <div className="flex flex-col gap-4">
                  <p className={typography.eyebrow}>Get In Touch</p>
                  <h2
                    id="contact-section-heading"
                    className={typography.cardHeading}
                  >
                    Reach out directly.
                  </h2>
                  <p className="text-sm font-normal leading-5 text-[#17171c]">
                    Whether you need support, want to volunteer or would like to
                    speak with the team, use the details below or send us a
                    message.
                  </p>
                </div>
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
                  <h3 className={typography.cardHeading}>
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
              {supportOptions.map(({ title, description, cta, href, Icon }) => (
                <article
                  key={title}
                  className={`${cardSpacingClasses.content} card-interactive flex h-full flex-col rounded-xl bg-[#edeae1]`}
                >
                  <Icon
                    className={helpCardIconClassName}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div className={`${cardSpacingClasses.tagsToHeading} flex min-h-0 flex-1 flex-col`}>
                    <div className={cardSpacingClasses.headingBody}>
                      <h3 className="text-2xl font-semibold leading-[22px] tracking-[-0.02em]">
                        {title}
                      </h3>
                      <p className="text-base font-normal leading-[22px]">
                        {description}
                      </p>
                    </div>
                    <Link href={href} className={`${buttons.whiteCompact} ${cardSpacingClasses.bodyToButton} mt-auto`}>
                      {cta}
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
              className={`${imageCrops.emotionalCta} opacity-60`}
              sizes="100vw"
            />
            <div className="home-cta-content-padding relative z-10 flex w-full flex-col items-center text-center text-white md:px-12 md:py-20 lg:px-[60px] lg:py-[80px]">
              <div className={containers.contentCentered}>
                <h2 id="contact-cta-heading" className={typography.sectionHeadingPage}>
                  Together we can build stronger communities.
                </h2>
                <p className={`max-w-[910px] ${typography.bodySemibold} md:px-8 lg:px-[150px]`}>
                  Whether you&apos;re looking for support, volunteering
                  opportunities or ways to partner with us, we&apos;re ready to
                  help.
                </p>
                <div className="image-cta-buttons">
                  <Link
                    href="#contact-form"
                    className={buttons.imageCtaPrimary}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href={DONATE_HREF}
                    className={buttons.imageCtaSecondary}
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
