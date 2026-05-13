"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight, FiMapPin, FiPhone } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";

const heroSlides = [
  {
    image: "/images/cabins/AreaView1.jpg",
    cardImage: "/images/cabins/LoveScenic4.jpg",
    label: "Creekside Cabins",
    note: "Tucked along Collier Creek",
  },
  {
    image: "/images/cabins/AreaView2.jpg",
    cardImage: "/images/cabins/PeaceView2.jpg",
    label: "Quiet Water Views",
    note: "Porches, trees, and peaceful mornings",
  },
  {
    image: "/images/cabins/AreaView3.jpg",
    cardImage: "/images/cabins/FaithScenic.jpg",
    label: "Ouachita Mountain Setting",
    note: "Close to Glenwood, Mount Ida, and the Caddo River",
  },
  {
    image: "/images/cabins/AreaView4.jpg",
    cardImage: "/images/cabins/HopeView.jpg",
    label: "Simple Cabin Stays",
    note: "Four one-bedroom cabins made for slowing down",
  },
];

export default function CabinsHeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = heroSlides[activeIndex] ?? heroSlides[0];

  const nextSlide =
    heroSlides[(activeIndex + 1) % heroSlides.length] ?? heroSlides[0];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative -mt-20 min-h-[78vh] overflow-hidden bg-[var(--charcoal)] pt-20 text-white">
      {heroSlides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt="Creekside cabins in the Ouachita Mountains of Arkansas"
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-all duration-[1800ms] ease-out ${
            activeIndex === index
              ? "scale-100 opacity-100"
              : "scale-110 opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/45" />
<div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10" />
<div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/80 via-transparent to-transparent" />

      

      <Container className="relative z-10 grid min-h-[calc(78vh-5rem)] items-center gap-10 py-20 lg:grid-cols-[1fr_0.72fr]">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
            <span className="h-px w-10 bg-[var(--gold)]" />
            The Cabins
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
            Four quiet cabins tucked along Collier Creek.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/88">
            Secluded cabin rentals in the Ouachita Mountains near the Caddo
            River, built for simple, peaceful stays in Southwest Arkansas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-4 text-sm font-black text-black shadow-lg transition hover:-translate-y-0.5"
            >
              <FiPhone />
              Call for Availability
            </Link>

            <Link
              href="#cabins"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--forest)]"
            >
              View Cabins
              <FiArrowRight />
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
            {["Love", "Faith", "Hope", "Peace"].map((name) => (
              <div
                key={name}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white backdrop-blur"
              >
                {name} Cabin
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -left-8 top-12 h-72 w-64 rotate-[-8deg] overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur">
            <Image
              key={nextSlide.cardImage}
              src={nextSlide.cardImage}
              alt={nextSlide.label}
              fill
              sizes="360px"
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--gold)]">
                Next View
              </p>
              <p className="mt-1 text-sm font-black leading-tight text-white">
                {nextSlide.label}
              </p>
            </div>
          </div>

          <div className="relative ml-auto h-[460px] w-[360px] overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="relative h-full overflow-hidden rounded-[2rem]">
              <Image
                key={activeSlide.cardImage}
                src={activeSlide.cardImage}
                alt={activeSlide.label}
                fill
                sizes="420px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--gold)]">
                  <FiMapPin />
                  {activeSlide.label}
                </p>

                <p className="mt-2 text-2xl font-black leading-tight text-white">
                  {activeSlide.note}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 right-10 rounded-full border border-white/15 bg-black/35 px-5 py-3 text-sm font-black text-white shadow-xl backdrop-blur">
            {activeIndex + 1} / {heroSlides.length}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 z-20 flex w-[min(90vw,520px)] -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="h-2 flex-1 overflow-hidden rounded-full bg-white/25"
            aria-label={`Show hero image ${index + 1}`}
          >
            <span
              className={`block h-full rounded-full bg-[var(--gold)] transition-all duration-700 ${
                activeIndex === index ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}