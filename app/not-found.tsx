import Link from "next/link";
import { buttons, typography } from "@/lib/design-system";
import { containers, spacing } from "@/lib/layout";
import { createPageMetadata } from "@/lib/seo";
import { SiteHeader } from "./components/SiteHeader";

export const metadata = createPageMetadata({
  title: "Page Not Found | Mums United",
  description: "The page you are looking for could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <SiteHeader currentPath="/404" />
      <main className={`bg-white text-[#17171c] ${spacing.mainBottom}`}>
        <div className={containers.pageStack}>
          <section className="flex w-full flex-col items-center py-16 text-center md:py-20">
            <div className={containers.contentCentered}>
              <p className={typography.eyebrow}>404</p>
              <h1 className={typography.pageHeading}>Page not found</h1>
              <p className={`${containers.prose} ${typography.body}`}>
                Sorry, we couldn&apos;t find the page you were looking for. It
                may have moved or the link may be incorrect.
              </p>
              <Link href="/" className={buttons.primaryDark}>
                Back to Home
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
