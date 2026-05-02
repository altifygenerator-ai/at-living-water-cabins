import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import MobileNav from "@/components/layout/MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(246,242,232,0.88)] shadow-sm backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="group">
          <p className="text-xl font-black leading-none tracking-[-0.04em] text-[var(--forest)]">
            {site.name}
          </p>
          <p className="mt-2 text-[0.68rem] font-black uppercase tracking-[0.32em] text-[var(--water-dark)]">
            Between Glenwood and Mount Ida
          </p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-black text-[var(--charcoal)]/82 transition hover:text-[var(--forest)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

       <Link
  href={site.phoneHref}
  className="hidden items-center gap-3 rounded-full !bg-[var(--gold)] px-7 py-4 text-sm font-black !text-black shadow-[0_18px_35px_rgba(199,150,75,0.35)] transition hover:-translate-y-0.5 hover:!bg-[var(--gold)] lg:flex"
>
  <FiPhone />
  {site.phone}
</Link>

        <MobileNav />
      </Container>
    </header>
  );
}