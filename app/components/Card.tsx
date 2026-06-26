import type { ReactNode } from "react";
import {
  cardSpacingClasses,
  cards,
  spacing,
} from "@/lib/design-system";

type CardPadding = "default" | "none" | "withImage";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  padding?: CardPadding;
};

function getPaddingClassName(padding: CardPadding) {
  switch (padding) {
    case "none":
      return "";
    case "withImage":
      return cardSpacingClasses.contentWithImage;
    case "default":
    default:
      return spacing.card;
  }
}

export function Card({
  children,
  className = "",
  interactive = true,
  padding = "default",
}: CardProps) {
  const paddingClassName = getPaddingClassName(padding);

  return (
    <article
      className={[
        interactive ? cards.interactive : "",
        paddingClassName,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </article>
  );
}
