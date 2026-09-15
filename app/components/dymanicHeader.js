"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import { menus } from "./CategoriesAndMenus";
import Cart from "./Cart";
import Logo from "@/public/images/Rotex-Logo-1.png";
import {
  IoHeartOutline,
  IoCartOutline, 
  
} from "react-icons/io5";

export default function DynamicHeader() {
  const pathname = usePathname();
  const dynamicMenus = menus.map(m => ({ 
    ...m, 
    active: pathname === m.href || (m.href !== '/' && pathname.startsWith(m.href)) 
  }));
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header if scrolling UP and passed a threshold of 300px
      if (currentScrollY < lastScrollY && currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Hide if scrolling down or near top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-[100] bg-white shadow-md transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl h-[70px] flex items-center justify-between">
          {/* Mobile Hamburger Menu */}
          <div className="flex items-center lg:hidden mr-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-800 hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Rotex Logo"
              width={140}
              height={36}
              className="h-7 md:h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Menus (From SliderNavBar - Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-2 ml-4">
            {dynamicMenus.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`text-[13px] font-bold px-4 py-4 uppercase tracking-wide transition-colors ${item.active ? "text-primary hover:text-gray-800" : "text-gray-800 hover:text-primary"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Options */}
          <div className="flex flex-1 justify-end items-center space-x-4 lg:space-x-6 text-[#333]">
            <div className="flex items-center space-x-3 md:space-x-4">

              {/* Cart Icon & Price */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsCartOpen(true);
                }}
                className="flex items-center space-x-2 group"
              >
                <div className="relative">
                  <IoCartOutline
                    size={26}
                    className="group-hover:text-primary transition-colors"
                  />
                  <span className="absolute -top-1.5 -right-2 bg-primary text-white text-[10px] font-bold w-[16px] h-[16px] rounded-full flex items-center justify-center">
                    0
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-800 hidden sm:block">
                  ৳0.00
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
