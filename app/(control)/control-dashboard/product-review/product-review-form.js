"use client";
import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiEyeOff, FiEye } from "react-icons/fi";

export default function ProductReviewForm({ initialData = null, onBack = null, onDelete = null }) {
  const [formData, setFormData] = useState({
    product: "",
    rating: "",
    reviewText: "",
    customerName: "",
    company: "",
    date: "",
    isHidden: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleToggleHide = () => {
    const newIsHidden = !formData.isHidden;
    setFormData({ ...formData, isHidden: newIsHidden });
    alert(`Review is now ${newIsHidden ? "Hidden" : "Visible"} to users.`);
  };

  return (
    <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8">
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
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              View Product Review
              {formData.isHidden ? (
                <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 uppercase tracking-wider">Hidden</span>
              ) : (
                <span className="text-xs font-bold bg-green-100 text-green-600 px-2 py-1 uppercase tracking-wider">Visible</span>
              )}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Read-only details of the customer review.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Product</label>
            <div className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 font-medium cursor-not-allowed">
              {formData.product || "N/A"}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Customer Name</label>
            <div className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed">
              {formData.customerName || "N/A"}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
            <div className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed">
              {formData.company || "N/A"}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Date</label>
            <div className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed">
              {formData.date || "N/A"}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Rating</label>
            <div className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 font-bold cursor-not-allowed flex items-center gap-1">
              <span className="text-yellow-500 text-lg">★</span> {formData.rating ? `${formData.rating} / 5` : "N/A"}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Review Text</label>
            <div className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed min-h-[160px] whitespace-pre-wrap">
              {formData.reviewText || "N/A"}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
        <div>
          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="px-6 py-3 bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-sm"
            >
              Delete Review
            </button>
          )}
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleToggleHide}
            className={`px-6 py-3 font-bold transition-colors shadow-sm flex items-center gap-2 ${formData.isHidden ? "bg-green-600 text-white hover:bg-green-700" : "bg-orange-500 text-white hover:bg-orange-600"}`}
          >
            {formData.isHidden ? <><FiEye size={18} /> Publish Review</> : <><FiEyeOff size={18} /> Hide Review</>}
          </button>
          
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors shadow-sm"
            >
              Back to List
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
