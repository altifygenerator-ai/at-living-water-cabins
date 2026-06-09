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
          className="max-w-5xl py-24"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <motion.p
            className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-[var(--copper)] md:text-sm"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <span className="h-px w-10 bg-[var(--copper)]" />
            Private creekside stays
          </motion.p>

         <motion.h1
  className="mt-6 max-w-5xl text-[clamp(3.65rem,7.4vw,7.65rem)] font-black leading-[1.03] tracking-[-0.085em] text-[var(--paper)] text-balance"
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.65, delay: 0.18 }}
>
  A stay that feels tucked away from everything.
</motion.h1>

<motion.div
  className="pt-5"
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.65, delay: 0.26 }}
>
  <p className="max-w-3xl text-xl font-semibold leading-9 text-white/88 md:text-2xl md:leading-10">
    Four creekside cabins along Collier Creek, made for slow mornings,
    scenic views, and peaceful time near Glenwood.
  </p>
</motion.div>

<motion.div
  className="mt-12 flex flex-col gap-4 sm:flex-row"
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.65, delay: 0.34 }}
>
  <Button
    href="/cabins"
    className="min-h-[4.35rem] px-10 py-5 text-lg"
  >
    View the Cabins
    <FiArrowRight size={22} />
  </Button>

  <Button
    href="/#book-direct"
    variant="secondary"
    className="min-h-[4.35rem] px-10 py-5 text-lg"
  >
    Book Direct
  </Button>
</motion.div>

          <motion.div
            className="mt-12 grid max-w-3xl gap-4 rounded-[1.75rem] border border-white/12 bg-white/[0.09] p-6 text-base font-black text-white/86 backdrop-blur md:grid-cols-2 md:p-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42 }}
          >
            <Link
              href={site.phoneHref}
              className="flex items-center gap-3 transition hover:text-white"
            >
              <FiPhone className="text-[var(--copper)]" size={20} />
              {site.phone}
            </Link>

            <p className="flex items-center gap-3">
              <FiMapPin className="text-[var(--copper)]" size={20} />
              {site.area}, Arkansas
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}