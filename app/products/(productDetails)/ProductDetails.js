"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "../../components/button";
import {
  IoDocumentTextOutline,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import ReviewCard from "../../components/reviewCard";
import ProductReviewSection from "./ProductReviewSection";
import AboutBrandSection from "./AboutBrandSection";
import Logo from "@/public/images/Rotex-Logo-1.png"; // For "About Brand" fallback or dummy data

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
    photo:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop",
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
    photo:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
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

const tabs = ["Product description", "Review", "About Brand", "Download"];

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState("Product description");
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

  // Auto-sliding functionality for reviews
  useEffect(() => {
    if (activeTab !== "Review") return;

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
  }, [activeTab]);

  return (
    <div className="mt-4">
      {/* ─── Tabs Header ─── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
      `,
        }}
      />
      <div
        className="hidden md:flex overflow-x-auto flex-wrap justify-center border-b border-gray-200 mb-6 md:mb-8 gap-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-3 px-2 text-[14px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap shrink-0 ${
              activeTab === tab
                ? "text-primary"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-primary"></span>
            )}
          </button>
        ))}
      </div>

      {/* ─── Tabs Content ─── */}
      <div className="min-h-[400px] flex flex-col gap-12 md:gap-0">
        {/* Tab: Product description */}
        <div
          className={`animate-in fade-in duration-300 flex-col gap-10 ${activeTab === "Product description" ? "flex" : "flex md:hidden"}`}
        >
          <h2 className="md:hidden text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Product Description
          </h2>
          <div>
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-3">
              Product Description
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              The Pro-X series brings cutting edge technology to your
              laboratory. Designed for accuracy, reliability, and ease of use,
              it features an advanced electromagnetic force restoration weighing
              cell that delivers lightning-fast stabilization times and
              unparalleled precision. The durable stainless steel weighing pan
              and chemical-resistant housing ensure a long lifespan even in the
              harshest environments.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-4">
              With built-in GLP/GMP compliance features, you can easily trace
              every measurement. Seamlessly integrate the scale into your
              workflow using the integrated RS232 and USB interfaces to connect
              directly to printers, PCs, or LIMS systems.
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
        </div>

        {/* Tab: Review */}
        <div
          className={`animate-in fade-in duration-300 flex-col gap-4 ${activeTab === "Review" ? "flex" : "flex md:hidden"}`}
        >
          <h2 className="md:hidden text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Reviews
          </h2>
          <ProductReviewSection productName="Pro-X series" />
        </div>

        {/* Tab: About Brand */}
        <div
          className={`animate-in fade-in duration-300 flex-col gap-4 ${activeTab === "About Brand" ? "flex" : "flex md:hidden"}`}
        >
          <h2 className="md:hidden text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            About Brand
          </h2>
          <AboutBrandSection />
        </div>

        {/* Tab: Download */}
        <div
          className={`animate-in fade-in duration-300 flex-col gap-4 ${activeTab === "Download" ? "flex" : "flex md:hidden"}`}
        >
          <h2 className="md:hidden text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Downloads
          </h2>
          <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-2">
            Downloads
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            Get detailed product manuals, technical data sheets, and compliance
            certificates in PDF format.
          </p>
          <div className="mt-2">
            <Button
              variant="outline"
              showArrow={false}
              className="w-auto !py-3 border-2 border-primary hover:bg-primary text-primary hover:text-white shadow-none hover:shadow-sm transition-all"
            >
              <span className="flex items-center gap-3 font-bold uppercase tracking-wider text-[13px]">
                <IoDocumentTextOutline size={20} />
                Download Product Catalog (PDF)
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
