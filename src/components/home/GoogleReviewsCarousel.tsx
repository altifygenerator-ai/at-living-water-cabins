import Link from "next/link";
import { FiExternalLink, FiMapPin } from "react-icons/fi";

const googleReviewsLink = "https://share.google/iU8SfLVaIZzGR9Xt0";

const reviewImages = [
  "/images/reviews/google-1.png",
  "/images/reviews/google-2.png",
  "/images/reviews/google-3.png",
  "/images/reviews/google-4.png",
  "/images/reviews/google-5.png",
  "/images/reviews/google-6.png",
  "/images/reviews/google-7.png",
  "/images/reviews/google-8.png",
  "/images/reviews/google-9.png",
  
];

export default function GoogleReviewsCarousel() {
  const marqueeImages = [...reviewImages, ...reviewImages];

  return (
    <section className="relative overflow-hidden bg-[var(--linen)] px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <FiMapPin />
              Google Reviews
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[1.06] tracking-[-0.06em] text-[var(--espresso)] md:text-6xl">
              What guests are saying.
            </h2>
          </div>

          <Link
            href={googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[var(--forest)] px-6 py-4 text-sm font-black text-[var(--paper)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
          >
            Read More on Google
            <FiExternalLink />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white py-5 shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-28" />

          <div className="google-review-marquee flex w-max items-center gap-5 px-5">
            {marqueeImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="shrink-0 overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--linen)] shadow-sm"
              >
                <img
                  src={image}
                  alt="Google review for At Living Water Cabins"
                  className="h-[150px] w-auto object-contain md:h-[190px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}