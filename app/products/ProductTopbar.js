"use client";

import { IoClose, IoChevronDown } from "react-icons/io5";
import { BsList, BsGrid, BsGrid3X3GapFill } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";

export default function ProductTopbar({
  onToggleSidebar,
  filters = {
    categories: [],
    brands: [],
    price: { min: "", max: "" },
  },
  setFilters,
  showCount,
  setShowCount,
  viewMode,
  setViewMode,
  sorting,
  setSorting,
}) {
  const removeFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item !== value),
    }));
  };

  const hasPriceFilter = filters.price.min !== "" || filters.price.max !== "";
  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    hasPriceFilter;

  return (
    <div className="flex flex-col mb-6 gap-4">
      {/* Top Controls Bar matching image */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between lg:justify-end py-2 border-b border-gray-100 gap-4 lg:gap-8">
        {/* Left side: Show Count */}
        <div className="flex items-center gap-2 text-[13px] text-gray-400 font-medium w-full sm:w-auto justify-center sm:justify-start">
          {/* Mobile Filter Toggle (only visible on mobile) */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden bg-gray-50 border border-gray-200 px-3 py-1 mr-2 rounded text-gray-700 font-bold uppercase tracking-wider text-xs"
          >
            Filters
          </button>

          <span className="font-extrabold text-gray-800 tracking-wide uppercase text-[12px]">
            Show :
          </span>
          {[9, 12, 18, 24].map((count, index) => (
            <span key={count} className="flex items-center gap-2">
              <button
                onClick={() => setShowCount(count)}
                className={`transition-colors hover:text-black ${showCount === count ? "font-bold text-black" : ""}`}
              >
                {count}
              </button>
              {index < 3 && <span className="text-gray-300">/</span>}
            </span>
          ))}
        </div>

        {/* Center: Grid View Icons */}
        <div className="flex items-center gap-3">
          <button onClick={() => setViewMode("list")} aria-label="List View">
            <BsList
              size={26}
              className={`transition-colors hover:text-black ${viewMode === "list" ? "text-gray-800" : "text-gray-300"}`}
            />
          </button>
          <button onClick={() => setViewMode("2x2")} aria-label="2 Columns">
            <BsGrid
              size={20}
              className={`transition-colors hover:text-black ${viewMode === "2x2" ? "text-gray-800" : "text-gray-300"}`}
            />
          </button>
          <button onClick={() => setViewMode("3x3")} aria-label="3 Columns">
            <BsGrid3X3GapFill
              size={21}
              className={`transition-colors hover:text-black ${viewMode === "3x3" ? "text-gray-800" : "text-gray-300"}`}
            />
          </button>
          <button onClick={() => setViewMode("4x4")} aria-label="4 Columns">
            <TbGridDots
              size={24}
              className={`transition-colors hover:text-black ${viewMode === "4x4" ? "text-gray-800" : "text-gray-300"}`}
            />
          </button>
        </div>

        {/* Right side: Sorting */}
        <div className="relative flex items-center justify-center sm:justify-end w-full sm:w-auto">
          <select
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
            className="appearance-none outline-none border-b-[3px] border-[#81b039] text-[13px] font-bold text-gray-800 pr-8 py-1 cursor-pointer bg-transparent w-full sm:w-auto transition-colors focus:border-primary"
          >
            <option>Default sorting</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
          <IoChevronDown
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={12}
          />
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200/50">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">
            Active Filters:
          </span>

          {/* Categories */}
          {filters.categories.map((cat, idx) => (
            <div
              key={`cat-${idx}`}
              className="flex items-center gap-1 bg-white border border-gray-200 text-xs font-bold text-gray-700 px-3 py-1.5 rounded-full shadow-sm"
            >
              {cat}
              <button
                onClick={() => removeFilter("categories", cat)}
                className="ml-1 text-gray-400 hover:text-red-500 transition-colors"
              >
                <IoClose size={14} />
              </button>
            </div>
          ))}

          {/* Brands */}
          {filters.brands.map((brand, idx) => (
            <div
              key={`brand-${idx}`}
              className="flex items-center gap-1 bg-white border border-gray-200 text-xs font-bold text-gray-700 px-3 py-1.5 rounded-full shadow-sm"
            >
              <span className="text-gray-400 font-medium mr-1">Brand:</span>{" "}
              {brand}
              <button
                onClick={() => removeFilter("brands", brand)}
                className="ml-1 text-gray-400 hover:text-red-500 transition-colors"
              >
                <IoClose size={14} />
              </button>
            </div>
          ))}

          {/* Price */}
          {hasPriceFilter && (
            <div className="flex items-center gap-1 bg-white border border-gray-200 text-xs font-bold text-gray-700 px-3 py-1.5 rounded-full shadow-sm">
              <span className="text-gray-400 font-medium mr-1">Price:</span>৳
              {filters.price.min || "0"} -{" "}
              {filters.price.max ? `৳${filters.price.max}` : "Any"}
              <button
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    price: { min: "", max: "" },
                  }))
                }
                className="ml-1 text-gray-400 hover:text-red-500 transition-colors"
              >
                <IoClose size={14} />
              </button>
            </div>
          )}

          <button
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                categories: [],
                brands: [],
                price: { min: "", max: "" },
              }))
            }
            className="text-xs font-bold text-primary hover:underline ml-2"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
