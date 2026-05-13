import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHome, FiUsers } from "react-icons/fi";
import type { Cabin } from "@/data/cabins";

type CabinCardProps = {
  cabin: Cabin;
};

export default function CabinCard({ cabin }: CabinCardProps) {
  return (
    <Link
      href={`/cabins/${cabin.slug}`}
      className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[var(--sand)] to-[var(--stone)]">
        <Image
          src={cabin.image}
          alt={`${cabin.name} cabin`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />

        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--forest)] shadow-lg backdrop-blur">
          View Cabin
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-black text-[var(--forest)]">
          {cabin.name}
        </h3>

        <p className="mt-3 text-sm font-semibold leading-7 text-[var(--muted)]">
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

        <div className="mt-6 flex items-center gap-2 text-sm font-black text-[var(--forest)]">
          View Cabin
          <FiArrowRight className="transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}