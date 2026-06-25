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
  "rounded-full bg-[#436169] px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98]";

const secondaryButtonClassName =
  "rounded-full border border-white px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98]";

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
      className={`${className} relative flex min-h-[400px] items-center justify-center overflow-hidden px-6 py-[60px] text-white md:min-h-[550px] md:px-12 md:py-20 lg:px-24`}
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
      <div className="relative z-10 mx-auto max-w-[700px] text-center">
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
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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
