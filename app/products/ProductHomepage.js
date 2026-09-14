"use client";

import { useState, useEffect } from "react";
import Header from "../components/header";
import DynamicHeader from "../components/dymanicHeader";
import Footer from "../components/footer";
import ProductSidebar from "./ProductSidebar";
import ProductTopbar from "./ProductTopbar";
import ProductCard from "../components/productCard";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

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
  "https://images.unsplash.com/photo-1581508210335-59b13970b13d?q=80&w=400&auto=format&fit=crop",
];

const dummyProducts = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  name: `Laboratory Product ${i + 1}`,
  category: i % 2 === 0 ? "Electronics" : "Health",
  price: `$${(((i * 15.5) % 100) + 20).toFixed(2)}`,
  image: images[i],
  hoverImage: images[(i + 1) % images.length],
  sale: i % 4 === 0,
  description:
    "High quality professional equipment designed for accurate and reliable results.",
}));

export default function ProductHomepage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    price: { min: "", max: "" },
    featureCategory: "All",
  });

  // Prevent scrolling when mobile sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <Header />
      <DynamicHeader />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-1/4 sticky top-28 z-10">
            <ProductSidebar filters={filters} setFilters={setFilters} />
          </div>

          {/* Mobile Sidebar Overlay & Drawer */}
          <div
            className={`fixed inset-0 bg-black/50 z-[200] lg:hidden transition-opacity duration-300 ${
              isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          />
          <div
            className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white z-[210] overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="text-lg font-black uppercase text-gray-900">
                Filters
              </h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <IoClose size={20} />
              </button>
            </div>
            <div className="p-4 border-none shadow-none">
              <ProductSidebar filters={filters} setFilters={setFilters} />
            </div>
          </div>

          {/* Main Product Area */}
          <div className="w-full lg:w-3/4 flex flex-col">
            <ProductTopbar
              onToggleSidebar={() => setIsSidebarOpen(true)}
              filters={filters}
              setFilters={setFilters}
            />

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {dummyProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  hoverImage={product.hoverImage}
                  sale={product.sale}
                  description={product.description}
                />
              ))}
            </div>

            {/* Dynamic Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center  bg-white border border-gray-200 text-gray-600 hover:text-primary font-bold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <IoChevronBack size={18} />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center  font-bold transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center  bg-white border border-gray-200 text-gray-600 hover:text-primary font-bold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <IoChevronForward size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
