import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { buttons } from "@/lib/design-system";

export type ButtonVariant = keyof typeof buttons;

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function getButtonClassName(variant: ButtonVariant, className?: string) {
  return [buttons[variant], className].filter(Boolean).join(" ");
}

export function Button({
  variant = "primaryDark",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = getButtonClassName(variant, className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ComponentPropsWithoutRef<"button">;
  const { type = "button", ...rest } = buttonProps;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
