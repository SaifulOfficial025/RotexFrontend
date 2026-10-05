"use client";
import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Button from "../../../components/button";
import ImageUploader from "../../../components/ImageUploader";

export default function OurTeamForm({ mode = "add", initialData = null, onBack = null, onEdit = null }) {
  const isView = mode === "view";

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    photo: null,
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
    alert(`Team Member ${mode === "edit" ? "updated" : "saved"} successfully!`);
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
                ? "Add Team Member"
                : mode === "edit"
                  ? "Edit Team Member"
                  : "View Team Member"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {mode === "add"
                ? "Fill in the information below to add a new team member."
                : mode === "edit"
                  ? "Update the team member information."
                  : "Viewing team member details."}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
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
                placeholder="Enter member's name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Designation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                disabled={isView}
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
                className={`w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${isView ? "bg-gray-50 cursor-not-allowed text-gray-600" : ""}`}
                placeholder="Enter designation (e.g. CEO, Engineer)"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50/50 border border-gray-200 p-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3">
              Member Photo
            </h3>
            
            <ImageUploader 
              label="Photo (3:4 Ratio) *"
              value={formData.photo}
              onChange={(v) => setFormData({ ...formData, photo: v })}
              disabled={isView}
              aspect={3 / 4}
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
            text={mode === "edit" ? "Update Member" : "Save Member"}
            onClick={handleSubmit}
          />
        )}
      </div>
    </form>
  );
}
