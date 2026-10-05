"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FiArrowLeft } from "react-icons/fi";
import Button from "../../../components/button";
import ImageUploader from "../../../components/ImageUploader";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

export default function BlogForm({ mode = "add", initialData = null, onBack = null, onEdit = null }) {
  const isView = mode === "view";

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    coverPhoto: null,
    additionalPhotos: [],
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isView) return;
    console.log("Form Submitted:", formData);
    alert(`Blog ${mode === "edit" ? "updated" : "saved"} successfully!`);
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
                ? "Add New Blog"
                : mode === "edit"
                  ? "Edit Blog"
                  : "View Blog"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {mode === "add"
                ? "Fill in the information below to create a new blog."
                : mode === "edit"
                  ? "Update the blog information."
                  : "Viewing blog details."}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Blog Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                disabled={isView}
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className={`w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                placeholder="Enter blog title"
              />
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
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Description (Content) <span className="text-red-500">*</span>
              </label>
              <div
                className={`border border-gray-300 transition-colors ${isView ? "bg-gray-50 opacity-80" : "hover:border-primary focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"}`}
              >
                <ReactQuill
                  theme="snow"
                  value={formData.description}
                  onChange={(val) =>
                    setFormData({ ...formData, description: val })
                  }
                  readOnly={isView}
                  className="bg-white min-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50/50 border border-gray-200 p-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3">
              Blog Media
            </h3>
            
            <ImageUploader 
              label="Cover Photo (16:9) *"
              value={formData.coverPhoto}
              onChange={(v) => setFormData({ ...formData, coverPhoto: v })}
              disabled={isView}
              aspect={16 / 9}
            />
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <ImageUploader 
                label="Additional Photo (4:3)"
                value={formData.additionalPhotos}
                onChange={(v) => setFormData({ ...formData, additionalPhotos: v })}
                disabled={isView}
                multiple={true}
                aspect={4 / 3}
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
            text={mode === "edit" ? "Update Blog" : "Save Blog"}
            onClick={handleSubmit}
          />
        )}
      </div>
    </form>
  );
}
