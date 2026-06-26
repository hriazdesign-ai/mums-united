import type { ReactNode } from "react";
import { typography } from "@/lib/design-system";

type ContactInfoPanelProps = {
  tag: string;
  heading: string;
  headingId: string;
  intro: string;
  children: ReactNode;
  className?: string;
};

export function ContactInfoPanel({
  tag,
  heading,
  headingId,
  intro,
  children,
  className = "",
}: ContactInfoPanelProps) {
  return (
    <aside className={`rounded-xl bg-[#e3e9e9] p-8 ${className}`.trim()}>
      <div className="flex flex-col gap-4">
        <p className={typography.eyebrow}>{tag}</p>
        <h2
          id={headingId}
          className="text-xl font-semibold leading-[22px] tracking-[-0.02em]"
        >
          {heading}
        </h2>
        <p className={typography.bodySmall}>{intro}</p>
      </div>
      <ul className="mt-8 flex flex-col gap-8">{children}</ul>
    </aside>
  );
}

type ContactInfoItemProps = {
  label: string;
  icon: ReactNode;
  children: ReactNode;
};

export function ContactInfoItem({
  label,
  icon,
  children,
}: ContactInfoItemProps) {
  return (
    <li className="flex gap-4">
      <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-white">
        {icon}
      </span>
      <div className="flex flex-col gap-2">
        <p className={typography.formLabel}>{label}</p>
        {children}
      </div>
    </li>
  );
}

type ContactInfoLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ContactInfoLink({
  href,
  children,
  className = "",
}: ContactInfoLinkProps) {
  return (
    <a
      href={href}
      className={`${typography.bodySmall} text-[#17171c] transition-colors hover:text-[#17171c]/70 focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2 ${className}`.trim()}
    >
      {children}
    </a>
  );
}

export function ContactInfoText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`${typography.bodySmall} ${className}`.trim()}>{children}</p>
  );
}

export function ContactInfoAddress({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <address className={`not-italic ${typography.bodySmall}`}>{children}</address>
  );
}
