"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiMapPin, FiPhone } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HeroB() {
  return (
    <section className="relative -mt-20 min-h-screen overflow-hidden bg-[var(--espresso)] pt-20">
      <Image
        src="/images/hero/hero.jpg"
        alt="Creekside cabin stay at At Living Water Cabins"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.92),rgba(32,20,13,.58),rgba(32,20,13,.08))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,10,6,.18),transparent,rgba(17,10,6,.88))]" />

      <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center">
        <motion.div
          className="max-w-4xl py-24"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <motion.p
            className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-[var(--copper)]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <span className="h-px w-10 bg-[var(--copper)]" />
            Private creekside stays
          </motion.p>

          <motion.h1
            className="mt-6 max-w-4xl text-[clamp(3.35rem,7vw,7.15rem)] font-black leading-[1.03] tracking-[-0.085em] text-[var(--paper)] text-balance"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
          >
            A stay that feels tucked away from everything.
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/84 md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26 }}
          >
            Cabins and a family lodge along Collier Creek, made for slow
            mornings, scenic views, and peaceful time near Glenwood.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
          >
            <Button href="/cabins">
              View the Cabins
              <FiArrowRight />
            </Button>

            <Button href={site.phoneHref} variant="secondary">
              Call to Book
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 grid max-w-2xl gap-3 rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-4 text-sm font-bold text-white/82 backdrop-blur md:grid-cols-2"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42 }}
          >
            <Link
              href={site.phoneHref}
              className="flex items-center gap-2 transition hover:text-white"
            >
              <FiPhone className="text-[var(--copper)]" />
              {site.phone}
            </Link>

            <p className="flex items-center gap-2">
              <FiMapPin className="text-[var(--copper)]" />
              {site.area}, Arkansas
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}