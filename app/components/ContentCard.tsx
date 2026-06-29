import Link from "next/link";
import type { ReactNode } from "react";
import {
  buttons,
  cardSpacingClasses,
  typography,
} from "@/lib/design-system";
import { DONATE_ANCHOR } from "@/lib/donate";
import { Card } from "./Card";

type ContentCardProps = {
  title: string;
  body: string;
  className?: string;
  titleClassName?: string;
  action?: ReactNode;
};

export function ContentCard({
  title,
  body,
  className = "",
  titleClassName = "",
  action,
}: ContentCardProps) {
  return (
    <Card className={`h-full rounded-xl bg-[#efeadf] ${className}`.trim()}>
      <div className={cardSpacingClasses.headingBody}>
        <h3 className={`${typography.cardHeading} ${titleClassName}`.trim()}>
          {title}
        </h3>
        <p className={typography.body}>{body}</p>
        {action}
      </div>
    </Card>
  );
}

type ImpactCardProps = {
  amount: string;
  body: string;
  donateHref?: string;
  donateLabel?: string;
  className?: string;
};

export function ImpactCard({
  amount,
  body,
  donateHref = DONATE_ANCHOR,
  donateLabel,
  className = "",
}: ImpactCardProps) {
  const label = donateLabel ?? `Donate ${amount}`;

  return (
    <Card className={`h-full rounded-xl bg-[#4c7a65] ${className}`.trim()}>
      <p className={`${typography.statisticNumber} text-white`}>{amount}</p>
      <div className={`${cardSpacingClasses.tagsToHeading} flex flex-col`}>
        <p className={`${typography.body} text-white`}>{body}</p>
        <Link
          href={donateHref}
          aria-label={label}
          className={`${buttons.impactDonate} ${cardSpacingClasses.bodyToButton}`}
        >
          {label}
        </Link>
      </div>
    </Card>
  );
}
