"use client";
import React, { useState, useEffect } from "react";
import { FiSearch, FiEye, FiEdit2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CategoryForm from "./category-form";

const MOCK_CATEGORIES_DATA = [
  {
    id: 1,
    icon: "https://via.placeholder.com/40",
    name: "Industrial Fans",
    subcategories: [
      { name: "Ceiling Fans", icon: null },
      { name: "Exhaust Fans", icon: null },
    ],
  },
  {
    id: 2,
    icon: "https://via.placeholder.com/40",
    name: "Home Appliances",
    subcategories: [
      { name: "Refrigerators", icon: null },
    ],
  }
];

export default function CategoryPage() {
  const [currentView, setCurrentView] = useState("list");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleView = (category) => {
    setSelectedCategory(category);
    setCurrentView("view");
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setCurrentView("edit");
  };

  const handleBack = () => {
    setCurrentView("list");
    setSelectedCategory(null);
  };

  const filteredCategories = MOCK_CATEGORIES_DATA.filter((c) => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const paginatedCategories = filteredCategories.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, itemsPerPage]);

  if (currentView === "view" || currentView === "edit") {
    return (
      <CategoryForm 
        mode={currentView} 
        initialData={selectedCategory} 
        onBack={handleBack} 
        onEdit={() => setCurrentView("edit")}
      />
    );
  }

  return (
    <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 gap-4 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Categories List</h2>
          <p className="text-gray-500 text-sm mt-1">Manage and view your categories and subcategories.</p>
        </div>
        
        <div className="relative w-full md:w-72">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-sm tracking-wider uppercase border-b border-gray-200">
              <th className="py-4 px-6 font-bold w-16 text-center">Sl</th>
              <th className="py-4 px-6 font-bold w-20">Icon</th>
              <th className="py-4 px-6 font-bold">Category Name</th>
              <th className="py-4 px-6 font-bold">Subcategories</th>
              <th className="py-4 px-6 font-bold w-32 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {paginatedCategories.length > 0 ? (
              paginatedCategories.map((cat, index) => (
                <tr key={cat.id} className="border-b border-gray-100 hover:bg-primary/5 transition-colors group">
                  <td className="py-4 px-6 text-center text-gray-500 font-bold">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="py-4 px-6">
                    <img src={cat.icon} alt={cat.name} className="w-10 h-10 object-cover border border-gray-200" />
                  </td>
                  <td className="py-4 px-6 font-bold text-gray-900">{cat.name}</td>
                  <td className="py-4 px-6 text-gray-600">
                    {cat.subcategories.length > 0 
                      ? cat.subcategories.map(s => s.name).join(", ")
                      : <span className="text-gray-400 italic">None</span>
                    }
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleView(cat)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        title="View Category"
                      >
                        <FiEye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(cat)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        title="Edit Category"
                      >
                        <FiEdit2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-8 text-center text-gray-500">
                  No categories found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

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
        
        {filteredCategories.length > 0 && (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>
              Showing <span className="font-bold text-gray-900">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-bold text-gray-900">{Math.min(currentPage * itemsPerPage, filteredCategories.length)}</span> of <span className="font-bold text-gray-900">{filteredCategories.length}</span> entries
            </span>
            <div className="flex gap-1">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
