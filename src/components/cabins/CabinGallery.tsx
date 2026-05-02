"use client";

import Image from "next/image";
import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

type CabinGalleryProps = {
  images: string[];
  cabinName: string;
};

export default function CabinGallery({ images, cabinName }: CabinGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeImage = images[activeIndex] ?? "/images/cabins-hero.jpg";

  function nextImage() {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  function prevImage() {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }

  return (
    <>
      <div className="grid gap-4">
        <button
          onClick={() => setLightboxOpen(true)}
          className="group relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--sand)] to-[var(--stone)] shadow-[var(--shadow-soft)]"
        >
          <Image
            src={activeImage}
            alt={`${cabinName} photo`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-5 left-5 rounded-full bg-white px-5 py-3 text-sm font-black text-[var(--forest)] shadow-lg">
            View larger
          </div>
        </button>

        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl border transition ${
                activeIndex === index
                  ? "border-[var(--gold)]"
                  : "border-transparent opacity-75 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`${cabinName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/92 p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-5 top-5 z-10 grid size-12 place-items-center rounded-full bg-white text-black"
            aria-label="Close image viewer"
          >
            <FiX size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-5 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-black"
            aria-label="Previous image"
          >
            <FiChevronLeft size={26} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-5 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-black"
            aria-label="Next image"
          >
            <FiChevronRight size={26} />
          </button>

          <div className="relative mx-auto h-full max-w-6xl">
            <Image
              src={activeImage}
              alt={`${cabinName} expanded photo`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}