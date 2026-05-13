"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiUsers, FiHome, FiX } from "react-icons/fi";
import { cabins } from "@/data/cabins";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedCabins() {
  const [openImage, setOpenImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className="section bg-[var(--cream)]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The Cabins"
            title="Four quiet cabins along Collier Creek"
            text="Love, Faith, Hope, and Peace are cozy one-bedroom cabins tucked into the Ouachita Mountains near the Caddo River."
          />

          <Link
            href="/cabins"
            className="hidden rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--charcoal)] md:inline-flex"
          >
            View All Cabins
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cabins.map((cabin) => {
            const imageSrc = cabin.image;

            return (
              <article
                key={cabin.slug}
                className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenImage({
                      src: imageSrc,
                      alt: `${cabin.name} cabin`,
                    })
                  }
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[var(--sand)] to-[var(--stone)] text-left"
                  aria-label={`Open image of ${cabin.name}`}
                >
                  <img
                    src={imageSrc}
                    alt={`${cabin.name} cabin`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />

                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--forest)] opacity-0 shadow-lg backdrop-blur transition group-hover:opacity-100">
                    View Image
                  </div>
                </button>

                <div className="p-5">
                  <Link href={`/cabins/${cabin.slug}`} className="block">
                    <h3 className="text-2xl font-black text-[var(--forest)] transition hover:text-[var(--charcoal)]">
                      {cabin.name}
                    </h3>
                  </Link>

                  <p className="mt-3 text-sm font-semibold text-[var(--muted)]">
                    {cabin.summary}
                  </p>

                  <div className="mt-5 grid gap-2 text-sm font-black text-[var(--forest)]/80">
                    <p className="flex items-center gap-2">
                      <FiUsers className="text-[var(--gold)]" />
                      {cabin.details.sleeps}
                    </p>

                    <p className="flex items-center gap-2">
                      <FiHome className="text-[var(--gold)]" />
                      {cabin.details.bed}
                    </p>
                  </div>

                  <Link
                    href={`/cabins/${cabin.slug}`}
                    className="mt-5 flex items-center gap-2 text-sm font-black text-[var(--forest)]"
                  >
                    View Cabin
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[2rem] bg-[var(--forest)] p-6 text-white md:flex md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--gold)]">
              Cabin Rates
            </p>

            <p className="mt-2 text-2xl font-black text-white">
              {site.cabinsInfo.rates.base} · {site.cabinsInfo.rates.minimum}
            </p>

            <p className="mt-2 max-w-3xl text-sm font-medium text-white/75">
              {site.cabinsInfo.rates.note}
            </p>
          </div>

          <Link
            href={site.phoneHref}
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-[var(--forest)] transition hover:bg-[var(--gold)] hover:text-black md:mt-0"
          >
            Call for Availability
          </Link>
        </div>
      </Container>

      {openImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpenImage(null)}
        >
          <button
            type="button"
            onClick={() => setOpenImage(null)}
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Close image"
          >
            <FiX className="text-2xl" />
          </button>

          <img
            src={openImage.src}
            alt={openImage.alt}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}