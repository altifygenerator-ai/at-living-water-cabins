"use client";

import Image from "next/image";
import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

type CabinGalleryProps = {
  images: string[];
  cabinName: string;
};

export default function CabinGallery({ images, cabinName }: CabinGalleryProps) {
  const galleryImages =
    images.length > 0 ? images : ["/images/cabins-hero.jpg"];

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeImage = galleryImages[activeIndex];

  function nextImage() {
    setActiveIndex((current) => (current + 1) % galleryImages.length);
  }

  function prevImage() {
    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  }

  return (
    <>
      <div className="grid gap-4">
        <div className="group relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--sand)] to-[var(--stone)] shadow-[var(--shadow-soft)]">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="relative block h-full w-full"
            aria-label={`Open ${cabinName} photo viewer`}
          >
            <Image
              src={activeImage}
              alt={`${cabinName} photo ${activeIndex + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-5 left-5 rounded-full bg-white px-5 py-3 text-sm font-black text-[var(--forest)] shadow-lg">
              View larger
            </div>

            <div className="absolute bottom-5 right-5 rounded-full bg-black/55 px-4 py-2 text-sm font-black text-white backdrop-blur">
              {activeIndex + 1} / {galleryImages.length}
            </div>
          </button>

          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-4 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-lg transition hover:bg-white"
                aria-label="Previous image"
              >
                <FiChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-lg transition hover:bg-white"
                aria-label="Next image"
              >
                <FiChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="max-h-[330px] overflow-y-auto pr-1">
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-4 xl:grid-cols-5">
            {galleryImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl border transition ${
                  activeIndex === index
                    ? "border-[var(--gold)] opacity-100 ring-2 ring-[var(--gold)]/30"
                    : "border-transparent opacity-75 hover:opacity-100"
                }`}
                aria-label={`View ${cabinName} thumbnail ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`${cabinName} thumbnail ${index + 1}`}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-5 top-5 z-20 grid size-12 place-items-center rounded-full bg-white text-black shadow-lg"
            aria-label="Close image viewer"
          >
            <FiX size={24} />
          </button>

          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  prevImage();
                }}
                className="absolute left-5 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-lg"
                aria-label="Previous image"
              >
                <FiChevronLeft size={26} />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                className="absolute right-5 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-lg"
                aria-label="Next image"
              >
                <FiChevronRight size={26} />
              </button>
            </>
          )}

          <div
            className="relative mx-auto h-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt={`${cabinName} expanded photo ${activeIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
            {activeIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}