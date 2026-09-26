"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/button";
import {
  IoDocumentTextOutline,
  IoChevronBack,
  IoChevronForward,
  IoGridOutline,
} from "react-icons/io5";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa6";

import Logo from "@/public/images/Rotex-Logo-1.png";

export default function ProductDetailsRightSide() {
  const [selectedVariant, setSelectedVariant] = useState(
    "Standard (100g/0.1mg)",
  );

  const variants = [
    "Standard (100g/0.1mg)",
    "Advanced (200g/0.1mg)",
    "Pro (300g/0.01mg)",
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full h-full bg-white md:pl-8">
      {/* ─── Product Navigation (Top Right) ─── */}
      <div className="flex justify-end -mb-4">
        <div className="flex items-center gap-4 text-gray-500">
          <button
            aria-label="Previous Product"
            title="Previous Product"
            className="hover:text-primary transition-colors"
          >
            <IoChevronBack size={20} />
          </button>
          <button
            aria-label="All Products"
            title="All Products"
            className="hover:text-primary transition-colors"
          >
            <IoGridOutline size={20} />
          </button>
          <button
            aria-label="Next Product"
            title="Next Product"
            className="hover:text-primary transition-colors"
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      </div>
      {/* ─── Title & Brand Logo (2 Columns) ─── */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight flex-1">
          Professional Digital Laboratory Scale Series Pro-X
        </h1>
        <Link
          href="#"
          className="flex-shrink-0 group hover:opacity-80 transition-opacity mt-1"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            <Image
              src={Logo}
              alt="Brand Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
      </div>

      {/* ─── Price Section ─── */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-lg md:text-xl text-gray-400 font-bold line-through">
            ৳50,000
          </span>
          <span className="bg-[#fff1f2] text-[#f43f5e] font-bold text-[11px] uppercase tracking-wider px-2 py-1 ">
            Save 10%
          </span>
        </div>
        <span className="text-3xl md:text-4xl font-black text-primary tracking-tight">
          ৳45,000
        </span>
      </div>

      {/* ─── Short Description ─── */}
      <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-medium">
        High-precision digital scale engineered for rigorous laboratory
        environments. Features an intuitive touch interface, rapid
        stabilization, and seamless data export capabilities ensuring
        uncompromising accuracy and workflow efficiency in chemical analysis.
      </p>

      {/* ─── Variant Selection ─── */}
      <div className="flex flex-col gap-3">
        <span className="text-[13px] font-bold text-gray-900 uppercase tracking-widest">
          Available Variants
        </span>
        <div className="flex flex-wrap gap-3 mt-1">
          {variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-4 py-2.5 border-2 text-[13.5px] font-bold transition-all duration-200 ${
                selectedVariant === variant
                  ? "border-primary bg-primary/5 text-primary shadow-sm"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Add to Cart Section ─── */}
      <div className="flex flex-col gap-6 pt-4 pb-6 border-b border-gray-100">
        <Button
          variant="primary"
          showArrow={false}
          className="w-full sm:w-max shadow-lg shadow-primary/20 hover:shadow-primary/40 px-12 py-3"
        >
          ADD TO CART
        </Button>
      </div>

      {/* ─── SKU, Categories, Share ─── */}
      <div className="flex flex-col gap-3 text-[15px] text-gray-600">
        <p>
          <span className="font-bold text-gray-900">SKU:</span> MNK-0147
        </p>
        <p>
          <span className="font-bold text-gray-900">Categories:</span>{" "}
          Accessories, Clocks
        </p>
        <div className="flex items-center gap-3">
          <span className="font-bold text-gray-900">Share:</span>
          <div className="flex items-center gap-3 text-gray-500 text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="hover:text-primary transition-colors"
            >
              <FaXTwitter size={16} />
            </a>
            {/* <a href="#" aria-label="Pinterest" className="hover:text-primary transition-colors"><FaPinterestP size={16} /></a> */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
            {/* <a href="#" aria-label="Telegram" className="hover:text-primary transition-colors"><FaTelegram size={16} /></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
