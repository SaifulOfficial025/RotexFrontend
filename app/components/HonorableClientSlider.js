import React from "react";
import { FaArrowRight } from "react-icons/fa6";

// Dummy brand data - using clean SVG logos
const dummyBrands = [
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Intel_logo_%282020%2C_light_blue%29.svg",
  },
  {
    name: "TCS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
];

export default function BrandWeRepresentSlider() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100 flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Our honorable clients
            </h2>
            <div className="w-20 h-1.5 bg-primary mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
              We are honored to have worked with a diverse range of clients
              across various industries. Their trust and satisfaction are a
              testament to our commitment to excellence.
            </p>
          </div>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {dummyBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 h-32 md:h-36 flex items-center justify-center border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>

              {/* Logo Image */}
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="object-contain max-h-[60px] max-w-[80%] drop-shadow-sm pointer-events-none select-none transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12 flex justify-center">
          <button className="group inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold text-[14px] hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300">
            See More Clients
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
