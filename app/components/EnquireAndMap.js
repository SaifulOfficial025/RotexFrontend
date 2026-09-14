"use client";

import React, { useState } from "react";
import Button from "./button";

export default function EnquireAndMap() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      fullName: "",
      address: "",
      email: "",
      phone: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add backend API integration here
  };

  return (
    <section className="py-8 md:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white p-6 md:p-10 shadow-lg border border-gray-100 ">
          {/* Left: Form Section */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 tracking-tight">
              Enquire about
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
              {/* Row 1: Name & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full border border-gray-200  px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all bg-gray-50/50 text-gray-800 placeholder-gray-400 text-sm font-medium"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full border border-gray-200  px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all bg-gray-50/50 text-gray-800 placeholder-gray-400 text-sm font-medium"
                />
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-200  px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all bg-gray-50/50 text-gray-800 placeholder-gray-400 text-sm font-medium"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone/WhatsApp"
                  className="w-full border border-gray-200  px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all bg-gray-50/50 text-gray-800 placeholder-gray-400 text-sm font-medium"
                  required
                />
              </div>

              {/* Textarea */}
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Query description"
                rows="5"
                className="w-full border border-gray-200 px-4 py-3.5 mb-8 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all bg-gray-50/50 text-gray-800 placeholder-gray-400 text-sm font-medium resize-none"
                required
              ></textarea>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <Button
                  type="submit"
                  variant="primary"
                  showArrow={false}
                  className="!py-3 !px-8 sm:!px-12  w-full sm:w-auto"
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="white"
                  showArrow={false}
                  onClick={handleClear}
                  className="!py-3 !px-8 sm:!px-12 border-1 border-gray-200 !text-gray-700 hover:!text-gray-900 hover:bg-gray-100 w-full sm:w-auto"
                >
                  Clear
                </Button>
              </div>
            </form>
          </div>

          {/* Right: Map Section */}
          <div className="w-full lg:w-1/2 min-h-[350px] lg:min-h-full overflow-hidden shadow-inner border border-gray-200 bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.33889271038!2d90.41102319264722!3d23.723495564754717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90c31b4a9d1%3A0xde8534ec449aeb3d!2sRotex%20International!5e0!3m2!1sen!2sbd!4v1789029588369!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
