import React from "react";

export default function ProductCard({
  image = "/images/default-product.png",
  hoverImage,
  title = "Wooden single drawer",
  category = "Furniture",
  price = "$249.00 – $399.00",
  description = "Upgrade your home office or entryway with the clean, organic lines of this minimalist wooden desk. Crafted from",
  sale = true,
}) {
  return (
    <div className="relative w-full group">
      {/* Invisible ghost element to maintain grid cell height for the unexpanded state */}
      <div
        className="flex flex-col w-full opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full aspect-square bg-[#F8F9FA]"></div>
        <div className="flex flex-col bg-white">
          <div className="flex flex-col items-center px-4 pt-2 pb-2">
            <div className="h-[48px] w-full flex items-center justify-center mb-1 overflow-hidden">
              <h3 className="text-[17px] font-medium text-center line-clamp-2">
                {title}
              </h3>
            </div>
            <p className="text-[14px] mb-2 text-center">{category}</p>
            <p className="text-[15px]">{price}</p>
          </div>
          {/* Ghost button space for mobile to maintain grid height */}
          <div className="w-full flex justify-center items-center px-4 pb-6 mt-2 lg:hidden">
            <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-[13px]">GHOST</button>
          </div>
        </div>
      </div>

      {/* Actual visible card, absolutely positioned to overlay on hover without shifting grid */}
      <div className="absolute top-0 left-0 w-full flex flex-col bg-white border border-transparent group-hover:border-gray-200 group-hover:shadow-2xl group-hover:scale-[1.08] group-hover: border-[8px] border-black transition-all duration-300 z-10 group-hover:z-50 mx-auto">
        {/* Image Container */}
        <div className="relative w-full aspect-square bg-[#F8F9FA] flex items-center justify-center overflow-hidden">
          {sale && (
            <div className="absolute top-5 left-5 z-20 bg-primary text-white text-[12px] font-bold w-12 h-12 rounded-full flex items-center justify-center tracking-wide">
              SALE
            </div>
          )}

          <img
            src={image}
            alt={title}
            className={`object-cover w-full h-full transition-opacity duration-500 absolute inset-0 ${hoverImage ? "group-hover:opacity-0" : ""}`}
          />

          {hoverImage && (
            <img
              src={hoverImage}
              alt={title}
              className="object-cover w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0"
            />
          )}
        </div>

        {/* Content Container */}
        <div className="flex flex-col bg-white">
          {/* Shuffle Icon Section (Expands on hover) */}
          <div className="w-full border-t border-transparent group-hover:border-gray-200 transition-colors duration-300"></div>

          {/* Title, Category, Price */}
          <div className="flex flex-col items-center px-4 pt-2 pb-2">
            <div className="h-[48px] w-full flex items-center justify-center mb-1 overflow-hidden">
              <h3 className="text-[17px] text-gray-800 font-medium text-center line-clamp-2">
                {title}
              </h3>
            </div>
            <p className="text-gray-400 text-[14px] mb-2 text-center">
              {category}
            </p>
            <p className="text-primary font-medium text-[15px]">{price}</p>
          </div>

          {/* Expandable Description */}
          <div className="max-h-0 overflow-hidden group-hover:max-h-[500px] transition-all duration-500 ease-in-out px-4 flex flex-col items-center">
            <div className="w-full flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-2">
              <p className="text-gray-500 text-[14px] text-center mb-6 leading-relaxed lg:mb-4">
                {description}
              </p>
            </div>
          </div>

          {/* Button: Visible by default on mobile, visible on hover on desktop */}
          <div className="w-full flex justify-center items-center px-4 pb-6 mt-2 overflow-hidden transition-all duration-500 ease-in-out max-h-[100px] opacity-100 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-[100px] lg:group-hover:opacity-100">
            <button className="bg-primary hover:bg-primary/90 text-white px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-[13px] font-bold tracking-wider transition-colors w-full sm:w-auto whitespace-nowrap">
              VIEW PRODUCT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
