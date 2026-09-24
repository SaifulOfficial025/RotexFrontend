"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

export default function CEO() {
  return (
    <div className="w-full bg-[#F8F9FA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                alt="CEO of Rotex"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative blocks */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-[8px] border-primary/20 -z-10 hidden md:block"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[3px] bg-primary"></span>
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm">
                Message from our CEO
              </h4>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Committed to <span className="text-primary">Quality</span> &
              Reliability
            </h2>

            <div className="relative bg-white p-8 md:p-10 shadow-sm border border-gray-100 mb-8 z-10 overflow-hidden">
              <FaQuoteLeft className="absolute -top-4 -right-4 text-gray-50 text-8xl pointer-events-none -z-10 rotate-12" />
              <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed italic relative z-10 font-medium">
                “Since our establishment in 2006, Rotex International has been
                committed to providing quality scientific products and
                dependable solutions to our customers. We believe that quality,
                reliability, and service are the foundation of a lasting
                business relationship.”
              </p>
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Our journey has been shaped by a commitment to customer
              satisfaction, reasonable pricing, technical support, and
              continuous improvement. From laboratory instruments and weighing
              systems to textile testing equipment and industrial measurement
              tools, we strive to provide solutions that meet the diverse
              requirements of our customers.
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-10">
              As we look ahead, our focus remains on delivering quality
              products, timely service, technical support, and dependable
              after-sales assistance. We value long-term relationships over
              one-time transactions and aim to remain a trusted partner for
              every customer we serve.
            </p>

            <div className="flex flex-col border-l-4 border-primary pl-4">
              <h5 className="text-xl font-black text-gray-900">
                Md. Abdur Rahim
              </h5>
              <p className="text-gray-500 font-bold text-[12px] tracking-widest uppercase mt-1">
                Founder & CEO, Rotex International
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
