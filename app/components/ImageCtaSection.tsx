import Image from "next/image";
import Link from "next/link";

export type ImageCtaButton = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

type ImageCtaSectionProps = {
  heading: string;
  body: string;
  buttons: ImageCtaButton[];
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlayOpacity?: number;
  className?: string;
  id?: string;
};

const primaryButtonClassName =
  "image-cta-btn inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#436169] px-4 py-3 text-sm font-semibold text-white hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-6 md:py-3 md:text-base";

const secondaryButtonClassName =
  "image-cta-btn inline-flex w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:px-6 md:py-3 md:text-base";

export function ImageCtaSection({
  heading,
  body,
  buttons,
  eyebrow,
  imageSrc = "/Donations-2.jpg",
  imageAlt = "Community support",
  overlayOpacity = 0.5,
  className = "scroll-reveal",
  id,
}: ImageCtaSectionProps) {
  return (
    <section
      id={id}
      className={`${className} relative flex min-h-[400px] items-center justify-center overflow-hidden text-white md:min-h-[550px] md:px-12 md:py-20 lg:px-24`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
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
      <div className="home-cta-content-padding relative z-10 mx-auto w-full max-w-[700px] text-center">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-[#E2B39F]">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`text-3xl font-bold md:text-5xl${eyebrow ? " mt-4" : ""}`}
        >
          {heading}
        </h2>
        <p className="mt-6 text-lg leading-8 text-white">{body}</p>
        <div className="mt-8 flex flex-row flex-nowrap items-center justify-center gap-4">
          {buttons.map((button) => (
            <Link
              key={button.href + button.label}
              href={button.href}
              className={
                button.variant === "primary"
                  ? primaryButtonClassName
                  : secondaryButtonClassName
              }
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
