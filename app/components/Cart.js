"use client";

import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./button";

export default function Cart({ isOpen, onClose }) {
  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[120] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[130] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors hover:bg-gray-100 rounded-full"
            aria-label="Close cart"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Body - Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Example Item */}
          <div className="flex gap-5 p-5 border border-gray-100">
            {/* Product Image */}
            <div className="w-[100px] h-[100px] bg-gray-50 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop"
                alt="Product"
                className="w-full h-full object-cover mix-blend-multiply opacity-50"
              />
            </div>
            
            <div className="flex flex-col flex-1">
              <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2">
                Powerix Technology PTL Lithium battery:64V/185Ah(Actual)
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[15px] text-gray-400 line-through">৳2,000</span>
                <span className="text-[15px] font-bold text-gray-900">৳1,800</span>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                {/* Quantity Control */}
                <div className="flex items-center border border-gray-200">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors border-r border-gray-200 font-medium">
                    -
                  </button>
                  <span className="w-10 h-8 flex items-center justify-center text-[15px] font-medium text-gray-900">
                    1
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors border-l border-gray-200 font-medium">
                    +
                  </button>
                </div>
                
                <button className="text-[15px] font-medium text-[#7a8b9a] underline hover:text-primary transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[17px] font-bold text-gray-900">Subtotal</span>
            <span className="text-[17px] font-bold text-gray-900">৳1,800</span>
          </div>
          
          <Button variant="primary" showArrow={false} className="w-full !py-3.5 !text-[15px] shadow-sm hover:shadow-md">
            Check Out
          </Button>
        </div>
      </div>
    </>
  );
}
