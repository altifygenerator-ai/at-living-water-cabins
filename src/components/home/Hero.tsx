"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiPhone, FiMapPin } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[70%] bg-[linear-gradient(180deg,rgba(18,51,39,0.10),transparent)]" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">{site.hero.eyebrow}</p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.94] text-balance md:text-7xl">
              {site.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-pretty md:text-xl">
              {site.hero.text}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/cabins">
                View Cabins
                <FiArrowRight />
              </Button>

              <Button href="/family-lodge" variant="secondary">
                View Family Lodge
              </Button>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm font-bold text-[var(--forest)]/75 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href={site.phoneHref}
                className="flex items-center gap-2 transition hover:text-[var(--forest)]"
              >
                <FiPhone className="text-[var(--water-dark)]" />
                Call to book: {site.phone}
              </Link>

              <p className="flex items-center gap-2">
                <FiMapPin className="text-[var(--water-dark)]" />
                {site.area}, AR
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="image-wrap relative aspect-[4/5] md:aspect-[5/6]">
              <Image
                src={site.hero.image}
                alt={site.hero.imageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>

            <motion.div
              className="dark-card absolute -bottom-6 left-4 right-4 p-5 md:left-auto md:right-[-1rem] md:w-72"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--water)]">
                Book Direct
              </p>
              <p className="mt-2 text-xl font-black leading-tight text-[var(--cream)]">
                Creekside cabins, quiet views, and space to actually slow down.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}