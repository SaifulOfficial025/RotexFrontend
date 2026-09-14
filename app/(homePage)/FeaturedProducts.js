"use client";

import { useState } from "react";
import ProductCard from "../components/productCard";

const images = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop", // Watch
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop", // Headphones
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop", // Shoes
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=400&auto=format&fit=crop", // Camera
  "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?q=80&w=400&auto=format&fit=crop", // Lamp
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&auto=format&fit=crop", // Sunglasses
  "https://images.unsplash.com/photo-1585386959920-a415b1ebb0ff?q=80&w=400&auto=format&fit=crop", // Shampoo
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400&auto=format&fit=crop", // Smartwatch
  "https://images.unsplash.com/photo-1581508210335-59b13970b13d?q=80&w=400&auto=format&fit=crop", // Bag
  "https://images.unsplash.com/photo-1527814050087-379381547962?q=80&w=400&auto=format&fit=crop", // Mouse
  "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=400&auto=format&fit=crop", // Keyboard
  "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=400&auto=format&fit=crop", // Film Camera
];

const featureCategories = ["Featured", "Best Sellers", "Sales"];

const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Premium Product ${i + 1}`,
  category: i % 2 === 0 ? "Furniture" : "Accessories",
  // Assign a feature category logically for dummy data
  featureCategory: i < 4 ? "Featured" : i < 8 ? "Best Sellers" : "Sales",
  price: `$${((i * 15.5) % 100 + 20).toFixed(2)}`,
  image: images[i],
  hoverImage: images[(i + 1) % images.length],
  isSale: i % 3 === 0,
  description:
    "Upgrade your home office or entryway with the clean, organic lines of this minimalist wooden desk. Crafted from high-quality materials.",
}));

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("Featured");

  const filteredProducts = products.filter(
    (product) => product.featureCategory === activeTab,
  );

  return (
    <section className="py-16 md:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center uppercase tracking-wide">
            Featured Products
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-6 border-b border-gray-200">
            {featureCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 text-sm md:text-[15px] font-bold uppercase tracking-wide transition-colors ${
                  activeTab === tab
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              hoverImage={product.hoverImage}
              sale={product.isSale}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
