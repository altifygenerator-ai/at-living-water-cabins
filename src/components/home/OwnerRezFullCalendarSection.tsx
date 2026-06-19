export default function OwnerRezFullCalendarSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--linen)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">
            Full Availability Calendar
          </p>

          <h2 className="mt-4 text-4xl font-black leading-[1.08] tracking-[-0.055em] text-[var(--forest)] md:text-6xl">
            Browse open dates by cabin.
          </h2>

          <div className="pt-5">
            <p className="max-w-2xl text-base font-medium leading-8 text-[var(--muted)] md:text-lg">
              Not sure which dates you want yet? Use the calendar below to see
              available and unavailable dates across the cabins before choosing
              your stay.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:p-4">
          <div className="h-[780px] overflow-y-auto overflow-x-hidden rounded-[1.5rem] bg-[#fffaf2] [-webkit-overflow-scrolling:touch] md:h-[760px] md:overflow-hidden">
            <iframe
              src="https://app.ownerrez.com/widgets/7f9d4268f4b944f1bc3db5ca19300809?view=form"
              title="At Living Water Cabins Full Availability Calendar"
              className="-mt-[120px] h-[1100px] w-full border-0 bg-[#fffaf2] md:-mt-[135px] md:h-[980px]"
              loading="lazy"
              scrolling="no"
            />
          </div>
        </div>

        <p className="mt-5 text-sm font-medium leading-6 text-[var(--muted)]">
          Calendar availability is managed through OwnerRez and synced with
          connected booking channels.
        </p>
      </div>
    </section>
  );
}