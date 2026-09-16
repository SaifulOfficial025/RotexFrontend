"use client";

import React, { useRef, useEffect } from "react";
import Button from "../../components/button";
import {
  IoDocumentTextOutline,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import ReviewCard from "../../components/reviewCard";

const dummyReviews = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    company: "Apex Pharmaceuticals",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    date: "August 14, 2023",
    message:
      "The Pro-X scale has fundamentally changed our workflow. The stabilization time is practically zero, and the precision is flawless. Highly recommended.",
    photo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "University of Tech",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    date: "September 02, 2023",
    message:
      "Built like an absolute tank. We use it daily in our student labs and it handles the heavy usage without a single calibration issue.",
    photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "Global Testing Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    date: "October 10, 2023",
    message:
      "The GLP/GMP printout compliance feature saved us so much time during our last audit. The interface is intuitive and very responsive.",
  },
  {
    id: 4,
    name: "David Smith",
    company: "BioGen Research",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    date: "November 21, 2023",
    message:
      "Fantastic value for the money. Rivals the accuracy of scales that cost three times as much. Customer support was also extremely helpful.",
  },
];

export default function ProductDetails() {
  const reviewScrollRef = useRef(null);

  const scrollReviews = (direction) => {
    if (reviewScrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      reviewScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (reviewScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          reviewScrollRef.current;
        // If we've reached the end, smoothly scroll back to the beginning
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          reviewScrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollReviews("right");
        }
      }
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 flex flex-col gap-10 md:pl-8">
      <div>
        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-3">
          Product Description
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          The Pro-X series brings cutting edge technology to your laboratory.
          Designed for accuracy, reliability, and ease of use, it features an
          advanced electromagnetic force restoration weighing cell that delivers
          lightning-fast stabilization times and unparalleled precision. The
          durable stainless steel weighing pan and chemical-resistant housing
          ensure a long lifespan even in the harshest environments.
        </p>
        <p className="text-gray-600 leading-relaxed text-sm mt-4">
          With built-in GLP/GMP compliance features, you can easily trace every
          measurement. Seamlessly integrate the scale into your workflow using
          the integrated RS232 and USB interfaces to connect directly to
          printers, PCs, or LIMS systems.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-3">
          Technical Specifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex flex-col border-b border-gray-100 pb-2">
            <span className="font-bold text-gray-900">Capacity</span>
            <span>300g</span>
          </div>
          <div className="flex flex-col border-b border-gray-100 pb-2">
            <span className="font-bold text-gray-900">Readability</span>
            <span>0.01mg</span>
          </div>
          <div className="flex flex-col border-b border-gray-100 pb-2">
            <span className="font-bold text-gray-900">Pan Size</span>
            <span>90mm diameter</span>
          </div>
          <div className="flex flex-col border-b border-gray-100 pb-2">
            <span className="font-bold text-gray-900">Power Supply</span>
            <span>100-240V AC</span>
          </div>
        </div>
      </div>

      {/* ─── Download Catalog Button ─── */}
      <div className="mt-2">
        <Button
          variant="outline"
          showArrow={false}
          className="w-auto !py-3 border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 shadow-none hover:shadow-sm"
        >
          <span className="flex items-center gap-3 font-bold uppercase tracking-wider text-[13px]">
            <IoDocumentTextOutline size={20} />
            Download Product Catalog
          </span>
        </Button>
      </div>

      {/* ─── Product Reviews Section (Auto-Sliding) ─── */}
      <div className="mt-8 pt-8 border-t border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between mb-6 pr-2">
          <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest relative">
            Product Reviews
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => scrollReviews("left")}
              className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
              aria-label="Previous Review"
            >
              <IoChevronBack size={14} />
            </button>
            <button
              onClick={() => scrollReviews("right")}
              className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
              aria-label="Next Review"
            >
              <IoChevronForward size={14} />
            </button>
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="relative -mx-4 px-4 pb-4">
          <div
            ref={reviewScrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {dummyReviews.map((review) => (
              <div
                key={review.id}
                className="w-[300px] sm:w-[350px] flex-shrink-0 snap-start"
              >
                <ReviewCard
                  name={review.name}
                  company={review.company}
                  avatar={review.avatar}
                  date={review.date}
                  message={review.message}
                  photo={review.photo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
