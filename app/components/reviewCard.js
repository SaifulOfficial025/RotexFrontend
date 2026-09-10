"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

export default function ReviewCard({
  name = "John Doe",
  company = "Example Corp",
  avatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
  date = "October 12, 2023",
  message = "This is an outstanding product. The quality and attention to detail are unmatched. It has significantly improved our workflow and I highly recommend it to anyone in the industry.",
  photo, // Optional photo attached to the review
}) {
  return (
    <div className="bg-white border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative group rounded-none">
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-gray-50 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
        <FaQuoteLeft size={48} />
      </div>

      {/* Header: Avatar, Name, Company, Date */}
      <div className="flex items-center gap-4 mb-5 z-10 relative">
        {avatar ? (
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gray-200 shadow-sm">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold border border-gray-200 text-xl shadow-sm">
            {name.charAt(0)}
          </div>
        )}

        <div className="flex flex-col">
          <h4 className="text-gray-900 font-bold text-base md:text-lg leading-tight">
            {name}
          </h4>
          <div className="flex flex-col text-xs md:text-sm text-gray-500 mt-1">
            {company && (
              <span className="font-semibold text-primary mb-0.5">{company}</span>
            )}
            <span>{date}</span>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="text-gray-600 text-[15px] leading-relaxed z-10 flex-grow mb-5 relative">
        <p className="italic">{message}</p>
      </div>

      {/* Optional Photo Attachment */}
      {photo && (
        <div className="relative w-full h-48 mt-auto overflow-hidden bg-gray-50 border border-gray-200">
          <Image
            src={photo}
            alt="Review attachment"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
