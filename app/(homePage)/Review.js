"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ReviewCard from "../components/reviewCard";

const dummyReviews = [
  {
    name: "Dr. Sarah Jenkins",
    company: "BioTech Research Labs",
    date: "October 12, 2023",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    message: "ROTEX International has been our go-to supplier for laboratory equipment. Their precision scales and glassware are top-notch. Highly recommend their prompt service.",
    photo: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    company: "Nexus Pharmaceuticals",
    date: "August 04, 2023",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    message: "The chemical reagents we procured were of the highest purity. Their team is extremely knowledgeable and helped us find exactly what we needed for our QA process.",
  },
  {
    name: "Amanda Rivera",
    company: "AgriCorp Solutions",
    date: "November 21, 2023",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    message: "We've integrated their digital truck scales into our grain processing facilities. Outstanding durability and accuracy. Excellent after-sales support as well.",
    photo: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "David Smith",
    company: "Pinnacle Water Treatment",
    date: "January 15, 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    message: "Reliability is key in water treatment. ROTEX provides robust sensors and analytical equipment that we trust 24/7 to keep our systems running smoothly.",
  },
  {
    name: "Elena Rostova",
    company: "Global Textiles Ltd.",
    date: "February 28, 2024",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    message: "Great partner for industrial measurement tools. Quick delivery, transparent pricing, and products that withstand harsh factory environments without fail.",
    photo: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?q=80&w=400&auto=format&fit=crop"
  }
];

export default function Review() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Avoid synchronous state updates inside effect to satisfy strict ESLint rules
    requestAnimationFrame(() => {
      onInit(emblaApi);
      onSelect(emblaApi);
    });

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Don&apos;t just take our word for it. Discover how we&apos;ve helped
          industry leaders achieve precision, reliability, and success in their
          operations.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Carousel Viewport */}
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex -ml-4 sm:-ml-6 py-4">
            {dummyReviews.map((review, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 sm:pl-6"
              >
                <div className="h-full">
                  <ReviewCard {...review} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={scrollPrev} 
          className="absolute left-0 sm:left-4 top-[45%] -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary shadow-xl hover:shadow-2xl transition-all z-10 hover:scale-110"
          aria-label="Previous Review"
        >
          <FaChevronLeft className="text-sm md:text-xl" />
        </button>
        <button 
          onClick={scrollNext} 
          className="absolute right-0 sm:right-4 top-[45%] -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary shadow-xl hover:shadow-2xl transition-all z-10 hover:scale-110"
          aria-label="Next Review"
        >
          <FaChevronRight className="text-sm md:text-xl" />
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center mt-10 gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`rounded-full transition-all duration-300 ease-in-out ${
                index === selectedIndex 
                  ? "bg-primary w-8 h-2.5" 
                  : "bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5"
              }`}
              aria-label={`Go to review group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
