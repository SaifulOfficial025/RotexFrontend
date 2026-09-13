"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// Dummy brand data - using clean SVG logos
const dummyBrands = [
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Intel_logo_%282020%2C_light_blue%29.svg",
  },
  {
    name: "TCS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
  },
];

export default function BrandWeRepresentSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1.0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-white  overflow-hidden flex flex-col">
      {/* Header Section - Contained */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Brands we represent
            </h2>
            <div className="w-20 h-1.5 bg-primary mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
              We partner with industry-leading manufacturers globally to bring
              you the highest quality products and solutions.
            </p>
          </div>

          {/* Manual Controllers (Commented out by user) */}
          {/* <div className="flex items-center gap-3">
            <button 
              onClick={scrollPrev} 
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all active:scale-95 bg-white z-10 relative"
              aria-label="Previous Brand"
            >
              <FaChevronLeft size={16} />
            </button>
            <button 
              onClick={scrollNext} 
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all active:scale-95 bg-white z-10 relative"
              aria-label="Next Brand"
            >
              <FaChevronRight size={16} />
            </button>
          </div> */}
        </div>
      </div>

      {/* Carousel Viewport - Edge to Edge */}
      <div className="w-full">
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing px-4"
          ref={emblaRef}
        >
          <div className="flex -ml-4 md:-ml-6 py-2">
            {dummyBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_16.666%] min-w-0 pl-4 md:pl-6"
              >
                {/* Brand Card */}
                <div className="bg-white  p-6 h-32 md:h-40 flex items-center justify-center hover:shadow-xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden">
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>

                  {/* Logo Image */}
                  <div className="relative w-full h-full transition-all duration-500 group-hover:scale-110 flex items-center justify-center">
                    {/* Using standard img to avoid Next.js external domain errors for dummy data */}
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="object-contain max-h-[80px] max-w-[80%] drop-shadow-sm pointer-events-none select-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
