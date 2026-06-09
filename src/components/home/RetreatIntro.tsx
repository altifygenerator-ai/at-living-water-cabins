import Image from "next/image";
import Container from "@/components/ui/Container";

export default function RetreatIntro() {
  return (
    <section className="section bg-[var(--linen)]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative min-h-[650px] overflow-hidden rounded-[2.25rem] shadow-[var(--shadow-soft)]">
            <Image
              src="/images/cabins/PeacePorchFull.jpg"
              alt="Porch view at At Living Water Cabins"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 max-w-sm rounded-[1.5rem] border border-white/15 bg-black/28 p-5 text-white shadow-[var(--shadow)] backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--copper)]">
                Creekside Atmosphere
              </p>
              <p className="mt-2 text-sm font-semibold leading-7 text-white/82">
                Porch views, quiet mornings, and a setting that feels personal
                instead of crowded.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative min-h-[280px] overflow-hidden rounded-[1.6rem] shadow-[var(--shadow-soft)] sm:translate-y-10">
                <Image
                  src="/images/cabins/riverflowers.jpg"
                  alt="Flowers near the creek"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative min-h-[360px] overflow-hidden rounded-[1.6rem] shadow-[var(--shadow-soft)]">
                <Image
                  src="/images/cabins/LoveBridge.jpg"
                  alt="Bridge near At Living Water Cabins"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8">
              <p className="eyebrow">At Living Water Cabins</p>

              <h2 className="mt-5 text-[clamp(2.7rem,5.4vw,5.2rem)] font-black leading-[1.05] tracking-[-0.075em] text-[var(--espresso)] text-balance">
                More view, less noise.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
                At Living Water Cabins is built around the kind of stay people
                actually want: peaceful surroundings, scenic outdoor space,
                comfortable cabins, and enough room to slow down for a while.
              </p>

              <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
                It should feel tucked away, warm, and personal, not like a
                crowded resort or another tourism guide page.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}