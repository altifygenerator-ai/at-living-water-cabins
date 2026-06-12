import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import MobileNav from "@/components/layout/MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(246,242,232,0.88)] shadow-sm backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group shrink-0">
          <p className="max-w-[220px] text-lg font-black leading-none tracking-[-0.04em] text-[var(--forest)] xl:max-w-none xl:text-xl">
            {site.name}
          </p>
          <p className="mt-2 text-[0.6rem] font-black uppercase tracking-[0.22em] text-[var(--water-dark)] xl:text-[0.68rem] xl:tracking-[0.32em]">
            Between Glenwood and Mount Ida
          </p>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5 2xl:gap-8">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap text-[0.72rem] font-black text-[var(--charcoal)]/82 transition hover:text-[var(--forest)] xl:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link
            href="/#book-direct"
            className="inline-flex items-center justify-center rounded-full bg-[var(--forest)] px-5 py-3.5 text-xs font-black text-[var(--cream)] shadow-[0_18px_35px_rgba(38,23,15,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)] xl:px-7 xl:py-4 xl:text-sm"
          >
            Book Now
          </Link>

         
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}