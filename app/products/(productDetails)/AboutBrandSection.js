"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import ProductCard from "../../components/productCard";

export default function AboutBrandSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 animate-in fade-in duration-300">
      {/* ─── Left Column (30%) ─── */}
      <div className="w-full lg:w-[30%] flex flex-col gap-6">
        {/* 1st row: Brand logo */}
        <div className="bg-white  p-2 flex items-center justify-left w-full ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google Instruments"
            className="w-auto h-12 object-contain mix-blend-multiply hover:scale-110 transition-all duration-300 cursor-pointer"
          />
        </div>

        {/* 2nd row: Short description */}
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-gray-900 mb-3">
            Google Instruments
          </h4>
          <p className="text-gray-600 leading-relaxed text-sm">
            Founded in 1998, Google Instruments has been at the forefront of
            laboratory precision technology for over two decades. Renowned for
            their commitment to accuracy and durable design, their equipment is
            trusted by leading research facilities, universities, and industrial
            laboratories worldwide.
          </p>
        </div>

        {/* 3rd row: More products link */}
        <div className="mt-2 hidden lg:block">
          <Link
            href="/brands/google-instruments"
            className="inline-flex items-center text-primary font-bold text-[13px] uppercase tracking-wider hover:text-gray-900 transition-colors group"
          >
            More products from this brand
            <FaArrowRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={14}
            />
          </Link>
        </div>
      </div>

      {/* ─── Right Column (70%) ─── */}
      <div className="w-full lg:w-[70%]">
        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-6">
          Products from Google Instruments
        </h3>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .hide-scroll::-webkit-scrollbar { display: none; }
        `,
          }}
        />
        <div
          className="flex overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-4 hide-scroll snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="w-[38%] sm:w-auto shrink-0 snap-start">
            <ProductCard
              title="Precision Analytical Balance"
              category="Laboratory"
              price="$850.00"
              image="/images/default-product.png"
              sale={false}
            />
          </div>
          <div className="w-[38%] sm:w-auto shrink-0 snap-start">
            <ProductCard
              title="Digital Moisture Analyzer"
              category="Laboratory"
              price="$1,200.00"
              image="/images/default-product.png"
              sale={true}
            />
          </div>
          <div className="w-[38%] sm:w-auto shrink-0 snap-start">
            <ProductCard
              title="High-Capacity Bench Scale"
              category="Industrial"
              price="$600.00"
              image="/images/default-product.png"
              sale={false}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end lg:hidden">
          <Link
            href="/brands/google-instruments"
            className="inline-flex items-center text-primary font-bold text-[13px] uppercase tracking-wider hover:text-gray-900 transition-colors group"
          >
            More products from this brand
            <FaArrowRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={14}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
