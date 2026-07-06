import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCamera, FiHome, FiMapPin } from "react-icons/fi";
import { cabins } from "@/data/cabins";
import Container from "@/components/ui/Container";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  buildPageMetadata,
  itemListSchema,
  webPageSchema,
} from "@/lib/seo";

const pageTitle = "Photo Gallery";
const pageDescription =
  "Browse photos of At Living Water Cabins in Norman, Arkansas, including creekside views, porches, outdoor spaces, cabin interiors, kitchens, bedrooms, and bathrooms.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/gallery",
  keywords: [
    "At Living Water Cabins photos",
    "Norman Arkansas cabin photos",
    "creekside cabin gallery Arkansas",
    "Collier Creek cabins photos",
  ],
});

type GalleryImage = {
  src: string;
  cabinName: string;
  cabinSlug: string;
  label: string;
  type: "outside" | "inside";
};

function formatImageLabel(src: string) {
  const fileName =
    src
      .split("/")
      .pop()
      ?.replace(/\.(jpg|jpeg|png|webp)$/i, "") ?? "Cabin photo";

  return fileName
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\d+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getImageType(src: string): "outside" | "inside" {
  const lower = src.toLowerCase();

  const insideWords = [
    "bath",
    "bed",
    "bedroom",
    "kitchen",
    "living",
    "livingroom",
    "room",
    "interior",
    "table",
  ];

  if (insideWords.some((word) => lower.includes(word))) {
    return "inside";
  }

  return "outside";
}

const allGalleryImages: GalleryImage[] = cabins.flatMap((cabin) => {
  const images = cabin.images?.length ? cabin.images : [cabin.image];

  return images.map((src) => ({
    src,
    cabinName: cabin.name,
    cabinSlug: cabin.slug,
    label: formatImageLabel(src),
    type: getImageType(src),
  }));
});

const uniqueGalleryImages = allGalleryImages.filter(
  (image, index, array) =>
    index === array.findIndex((item) => item.src === image.src),
);

const outsideImages = uniqueGalleryImages.filter(
  (image) => image.type === "outside",
);

const insideImages = uniqueGalleryImages.filter(
  (image) => image.type === "inside",
);

const gallerySchema = itemListSchema({
  id: "/gallery",
  name: "At Living Water Cabins photo gallery",
  items: uniqueGalleryImages.slice(0, 40).map((image) => ({
    name: `${image.cabinName} ${image.label}`,
    url: image.src,
    image: image.src,
  })),
});

function GalleryCard({ image, priority = false }: { image: GalleryImage; priority?: boolean }) {
  return (
    <Link
      href={image.src}
      target="_blank"
      className="group block overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--paper)] shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--linen)]">
        <Image
          src={image.src}
          alt={`${image.cabinName} ${image.label}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-90" />

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--gold)]">
            {image.cabinName}
          </p>
          <p className="mt-1 text-sm font-black leading-snug text-white">
            {image.label}
          </p>
        </div>
      </div>
    </Link>
  );
}

function GallerySection({
  eyebrow,
  title,
  copy,
  images,
  icon,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  images: GalleryImage[];
  icon: React.ReactNode;
}) {
  return (
    <section className="section bg-[var(--paper)]">
      <Container>
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow flex items-center gap-2">
              {icon}
              {eyebrow}
            </p>

            <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.4rem)] font-black leading-[1.06] tracking-[-0.07em] text-[var(--espresso)] text-balance">
              {title}
            </h2>
          </div>

          <div className="pt-5">
            <p className="max-w-2xl text-base font-medium leading-8 text-[var(--muted)] md:text-lg">
              {copy}
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <GalleryCard
              key={image.src}
              image={image}
              priority={index < 3}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Photo Gallery", path: "/gallery" },
          ]),
          webPageSchema({
            path: "/gallery",
            title: pageTitle,
            description: pageDescription,
          }),
          gallerySchema,
        ]}
      />

      <main>
      <section className="relative -mt-20 min-h-[72vh] overflow-hidden bg-[var(--espresso)] pt-20 text-white">
        <Image
          src={outsideImages[0]?.src ?? "/images/hero/hero.jpg"}
          alt="At Living Water Cabins photo gallery"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.92),rgba(32,20,13,.58),rgba(32,20,13,.08))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,10,6,.18),transparent,rgba(17,10,6,.88))]" />

        <Container className="relative z-10 flex min-h-[calc(72vh-5rem)] items-center py-20">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-[var(--copper)] md:text-sm">
              <span className="h-px w-10 bg-[var(--copper)]" />
              Photo Gallery
            </p>

            <h1 className="mt-6 max-w-5xl text-[clamp(3.65rem,7.4vw,7.65rem)] font-black leading-[1.03] tracking-[-0.085em] text-[var(--paper)] text-balance">
              Take a look around before you book.
            </h1>

            <div className="pt-5">
              <p className="max-w-3xl text-xl font-semibold leading-9 text-white/88 md:text-2xl md:leading-10">
                Browse the creekside setting, porch spaces, outdoor areas, and
                cabin interiors at At Living Water Cabins.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#outside"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--paper)] px-6 py-4 text-sm font-black text-[var(--espresso)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--copper)] hover:text-white"
              >
                Outside Photos
                <FiArrowRight />
              </Link>

              <Link
                href="#inside"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--espresso)]"
              >
                Inside Photos
                <FiHome />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-20 -mt-12">
        <Container>
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[rgba(38,23,15,0.14)] bg-[rgba(255,249,239,0.95)] shadow-[var(--shadow)] backdrop-blur md:grid-cols-3">
            <div className="border-b border-[rgba(38,23,15,0.1)] p-5 md:border-b-0 md:border-r">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                Total Photos
              </p>
              <p className="mt-2 text-base font-black tracking-[-0.03em] text-[var(--espresso)]">
                {uniqueGalleryImages.length} images
              </p>
            </div>

            <div className="border-b border-[rgba(38,23,15,0.1)] p-5 md:border-b-0 md:border-r">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                Outside
              </p>
              <p className="mt-2 text-base font-black tracking-[-0.03em] text-[var(--espresso)]">
                {outsideImages.length} creekside & outdoor photos
              </p>
            </div>

            <div className="p-5">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                Inside
              </p>
              <p className="mt-2 text-base font-black tracking-[-0.03em] text-[var(--espresso)]">
                {insideImages.length} cabin interior photos
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div id="outside">
        <GallerySection
          eyebrow="Outside & Creekside"
          title="Creek views, porches, fire pits, and quiet outdoor space."
          copy="See the natural setting around the cabins, including creekside views, porch spaces, bridges, grills, fire pits, and the peaceful outdoor areas that give the property its tucked-away feel."
          images={outsideImages}
          icon={<FiMapPin />}
        />
      </div>

      <div id="inside">
        <GallerySection
          eyebrow="Inside The Cabins"
          title="Simple, comfortable cabin spaces made for settling in."
          copy="Browse bedrooms, bathrooms, kitchens, living areas, dining spaces, and the practical details guests use during a comfortable creekside stay."
          images={insideImages}
          icon={<FiHome />}
        />
      </div>

      <section className="section bg-[var(--espresso)] text-white">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-[var(--copper)]">
                <FiCamera />
                Ready to choose a cabin?
              </p>

              <h2 className="mt-4 max-w-3xl text-[clamp(2.4rem,5vw,4.8rem)] font-black leading-[1.06] tracking-[-0.065em] text-[var(--paper)] text-balance">
                Pick the cabin that fits your stay.
              </h2>

              <div className="pt-5">
                <p className="max-w-2xl text-base font-medium leading-8 text-white/76 md:text-lg">
                  Each cabin has its own feel, but they all keep the same quiet,
                  creekside pace near Glenwood, Mount Ida, and the Caddo River.
                </p>
              </div>
            </div>

            <Link
              href="/cabins"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--paper)] px-7 py-4 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-[var(--copper)] hover:text-white"
            >
              View Cabins
              <FiArrowRight />
            </Link>
          </div>
        </Container>
      </section>
      </main>
    </>
  );
}
