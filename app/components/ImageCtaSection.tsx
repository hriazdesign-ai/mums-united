import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { buttons } from "@/lib/design-system";
import { CtaContent } from "./CtaContent";

export type ImageCtaButton = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

type ImageCtaSectionProps = {
  heading: string;
  headingId?: string;
  body?: string;
  buttons?: ImageCtaButton[];
  actions?: ReactNode;
  eyebrow?: string;
  imageSrc: string;
  imageAlt: string;
  imageOpacity?: number;
  variant?: "home" | "page";
  className?: string;
  id?: string;
  scrollReveal?: boolean;
};

export function ImageCtaSection({
  heading,
  headingId,
  body,
  buttons: ctaButtons,
  actions,
  eyebrow,
  imageSrc,
  imageAlt,
  imageOpacity = 0.6,
  variant = "page",
  className = "",
  id,
  scrollReveal = true,
}: ImageCtaSectionProps) {
  const sectionClassName = [
    scrollReveal ? "scroll-reveal" : "",
    "relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-xl md:h-[500px]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName}>
      <div className="absolute inset-0 rounded-xl bg-black" aria-hidden />
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        style={{ opacity: imageOpacity }}
        sizes="100vw"
      />
      <CtaContent
        heading={heading}
        headingId={headingId}
        body={body}
        eyebrow={eyebrow}
        variant={variant}
        actions={
          actions ??
          (ctaButtons ? (
            <>
              {ctaButtons.map((button) => (
                <Link
                  key={button.href + button.label}
                  href={button.href}
                  className={
                    button.variant === "primary"
                      ? buttons.imageCtaPrimary
                      : buttons.imageCtaSecondary
                  }
                >
                  {button.label}
                </Link>
              ))}
            </>
          ) : undefined)
        }
      />
    </section>
  );
}
