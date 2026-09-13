"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";
import Logo from "@/public/images/Rotex-Logo-1.png";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";
import { FaSquareXTwitter, FaShuffle } from "react-icons/fa6";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-white text-[11px] font-semibold tracking-wider">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center md:h-[42px] py-2 md:py-0 gap-2 md:gap-0">
          {/* Left Top Bar */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto h-auto md:h-full pt-2 md:pt-0">
            <div className="px-4 flex items-center h-full uppercase text-center md:text-left">
              Free shipping for all orders of $150
            </div>
          </div>

          {/* Right Top Bar */}
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full md:w-auto mt-2 md:mt-0 pb-2 md:pb-0 gap-y-2 md:gap-y-0 h-auto md:h-full">
            <div className="flex items-center justify-center space-x-3 md:space-x-4 px-2 md:px-0 md:pr-5 border-r-0 md:border-r border-white/20 h-auto md:h-full w-full md:w-auto">
              <Link
                href="#"
                className="hover:-translate-y-1 hover:scale-110 hover:text-gray-200 transition-all duration-300"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="#"
                className="hover:-translate-y-1 hover:scale-110 hover:text-gray-200 transition-all duration-300"
              >
                <FaSquareXTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="hover:-translate-y-1 hover:scale-110 hover:text-gray-200 transition-all duration-300"
              >
                <FaInstagramSquare size={20} />
              </Link>
              <Link
                href="#"
                className="hover:-translate-y-1 hover:scale-110 hover:text-gray-200 transition-all duration-300"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
            <div className="flex items-center justify-center w-full md:w-auto h-auto md:h-full">
              <Link
                href="#"
                className="flex items-center space-x-1 md:space-x-2 px-3 md:px-5 border-r border-white/20 h-auto md:h-full hover:text-gray-200 transition-colors uppercase"
              >
                <IoMailOutline size={20} />
                <span>Newsletter</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-1 md:space-x-2 px-3 md:px-5 h-auto md:h-full hover:text-gray-200 transition-colors uppercase"
              >
                <IoCallOutline size={20} />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl py-4 lg:py-0 lg:h-[100px] flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-4 lg:gap-y-0">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 order-1">
            <Image
              src={Logo}
              alt="Rotex Logo"
              width={220}
              height={50}
              className="h-8 md:h-10 w-auto object-contain"
              priority
              quality={75}
            />
          </Link>

          {/* Search Bar */}
          <div className="w-full lg:flex-1 lg:max-w-[600px] lg:mx-8 order-3 lg:order-2">
            <div className="flex items-center border border-gray-200 focus-within:border-primary transition-colors  bg-white overflow-hidden h-[42px] lg:h-[46px] group">
              <input
                id="main-search-input"
                type="text"
                placeholder="Search for products"
                className="flex-1 h-full px-4 outline-none text-[13px] text-gray-700 placeholder-gray-400"
              />
              {/* <div className="h-full border-l border-gray-200"></div> */}
              {/* <div className="flex items-center justify-between space-x-2 text-[13px] text-gray-500 px-4 h-full cursor-pointer hover:text-gray-800 bg-white min-w-[170px]">
                <span>SELECT CATEGORY</span>
                <FaChevronDown className="text-[9px] text-gray-400" />
              </div> */}
              <div className="h-full border-l border-gray-200"></div>
              <button className="h-full w-[42px] lg:w-[50px] flex items-center justify-center text-gray-500 hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300">
                <IoSearchOutline size={20} />
              </button>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 lg:space-x-7 order-2 lg:order-3">
            {/* <Link
              href="#"
              className="hidden sm:block text-[13px] font-bold text-[#333] hover:text-gray-600 transition-colors uppercase"
            >
              Login / Register
            </Link> */}

            <div className="flex items-center space-x-5 text-[#333]">
              {/* Wishlist */}
              {/* <Link href="#" className="relative group">
                <IoHeartOutline
                  size={26}
                  className="group-hover:text-primary transition-colors"
                />
                <span className="absolute -top-1.5 -right-2 bg-primary text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  0
                </span>
              </Link> */}

              {/* Compare */}
              {/* <Link href="#" className="relative group">
                <FaShuffle
                  size={22}
                  className="group-hover:text-primary transition-colors mt-0.5"
                />
                <span className="absolute -top-1 -right-2.5 bg-primary text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  0
                </span>
              </Link> */}

              {/* Cart */}
              <button
                onClick={(e) => { e.preventDefault(); setIsCartOpen(true); }}
                className="flex items-center space-x-2 lg:space-x-3 group"
              >
                <div className="relative">
                  <IoCartOutline
                    size={28}
                    className="group-hover:text-primary transition-colorshover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                  />
                  <span className="absolute -top-1.5 -right-2 bg-primary text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                    0
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-800">৳0.00</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
