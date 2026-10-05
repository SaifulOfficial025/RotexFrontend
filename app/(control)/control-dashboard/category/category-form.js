"use client";
import React, { useState, useEffect } from "react";
import { FiPlus, FiTrash2, FiArrowLeft } from "react-icons/fi";
import Button from "../../../components/button";
import ImageUploader from "../../../components/ImageUploader";

export default function CategoryForm({ mode = "add", initialData = null, onBack = null, onEdit = null }) {
  const isView = mode === "view";

  const [formData, setFormData] = useState({
    name: "",
    icon: null,
    subcategories: [],
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleAddSubcategory = () => {
    if (isView) return;
    setFormData({
      ...formData,
      subcategories: [
        ...formData.subcategories,
        { name: "", icon: null },
      ],
    });
  };

  const handleSubcategoryChange = (index, field, value) => {
    if (isView) return;
    const newSubcategories = [...formData.subcategories];
    newSubcategories[index][field] = value;
    setFormData({ ...formData, subcategories: newSubcategories });
  };

  const handleRemoveSubcategory = (index) => {
    if (isView) return;
    const newSubcategories = [...formData.subcategories];
    newSubcategories.splice(index, 1);
    setFormData({ ...formData, subcategories: newSubcategories });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isView) return;
    console.log("Form Submitted:", formData);
    alert(`Category ${mode === "edit" ? "updated" : "saved"} successfully!`);
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
                ? "Add New Category"
                : mode === "edit"
                  ? "Edit Category"
                  : "View Category"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {mode === "add"
                ? "Fill in the information below to add a new category."
                : mode === "edit"
                  ? "Update the category information."
                  : "Viewing category details."}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Category Name <span className="text-red-500">*</span>
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
                placeholder="Enter category name"
              />
            </div>

            {/* Subcategories Section */}
            <div className="border border-gray-200 p-6 bg-gray-50/50 space-y-6">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <h3 className="text-lg font-bold text-gray-900">
                  Subcategories
                </h3>
                {!isView && (
                  <button
                    type="button"
                    onClick={handleAddSubcategory}
                    className="text-sm font-bold text-primary flex items-center gap-1 hover:text-black transition-colors"
                  >
                    <FiPlus /> Add Subcategory
                  </button>
                )}
              </div>

              {formData.subcategories.length === 0 ? (
                <div className="text-center py-6 text-gray-500 text-sm">
                  No subcategories added yet.
                </div>
              ) : (
                <div className="space-y-6">
                  {formData.subcategories.map((sub, index) => (
                    <div
                      key={index}
                      className="p-5 border border-gray-200 bg-white shadow-sm relative group"
                    >
                      {!isView && (
                        <button
                          type="button"
                          onClick={() => handleRemoveSubcategory(index)}
                          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                          title="Remove Subcategory"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Subcategory Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            disabled={isView}
                            value={sub.name}
                            onChange={(e) =>
                              handleSubcategoryChange(index, "name", e.target.value)
                            }
                            className={`w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                            placeholder="e.g. Ceiling Fans"
                          />
                        </div>
                        <div>
                           <ImageUploader 
                            label="Subcategory Icon"
                            value={sub.icon}
                            onChange={(v) => handleSubcategoryChange(index, "icon", v)}
                            disabled={isView}
                            aspect={1}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50/50 border border-gray-200 p-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3">
              Category Media
            </h3>
            
            <ImageUploader 
              label="Category Icon *"
              value={formData.icon}
              onChange={(v) => setFormData({ ...formData, icon: v })}
              disabled={isView}
              aspect={1}
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
            text={mode === "edit" ? "Update Category" : "Save Category"}
            onClick={handleSubmit}
          />
        )}
      </div>
    </form>
  );
}
