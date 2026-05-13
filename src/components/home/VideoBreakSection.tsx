import Link from "next/link";

export default function VideoBreakSection() {
  return (
    <section className="relative my-16 overflow-hidden bg-stone-950 md:my-24">
      <div className="relative h-[520px] w-full md:h-[620px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/cabin-video.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.28)_70%)]" />

        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/75 md:text-sm">
              At Living Water Cabins
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Slow mornings. Quiet water. Peaceful nights.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Step away from the noise and settle into a cabin stay made for
              relaxing, reconnecting, and enjoying the simple beauty of the
              Ouachita Mountains.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/cabins"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-stone-950 transition hover:bg-white/90"
              >
                View Cabins
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
              >
                Plan Your Stay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}