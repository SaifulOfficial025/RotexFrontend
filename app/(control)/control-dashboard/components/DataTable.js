"use client";
import React, { useState, useEffect } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function DataTable({
  title,
  description,
  searchPlaceholder = "Search...",
  searchKeys = [], 
  data = [],
  columns = [],
  emptyMessage = "No items found matching your criteria.",
  headerActions = null
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filtering
  const filteredData = data.filter((item) => {
    if (!searchQuery) return true;
    return searchKeys.some((key) => {
      const val = item[key];
      if (typeof val === "string") {
        return val.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
  });

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, itemsPerPage]);

  return (
    <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 gap-4 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-500 text-sm mt-1">{description}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full xl:w-auto">
          {headerActions}
          {searchKeys.length > 0 && (
            <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
            />
          </div>
        )}
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-sm tracking-wider uppercase border-b border-gray-200">
              {columns.map((col, i) => (
                <th key={i} className={`py-4 px-6 font-bold ${col.className || ""}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {paginatedData.length > 0 ? (
              paginatedData.map((item, pageIndex) => {
                const globalIndex = (currentPage - 1) * itemsPerPage + pageIndex;
                return (
                  <tr key={item.id || globalIndex} className="border-b border-gray-100 hover:bg-primary/5 transition-colors group">
                    {columns.map((col, i) => (
                      <td key={i} className={`py-4 px-6 ${col.cellClassName || ""}`}>
                        {col.accessor 
                          ? item[col.accessor] 
                          : col.render 
                            ? col.render(item, pageIndex, globalIndex) 
                            : null}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length} className="py-8 text-center text-gray-500">
                  {emptyMessage}
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
        
        {totalItems > 0 && (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>
              Showing <span className="font-bold text-gray-900">{Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}</span> to <span className="font-bold text-gray-900">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of <span className="font-bold text-gray-900">{totalItems}</span> entries
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
