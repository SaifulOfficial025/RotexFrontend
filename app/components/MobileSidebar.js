"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { categories, menus } from "./CategoriesAndMenus";
import { IoSearchOutline, IoChevronForward, IoClose } from "react-icons/io5";

export default function MobileSidebar({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("MENU");

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "DEMOS", href: "#" },
    { label: "SHOP", href: "#" },
    { label: "BLOG", href: "#" },
    { label: "PORTFOLIO", href: "#" },
    { label: "PAGES", href: "#", hasSubmenu: true },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white z-[210] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Search Bar */}
        {/* <div className="flex items-center border-b border-gray-100 p-4 pt-5 pb-5">
          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 outline-none text-[14px] text-gray-500 placeholder-gray-500 bg-transparent font-medium"
          />
          <button className="text-gray-400 hover:text-primary transition-colors">
            <IoSearchOutline size={22} />
          </button>
        </div> */}

        {/* Tabs */}
        <div className="flex items-center border-b border-gray-200">
          <button
            onClick={() => setActiveTab("MENU")}
            className={`flex-1 py-3 text-[12px] font-bold tracking-wide transition-colors ${
              activeTab === "MENU"
                ? "text-gray-700 bg-gray-100 border-b-[3px] border-primary"
                : "text-gray-400 hover:text-gray-600 bg-gray-50/80"
            }`}
          >
            MENU
          </button>
          <button
            onClick={() => setActiveTab("CATEGORIES")}
            className={`flex-1 py-3 text-[12px] font-bold tracking-wide transition-colors ${
              activeTab === "CATEGORIES"
                ? "text-gray-700 bg-gray-100 border-b-[3px] border-primary"
                : "text-gray-400 hover:text-gray-600 bg-gray-50/80"
            }`}
          >
            CATEGORIES
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "MENU" && (
            <ul className="flex flex-col">
              {menus.map((item, index) => (
                <li key={index} className="border-b border-gray-100">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-4 text-[13px] font-bold text-[#444] hover:text-[#8cc63f] transition-colors"
                  >
                    {item.label}
                    {item.hasSubmenu && (
                      <IoChevronForward className="text-gray-400" size={16} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {activeTab === "CATEGORIES" && (
            <ul className="flex flex-col">
              {categories.map((cat, index) => (
                <li key={index} className="border-b border-gray-100">
                  <Link
                    href="#"
                    onClick={onClose}
                    className="flex items-center justify-between p-4 text-[13px] font-bold text-[#444] hover:text-primary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">{cat.icon}</span>
                      <span className="uppercase">{cat.name}</span>
                    </div>
                    {cat.subcategories && cat.subcategories.length > 0 && (
                      <IoChevronForward className="text-gray-400" size={16} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Outer Close Button */}
      <button
        onClick={onClose}
        className={`fixed top-4 left-[290px] sm:left-[330px] w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 shadow-xl transition-all duration-300 z-[210] hover:bg-gray-100 hover:scale-105 active:scale-95 ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10 pointer-events-none"
        }`}
      >
        <IoClose size={24} />
      </button>
    </>
  );
}
