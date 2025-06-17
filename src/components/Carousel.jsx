import React, { useState } from "react";

const carouselImages = [
  "/images/works/carousel1.webp",
  "/images/works/carousel2.webp",
  "/images/works/carousel3.webp",
  "/images/works/carousel4.webp",
  "/images/works/carousel5.webp"
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setIndex((index + 1) % carouselImages.length);

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-12">Our Works</h2>
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
        <img
          src={carouselImages[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-80 sm:h-[28rem] object-cover"
        />
        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
        </button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${index === i ? "bg-red-600" : "bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};