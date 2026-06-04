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
    <header className="sticky top-0 z-50 border-b border-[#DDD4CE] bg-white/95 px-6 py-4 text-[#1F1F1D] backdrop-blur md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <Link
          href="/"
          aria-label="Mums United home"
          className="block"
        >
          <Image
            src={logoSrc}
            alt="Mums United"
            width={150}
            height={52}
            className="h-auto w-[150px]"
            priority
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="order-last w-full overflow-x-auto lg:order-none lg:w-auto lg:overflow-visible"
        >
          <ul className="flex min-w-max items-center gap-5 text-sm font-semibold text-[#6F6864] lg:min-w-0">
            {navigationLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={href === currentPath ? "page" : undefined}
                  className={`block rounded-full py-2 transition-colors duration-300 hover:text-[#436169] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 ${
                    href === currentPath ? "text-[#436169]" : ""
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
          className="rounded-full bg-[#436169] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#344C52] focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 active:scale-[0.98]"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}
