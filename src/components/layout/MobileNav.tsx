"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="focus-ring rounded-full border border-[var(--border)] bg-white/70 p-3 text-[var(--forest)]"
        aria-label="Open menu"
      >
        <FiMenu size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-[var(--forest)]/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ml-auto h-full w-[86%] max-w-sm bg-[var(--cream)] p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-black text-[var(--forest)]">{site.name}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--water-dark)]">
                    Cabin Rentals
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-[var(--border)] p-3"
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>

              <nav className="mt-10 grid gap-4">
                {site.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl bg-white/70 px-5 py-4 text-lg font-black text-[var(--forest)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href={site.phoneHref}
                className="btn btn-primary mt-8 w-full"
                onClick={() => setOpen(false)}
              >
                <FiPhone />
                Call to Book
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}