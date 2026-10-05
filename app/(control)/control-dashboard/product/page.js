
"use client";
import React, { useState, useEffect } from "react";
import { FiSearch, FiEye, FiEdit2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductForm from "./product-form";

// Mock Data
const MOCK_TABLE_DATA = [
  {
    id: 1,
    image: "https://via.placeholder.com/40",
    name: "Rotex Industrial Fan",
    category: "Industrial",
    brand: "Rotex",
    sku: "RTX-IND-01",
    shortDescription: "High power industrial fan for large warehouses.",
    description: "<p>This is a detailed description of the industrial fan...</p>",
    catalogUrl: "https://rotex.com/catalog/fan",
    relatedProducts: ["LG Refrigerator"],
    variants: [
      { name: "Standard", actualPrice: "150.00", discount: "10", finalPrice: "135.00" },
      { name: "Heavy Duty", actualPrice: "200.00", discount: "0", finalPrice: "200.00" }
    ]
  },
  {
    id: 2,
    image: "https://via.placeholder.com/40",
    name: "Samsung Smart TV",
    category: "Electronics",
    brand: "Samsung",
    sku: "SAM-TV-55",
    shortDescription: "55 inch 4K Ultra HD Smart LED TV.",
    description: "<p>Enjoy incredible detail and vivid colors...</p>",
    catalogUrl: "https://samsung.com/tv",
    relatedProducts: ["Sony Headphones"],
    variants: [
      { name: "55 Inch", actualPrice: "500.00", discount: "5", finalPrice: "475.00" }
    ]
  },
  {
    id: 3,
    image: "https://via.placeholder.com/40",
    name: "Apple iPhone 15",
    category: "Electronics",
    brand: "Apple",
    sku: "APP-IPH-15",
    shortDescription: "The latest iPhone with USB-C and Dynamic Island.",
    description: "<p>A16 Bionic chip, advanced dual-camera system...</p>",
    catalogUrl: "https://apple.com/iphone-15",
    relatedProducts: [],
    variants: [
      { name: "128GB", actualPrice: "799.00", discount: "0", finalPrice: "799.00" },
      { name: "256GB", actualPrice: "899.00", discount: "0", finalPrice: "899.00" }
    ]
  }
];

export default function Page() {
  const [currentView, setCurrentView] = useState("list"); // "list" | "view" | "edit"
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  const MOCK_CATEGORIES = ["Electronics", "Home Appliances", "Industrial", "Medical", "Automotive"];
  const MOCK_BRANDS = ["Rotex", "Samsung", "Apple", "Sony", "LG", "Philips"];

  const handleView = (product) => {
    setSelectedProduct(product);
    setCurrentView("view");
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setCurrentView("edit");
  };

  const handleBack = () => {
    setCurrentView("list");
    setSelectedProduct(null);
  };

  // Filter products based on search and filters
  const filteredProducts = MOCK_TABLE_DATA.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = filterCategory ? p.category === filterCategory : true;
    const matchesBrand = filterBrand ? p.brand === filterBrand : true;
    
    return matchesSearch && matchesCategory && matchesBrand;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterCategory, filterBrand, itemsPerPage]);

  if (currentView === "view" || currentView === "edit") {
    return (
      <ProductForm 
        mode={currentView} 
        initialData={selectedProduct} 
        onBack={handleBack} 
        onEdit={() => setCurrentView("edit")}
        onDelete={() => {
          if(confirm("Are you sure you want to delete this item?")) {
            alert("Item deleted successfully!");
            handleBack();
          }
        }}
      />
    );
  }

  return (
    <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 gap-4 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Products List</h2>
          <p className="text-gray-500 text-sm mt-1">Manage and view your product inventory.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3 w-full xl:w-auto">
          <select 
            className="w-full md:w-40 px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm text-gray-700"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {MOCK_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          
          <select 
            className="w-full md:w-40 px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm text-gray-700"
            value={filterBrand}
            onChange={(e) => setFilterBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            {MOCK_BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>

          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-sm tracking-wider uppercase border-b border-gray-200">
              <th className="py-4 px-6 font-bold w-16 text-center">Sl</th>
              <th className="py-4 px-6 font-bold w-20">Image</th>
              <th className="py-4 px-6 font-bold">Name</th>
              <th className="py-4 px-6 font-bold">Category</th>
              <th className="py-4 px-6 font-bold">Brand</th>
              <th className="py-4 px-6 font-bold">SKU</th>
              <th className="py-4 px-6 font-bold w-32 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product, index) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-primary/5 transition-colors group">
                  <td className="py-4 px-6 text-center text-gray-500 font-bold">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="py-4 px-6">
                    <img src={product.image} alt={product.name} className="w-10 h-10 object-cover border border-gray-200" />
                  </td>
                  <td className="py-4 px-6 font-bold text-gray-900">{product.name}</td>
                  <td className="py-4 px-6 text-gray-600">{product.category}</td>
                  <td className="py-4 px-6 text-gray-600">{product.brand}</td>
                  <td className="py-4 px-6 text-gray-600 uppercase text-xs font-bold tracking-wider">{product.sku}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleView(product)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        title="View Product"
                      >
                        <FiEye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(product)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        title="Edit Product"
                      >
                        <FiEdit2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-8 text-center text-gray-500">
                  No products found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-bold">Show</span>
          <select 
            value={itemsPerPage} 
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border border-gray-200 px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-gray-50 font-bold"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span className="font-bold">entries</span>
        </div>
        
        {filteredProducts.length > 0 && (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>
              Showing <span className="font-bold text-gray-900">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-bold text-gray-900">{Math.min(currentPage * itemsPerPage, filteredProducts.length)}</span> of <span className="font-bold text-gray-900">{filteredProducts.length}</span> entries
            </span>
            <div className="flex gap-1">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Previous Page"
              >
                <FiChevronLeft />
              </button>
              
              <div className="flex gap-1 hidden sm:flex">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 flex items-center justify-center border ${currentPage === i + 1 ? 'bg-primary text-white border-primary font-bold' : 'border-gray-200 hover:border-primary hover:text-primary'} transition-colors`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Next Page"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
