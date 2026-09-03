import React from 'react';

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
    <div className="group flex flex-col bg-white border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 w-full mx-auto">
      
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] bg-[#F8F9FA] flex items-center justify-center p-8 overflow-hidden">
        {sale && (
          <div className="absolute top-5 left-5 z-20 bg-primary text-white text-[12px] font-bold w-12 h-12 rounded-full flex items-center justify-center tracking-wide">
            SALE
          </div>
        )}
        
        <img 
          src={image} 
          alt={title} 
          className={`object-contain w-full h-full transition-opacity duration-500 absolute inset-0 p-8 ${hoverImage ? 'group-hover:opacity-0' : ''}`}
        />
        
        {hoverImage && (
          <img 
            src={hoverImage} 
            alt={title} 
            className="object-contain w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 p-8"
          />
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col bg-white">
        
        {/* Shuffle Icon Section (Expands on hover) */}
        <div className="w-full border-t border-transparent group-hover:border-gray-200 transition-colors duration-300">
           <div className="flex justify-end px-4 max-h-0 group-hover:max-h-12 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
             <button className="py-3 text-gray-700 hover:text-black">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <polyline points="16 3 21 3 21 8"></polyline>
                  <line x1="4" y1="20" x2="21" y2="3"></line>
                  <polyline points="21 16 21 21 16 21"></polyline>
                  <line x1="15" y1="15" x2="21" y2="21"></line>
                  <line x1="4" y1="4" x2="9" y2="9"></line>
                </svg>
             </button>
           </div>
        </div>

        {/* Title, Category, Price */}
        <div className="flex flex-col items-center px-4 pt-2 pb-2">
          <h3 className="text-[17px] text-gray-800 font-medium mb-1 text-center">{title}</h3>
          <p className="text-gray-400 text-[14px] mb-2 text-center">{category}</p>
          <p className="text-primary font-medium text-[15px]">{price}</p>
        </div>

        {/* Expandable Description & Actions */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-[500px] transition-all duration-500 ease-in-out px-4 flex flex-col items-center">
          <div className="pb-6 w-full flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-2">
            <p className="text-gray-500 text-[14px] text-center mb-6 leading-relaxed">
              {description}
            </p>
            
            <div className="w-full flex justify-between items-center px-1">
              <button className="text-gray-700 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
              <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 text-[13px] font-bold tracking-wider transition-colors rounded-sm">
                VIEW PRODUCTS
              </button>
              <button className="text-gray-700 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
