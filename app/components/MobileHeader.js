"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/public/images/Rotex-Logo-1.png";
import MobileSidebar from "./MobileSidebar";
import Cart from "./Cart";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

export default function MobileHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* Mobile-only — hidden on lg+ screens */}
      <div className="lg:hidden w-full">
        {/* Top Social Bar */}
        <div className="bg-primary text-white text-[11px] font-semibold py-2">
          <div className="flex items-center justify-center gap-5">
            <Link href="#" className="hover:text-gray-200 transition-colors hover:-translate-y-0.5 duration-200">
              <FaFacebook size={18} />
            </Link>
            <Link href="#" className="hover:text-gray-200 transition-colors hover:-translate-y-0.5 duration-200">
              <FaSquareXTwitter size={18} />
            </Link>
            <Link href="#" className="hover:text-gray-200 transition-colors hover:-translate-y-0.5 duration-200">
              <FaInstagramSquare size={18} />
            </Link>
            <Link href="#" className="hover:text-gray-200 transition-colors hover:-translate-y-0.5 duration-200">
              <FaYoutube size={18} />
            </Link>
          </div>
        </div>

        {/* Navbar Row */}
        <div className="bg-white border-b border-gray-100 shadow-sm">
          <div className="flex items-center justify-between px-4 h-[60px]">
            {/* Hamburger */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-800 hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Rotex Logo"
                width={120}
                height={32}
                className="h-7 w-auto object-contain"
                priority
              />
            </Link>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-800 hover:text-primary transition-colors"
              aria-label="Open cart"
            >
              <IoCartOutline size={26} />
              <span className="absolute -top-1.5 -right-2 bg-primary text-white text-[10px] font-bold w-[16px] h-[16px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
