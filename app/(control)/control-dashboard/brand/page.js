"use client";
import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiEye,
  FiEdit2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import BrandForm from "./brand-form";

const MOCK_BRANDS_DATA = [
  {
    id: 1,
    logo: "https://via.placeholder.com/40",
    title: "Rotex",
    description: "Industrial equipment manufacturer.",
    featuredProducts: ["Rotex Industrial Fan"],
  },
  {
    id: 2,
    logo: "https://via.placeholder.com/40",
    title: "Samsung",
    description: "Leading consumer electronics brand.",
    featuredProducts: ["Samsung Smart TV"],
  },
];

export default function BrandPage() {
  const [currentView, setCurrentView] = useState("list");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleView = (brand) => {
    setSelectedBrand(brand);
    setCurrentView("view");
  };

  const handleEdit = (brand) => {
    setSelectedBrand(brand);
    setCurrentView("edit");
  };

  const handleBack = () => {
    setCurrentView("list");
    setSelectedBrand(null);
  };

  const filteredBrands = MOCK_BRANDS_DATA.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);
  const paginatedBrands = filteredBrands.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, itemsPerPage]);

  if (currentView === "view" || currentView === "edit") {
    return (
      <BrandForm
        mode={currentView}
        initialData={selectedBrand}
        onBack={handleBack}
        onEdit={() => setCurrentView("edit")}
      />
    );
  }

  return (
    <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 gap-4 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Brands List</h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage and view your brands.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search brands..."
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
              <th className="py-4 px-6 font-bold w-20">Logo</th>
              <th className="py-4 px-6 font-bold">Title</th>
              <th className="py-4 px-6 font-bold w-32 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {paginatedBrands.length > 0 ? (
              paginatedBrands.map((brand, index) => (
                <tr
                  key={brand.id}
                  className="border-b border-gray-100 hover:bg-primary/5 transition-colors group"
                >
                  <td className="py-4 px-6 text-center text-gray-500 font-bold">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="py-4 px-6">
                    <img
                      src={brand.logo}
                      alt={brand.title}
                      className="w-10 h-10 object-cover border border-gray-200"
                    />
                  </td>
                  <td className="py-4 px-6 font-bold text-gray-900">
                    {brand.title}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleView(brand)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        title="View Brand"
                      >
                        <FiEye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(brand)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        title="Edit Brand"
                      >
                        <FiEdit2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-8 text-center text-gray-500">
                  No brands found matching your criteria.
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

        {filteredBrands.length > 0 && (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>
              Showing{" "}
              <span className="font-bold text-gray-900">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="font-bold text-gray-900">
                {Math.min(currentPage * itemsPerPage, filteredBrands.length)}
              </span>{" "}
              of{" "}
              <span className="font-bold text-gray-900">
                {filteredBrands.length}
              </span>{" "}
              entries
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                    className={`w-8 h-8 flex items-center justify-center border ${currentPage === i + 1 ? "bg-primary text-white border-primary font-bold" : "border-gray-200 hover:border-primary hover:text-primary"} transition-colors`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
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
