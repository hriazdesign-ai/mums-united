import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  buttons,
  cardSpacingClasses,
  cards,
  spacing,
  typography,
} from "@/lib/design-system";

type ContactHelpCardProps = {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  className?: string;
};

export function ContactHelpCard({
  title,
  description,
  cta,
  href,
  icon: Icon,
  className = "",
}: ContactHelpCardProps) {
  return (
    <article
      className={`${spacing.card} ${cards.interactive} flex h-full flex-col rounded-xl bg-[#edeae1] ${className}`.trim()}
    >
      <Icon
        className="size-9 shrink-0 text-[#17171c]"
        strokeWidth={1.5}
        aria-hidden
      />
      <div
        className={`${cardSpacingClasses.tagsToHeading} flex min-h-0 flex-1 flex-col`}
      >
        <div className={cardSpacingClasses.headingBody}>
          <h3 className={typography.cardHeading}>{title}</h3>
          <p className={typography.body}>{description}</p>
        </div>
        <Link
          href={href}
          className={`${buttons.whiteCompact} ${cardSpacingClasses.bodyToButton} mt-auto`}
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
