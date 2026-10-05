"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import {
  FiPlus,
  FiTrash2,
  FiSearch,
  FiX,
  FiChevronDown,
  FiArrowLeft,
} from "react-icons/fi";
import Button from "../../../components/button";
import ImageUploader from "../../../components/ImageUploader";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const MOCK_BRANDS = ["Rotex", "Samsung", "Apple", "Sony", "LG", "Philips"];
const MOCK_CATEGORIES = [
  "Electronics",
  "Home Appliances",
  "Industrial",
  "Medical",
  "Automotive",
];
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
  multiple = false,
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
    if (multiple) {
      if (!value.includes(opt)) {
        onChange([...value, opt]);
      }
    } else {
      onChange(opt);
      setIsOpen(false);
    }
    setSearch("");
  };

  const handleRemove = (opt, e) => {
    e.stopPropagation();
    if (disabled) return;
    onChange(value.filter((v) => v !== opt));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-bold text-gray-700 mb-2">
        {label}
      </label>
      <div
        className={`w-full min-h-[48px] px-4 py-2 border border-gray-300 bg-white flex flex-wrap gap-2 items-center ${disabled ? "bg-gray-50 cursor-not-allowed opacity-70" : "cursor-pointer hover:border-primary transition-colors focus-within:ring-2 focus-within:ring-primary focus-within:border-primary"}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {multiple ? (
          <>
            {value.map((v) => (
              <span
                key={v}
                className="bg-primary/10 text-primary px-2 py-1 text-sm flex items-center gap-1 font-bold border border-primary/20"
              >
                {v}
                {!disabled && (
                  <FiX
                    className="cursor-pointer hover:text-black ml-1 border-l border-primary/30 pl-1"
                    onClick={(e) => handleRemove(v, e)}
                  />
                )}
              </span>
            ))}
            {value.length === 0 && (
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
                className={`px-4 py-3 hover:bg-primary/5 hover:text-primary cursor-pointer transition-colors text-sm ${multiple && value.includes(opt) ? "bg-primary/10 text-primary font-bold" : "text-gray-700"}`}
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

export default function ProductForm({
  mode = "add",
  initialData = null,
  onBack = null,
  onEdit = null,
}) {
  const isView = mode === "view";

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    shortDescription: "",
    sku: "",
    description: "",
    relatedProducts: [],
    catalogUrl: "",
    primaryThumbnail: null,
    hoverThumbnail: null,
    additionalPhotos: [],
    variants: [{ name: "", actualPrice: "", discount: "", finalPrice: "" }],
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleShortDescChange = (e) => {
    if (isView) return;
    const text = e.target.value;
    const words = text
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 0);
    if (words.length <= 80) {
      setFormData((prev) => ({ ...prev, shortDescription: text }));
    }
  };

  const shortDescWordsCount = formData.shortDescription
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  const addVariant = () => {
    if (isView) return;
    setFormData((prev) => ({
      ...prev,
      variants: [
        ...prev.variants,
        { name: "", actualPrice: "", discount: "", finalPrice: "" },
      ],
    }));
  };

  const removeVariant = (index) => {
    if (isView) return;
    setFormData((prev) => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index),
    }));
  };

  const updateVariant = (index, field, value) => {
    if (isView) return;
    const newVariants = [...formData.variants];
    newVariants[index][field] = value;

    // Auto calculation for variant pricing
    if (field === "actualPrice" || field === "discount") {
      const actual = parseFloat(
        field === "actualPrice" ? value : newVariants[index].actualPrice,
      );
      const disc = parseFloat(
        field === "discount" ? value : newVariants[index].discount,
      );
      if (!isNaN(actual) && !isNaN(disc)) {
        newVariants[index].finalPrice = (
          actual -
          actual * (disc / 100)
        ).toFixed(2);
      }
    } else if (field === "finalPrice") {
      const actual = parseFloat(newVariants[index].actualPrice);
      const final = parseFloat(value);
      if (!isNaN(actual) && !isNaN(final) && actual > 0) {
        newVariants[index].discount = (
          ((actual - final) / actual) *
          100
        ).toFixed(2);
      }
    }

    setFormData((prev) => ({ ...prev, variants: newVariants }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isView) return;
    console.log("Form Submitted:", formData);
    alert(`Product ${mode === "edit" ? "updated" : "saved"} successfully!`);
    if (onBack) onBack();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl border border-gray-100 p-6 md:p-8"
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
                ? "Add New Product"
                : mode === "edit"
                  ? "Edit Product"
                  : "View Product"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {mode === "add"
                ? "Fill in the information below to add a new product."
                : mode === "edit"
                  ? "Update the product information."
                  : "Viewing product details."}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN - MAIN DETAILS */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                disabled={isView}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                placeholder="Enter product name"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-bold text-gray-700">
                  Short Description <span className="text-red-500">*</span>
                </label>
                <span
                  className={`text-xs font-bold ${shortDescWordsCount >= 80 ? "text-red-500" : "text-gray-400"}`}
                >
                  {shortDescWordsCount} / 80 words
                </span>
              </div>
              <textarea
                required
                disabled={isView}
                value={formData.shortDescription}
                onChange={handleShortDescChange}
                rows={3}
                className={`w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                placeholder="Briefly describe the product (max 80 words)..."
              />
            </div>
          </div>

          {/* MEDIA SECTION */}
          <div className="border border-gray-200 p-6 bg-gray-50/50 space-y-8">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3">
              Media & Images
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageUploader
                label="Primary Thumbnail *"
                value={formData.primaryThumbnail}
                onChange={(v) =>
                  setFormData({ ...formData, primaryThumbnail: v })
                }
                disabled={isView}
                aspect={1}
              />
              <ImageUploader
                label="Hover Thumbnail"
                value={formData.hoverThumbnail}
                onChange={(v) =>
                  setFormData({ ...formData, hoverThumbnail: v })
                }
                disabled={isView}
                aspect={1}
              />
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <ImageUploader
                label="Additional Photos"
                value={formData.additionalPhotos}
                onChange={(v) =>
                  setFormData({ ...formData, additionalPhotos: v })
                }
                disabled={isView}
                multiple={true}
                aspect={1}
              />
            </div>
          </div>

          {/* Rich Text Editor */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Product Description <span className="text-red-500">*</span>
            </label>
            <div
              className={`border border-gray-300 transition-colors ${isView ? "bg-gray-50 opacity-80" : "hover:border-primary focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"}`}
            >
              <ReactQuill
                theme="snow"
                value={formData.description}
                onChange={(val) =>
                  !isView && setFormData({ ...formData, description: val })
                }
                readOnly={isView}
                className="bg-white"
                placeholder="Write a detailed description here..."
              />
            </div>
            <style jsx global>{`
              .ql-toolbar.ql-snow,
              .ql-container.ql-snow {
                border: none !important;
              }
              .ql-toolbar.ql-snow {
                border-bottom: 1px solid #e5e7eb !important;
                background-color: #f9fafb;
              }
              .ql-editor {
                min-height: 250px;
                font-size: 15px;
              }
            `}</style>
          </div>

          {/* VARIANTS & PRICING */}
          <div className="border border-gray-200 p-6 bg-gray-50/50 space-y-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <h3 className="text-lg font-bold text-gray-900">
                Pricing & Variants
              </h3>
              {!isView && (
                <button
                  type="button"
                  onClick={addVariant}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 hover:text-primary hover:border-primary transition-all text-sm shadow-sm flex-shrink-0"
                >
                  <FiPlus /> Add Variant
                </button>
              )}
            </div>

            <div className="space-y-4">
              {formData.variants.map((variant, index) => (
                <div
                  key={index}
                  className="bg-white p-4 border border-gray-200 shadow-sm relative group flex flex-col md:flex-row gap-4 items-start md:items-end"
                >
                  <div className="w-full md:w-1/4">
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">
                      Variant Name
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isView}
                      value={variant.name}
                      onChange={(e) =>
                        updateVariant(index, "name", e.target.value)
                      }
                      className={`w-full px-3 py-2 border border-gray-300 focus:border-primary outline-none text-sm ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                      placeholder="e.g. Base, Size L, Red"
                    />
                  </div>

                  <div className="w-full md:w-1/4">
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">
                      Actual Price ($)
                    </label>
                    <input
                      type="number"
                      required
                      disabled={isView}
                      value={variant.actualPrice}
                      onChange={(e) =>
                        updateVariant(index, "actualPrice", e.target.value)
                      }
                      className={`w-full px-3 py-2 border border-gray-300 focus:border-primary outline-none text-sm ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                      placeholder="0.00"
                    />
                  </div>

                  <div className="w-full md:w-1/4">
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">
                      Discount (%)
                    </label>
                    <input
                      type="number"
                      disabled={isView}
                      value={variant.discount}
                      onChange={(e) =>
                        updateVariant(index, "discount", e.target.value)
                      }
                      className={`w-full px-3 py-2 border border-gray-300 focus:border-primary outline-none text-sm ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                      placeholder="0"
                    />
                  </div>

                  <div className="w-full md:w-1/4">
                    <label className="block text-xs font-bold text-primary mb-1 uppercase tracking-wider">
                      Final Price ($)
                    </label>
                    <input
                      type="number"
                      required
                      disabled={isView}
                      value={variant.finalPrice}
                      onChange={(e) =>
                        updateVariant(index, "finalPrice", e.target.value)
                      }
                      className={`w-full px-3 py-2 border border-primary/30 ${isView ? "bg-primary/5 cursor-not-allowed opacity-80" : "bg-primary/5"} focus:border-primary outline-none text-sm font-bold text-primary`}
                      placeholder="0.00"
                    />
                  </div>

                  {!isView && formData.variants.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeVariant(index)}
                      className="md:mb-2 w-8 h-8 flex-shrink-0 bg-white border border-red-200 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors shadow-sm flex items-center justify-center"
                      title="Remove Variant"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - ORGANIZATION */}
        <div className="space-y-8">
          {/* Organization Block */}
          <div className="bg-gray-50/50 border border-gray-200 p-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3">
              Organization
            </h3>

            <SearchableSelect
              label="Brand *"
              disabled={isView}
              options={MOCK_BRANDS}
              value={formData.brand}
              onChange={(v) => setFormData({ ...formData, brand: v })}
              placeholder="Select Brand"
            />

            <SearchableSelect
              label="Category *"
              disabled={isView}
              options={MOCK_CATEGORIES}
              value={formData.category}
              onChange={(v) => setFormData({ ...formData, category: v })}
              placeholder="Select Category"
            />

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                SKU <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                disabled={isView}
                value={formData.sku}
                onChange={(e) =>
                  setFormData({ ...formData, sku: e.target.value })
                }
                className={`w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all uppercase ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                placeholder="e.g. RTX-2026-X"
              />
            </div>

            <SearchableSelect
              label="Related Products"
              disabled={isView}
              options={MOCK_PRODUCTS}
              value={formData.relatedProducts}
              onChange={(v) => setFormData({ ...formData, relatedProducts: v })}
              placeholder="Select products"
              multiple={true}
            />

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Catalog URL
              </label>
              <input
                type="url"
                disabled={isView}
                value={formData.catalogUrl}
                onChange={(e) =>
                  setFormData({ ...formData, catalogUrl: e.target.value })
                }
                className={`w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                placeholder="https://..."
              />
            </div>
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
            text={mode === "edit" ? "Update Product" : "Save Product"}
            onClick={handleSubmit}
          />
        )}
      </div>
    </form>
  );
}
