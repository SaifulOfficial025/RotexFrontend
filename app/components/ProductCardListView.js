import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

export default function ProductCardListView({ product }) {
  // Fallback data if product is not provided
  const data = product || {
    id: 1,
    name: "Smart watches wood edition",
    image: "/images/rocarry.jpeg", // Fallback image path
    categories: ["Accessories", "Clocks"],
    price: ".00",
    colors: ["#eadcc3", "#000000"],
    description:
      "A stunning blend of natural eco-wood craftsmanship and smart tech. Featuring a unique minimalist analog display and a premium leather strap engineered for ultimate daily comfort and style.",
    slug: "smart-watches-wood-edition",
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 bg-white overflow-hidden group border border-gray-100 rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:z-[60]">
      <Link
        href={`/products/${data.slug || "#"}`}
        className="absolute inset-0 z-40"
        aria-label={`View ${data.name}`}
      ></Link>
      {/* Image Section */}
      <div className="w-full md:w-[35%] lg:w-[30%] bg-[#F8F9FA] relative aspect-square md:aspect-[4/5] flex items-center justify-center p-6 transition-all duration-300 rounded-md overflow-hidden">
        {data.image ? (
          <>
            <img
              src={data.image}
              alt={data.name}
              className={`object-contain p-4 w-full h-full absolute inset-0 transition-opacity duration-500 ${data.hoverImage ? "group-hover:opacity-0" : "group-hover:scale-105 transition-transform"}`}
            />
            {data.hoverImage && (
              <img
                src={data.hoverImage}
                alt={data.name}
                className="object-contain p-4 w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        )}
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col justify-center py-4 md:py-6 pr-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-200 mb-1.5 relative z-50">
          {data.name}
        </h2>

        {data.categories && data.categories.length > 0 && (
          <p className="text-sm text-gray-400 mb-4 font-medium">
            {data.categories.join(", ")}
          </p>
        )}

        <div className="text-xl md:text-[22px] font-bold text-primary mb-5">
          {data.price}
        </div>

        {/* Color Options */}

        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">
          {data.description}
        </p>

        <div>
          <Button
            variant="primary"
            showArrow={false}
            className="!py-2.5 !px-6 text-[13px] uppercase tracking-wide relative z-50 pointer-events-none"
          >
            View Product
          </Button>
        </div>
      </div>
    </div>
  );
}
