import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiHome, FiPhone, FiUsers } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  buildPageMetadata,
  webPageSchema,
} from "@/lib/seo";

const pageTitle = "Family Lodge Coming Soon";
const pageDescription =
  "The Family Lodge at At Living Water Cabins is planned as a future larger-stay option. View current cabins or call with questions about future availability.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/family-lodge",
  keywords: [
    "At Living Water Cabins family lodge",
    "larger cabin stays Norman Arkansas",
    "family cabin stays near Glenwood Arkansas",
  ],
  noIndex: true,
});

const comingSoonDetails = [
  {
    label: "Status",
    value: "Coming Soon",
    icon: FiClock,
  },
  {
    label: "Best For",
    value: "Future larger stays",
    icon: FiUsers,
  },
  {
    label: "Photos",
    value: "Coming later",
    icon: FiHome,
  },
];

export default function FamilyLodgePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Family Lodge", path: "/family-lodge" },
          ]),
          webPageSchema({
            path: "/family-lodge",
            title: pageTitle,
            description: pageDescription,
          }),
        ]}
      />

      <main>
      <section className="relative -mt-20 min-h-screen overflow-hidden bg-[var(--espresso)] pt-20 text-white">
        <Image
          src="/images/cabins/PeacePorchRiver.jpg"
          alt="Creekside setting at At Living Water Cabins"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.94),rgba(38,23,15,.66),rgba(38,23,15,.14))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,10,6,.18),transparent,rgba(17,10,6,.88))]" />

        <div className="absolute right-8 top-32 hidden w-[38vw] max-w-xl lg:block">
          <div className="relative ml-auto h-[390px] w-[290px] rotate-3 overflow-hidden rounded-[2rem] border border-white/12 shadow-2xl">
            <Image
              src="/images/cabins/LoveBridge.jpg"
              alt="Bridge near At Living Water Cabins"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative -mt-20 h-[235px] w-[350px] -rotate-3 overflow-hidden rounded-[1.75rem] border border-white/12 shadow-2xl">
            <Image
              src="/images/cabins/riverflowers.jpg"
              alt="Creekside flowers near At Living Water Cabins"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-[var(--copper)]">
              <span className="h-px w-10 bg-[var(--copper)]" />
              Family Lodge
            </p>

            <h1 className="mt-5 text-[clamp(3.3rem,7vw,7.1rem)] font-black leading-[1.03] tracking-[-0.085em] text-[var(--paper)] text-balance">
              A larger lodge stay is planned for the future.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/84 md:text-xl">
              The Family Lodge is currently private and not available for guest
              reservations. Once it becomes available, this page will be updated
              with real photos, full details, rates, and booking information.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cabins"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--paper)] px-6 py-4 text-sm font-black text-[var(--espresso)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--copper)] hover:text-white"
              >
                View Current Cabins
                <FiArrowRight />
              </Link>

              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--espresso)]"
              >
                <FiPhone />
                Call With Questions
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-20 -mt-12">
        <Container>
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[rgba(38,23,15,0.14)] bg-[rgba(255,249,239,0.95)] shadow-[var(--shadow)] backdrop-blur md:grid-cols-3">
            {comingSoonDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="border-b border-[rgba(38,23,15,0.1)] p-5 md:border-b-0 md:border-r last:md:border-r-0"
                >
                  <Icon className="text-2xl text-[var(--copper)]" />

                  <p className="mt-4 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                    {item.label}
                  </p>

                  <p className="mt-2 text-base font-black tracking-[-0.03em] text-[var(--espresso)]">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--linen)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Future Stay Option</p>

              <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.3rem)] font-black leading-[1.05] tracking-[-0.08em] text-[var(--espresso)] text-balance">
                More room is coming later.
              </h2>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
                The Family Lodge is planned as a future larger-stay option at
                At Living Water Cabins. For now, the lodge is being used
                privately, so we are not showing interior photos, rates, or
                booking options until it is actually ready for guests.
              </p>

              <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
                If you are planning ahead for a larger group, you can still call
                with questions. Otherwise, Love, Faith, Hope, and Peace are the
                current cabin stays available to view.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cabins"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--espresso)] px-6 py-3 text-sm font-black text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
                >
                  View Current Cabins
                  <FiArrowRight />
                </Link>

                <Link
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--paper)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <FiPhone />
                  Call With Questions
                </Link>
              </div>
            </div>

            <div className="relative min-h-[620px] overflow-hidden rounded-[2.15rem] shadow-[var(--shadow-soft)]">
              <Image
                src="/images/cabins/LoveScenic7.jpg"
                alt="Scenic creekside setting at At Living Water Cabins"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-black/28 p-5 text-white backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--copper)]">
                  Photos Coming Later
                </p>

                <p className="mt-2 text-sm font-semibold leading-7 text-white/82">
                  We’ll add real lodge photos and full guest details once the
                  lodge is ready to be shown publicly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[650px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src="/images/cabins/River3.jpg"
          alt="Creekside view near At Living Water Cabins"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.84),rgba(17,10,6,.42),rgba(17,10,6,.12))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,10,6,.72))]" />

        <Container className="relative z-10 flex min-h-[650px] items-end pb-14 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
              Current Stays Available
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.2rem)] font-black leading-[1.05] tracking-[-0.08em] text-[var(--paper)] text-balance">
              The cabins are ready when you are.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/78">
              While the lodge is not currently available, the creekside cabins
              are the best place to start for current availability and booking.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cabins"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--paper)] px-6 py-4 text-sm font-black text-[var(--espresso)] transition hover:bg-[var(--copper)] hover:text-white"
              >
                View Cabins
                <FiArrowRight />
              </Link>

              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-[var(--espresso)]"
              >
                <FiPhone />
                {site.phone}
              </Link>
            </div>
          </div>
        </Container>
      </section>
      </main>
    </>
  );
}
