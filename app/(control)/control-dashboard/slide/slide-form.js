"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiChevronDown, FiArrowLeft } from "react-icons/fi";
import Button from "../../../components/button";

const MOCK_PRODUCTS = [
  "Rotex Industrial Fan",
  "Samsung Smart TV",
  "Apple iPhone 15",
  "Sony Headphones",
  "LG Refrigerator",
];

const SearchableSelect = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  multiple = false,
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
    if (multiple) {
      const currentVals = Array.isArray(value) ? value : [];
      if (currentVals.includes(opt)) {
        onChange(currentVals.filter((v) => v !== opt));
      } else {
        onChange([...currentVals, opt]);
      }
    } else {
      onChange(opt);
      setIsOpen(false);
      setSearch("");
    }
  };

  const handleRemove = (opt, e) => {
    e.stopPropagation();
    if (disabled) return;
    if (multiple) {
      const currentVals = Array.isArray(value) ? value : [];
      onChange(currentVals.filter((v) => v !== opt));
    }
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
        {multiple ? (
          <>
            {(value || []).map((v) => (
              <span
                key={v}
                className="bg-primary/10 text-primary px-2 py-1 text-sm flex items-center gap-1 font-bold border border-primary/20"
              >
                {v}
                {!disabled && (
                  <span
                    className="cursor-pointer hover:text-red-500 ml-1"
                    onClick={(e) => handleRemove(v, e)}
                  >
                    ×
                  </span>
                )}
              </span>
            ))}
            {(value || []).length === 0 && (
              <span className="text-gray-400">{placeholder}</span>
            )}
          </>
        ) : (
          <span className={value ? "text-gray-900" : "text-gray-400"}>
            {value || placeholder}
          </span>
        )}
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
                className={`px-4 py-3 hover:bg-primary/5 hover:text-primary cursor-pointer transition-colors text-sm ${multiple && (value || []).includes(opt) ? "bg-primary/10 text-primary font-bold" : value === opt ? "bg-primary/10 text-primary font-bold" : "text-gray-700"}`}
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

export default function SlideForm({ mode = "add", initialData = null, onBack = null, onEdit = null, onDelete = null }) {
  const isView = mode === "view";

  const [formData, setFormData] = useState({
    products: [],
    bgColor: "#ffffff",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        products: initialData.products || (initialData.productName ? [initialData.productName] : []),
        bgColor: initialData.bgColor || "#ffffff",
      });
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isView) return;
    if (!formData.products || formData.products.length === 0) {
      alert("Please select at least one product.");
      return;
    }
    console.log("Form Submitted:", formData);
    alert(`Slide ${mode === "edit" ? "updated" : "saved"} successfully!`);
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
                ? "Add Slide"
                : mode === "edit"
                  ? "Edit Slide"
                  : "View Slide"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {mode === "add"
                ? "Select products to feature in the slider and pick a background color."
                : mode === "edit"
                  ? "Update the slide configuration."
                  : "Viewing slide details."}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <SearchableSelect
          label="Select Products for Slide"
          disabled={isView}
          options={MOCK_PRODUCTS}
          value={formData.products || []}
          onChange={(v) => setFormData({ ...formData, products: v })}
          placeholder="Search and select products"
          multiple={true}
        />

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Background Color <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <input
              type="color"
              required
              disabled={isView}
              value={formData.bgColor || "#ffffff"}
              onChange={(e) =>
                setFormData({ ...formData, bgColor: e.target.value })
              }
              className={`w-14 h-14 p-1 border border-gray-300 cursor-pointer ${isView ? "opacity-70 cursor-not-allowed" : ""}`}
            />
            <input
              type="text"
              required
              disabled={isView}
              value={formData.bgColor || "#ffffff"}
              onChange={(e) =>
                setFormData({ ...formData, bgColor: e.target.value })
              }
              className={`flex-1 px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all uppercase ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
              placeholder="#FFFFFF"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
        <div>
          {isView && onDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="px-6 py-3 bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-sm"
            >
              Delete
            </button>
          )}
        </div>
        <div className="flex gap-4">
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
            text={mode === "edit" ? "Update Slide" : "Save Slide"}
            onClick={handleSubmit}
          />
        )}
        </div>
      </div>
    </form>
  );
}
