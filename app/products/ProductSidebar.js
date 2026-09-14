"use client";

import { useState } from "react";
import { categories } from "../components/CategoriesAndMenus";
import { IoChevronDown, IoChevronUp, IoCheckmark } from "react-icons/io5";

const dummyBrands = [
  { id: 1, name: "Fisher Scientific", logo: "FS" },
  { id: 2, name: "Eppendorf", logo: "Ep" },
  { id: 3, name: "Thermo Fisher", logo: "TF" },
  { id: 4, name: "Shimadzu", logo: "Sh" },
  { id: 5, name: "Merck", logo: "Mk" },
];

export default function ProductSidebar({
  filters = { categories: [], brands: [], price: { min: "", max: "" } },
  setFilters,
}) {
  // State for which sidebar sections are expanded
  const [openSections, setOpenSections] = useState(
    new Set(["price", "brands", "categories"]),
  );
  // State for which individual category accordions are expanded
  const [openCategories, setOpenCategories] = useState(new Set([1]));

  const toggleSection = (section) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });
  };

  const toggleCategorySection = (id) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const currentList = prev[type];
      const isSelected = currentList.includes(value);
      const newList = isSelected
        ? currentList.filter((item) => item !== value)
        : [...currentList, value];

      return { ...prev, [type]: newList };
    });
  };

  const handlePriceChange = (type, value) => {
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
                  className="w-full border border-gray-200 rounded-md py-2 pl-7 pr-3 text-sm font-medium text-gray-700 outline-none focus:border-primary transition-colors"
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
                  className="w-full border border-gray-200 rounded-md py-2 pl-7 pr-3 text-sm font-medium text-gray-700 outline-none focus:border-primary transition-colors"
                  value={filters.price.max}
                  onChange={(e) => handlePriceChange("max", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Filter Section */}
      <div className="border-b border-gray-100 pb-6">
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
          <div className="space-y-3 px-2 pt-1">
            {dummyBrands.map((brand) => {
              const isChecked = filters.brands.includes(brand.name);
              return (
                <label
                  key={brand.id}
                  className="flex items-center cursor-pointer group justify-between"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center mr-3 transition-colors ${isChecked ? "bg-primary border-primary text-white" : "border-gray-300 bg-white group-hover:border-primary"}`}
                    >
                      {isChecked && <IoCheckmark size={12} />}
                    </div>

                    {/* Dummy Logo block */}
                    <div className="w-12 h-12 flex items-center justify-center text-[9px] font-bold text-gray-400 mr-3 group-hover:border-primary/30 transition-colors">
                      {brand.logo}
                    </div>

                    <span
                      className={`text-[13.5px] font-bold transition-colors ${isChecked ? "text-primary" : "text-gray-700 group-hover:text-gray-900"}`}
                    >
                      {brand.name}
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={() => toggleFilter("brands", brand.name)}
                  />
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Filter Section */}
      <div className="pb-2">
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full text-left group mb-4"
        >
          <h3 className="text-md font-medium uppercase text-gray-900 tracking-wider group-hover:text-primary transition-colors">
            Categories
          </h3>
          <span className="text-gray-400 group-hover:text-primary transition-colors">
            {openSections.has("categories") ? (
              <IoChevronUp size={18} />
            ) : (
              <IoChevronDown size={18} />
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openSections.has("categories")
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 pt-1">
            {categories.map((cat) => (
              <div key={cat.id} className="flex flex-col">
                <button
                  onClick={() => toggleCategorySection(cat.id)}
                  className="flex items-center justify-between w-full py-3 px-2 text-left hover:bg-gray-50 rounded-md transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 group-hover:text-primary transition-colors">
                      {cat.icon}
                    </span>
                    <span className="text-[13.5px] font-bold text-gray-800 group-hover:text-primary transition-colors">
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-gray-400">
                    {openCategories.has(cat.id) ? (
                      <IoChevronUp size={16} />
                    ) : (
                      <IoChevronDown size={16} />
                    )}
                  </span>
                </button>

                {/* Subcategories (Selectable) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openCategories.has(cat.id)
                      ? "max-h-96 opacity-100 mt-1"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-10 pb-2 space-y-2">
                    {cat.subcategories.map((sub, i) => {
                      const isChecked = filters.categories.includes(sub);
                      return (
                        <li key={i} className="flex items-center">
                          <label className="flex items-center cursor-pointer group">
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center mr-3 transition-colors ${isChecked ? "bg-primary border-primary text-white" : "border-gray-300 bg-white group-hover:border-primary"}`}
                            >
                              {isChecked && <IoCheckmark size={12} />}
                            </div>
                            <span
                              className={`text-[13px] font-medium transition-colors ${isChecked ? "text-primary" : "text-gray-500 group-hover:text-gray-800"}`}
                            >
                              {sub}
                            </span>
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={isChecked}
                              onChange={() => toggleFilter("categories", sub)}
                            />
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
