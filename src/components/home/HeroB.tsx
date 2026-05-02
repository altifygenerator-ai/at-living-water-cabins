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
    <section className="relative -mt-20 min-h-screen overflow-hidden bg-[var(--charcoal)] pt-20">
      <Image
        src={site.hero.image}
        alt={site.hero.imageAlt}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-black/25" />

      <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center">
        <motion.div
          className="max-w-5xl py-24"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <motion.p
            className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <span className="h-px w-10 bg-[var(--gold)]" />
            Creekside Cabin Rentals in Arkansas
          </motion.p>

          <motion.h1
            className="mt-6 max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-black leading-[0.86] tracking-[-0.075em] text-white text-balance"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
          >
            A Quiet Creekside Escape in the Ouachita Mountains
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/90 md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26 }}
          >
            Cabins and a family lodge between Glenwood and Mount Ida, Arkansas —
            built for slow mornings, creek views, and real time away.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
          >
            <Button href="/cabins">
              View Cabins
              <FiArrowRight />
            </Button>

            <Button href="/family-lodge" variant="secondary">
              View Family Lodge
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col gap-3 text-sm font-black text-white/88 sm:flex-row sm:items-center sm:gap-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42 }}
          >
            <Link
              href={site.phoneHref}
              className="flex items-center gap-2 transition hover:text-white"
            >
              <FiPhone className="text-[var(--gold)]" />
              Call to book: {site.phone}
            </Link>

            <p className="flex items-center gap-2 text-white/88">
              <FiMapPin className="text-[var(--gold)]" />
              {site.area}, Arkansas
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}