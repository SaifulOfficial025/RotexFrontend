"use client";

import {
  IoOptionsOutline,
  IoGridOutline,
  IoListOutline,
  IoClose,
} from "react-icons/io5";

const featureCategories = ["All", "Featured", "Best Sellers", "Sales"];

export default function ProductTopbar({
  onToggleSidebar,
  filters = {
    categories: [],
    brands: [],
    price: { min: "", max: "" },
    featureCategory: "All",
  },
  setFilters,
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
      {/* Feature Categories Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-6 border-b border-gray-200 mb-2">
        {featureCategories.map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setFilters((prev) => ({ ...prev, featureCategory: tab }))
            }
            className={`relative px-4 py-2 text-sm md:text-[15px] font-bold uppercase tracking-wide transition-colors ${
              filters.featureCategory === tab
                ? "text-primary"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
            {filters.featureCategory === tab && (
              <span className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-primary" />
            )}
          </button>
        ))}
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
