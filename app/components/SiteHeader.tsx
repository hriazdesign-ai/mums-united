"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

const logoSrc = "/mums-united-logo.png";

const DESKTOP_NAV_BREAKPOINT = 1060;
const COMPACT_SCROLL_THRESHOLD = 60;

function getScrollY() {
  return window.scrollY || document.documentElement.scrollTop || 0;
}

const navigationLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Support Services", "/support-services"],
  ["Programmes", "/programmes"],
  ["Media", "/media"],
  ["Donate", "/donate"],
  ["Contact", "/contact"],
] as const;

type SiteHeaderProps = {
  currentPath?: string;
};

function NavLink({
  label,
  href,
  currentPath,
  onNavigate,
  className = "",
}: {
  label: string;
  href: string;
  currentPath: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const isActive = href === currentPath;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
      className={`block rounded-full py-2 text-base font-semibold leading-4 transition-colors hover:text-[#446169] focus:outline-none focus:ring-2 focus:ring-[#446169] focus:ring-offset-2 ${
        isActive ? "text-[#446169]" : "text-[#17171c]"
      } ${className}`}
    >
      {label}
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden>
      <span
        className={`absolute left-0 top-[3px] block h-[1.5px] w-5 bg-[#17171c] transition-all duration-300 ease-out motion-reduce:transition-none ${
          open ? "top-[9px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[9px] block h-[1.5px] w-5 bg-[#17171c] transition-all duration-300 ease-out motion-reduce:transition-none ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[15px] block h-[1.5px] w-5 bg-[#17171c] transition-all duration-300 ease-out motion-reduce:transition-none ${
          open ? "top-[9px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [currentPath, closeMenu]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onScroll = () => {
      closeMenu();
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [menuOpen, closeMenu]);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${DESKTOP_NAV_BREAKPOINT}px)`,
    );

    const syncCompact = () => {
      if (!mediaQuery.matches) {
        setIsCompact(false);
        return;
      }

      setIsCompact(getScrollY() >= COMPACT_SCROLL_THRESHOLD);
    };

    let frame = 0;

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        syncCompact();
      });
    };

    syncCompact();
    window.addEventListener("scroll", onScroll, { passive: true });
    mediaQuery.addEventListener("change", syncCompact);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", onScroll);
      mediaQuery.removeEventListener("change", syncCompact);
    };
  }, []);

  return (
    <>
      <header
        className={`site-header sticky top-0 z-50 border-b border-[rgba(0,0,0,0.05)] bg-[rgba(255,255,255,0.82)] px-6 shadow-[0_1px_8px_rgba(0,0,0,0.03)] backdrop-blur-[14px] [-webkit-backdrop-filter:blur(14px)] md:px-12 lg:px-[85px] ${
          isCompact ? "site-header--compact" : ""
        }`}
      >
        <div className="site-header__inner mx-auto flex h-[116px] max-w-[1280px] items-center justify-between gap-4">
          <Link href="/" aria-label="Mums United home" className="block shrink-0">
            <Image
              src={logoSrc}
              alt="Mums United"
              width={135}
              height={62}
              className="site-header__logo h-[62px] w-[135px] object-contain"
              priority
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden min-[1060px]:block"
          >
            <ul className="flex items-center gap-5 text-[#17171c]">
              {navigationLinks.map(([label, href]) => (
                <li key={label}>
                  <NavLink
                    label={label}
                    href={href}
                    currentPath={currentPath}
                    className="whitespace-nowrap"
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <Link
              href="/donate"
              className="site-header__donate btn-interactive shrink-0 rounded-full bg-[#17171c] px-5 py-3.5 text-base font-semibold leading-[22px] text-white transition-colors hover:bg-[#2a2a30] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2"
            >
              Donate
            </Link>

            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-white/70 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#446169] focus:ring-offset-2 min-[1060px]:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="site-nav-panel"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-[60] bg-[rgba(0,0,0,0.28)] min-[1060px]:hidden"
          aria-hidden={false}
          onClick={closeMenu}
        />
      ) : null}

      <aside
        id="site-nav-panel"
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-[380px] border-l border-[rgba(0,0,0,0.06)] bg-[#FBF6F3] shadow-[-12px_0_40px_rgba(0,0,0,0.08)] transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none min-[1060px]:hidden ${
          menuOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none invisible translate-x-full opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={(event) => event.stopPropagation()}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex h-full flex-col px-8 pb-10 pt-[calc(116px+1.5rem)]"
        >
          <ul className="flex flex-col gap-1">
            {navigationLinks.map(([label, href]) => (
              <li key={label}>
                <NavLink
                  label={label}
                  href={href}
                  currentPath={currentPath}
                  onNavigate={closeMenu}
                  className="px-1 py-3 text-[1.05rem]"
                />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
