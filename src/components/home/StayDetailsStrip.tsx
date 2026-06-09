import Container from "@/components/ui/Container";

const items = [
  { label: "Stay Type", value: "Creekside Cabins" },
  { label: "Setting", value: "Along Collier Creek" },
  { label: "Booking", value: "Book Direct Online" },
  { label: "Cabins", value: "Faith, Hope, Love & Peace" },
  { label: "WiFi", value: "Starlink WiFi" },
];

export default function StayDetailsStrip() {
  return (
    <section className="relative z-20 -mt-12">
      <Container>
        <div className="grid overflow-hidden rounded-[1.75rem] border border-[rgba(38,23,15,0.14)] bg-[rgba(255,249,239,0.94)] shadow-[var(--shadow)] backdrop-blur md:grid-cols-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="border-b border-[rgba(38,23,15,0.1)] p-5 md:border-b-0 md:border-r last:md:border-r-0"
            >
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                {item.label}
              </p>

              <p className="mt-2 text-base font-black leading-snug tracking-[-0.03em] text-[var(--espresso)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}