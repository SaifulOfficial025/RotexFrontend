"use client";
import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Button from "../../../components/button";
import ImageUploader from "../../../components/ImageUploader";

export default function HomepageReviewForm({ mode = "add", initialData = null, onBack = null, onEdit = null }) {
  const isView = mode === "view";

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    date: "",
    review: "",
    image: null,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleReviewChange = (e) => {
    if (isView) return;
    const text = e.target.value;
    const words = text
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 0);
    if (words.length <= 20) {
      setFormData((prev) => ({ ...prev, review: text }));
    }
  };

  const reviewWordsCount = formData.review
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isView) return;
    console.log("Form Submitted:", formData);
    alert(`Homepage Review ${mode === "edit" ? "updated" : "saved"} successfully!`);
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
                ? "Add Homepage Review"
                : mode === "edit"
                  ? "Edit Homepage Review"
                  : "View Homepage Review"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {mode === "add"
                ? "Fill in the information below to add a new review."
                : mode === "edit"
                  ? "Update the review information."
                  : "Viewing review details."}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Reviewer Name <span className="text-red-500">*</span>
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
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  disabled={isView}
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className={`w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                  placeholder="Enter company name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                disabled={isView}
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className={`w-full md:w-1/2 px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-bold text-gray-700">
                  Review <span className="text-red-500">*</span>
                </label>
                <span
                  className={`text-xs font-bold ${reviewWordsCount >= 20 ? "text-red-500" : "text-gray-400"}`}
                >
                  {reviewWordsCount} / 20 words
                </span>
              </div>
              <textarea
                required
                disabled={isView}
                value={formData.review}
                onChange={handleReviewChange}
                rows={3}
                className={`w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                placeholder="Briefly write the review (max 20 words)..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50/50 border border-gray-200 p-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3">
              Reviewer Media
            </h3>
            
            <ImageUploader 
              label="Image (16:9)"
              value={formData.image}
              onChange={(v) => setFormData({ ...formData, image: v })}
              disabled={isView}
              aspect={16 / 9}
            />
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
            text={mode === "edit" ? "Update Review" : "Save Review"}
            onClick={handleSubmit}
          />
        )}
      </div>
    </form>
  );
}
