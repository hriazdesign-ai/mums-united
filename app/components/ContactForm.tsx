"use client";

import { useState, type FormEvent } from "react";
import { forms } from "@/lib/design-system";
import {
  FormField,
  FormInput,
  FormStatusMessage,
  FormSubmitButton,
  FormTextarea,
} from "./FormField";

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
      className={forms.form}
      noValidate
    >
      <FormField label="Full Name" htmlFor="contact-name">
        <FormInput
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
        />
      </FormField>

      <FormField label="Email Address" htmlFor="contact-email">
        <FormInput
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </FormField>

      <FormField label="Phone Number" htmlFor="contact-phone">
        <FormInput
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Your phone number"
        />
      </FormField>

      <FormField label="Your Message" htmlFor="contact-message">
        <FormTextarea
          id="contact-message"
          name="message"
          required
          placeholder="Tell us how we can help"
        />
      </FormField>

      <FormSubmitButton>Send Message</FormSubmitButton>

      {submitted ? (
        <FormStatusMessage>
          Your email app should open with your message ready to send. If it
          does not, please email us at{" "}
          <a
            href="mailto:mumsunitedsheffield@gmail.com"
            className="font-semibold underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2"
          >
            mumsunitedsheffield@gmail.com
          </a>
          .
        </FormStatusMessage>
      ) : null}
    </form>
  );
}
