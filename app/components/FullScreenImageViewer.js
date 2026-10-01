"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import Logo from "@/public/images/Rotex-Logo-1.png";

export default function FullScreenImageViewer({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}) {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync state if initialIndex changes when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Close fullscreen on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when fullscreen is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;
  if (!images || images.length === 0) return null;

  return createPortal(
    <div className="fixed inset-0 bg-white z-[999999] flex items-center justify-center animate-in fade-in duration-200">
      {/* Logo at top left */}
      <div className="absolute top-6 left-6 z-50">
        <Image src={Logo} alt="Rotex Logo" className="h-10 w-auto" />
      </div>

      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors z-50 shadow-sm"
        aria-label="Close Fullscreen"
      >
        <IoClose size={24} />
      </button>

      <div className="relative w-full h-full max-w-6xl max-h-[85vh] pb-[100px] p-4 md:p-12">
        <Image
          src={images[Math.max(0, Math.min(currentIndex, images.length - 1))]}
          alt="Fullscreen Image"
          fill
          className="object-contain"
        />
      </div>

      {/* Fullscreen Navigation Left/Right */}
      {images.length > 1 && (
        <>
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
        </>
      )}

      {/* Fullscreen Bottom Thumbnails */}
      {images.length > 1 && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 overflow-x-auto max-w-[90vw] md:max-w-3xl px-4 py-2 z-50 rounded-xl"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-[60px] h-[60px] md:w-[70px] md:h-[70px] flex-shrink-0 bg-white transition-all duration-300 rounded-lg overflow-hidden ${
                currentIndex === idx
                  ? "border-[3px] border-primary opacity-100 shadow-lg scale-110"
                  : "border-transparent opacity-50 hover:opacity-100 hover:scale-105"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body,
  );
}
