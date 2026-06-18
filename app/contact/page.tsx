import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { ImageCtaSection } from "../components/ImageCtaSection";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Us | Mums United",
  description:
    "Get in touch with Mums United for support, volunteering, partnerships or general enquiries in Sheffield.",
};

const mapEmbedSrc =
  "https://maps.google.com/maps?q=Sharrow+Community+Forum,+South+View+Road,+Sheffield,+S7+1DB&hl=en&z=15&output=embed";

const supportOptions = [
  {
    title: "Need Support?",
    description:
      "Contact our team and we will help connect you to the right service.",
    cta: "Get Support",
    href: "/support-services",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="size-6 text-[#436169]"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Volunteer With Us",
    description:
      "Find out how you can support local families and young people.",
    cta: "Volunteer",
    href: "#contact-form",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="size-6 text-[#436169]"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Partnership Enquiries",
    description:
      "Work with us to strengthen communities across Sheffield.",
    cta: "Get in Touch",
    href: "#contact-form",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="size-6 text-[#436169]"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M22 12h-4" />
        <path d="M20 10v4" />
      </svg>
    ),
  },
];

function ContactDetailIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#E2B39F]/35 text-[#436169]">
      {children}
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader currentPath="/contact" />

      <main className="min-h-screen bg-[#FBF6F3] text-[#1F1F1D]">
        <section className="scroll-reveal px-6 pt-20 pb-14 md:px-12 md:pb-16 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Contact Us
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
                We&apos;re here to listen and help.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#6F6864]">
                Whether you are looking for support, want to get involved, have
                a question about our programmes, or would like to speak with
                someone from Mums United, we&apos;d love to hear from you.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact-form"
                  className="rounded-full bg-[#436169] px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                >
                  Get Support
                </a>
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
          id="contact"
          aria-labelledby="contact-section-heading"
          className="scroll-reveal bg-white px-6 py-20 md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Get In Touch
              </p>
              <h2
                id="contact-section-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                Send us a message or reach out directly.
              </h2>
              <p className="mt-4 text-[#6F6864]">
                Our team will respond as soon as we can. If you need urgent
                support, please call us using the number below.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
              <aside className="order-2 rounded-3xl border border-[#DDD4CE] bg-[#FBF6F3] p-8 shadow-sm lg:order-1">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <ul className="mt-6 space-y-6">
                  <li className="flex gap-4">
                    <ContactDetailIcon>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </ContactDetailIcon>
                    <div>
                      <p className="text-sm font-semibold text-[#436169]">
                        Address
                      </p>
                      <address className="mt-2 not-italic leading-7 text-[#6F6864]">
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
                    <ContactDetailIcon>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </ContactDetailIcon>
                    <div>
                      <p className="text-sm font-semibold text-[#436169]">
                        Phone
                      </p>
                      <a
                        href="tel:+447445911671"
                        className="mt-2 inline-block font-semibold text-[#1F1F1D] transition-colors duration-300 hover:text-[#436169] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2"
                      >
                        07445 911671
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <ContactDetailIcon>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </ContactDetailIcon>
                    <div>
                      <p className="text-sm font-semibold text-[#436169]">
                        Email
                      </p>
                      <a
                        href="mailto:mumsunitedsheffield@gmail.com"
                        className="mt-2 inline-block break-all font-semibold text-[#1F1F1D] transition-colors duration-300 hover:text-[#436169] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2"
                      >
                        mumsunitedsheffield@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </aside>

              <div className="order-1 rounded-3xl border border-[#DDD4CE] bg-white p-8 shadow-sm lg:order-2">
                <h3 className="text-xl font-bold">Send a Message</h3>
                <p className="mt-2 text-sm leading-6 text-[#6F6864]">
                  Complete the form below and we will get back to you as soon as
                  we can.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="find-us-heading"
          className="scroll-reveal px-6 pt-32 pb-20 md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                Visit Us
              </p>
              <h2 id="find-us-heading" className="mt-3 text-3xl font-bold md:text-4xl">
                Find Us
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#6F6864]">
                Visit us at our community hub in Sheffield.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-[#DDD4CE] bg-white p-4 shadow-sm md:p-6">
              <iframe
                title="Map showing Sharrow Community Forum, South View Road, Sheffield S7 1DB"
                src={mapEmbedSrc}
                className="aspect-[4/3] w-full rounded-2xl border-0 md:aspect-[21/9]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="support-options-heading"
          className="scroll-reveal border-y border-[#DDD4CE] bg-white px-6 py-20 md:px-12 lg:px-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
                How Can We Help?
              </p>
              <h2
                id="support-options-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                Choose the option that fits you best.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {supportOptions.map((option) => (
                <article
                  key={option.title}
                  className="flex h-full flex-col rounded-3xl border border-[#DDD4CE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#E2B39F]/35">
                    {option.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{option.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#6F6864]">
                    {option.description}
                  </p>
                  <Link
                    href={option.href}
                    className="mt-6 inline-block rounded-full bg-[#436169] px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
                  >
                    {option.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ImageCtaSection
          heading="Together we can build stronger communities."
          body="Whether you're looking for support, volunteering opportunities or ways to partner with us, we're ready to help."
          buttons={[
            { label: "Contact Us", href: "#contact-form", variant: "primary" },
            { label: "Donate", href: "/donate", variant: "secondary" },
          ]}
        />
      </main>
    </>
  );
}
