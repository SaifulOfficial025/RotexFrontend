"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import Button from "./button";

export default function BusinessDeals() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-primary text-white p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full shadow-lg">
          {/* Left Content */}
          <div className="flex flex-col mb-8 md:mb-0 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-wide">
              Let&apos;s Talk Business
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed font-medium">
              Ready to elevate your inventory? Start a conversation with our
              wholesale team today.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <FaFacebook size={32} />
              </Link>
              <Link
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </Link>
            </div>
          </div>

          {/* Right Content - Button */}
          <div className="w-full md:w-auto">
            <Button variant="white" href="/contact" className="w-full md:w-auto">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
