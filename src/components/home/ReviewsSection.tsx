import { FiStar } from "react-icons/fi";
import Container from "@/components/ui/Container";

const reviews = [
  {
    name: "April",
    location: "Allen, Texas",
    source: "Airbnb",
    text: "This was such a peaceful place. Driving into the property was hilly with a couple of ponds, just beautiful. The cabins are right on the crystal clear creek. The covered porch facing the creek is so peaceful. The cabin is quaint, larger than we thought from the pictures and had everything we needed for our stay.",
  },
  {
    name: "Jim",
    location: "Vaughan, Mississippi",
    source: "Airbnb",
    text: "Great secluded area right on the creek. Private and quiet. Sandy was very responsive and has a very nice property and cabins.",
  },
  {
    name: "Grace",
    location: "Memphis, Tennessee",
    source: "Airbnb",
    text: "Loved everything about our stay. The perfect weekend getaway. We’ll be back!",
  },
  {
    name: "Dana",
    location: "Sterlington, Louisiana",
    source: "Airbnb",
    text: "Sandy was an amazing host. Gave us several local recommendations for fun things to do in the area. The location is beautiful and we can’t wait to stay there again!",
  },
  {
    name: "Sarah",
    location: "Shepherd, Texas",
    source: "Airbnb",
    text: "Driving up and over the hill and seeing the view of the mountains and beautiful creek was an experience all in itself. Can't wait to go back.",
  },
  {
    name: "Guest Review",
    location: "Facebook",
    source: "Facebook",
    text: "Had a great time, felt relaxed, cabin was fantastic, peaceful atmosphere with the stream just a few yards from the cabin. Enjoyed every minute. We will be back!",
  },
  {
    name: "Guest Review",
    location: "Facebook",
    source: "Facebook",
    text: "We spent two nights at the Love Cabin. The creek, view, and accommodations were just what we needed to recharge. Thank you so much for a wonderful time!",
  },
  {
    name: "Guest Review",
    location: "Facebook",
    source: "Facebook",
    text: "Clean, quiet, nice cold running creek, dog friendly.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-[var(--gold)]">
      {Array.from({ length: 5 }).map((_, index) => (
        <FiStar key={index} className="fill-current" size={16} />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="section bg-[var(--paper)]">
      <Container>
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Guest Reviews</p>

            <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.4rem)] font-black leading-[1.06] tracking-[-0.07em] text-[var(--espresso)] text-balance">
              Guests come for the creek, quiet, and peaceful setting.
            </h2>
          </div>

          <div className="pt-5">
            <p className="max-w-2xl text-base font-medium leading-8 text-[var(--muted)] md:text-lg">
              From weekend getaways to quiet creekside stays, guests often
              mention the peaceful atmosphere, clear water, porch views, and
              simple comfort of the cabins.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="flex min-h-[310px] flex-col rounded-[1.75rem] border border-[var(--border)] bg-[var(--linen)] p-6 shadow-[var(--shadow-soft)]"
            >
              <Stars />

              <p className="mt-5 flex-1 text-base font-semibold leading-8 text-[var(--espresso)]">
                “{review.text}”
              </p>

              <div className="mt-6 border-t border-[var(--border)] pt-5">
                <p className="text-sm font-black text-[var(--espresso)]">
                  {review.name}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                  {review.location} · {review.source}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}