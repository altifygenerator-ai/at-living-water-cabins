type OwnerRezCabinWidgetProps = {
  cabinName: string;
  widgetUrl?: string;
};

export default function OwnerRezCabinWidget({
  cabinName,
  widgetUrl,
}: OwnerRezCabinWidgetProps) {
  if (!widgetUrl || widgetUrl.includes("WIDGET_ID_HERE")) {
    return (
      <div className="mt-8 rounded-[2rem] border border-dashed border-white/20 bg-white/[0.06] p-6">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--gold)]">
          Booking Coming Soon
        </p>

        <p className="mt-3 text-sm font-semibold leading-7 text-white/70">
          Online booking for {cabinName} is being finished now. Please call or
          use the contact page for current availability.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-4">
      <iframe
        src={widgetUrl}
        title={`${cabinName} Direct Booking`}
        className="-mt-36 h-[1250px] w-full rounded-[1.5rem] border-0 bg-white"
        loading="lazy"
      />
    </div>
  );
}