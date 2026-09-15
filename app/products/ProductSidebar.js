"use client";

import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const dummyBrands = [
  { id: 1, name: "Fisher Scientific", logo: "Fisher Logo" },
  { id: 2, name: "Eppendorf", logo: "Eppendorf Logo" },
  { id: 3, name: "Thermo Fisher", logo: "Thermo Logo" },
  { id: 4, name: "Shimadzu", logo: "Shimadzu Logo" },
  { id: 5, name: "Merck", logo: "Merck Logo" },
];

export default function ProductSidebar({
  filters = { categories: [], brands: [], price: { min: "", max: "" } },
  setFilters,
}) {
  // State for which sidebar sections are expanded
  const [openSections, setOpenSections] = useState(
    new Set(["price", "brands"]),
  );

  const toggleSection = (section) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });
  };

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const currentList = prev[type] || [];

      // Single selection for brands
      if (type === "brands") {
        const isSelected = currentList.includes(value);
        return { ...prev, brands: isSelected ? [] : [value] };
      }

      const isSelected = currentList.includes(value);
      const newList = isSelected
        ? currentList.filter((item) => item !== value)
        : [...currentList, value];

      return { ...prev, [type]: newList };
    });
  };

  const handlePriceChange = (type, value) => {
    if (value < 0) return; // Prevent negative values
    setFilters((prev) => ({
      ...prev,
      price: { ...prev.price, [type]: value },
    }));
  };

  return (
    <div className="w-full h-full bg-white border border-gray-100 shadow-sm p-5 space-y-6">
      {/* Price Filter Section */}
      <div className="border-b border-gray-100 pb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left group mb-4"
        >
          <h3 className="text-lg font-medium uppercase text-gray-900 tracking-wider group-hover:text-primary transition-colors">
            Filter By Price
          </h3>
          <span className="text-gray-400 group-hover:text-primary transition-colors">
            {openSections.has("price") ? (
              <IoChevronUp size={18} />
            ) : (
              <IoChevronDown size={18} />
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openSections.has("price")
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 flex items-center justify-between gap-3">
            <div className="flex-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-1 block">
                Min Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                  ৳
                </span>
                <input
                  type="number"
                  placeholder="0"
                  min="0"
                  className="w-full border border-gray-200 py-2 pl-7 pr-3 text-sm font-medium text-gray-700 outline-none focus:border-primary transition-colors"
                  value={filters.price.min}
                  onChange={(e) => handlePriceChange("min", e.target.value)}
                />
              </div>
            </div>
            <div className="text-gray-300 font-bold mt-5">-</div>
            <div className="flex-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-1 block">
                Max Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                  ৳
                </span>
                <input
                  type="number"
                  placeholder="Any"
                  min="0"
                  className="w-full border border-gray-200 py-2 pl-7 pr-3 text-sm font-medium text-gray-700 outline-none focus:border-primary transition-colors"
                  value={filters.price.max}
                  onChange={(e) => handlePriceChange("max", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Filter Section */}
      <div className="pb-2">
        <button
          onClick={() => toggleSection("brands")}
          className="flex items-center justify-between w-full text-left group mb-4"
        >
          <h3 className="text-md font-medium uppercase text-gray-900 tracking-wider group-hover:text-primary transition-colors">
            Brands
          </h3>
          <span className="text-gray-400 group-hover:text-primary transition-colors">
            {openSections.has("brands") ? (
              <IoChevronUp size={18} />
            ) : (
              <IoChevronDown size={18} />
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openSections.has("brands")
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {/* Two-column grid for logos */}
          <div className="grid grid-cols-2 gap-3 px-2 pt-1">
            {dummyBrands.map((brand) => {
              const isChecked = filters.brands.includes(brand.name);
              return (
                <button
                  key={brand.id}
                  onClick={() => toggleFilter("brands", brand.name)}
                  className={`flex flex-col items-center justify-center p-3 h-[60px]  transition-all duration-200 ${
                    isChecked
                      ? "border-primary bg-primary/5 shadow-sm scale-[1.02]"
                      : "bg-white  hover:scale-[1.2]"
                  }`}
                  aria-label={`Filter by ${brand.name}`}
                >
                  <span
                    className={`text-[10px] font-black uppercase text-center leading-tight ${
                      isChecked ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    {brand.logo}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
