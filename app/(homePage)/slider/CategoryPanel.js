"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { categories } from "@/app/components/CategoriesAndMenus";

// Glass style shared by panel + flyout
const glassStyle = {
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  background: "rgba(0, 0, 0, 0.22)",
};

// ─── Category Panel ───────────────────────────────────────────────────────────
export default function CategoryPanel() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    // Outer wrapper: transparent, no blur — lets children blur independently
    <div className="relative w-[240px] h-full flex-shrink-0 z-30">

      {/* Glass layer: blurs the slide content behind this panel */}
      <div
        className="absolute inset-0 border-r border-white/15"
        style={glassStyle}
      />

      {/* Category list rendered above the glass layer */}
      <div className="relative py-2">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="relative group/cat"
            onMouseEnter={() => setHoveredId(cat.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Main Category Row */}
            <Link
              href="#"
              className="flex items-center justify-between px-4 py-[9px] hover:bg-white/15 transition-all duration-200"
            >
              <div className="flex items-center space-x-3">
                <span
                  className="opacity-95 text-white"
                  style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.6))" }}
                >
                  {cat.icon}
                </span>
                <span
                  className="text-[13px] font-bold text-white"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
                >
                  {cat.name}
                </span>
              </div>
              <FaChevronRight
                className="text-[10px] text-white opacity-70 group-hover/cat:opacity-100 group-hover/cat:translate-x-0.5 transition-all"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.6))" }}
              />
            </Link>

            {/* Subcategory Flyout
                Positioned left-full so it overlaps the slide content to the right.
                Since the outer wrapper has NO backdropFilter, this flyout blurs
                the true background behind it — the slide image — directly. */}
            {hoveredId === cat.id && (
              <div
                className="absolute left-full top-0 z-50 w-[200px] shadow-2xl border border-white/15 py-2 rounded-r-md"
                style={glassStyle}
              >
                {cat.subcategories.map((sub, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="block px-4 py-2 text-[13px] font-semibold text-white hover:bg-white/20 transition-colors"
                    style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
