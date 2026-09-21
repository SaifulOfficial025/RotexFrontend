"use client";

import React, { useRef, useEffect } from "react";
import {
  IoStarOutline,
  IoStar,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import ReviewCard from "../../components/reviewCard";
import Button from "../../components/button";

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
];

export default function ProductReviewSection({
  productName = "Smart watches wood edition",
}) {
  const reviewScrollRef = useRef(null);

  const scrollReviews = (direction) => {
    if (reviewScrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      reviewScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (reviewScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          reviewScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          reviewScrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollReviews("right");
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-12 animate-in fade-in duration-300">
      {/* ─── Left Column: Ratings Summary & Reviews ─── */}
      <div className="w-full lg:w-1/2 flex flex-col gap-10">
        {/* Rating Summary */}
        <div className="flex flex-col items-center">
          <div className="flex text-gray-400 text-2xl gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <IoStarOutline key={i} />
            ))}
          </div>
          <span className="text-gray-500 text-sm mb-6">0 reviews</span>

          <div className="w-full flex flex-col gap-3">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3 w-full">
                {/* Stars */}
                <div className="flex text-[#f1c40f] text-sm shrink-0 w-[80px]">
                  {[...Array(5)].map((_, i) =>
                    i < star ? (
                      <IoStar key={i} />
                    ) : (
                      <IoStarOutline key={i} className="text-gray-300" />
                    ),
                  )}
                </div>
                {/* Progress Bar */}
                <div className="flex-1 h-2.5 bg-gray-100 rounded-sm"></div>
                {/* Count */}
                <span className="text-gray-500 text-sm w-4 text-right">0</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="w-full overflow-hidden">
          <div className="flex items-center justify-between mb-4 pr-2">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest relative">
              Customer Reviews
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
          <div className="relative -mx-2 px-2 pb-4">
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
                  className="w-[300px] sm:w-[350px] flex-shrink-0 snap-start h-[250px]"
                >
                  <ReviewCard
                    name={review.name}
                    company={review.company}
                    hideAvatar={true}
                    date={review.date}
                    message={review.message}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Right Column: Review Form ─── */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <h3 className="text-[17px] font-bold text-gray-800 mb-4">
          Review “{productName}”
        </h3>
        <p className="text-gray-500 text-[15px] mb-6">
          Your email address will not be published. Required fields are marked{" "}
          <span className="text-red-500">*</span>
        </p>

        <form className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <label className="text-gray-700 text-[15px]">
              Your rating <span className="text-red-500">*</span> :
            </label>
            <div className="flex text-gray-400 gap-1 ml-2 text-lg">
              {[...Array(5)].map((_, i) => (
                <IoStarOutline
                  key={i}
                  className="cursor-pointer hover:text-gray-600 transition-colors"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-[15px]">
              Your review <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full h-40 border border-gray-200 p-3 focus:outline-none focus:border-primary transition-colors resize-y"
              required
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-[15px]">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-200 p-3 focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-[15px]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-200 p-3 focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-[15px]">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-200 p-3 focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div className="w-fit">
            <Button
              type="submit"
              variant="primary"
              showArrow={false}
              className="!py-3 !px-8 text-[13px]"
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
