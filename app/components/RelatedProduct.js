"use client";

import { useState } from "react";
import ProductCard from "./productCard";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Generating dummy data for the grid
const images = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585386959920-a415b1ebb0ff?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400&auto=format&fit=crop",
];

const dummyProducts = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: "Related Product " + (i + 1),
  category: i % 2 === 0 ? "Electronics" : "Health",
  price: "৳" + (((i * 15.5) % 100) + 20).toFixed(2),
  image: images[i % images.length],
  hoverImage: images[(i + 1) % images.length],
  sale: i % 4 === 0,
  description:
    "High quality professional equipment designed for accurate and reliable results.",
}));

const CARD_WIDTH = 300;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;

export default function RelatedProduct() {
  const [offset, setOffset] = useState(0);
  const maxOffset = (dummyProducts.length - 1) * STEP;

  const scroll = (direction) => {
    setOffset((prev) => {
      if (direction === "left") return Math.max(prev - STEP, 0);
      return Math.min(prev + STEP, maxOffset);
    });
  };

  return (
    <div className="w-full py-10 md:py-16">
      <div className="flex items-center justify-between mb-8 px-2 md:px-0 border-b border-gray-100 pb-4">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-gray-900 tracking-widest relative">
          Related Products
          <span className="absolute -bottom-4 left-0 w-20 h-1 bg-primary"></span>
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={offset === 0}
            className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <IoChevronBack size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={offset >= maxOffset}
            className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <IoChevronForward size={18} />
          </button>
        </div>
      </div>

      {/* overflow-x:clip clips horizontally WITHOUT creating a scroll container,
          so overflow-y stays truly visible — cards can scale up above the boundary */}
      <div
        style={{ overflowX: "clip", overflowY: "visible" }}
        className="relative -mx-8 -mr-20"
      >
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out pt-8 pb-28 px-8"
          style={{ transform: "translateX(-" + offset + "px)" }}
        >
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="w-[300px] flex-shrink-0 relative hover:z-[100]"
            >
              <ProductCard
                title={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
                hoverImage={product.hoverImage}
                sale={product.sale}
                description={product.description}
              />
            </div>
          ))}
          {/* Trailing spacer so last card has room to scale on hover */}
          <div className="w-20 flex-shrink-0" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
