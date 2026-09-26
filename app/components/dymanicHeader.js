"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import { menus } from "./CategoriesAndMenus";
import Cart from "./Cart";
import Logo from "@/public/images/Rotex-Logo-1.png";
import { IoCartOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

export default function DynamicHeader() {
  const pathname = usePathname();
  const dynamicMenus = menus.map((m) => ({
    ...m,
    active:
      pathname === m.href || (m.href !== "/" && pathname.startsWith(m.href)),
  }));

  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // Desktop: appear on scroll-up past 300px
        if (currentScrollY < lastScrollY && currentScrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Mobile: MobileHeader is ~96px. Only show DynamicHeader once
        // MobileHeader has scrolled off AND user scrolls back up.
        const mobileHeaderHeight = 96;
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else if (
          currentScrollY < lastScrollY &&
          currentScrollY > mobileHeaderHeight
        ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    // Always start hidden; MobileHeader handles the static top on mobile
    setIsVisible(false);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-[100] bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Navbar row */}
        <div className="relative px-4 h-[60px] lg:h-[70px] flex items-center justify-between lg:container lg:mx-auto lg:max-w-7xl lg:justify-start">
          {/* Mobile Hamburger — left */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center lg:hidden text-gray-800 hover:text-primary transition-colors"
            aria-label="Open menu"
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

          {/* Logo — centered on mobile, left on desktop */}
          <Link
            href="/"
            className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <Image
              src={Logo}
              alt="Rotex Logo"
              width={240}
              height={32}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links — centered */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-2">
            {dynamicMenus.map((item, i) => (
              <div key={i} className="group relative h-full flex items-center">
                <Link
                  href={item.href}
                  className={`text-[13px] font-bold px-4 py-4 uppercase tracking-wide transition-colors flex items-center gap-1.5 ${
                    item.active
                      ? "text-primary hover:text-gray-800"
                      : "text-gray-800 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.subMenus && (
                    <FaChevronDown className="text-[10px] opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.subMenus && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-primary z-50">
                    <div className="py-2">
                      {item.subMenus.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.href}
                          className="block px-4 py-2.5 text-[11px] font-bold text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors uppercase tracking-wider text-left"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cart — right */}
          <div className="flex items-center text-[#333]">
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

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
