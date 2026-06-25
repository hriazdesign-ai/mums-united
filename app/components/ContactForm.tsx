"use client";

import { useState, type FormEvent } from "react";

const inputClassName =
  "w-full rounded-lg border border-[#c4c4c4] bg-white px-4 text-sm font-normal leading-5 text-[#17171c] transition-colors placeholder:text-sm placeholder:text-[#17171c]/60 focus:border-[#17171c] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

const labelClassName = "text-sm font-medium leading-5 text-[#17171c]";

const submitButtonClassName =
  "btn-interactive inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#17171c] px-5 py-2.5 text-sm font-semibold leading-5 text-white transition-colors hover:bg-[#2a2a30] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`Message from ${name} via Mums United website`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:mumsunitedsheffield@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className={labelClassName}>
          Full Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={`${inputClassName} h-12`}
          placeholder="Your full name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className={labelClassName}>
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`${inputClassName} h-12`}
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-phone" className={labelClassName}>
          Phone Number
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={`${inputClassName} h-12`}
          placeholder="Your phone number"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className={labelClassName}>
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          className={`${inputClassName} min-h-[120px] resize-y py-3`}
          placeholder="Tell us how we can help"
        />
      </div>

      <button type="submit" className={submitButtonClassName}>
        Send Message
      </button>

      {submitted ? (
        <p className="text-sm font-normal leading-5 text-[#17171c]" role="status">
          Your email app should open with your message ready to send. If it
          does not, please email us at{" "}
          <a
            href="mailto:mumsunitedsheffield@gmail.com"
            className="font-semibold underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2"
          >
            mumsunitedsheffield@gmail.com
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
