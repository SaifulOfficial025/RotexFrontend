"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  IoChevronUp,
  IoChevronDown,
  IoExpand,
  IoClose,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";

const dummyImages = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?q=80&w=800&auto=format&fit=crop",
];

export default function ProductImage({ images = dummyImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const visibleCount = 3;

  const handleUp = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleDown = () => {
    if (startIndex + visibleCount < images.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  // Close fullscreen on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when fullscreen is open
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullscreen]);

  const visibleThumbnails = images.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 h-auto md:h-[550px] w-full">
      {/* ─── Thumbnails Sidebar ─── */}
      <div className="w-full md:w-[110px] flex md:flex-col gap-3 shrink-0">
        <div className="flex flex-row md:flex-col gap-3 overflow-hidden flex-1">
          {visibleThumbnails.map((img, idx) => {
            const actualIndex = startIndex + idx;
            const isActive = actualIndex === currentIndex;
            return (
              <button
                key={actualIndex}
                onClick={() => setCurrentIndex(actualIndex)}
                className={`relative w-[100px] md:w-full h-[100px] md:h-[130px] flex-shrink-0 bg-[#f9f9f9] border transition-all duration-300 ${
                  isActive
                    ? "border-primary opacity-100 shadow-sm"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${actualIndex + 1}`}
                  fill
                  className="object-cover p-2 mix-blend-multiply"
                />
              </button>
            );
          })}
        </div>

        {/* Thumbnail Navigation Controls */}
        {images.length > visibleCount && (
          <div className="hidden md:flex flex-row gap-2 h-10 w-full shrink-0">
            <button
              onClick={handleUp}
              disabled={startIndex === 0}
              className="flex-1 bg-[#f5f5f5] flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-[#ebebeb] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll Up"
            >
              <IoChevronUp size={18} />
            </button>
            <button
              onClick={handleDown}
              disabled={startIndex + visibleCount >= images.length}
              className="flex-1 bg-[#f5f5f5] flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-[#ebebeb] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll Down"
            >
              <IoChevronDown size={18} />
            </button>
          </div>
        )}
      </div>

      {/* ─── Main Image Viewer ─── */}
      <div className="flex-1 relative bg-[#fafafa] flex items-center justify-center overflow-hidden group min-h-[300px]">
        {/* Main Image */}
        <div className="relative w-full h-full p-4 sm:p-10 transition-transform duration-700 ease-in-out group-hover:scale-105">
          <Image
            src={images[currentIndex]}
            alt="Product image"
            fill
            className="object-contain mix-blend-multiply"
            priority
          />
        </div>

        {/* Fullscreen Expand Button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute bottom-5 left-5 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.08)] text-gray-500 hover:text-gray-900 hover:scale-110 transition-all duration-300 z-10"
          aria-label="View Fullscreen"
        >
          <IoExpand size={20} />
        </button>
      </div>

      {/* ─── Fullscreen Modal ─── */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center animate-in fade-in duration-200">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors z-50 shadow-sm"
            aria-label="Close Fullscreen"
          >
            <IoClose size={24} />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[85vh] p-4 md:p-12">
            <Image
              src={images[currentIndex]}
              alt="Fullscreen Product Image"
              fill
              className="object-contain"
            />
          </div>

          {/* Fullscreen Navigation Left/Right */}
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev > 0 ? prev - 1 : images.length - 1,
              )
            }
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg border border-gray-100 hover:bg-gray-50 rounded-full flex items-center justify-center text-gray-700 transition-colors z-50"
            aria-label="Previous Image"
          >
            <IoChevronBack size={24} />
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev < images.length - 1 ? prev + 1 : 0,
              )
            }
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg border border-gray-100 hover:bg-gray-50 rounded-full flex items-center justify-center text-gray-700 transition-colors z-50"
            aria-label="Next Image"
          >
            <IoChevronForward size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
