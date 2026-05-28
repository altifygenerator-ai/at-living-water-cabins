import Container from "@/components/ui/Container";

export default function VideoBreakSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--espresso)] py-0">
      <div className="relative min-h-[680px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/cabin-video.MOV"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.78),rgba(17,10,6,.24)),linear-gradient(180deg,transparent,rgba(17,10,6,.62))]" />

        <Container className="relative z-10 flex min-h-[680px] items-end pb-14 md:pb-20">
          <div>
            <p className="max-w-3xl text-[clamp(3rem,7vw,6.6rem)] font-black leading-[1.05] tracking-[-0.08em] text-white text-balance">
              Scenic days outside. Quiet evenings back at the cabin.
            </p>

            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/76">
              The kind of place that makes the stay feel like part of the trip,
              not just where you sleep.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}