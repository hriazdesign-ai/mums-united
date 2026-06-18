"use client";

import { useState, type FormEvent } from "react";

const inputClassName =
  "w-full rounded-2xl border border-[#DDD4CE] bg-white px-4 py-3 text-[#1F1F1D] transition-colors duration-300 placeholder:text-[#6F6864] focus:border-[#436169] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2";

const labelClassName = "text-sm font-semibold text-[#1F1F1D]";

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
      className="space-y-5"
      noValidate
    >
      <div>
        <label htmlFor="contact-name" className={labelClassName}>
          Full Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={`${inputClassName} mt-2`}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClassName}>
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`${inputClassName} mt-2`}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClassName}>
          Phone Number
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={`${inputClassName} mt-2`}
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClassName}>
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          className={`${inputClassName} mt-2 min-h-[160px] resize-y`}
          placeholder="Tell us how we can help..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[#436169] px-6 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98] sm:w-auto"
      >
        Send Message
      </button>

      {submitted ? (
        <p className="text-sm leading-6 text-[#6F6864]" role="status">
          Your email app should open with your message ready to send. If it
          does not, please email us at{" "}
          <a
            href="mailto:mumsunitedsheffield@gmail.com"
            className="font-semibold text-[#436169] underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2"
          >
            mumsunitedsheffield@gmail.com
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
