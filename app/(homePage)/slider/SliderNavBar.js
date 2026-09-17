"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { categories, menus } from "@/app/components/CategoriesAndMenus";

// ─── Hamburger Lines ──────────────────────────────────────────────────────────
function HamburgerLines({ open }) {
  return (
    <div className="flex flex-col justify-center gap-[4px] w-[18px]">
      <span
        className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-left ${
          open ? "rotate-45 w-[18px] translate-x-[1px]" : "w-[18px]"
        }`}
      />
      <span
        className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${
          open ? "opacity-0 w-[18px]" : "w-[13px]"
        }`}
      />
      <span
        className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-left ${
          open ? "-rotate-45 w-[18px] translate-x-[1px]" : "w-[18px]"
        }`}
      />
    </div>
  );
}

// ─── Top Navigation Bar ───────────────────────────────────────────────────────
export default function SliderNavBar() {

  const pathname = usePathname();
  const dynamicMenus = menus.map(m => ({ 
    ...m, 
    active: pathname === m.href || (m.href !== '/' && pathname.startsWith(m.href)) 
  }));
  const [catOpen, setCatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCatId, setOpenCatId] = useState(null);

  const toggleCat = (id) => setOpenCatId((prev) => (prev === id ? null : id));

  const handleCatToggle = () => {
    setCatOpen((prev) => !prev);
    setMenuOpen(false);
    setOpenCatId(null);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
    setCatOpen(false);
  };

  return (
    <div className="hidden lg:block w-full relative">
      {/* ─── Navbar Row ─────────────────────────────────────────────────────── */}
      <div className="w-full flex h-[50px]">

        {/* Desktop: "Categories" header */}
        <div className="hidden lg:flex w-[240px] bg-primary items-center px-4 flex-shrink-0">
          <h3 className="font-bold text-white uppercase tracking-wide text-sm">
            Categories
          </h3>
        </div>

        {/* Mobile: Two toggle buttons side by side, edge to edge */}
        <div className="flex lg:hidden w-full">

          {/* ── Categories Button ── */}
          <button
            onClick={handleCatToggle}
            aria-label="Toggle Categories"
            className={`flex-1 flex items-center justify-center gap-2 h-full transition-all duration-200 border-r border-white/10 ${
              catOpen ? "bg-primary" : "bg-primary/90 hover:bg-primary"
            }`}
          >
            <HamburgerLines open={catOpen} />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white">
              Categories
            </span>
          </button>

          {/* ── Menu Button ── */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
            className={`flex-1 flex items-center justify-center gap-2 h-full transition-all duration-200 ${
              menuOpen ? "bg-gray-100 text-gray-900" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <HamburgerLines open={menuOpen} />
            <span className="text-[11px] font-bold uppercase tracking-widest">
              Menu
            </span>
          </button>
        </div>

        {/* Desktop: Nav Links */}
        <div className="hidden lg:flex flex-1 items-center px-4 space-x-2">
          {dynamicMenus.map((item, i) => (
            <Link key={i} href={item.href} className={`text-[13px] font-bold px-4 py-4 whitespace-nowrap transition-colors uppercase tracking-wide hover:bg-primary hover:text-white ${item.active ? "text-primary" : "text-gray-800"}`}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ─── Mobile: Categories Dropdown ────────────────────────────────────── */}
      {catOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full z-50 bg-white shadow-2xl max-h-[72vh] overflow-y-auto border-t-[3px] border-primary">
          {categories.map((cat) => (
            <div key={cat.id} className="border-b border-gray-100 last:border-0">

              {/* Category Row */}
              <button
                className={`w-full flex items-center justify-between px-5 py-3.5 transition-colors duration-150 ${
                  openCatId === cat.id ? "bg-primary/5" : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => toggleCat(cat.id)}
              >
                <div className="flex items-center gap-3">
                  {/* Left accent bar */}
                  <div className={`w-0.5 h-5 rounded-full transition-colors duration-200 ${openCatId === cat.id ? "bg-primary" : "bg-gray-200"}`} />
                  <span className={`transition-colors duration-200 ${openCatId === cat.id ? "text-primary" : "text-gray-400"}`}>
                    {cat.icon}
                  </span>
                  <span className={`text-[12.5px] font-bold uppercase tracking-wide transition-colors duration-200 ${openCatId === cat.id ? "text-primary" : "text-gray-700"}`}>
                    {cat.name}
                  </span>
                </div>
                <FaChevronDown
                  className={`text-[9px] transition-all duration-300 ${
                    openCatId === cat.id ? "rotate-180 text-primary" : "text-gray-300"
                  }`}
                />
              </button>

              {/* Subcategories accordion */}
              {openCatId === cat.id && (
                <div className="bg-gray-50 border-t border-primary/10">
                  <div className="grid grid-cols-2">
                    {cat.subcategories.map((sub, i) => (
                      <Link
                        key={i}
                        href="#"
                        className="flex items-center gap-2 px-5 py-2.5 text-[11.5px] text-gray-500 font-semibold border-b border-r border-gray-100/80 hover:text-primary hover:bg-white transition-colors duration-150"
                        onClick={() => setCatOpen(false)}
                      >
                        <FaChevronRight className="text-[7px] text-primary/30 flex-shrink-0" />
                        <span className="leading-tight">{sub}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ─── Mobile: Menu Dropdown ─────────────────────────────────────────── */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full z-50 bg-white shadow-2xl border-t-[3px] border-primary">
          {dynamicMenus.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-0 transition-all duration-200 group hover:bg-primary/5 ${
                item.active ? "text-primary" : "text-gray-700"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <div className={`w-1 h-4 rounded-full ${item.active ? "bg-primary" : "bg-gray-200 group-hover:bg-primary/40"} transition-colors`} />
                <span className="text-[12px] font-bold uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
              <FaChevronRight className={`text-[9px] transition-colors ${item.active ? "text-primary" : "text-gray-300 group-hover:text-primary/50"}`} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
