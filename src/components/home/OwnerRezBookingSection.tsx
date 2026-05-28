export default function OwnerRezBookingSection() {
  return (
    <section
      id="book-direct"
      className="relative overflow-hidden bg-[var(--cream)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Book Direct
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--forest)] md:text-6xl">
            Check availability and book your stay.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Choose your dates, compare available cabins, and book directly with
            At Living Water Cabins.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:p-4">
          <iframe
            src="https://app.ownerrez.com/widgets/71bf9fd5ba614871b6d1eafa5454e2e6?view=form"
            title="At Living Water Cabins Direct Booking"
            className="-mt-54 h-[1250px] w-full rounded-[1.5rem] border-0 bg-white"
            loading="lazy"
          />
        </div>

        <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
          Booking directly helps avoid third-party booking fees and keeps your
          reservation handled through At Living Water Cabins.
        </p>
      </div>
    </section>
  );
}