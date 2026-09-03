"use client";

import { useState, useEffect, useRef } from "react";
import { sliderData } from "./sliderData";
import SliderNavBar from "./SliderNavBar";
import CategoryPanel from "./CategoryPanel";
import SlideContent from "./SlideContent";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ─── Hero Slider ──────────────────────────────────────────────────────────────
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAnimKey((k) => k + 1);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 5500);
  };

  const advance = () => {
    setCurrentSlide((prev) => {
      const next = prev === sliderData.length - 1 ? 0 : prev + 1;
      setAnimKey((k) => k + 1);
      return next;
    });
  };

  const nextSlide = () => advance();

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev === 0 ? sliderData.length - 1 : prev - 1;
      setAnimKey((k) => k + 1);
      return next;
    });
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 5500);
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = sliderData[currentSlide];

  return (
    <div className="w-full flex flex-col mb-8">
      {/* ── Top Navigation Bar ── */}
      <div className="w-full bg-white">
        <div className="lg:container lg:mx-auto lg:px-4 lg:max-w-7xl">
          <SliderNavBar />
        </div>
      </div>

      {/* ── Main Slider Area (Edge-to-Edge Background) ── */}
      <div
        className={`w-full transition-colors duration-700 bg-gradient-to-br ${slide.bgColor} relative group`}
      >
        {/* Left / Right Navigation Arrows at screen edges */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-primary flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-40"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-primary flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-40"
          aria-label="Next Slide"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Full-width slider content — category panel overlaps from the left */}
        <div
          className="relative container mx-auto px-4 max-w-7xl min-h-[520px] sm:min-h-[480px] lg:h-[520px]"
        >
          {/* Slide Text + Image — offset right so it doesn't hide under the category panel */}
          <div className="w-full h-full flex items-center lg:pl-[240px]">
            <SlideContent
              slide={slide}
              animKey={animKey}
              currentSlide={currentSlide}
            />
          </div>

          {/* Category Sidebar — hidden on mobile, shown on lg+ */}
          <div className="hidden lg:block absolute top-0 left-4 h-full z-30">
            <CategoryPanel />
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center space-x-2 z-20 lg:pl-[240px]">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  index === currentSlide
                    ? "w-7 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
