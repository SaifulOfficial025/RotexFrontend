"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Button({
  children,
  onClick,
  href,
  type = "button",
  variant = "primary", // Accepts "primary" or "white"
  showArrow = true,
  className = "",
  ...props
}) {
  // Base styles applied to all buttons
  const baseStyles =
    "inline-flex items-center justify-center font-bold text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95";

  // Dynamic styling based on the variant chosen
  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    white: "bg-white text-primary hover:bg-gray-50",
  };

  const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  // If an href is provided, render it as a Next.js Link
  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
        {showArrow && <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />}
      </Link>
    );
  }

  // Otherwise, render a standard interactive button
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group ${combinedClassName}`}
      {...props}
    >
      {children}
      {showArrow && <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />}
    </button>
  );
}
