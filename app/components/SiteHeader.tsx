import Image from "next/image";
import Link from "next/link";

const logoSrc = "/mums-united-logo.png";

const navigationLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Support Services", "/support-services"],
  ["Programmes", "/programmes"],
  ["Media", "/media"],
  ["Donate", "/donate"],
  ["Contact", "/contact"],
];

type SiteHeaderProps = {
  currentPath?: string;
};

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,0,0,0.05)] bg-[rgba(255,255,255,0.82)] px-6 shadow-[0_1px_8px_rgba(0,0,0,0.03)] backdrop-blur-[14px] [-webkit-backdrop-filter:blur(14px)] md:px-12 lg:px-[85px]">
      <div className="mx-auto flex h-[116px] max-w-[1280px] flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <Link href="/" aria-label="Mums United home" className="block shrink-0">
          <Image
            src={logoSrc}
            alt="Mums United"
            width={135}
            height={62}
            className="h-[62px] w-[135px] object-contain"
            priority
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="order-last w-full overflow-x-auto lg:order-none lg:w-auto lg:overflow-visible"
        >
          <ul className="flex min-w-max items-center gap-5 text-base font-semibold leading-4 text-[#17171c] lg:min-w-0">
            {navigationLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={href === currentPath ? "page" : undefined}
                  className={`block whitespace-nowrap rounded-full py-2 transition-colors hover:text-[#446169] focus:outline-none focus:ring-2 focus:ring-[#446169] focus:ring-offset-2 ${
                    href === currentPath ? "text-[#446169]" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/donate"
          className="shrink-0 rounded-full bg-[#17171c] px-5 py-3.5 text-base font-semibold leading-[22px] text-white transition-colors hover:bg-[#2a2a30] focus:outline-none focus:ring-2 focus:ring-[#17171c] focus:ring-offset-2"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}
