import type { ReactNode } from "react";
import {
  cardSpacingClasses,
  cards,
  spacing,
  typography,
} from "@/lib/design-system";

type StatisticCardProps = {
  value: string;
  title: string;
  description: string;
  className?: string;
  valueClassName?: string;
  contentClassName?: string;
  action?: ReactNode;
};

export function StatisticCard({
  value,
  title,
  description,
  className = "",
  valueClassName = "",
  contentClassName = "",
  action,
}: StatisticCardProps) {
  return (
    <article
      className={`${spacing.card} ${cards.interactive} flex flex-col rounded-xl ${className}`.trim()}
    >
      <p className={`${typography.statisticNumber} ${valueClassName}`.trim()}>
        {value}
      </p>
      <div
        className={`${cardSpacingClasses.headingBody} ${cardSpacingClasses.tagsToHeading} ${contentClassName}`.trim()}
      >
        <h3 className={typography.cardHeading}>{title}</h3>
        <p className={`${typography.body} leading-[24px]`}>{description}</p>
        {action}
      </div>
    </article>
  );
}
