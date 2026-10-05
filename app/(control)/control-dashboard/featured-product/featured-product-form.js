"use client";
import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiX, FiChevronDown, FiArrowLeft } from "react-icons/fi";
import Button from "../../../components/button";

const MOCK_PRODUCTS = [
  "Rotex Industrial Fan",
  "Samsung Smart TV",
  "Apple iPhone 15",
  "Sony Headphones",
  "LG Refrigerator",
];

const FEATURE_CATEGORIES = ["Featured", "Best Sellers", "Sales"];

const SearchableSelect = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelect = (opt) => {
    if (disabled) return;
    onChange(opt);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-bold text-gray-700 mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <div
        className={`w-full min-h-[48px] px-4 py-2 border border-gray-300 bg-white flex flex-wrap gap-2 items-center ${disabled ? "bg-gray-50 cursor-not-allowed opacity-70" : "cursor-pointer hover:border-primary transition-colors focus-within:ring-2 focus-within:ring-primary focus-within:border-primary"}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        {!disabled && (
          <FiChevronDown
            className={`ml-auto text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </div>

      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 shadow-xl max-h-60 overflow-y-auto">
          <div className="sticky top-0 bg-white p-2 border-b border-gray-100">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <div
                key={opt}
                className={`px-4 py-3 hover:bg-primary/5 hover:text-primary cursor-pointer transition-colors text-sm ${value === opt ? "bg-primary/10 text-primary font-bold" : "text-gray-700"}`}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500 text-center">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function FeaturedProductForm({ mode = "add", initialData = null, onBack = null, onEdit = null }) {
  const isView = mode === "view";

  const [formData, setFormData] = useState({
    product: "",
    featureCategory: "Featured",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isView) return;
    if (!formData.product) {
      alert("Please select a product.");
      return;
    }
    console.log("Form Submitted:", formData);
    alert(`Featured Product ${mode === "edit" ? "updated" : "saved"} successfully!`);
    if (onBack) onBack();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl border border-gray-100 p-6 md:p-8 max-w-3xl"
    >
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-4">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="p-2 border border-gray-300 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              <FiArrowLeft size={20} />
            </button>
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {mode === "add"
                ? "Add Featured Product"
                : mode === "edit"
                  ? "Edit Featured Product"
                  : "View Featured Product"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {mode === "add"
                ? "Select a product and assign it to a feature category."
                : mode === "edit"
                  ? "Update the feature configuration."
                  : "Viewing featured product details."}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <SearchableSelect
          label="Select Product"
          disabled={isView}
          options={MOCK_PRODUCTS}
          value={formData.product}
          onChange={(v) => setFormData({ ...formData, product: v })}
          placeholder="Search and select product"
        />

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Feature Category <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              required
              disabled={isView}
              value={formData.featureCategory}
              onChange={(e) =>
                setFormData({ ...formData, featureCategory: e.target.value })
              }
              className={`w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
            >
              {FEATURE_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end gap-4">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors shadow-sm"
          >
            {isView ? "Back to List" : "Cancel"}
          </button>
        )}
        {isView && onEdit && <Button text="Edit" onClick={onEdit} />}
        {!isView && (
          <Button
            text={mode === "edit" ? "Update Featured Product" : "Save Featured Product"}
            onClick={handleSubmit}
          />
        )}
      </div>
    </form>
  );
}
