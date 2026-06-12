export default function OwnerRezBookingSection() {
  return (
    <section
      id="book-direct"
      className="relative overflow-hidden bg-[var(--cream)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">
            Book Direct
          </p>

          <h2 className="mt-4 text-4xl font-black leading-[1.08] tracking-[-0.055em] text-[var(--forest)] md:text-6xl">
            Check available dates.
          </h2>

          <div className="pt-5">
            <p className="max-w-2xl text-base font-medium leading-8 text-[var(--muted)] md:text-lg">
              Enter your dates to see which cabins are open. You can compare
              available cabins and continue to booking when you are ready.
            </p>
          </div>
        </div>
<div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:p-4">
  <div className="h-[760px] overflow-y-auto overflow-x-hidden rounded-[1.5rem] bg-[#fff9ef] [-webkit-overflow-scrolling:touch] md:h-[750px] md:overflow-hidden">
    <iframe
      src="https://app.ownerrez.com/widgets/8562bd8617914715aaaca067c8b0c3bb?view=form"
      title="At Living Water Cabins Availability Search"
      className="-mt-[155px] h-[1150px] w-full border-0 bg-[#fff9ef] md:-mt-[200px] md:h-[950px]"
      loading="lazy"
      scrolling="no"
    />
  </div>
</div>

        <p className="mt-5 text-sm font-medium leading-6 text-[var(--muted)]">
          You can check available dates before entering guest details. Personal
          and payment information is only needed when you continue with a
          reservation.
        </p>
      </div>
    </section>
  );
}