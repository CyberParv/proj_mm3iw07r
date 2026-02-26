"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  { url: "/images/gallery-1.jpg", alt: "Modern patient lounge", caption: "Calming spaces designed for comfort." },
  { url: "/images/hero.jpg", alt: "Clinical consultation room", caption: "Private suites for care visits." },
  { url: "/images/about.jpg", alt: "Care team in discussion", caption: "Collaborative care planning." },
  { url: "/images/gallery-1.jpg", alt: "Imaging and diagnostics suite", caption: "Advanced diagnostics onsite." },
  { url: "/images/hero.jpg", alt: "Telehealth visit", caption: "Virtual care available anywhere." },
  { url: "/images/about.jpg", alt: "Wellness seminar", caption: "Community wellness programs." },
];

export default function GalleryMasonry({
  headline = "A look inside our facilities",
  subheadline = "Tour bright, welcoming clinics designed to make every visit feel reassuring.",
  images = defaultImages,
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 md:py-28" id="gallery">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(function (img, i) {
            return (
              <div
                key={i}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
                onClick={function () {
                  setSelectedImage(img);
                }}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={600}
                  height={600}
                  unoptimized={img.url.startsWith("http")}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                    <p className="text-sm text-white">{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={function () {
              setSelectedImage(null);
            }}
          >
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              width={1200}
              height={900}
              unoptimized={selectedImage.url.startsWith("http")}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
