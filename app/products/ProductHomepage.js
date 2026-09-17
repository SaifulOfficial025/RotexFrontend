"use client";

import { useState, useEffect } from "react";
import Header from "../components/header";
import DynamicHeader from "../components/dymanicHeader";
import Footer from "../components/footer";
import ProductSidebar from "./ProductSidebar";
import ProductTopbar from "./ProductTopbar";
import ProductCard from "../components/productCard";
import Menubarforotherpages from "../components/MenubarforOtherPages";
import Brandwerepresent from "../components/BrandWeRepresentSlider";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import MobileHeader from "../components/MobileHeader";

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

// Generate more to test showCount up to 24
const allDummyProducts = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  name: `Laboratory Product ${i + 1}`,
  category: i % 2 === 0 ? "Electronics" : "Health",
  priceRaw: ((i * 15.5) % 100) + 20,
  get price() {
    return `$${this.priceRaw.toFixed(2)}`;
  },
  image: images[i % images.length],
  hoverImage: images[(i + 1) % images.length],
  sale: i % 4 === 0,
  popularity: (i * 7) % 100,
  rating: (i % 5) + 1,
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
  });

  // Topbar State
  const [showCount, setShowCount] = useState(12);
  const [viewMode, setViewMode] = useState("3x3");
  const [sorting, setSorting] = useState("Default sorting");

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

  // Apply Sorting
  let sortedProducts = [...allDummyProducts];
  if (sorting === "Sort by popularity") {
    sortedProducts.sort((a, b) => b.popularity - a.popularity);
  } else if (sorting === "Sort by average rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sorting === "Sort by price: low to high") {
    sortedProducts.sort((a, b) => a.priceRaw - b.priceRaw);
  } else if (sorting === "Sort by price: high to low") {
    sortedProducts.sort((a, b) => b.priceRaw - a.priceRaw);
  }

  // Apply Show Count
  const visibleProducts = sortedProducts.slice(0, showCount);

  // Determine Grid Layout Classes based on viewMode
  let gridClass = "grid-cols-2 md:grid-cols-3"; // default 3x3
  if (viewMode === "list") gridClass = "grid-cols-1";
  else if (viewMode === "2x2") gridClass = "grid-cols-2 lg:grid-cols-2";
  else if (viewMode === "4x4")
    gridClass = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <Header />
      <MobileHeader />
      <Menubarforotherpages />
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
              showCount={showCount}
              setShowCount={setShowCount}
              viewMode={viewMode}
              setViewMode={setViewMode}
              sorting={sorting}
              setSorting={setSorting}
            />

            {/* Products Grid */}
            <div className={`grid gap-4 sm:gap-6 ${gridClass}`}>
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  hoverImage={product.hoverImage}
                  sale={product.sale}
                  description={product.description}
                  isList={viewMode === "list"}
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
      <Brandwerepresent />
      <Footer />
    </div>
  );
}
