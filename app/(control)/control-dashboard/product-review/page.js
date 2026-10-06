"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiEye, FiSearch, FiChevronDown, FiStar } from "react-icons/fi";
import DataTable from "../components/DataTable";
import ProductReviewForm from "./product-review-form";

const MOCK_PRODUCTS = [
  "Rotex Industrial Fan",
  "Samsung Smart TV",
  "Apple iPhone 15",
  "Sony Headphones",
  "LG Refrigerator",
];

const MOCK_REVIEWS_DATA = [
  { 
    id: 1, 
    product: "Rotex Industrial Fan",
    rating: 5,
    reviewText: "Great industrial fan, moves a lot of air.",
    customerName: "John Doe",
    company: "Acme Corp",
    date: "2023-10-15",
    isHidden: false
  },
  { 
    id: 2, 
    product: "Samsung Smart TV",
    rating: 4,
    reviewText: "Excellent picture quality but sound could be better.",
    customerName: "Jane Smith",
    company: "Tech Solutions",
    date: "2023-11-20",
    isHidden: true
  },
  { 
    id: 3, 
    product: "Rotex Industrial Fan",
    rating: 4,
    reviewText: "Very loud but does the job perfectly.",
    customerName: "Robert Fox",
    company: "Fox Industries",
    date: "2024-01-10",
    isHidden: false
  },
  { 
    id: 4, 
    product: "Rotex Industrial Fan",
    rating: 5,
    reviewText: "Exactly what we needed.",
    customerName: "Alice Walker",
    company: "Walker Co",
    date: "2024-02-05",
    isHidden: false
  },
  { 
    id: 5, 
    product: "Rotex Industrial Fan",
    rating: 2,
    reviewText: "Broke down after a month.",
    customerName: "Tom Hardy",
    company: "Hardy Inc",
    date: "2024-03-12",
    isHidden: false
  }
];

const FilterSelect = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (opt) => {
    onChange(opt === value ? "" : opt);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className="relative w-64" ref={dropdownRef}>
      <div
        className="w-full h-[40px] px-3 py-2 border border-gray-300 bg-white flex gap-2 items-center cursor-pointer hover:border-primary transition-colors focus-within:ring-1 focus-within:ring-primary focus-within:border-primary text-sm font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? "text-gray-900 truncate flex-1" : "text-gray-400 truncate flex-1"}>
          {value || placeholder}
        </span>
        {value && (
          <span 
            className="text-gray-400 hover:text-red-500 cursor-pointer p-1" 
            onClick={(e) => { e.stopPropagation(); onChange(""); }}
          >
            ×
          </span>
        )}
        <FiChevronDown className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 shadow-xl max-h-60 overflow-y-auto left-0 right-0">
          <div className="sticky top-0 bg-white p-2 border-b border-gray-100">
            <div className="relative">
              <FiSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input
                type="text"
                className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-xs"
                placeholder="Search product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <div
                key={opt}
                className={`px-3 py-2 hover:bg-primary/5 hover:text-primary cursor-pointer transition-colors text-sm ${value === opt ? "bg-primary/10 text-primary font-bold" : "text-gray-700"}`}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500 text-center">
              No results
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ReviewStats = ({ data }) => {
  const total = data.length;
  const average = total > 0 ? (data.reduce((acc, curr) => acc + curr.rating, 0) / total).toFixed(1) : 0;
  
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  data.forEach(r => {
    if (counts[r.rating] !== undefined) {
      counts[r.rating]++;
    }
  });

  return (
    <div className="bg-white p-6 border border-gray-200 mb-6 flex flex-col md:flex-row gap-8 shadow-sm">
      <div className="flex flex-col items-center justify-center md:w-48 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
        <div className="text-5xl font-bold text-gray-900 mb-2">{average}</div>
        <div className="flex text-yellow-500 mb-1">
          {[1, 2, 3, 4, 5].map(star => (
            <FiStar key={star} fill={star <= Math.round(average) ? "currentColor" : "none"} className="w-5 h-5" />
          ))}
        </div>
        <div className="text-gray-500 text-sm">{total} Reviews</div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center space-y-3">
        {[5, 4, 3, 2, 1].map(star => (
          <div key={star} className="flex items-center gap-4">
            <div className="flex items-center gap-1 w-16 text-sm font-bold text-gray-700">
              {star} <FiStar className="text-yellow-500" fill="currentColor" />
            </div>
            <div className="flex-1 h-3 bg-gray-100">
              <div 
                className="h-full bg-yellow-500" 
                style={{ width: `${total > 0 ? (counts[star] / total) * 100 : 0}%` }}
              ></div>
            </div>
            <div className="w-10 text-right text-sm text-gray-500">{counts[star]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  const [currentView, setCurrentView] = useState("list");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleView = (item) => {
    setSelectedItem(item);
    setCurrentView("view");
  };

  const handleDelete = (item) => {
    if (confirm("Are you sure you want to delete this review?")) {
      alert("Review deleted successfully!");
      handleBack();
    }
  };

  const handleBack = () => {
    setCurrentView("list");
    setSelectedItem(null);
  };

  if (currentView === "view") {
    return (
      <ProductReviewForm 
        initialData={selectedItem} 
        onBack={handleBack} 
        onDelete={() => handleDelete(selectedItem)}
      />
    );
  }

  const columns = [
    { header: "Sl", className: "w-16 text-center", cellClassName: "text-center text-gray-500 font-bold", render: (_, __, gIndex) => gIndex + 1 },
    { header: "Product", cellClassName: "font-bold text-gray-900", accessor: "product" },
    { header: "Review", cellClassName: "text-gray-600 max-w-[250px] truncate", accessor: "reviewText" },
    { header: "Rating", cellClassName: "text-gray-900 font-bold text-center", className: "text-center", render: (item) => (
      <span className="flex items-center justify-center gap-1"><span className="text-yellow-500">★</span> {item.rating}</span>
    )},
    { header: "Customer", cellClassName: "text-gray-600", accessor: "customerName" },
    { header: "Date", cellClassName: "text-gray-500 text-sm", accessor: "date" },
    { header: "Status", className: "w-24 text-center", render: (item) => (
        item.isHidden 
          ? <span className="bg-orange-100 text-orange-600 px-2 py-1 text-xs font-bold uppercase tracking-wider">Hidden</span>
          : <span className="bg-green-100 text-green-600 px-2 py-1 text-xs font-bold uppercase tracking-wider">Visible</span>
      )
    },
    { header: "Actions", className: "w-24 text-center", render: (item) => (
        <div className="flex items-center justify-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
          <button onClick={() => handleView(item)} className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors" title="View"><FiEye size={16} /></button>
        </div>
      )
    }
  ];

  const filteredData = selectedProduct 
    ? MOCK_REVIEWS_DATA.filter(r => r.product === selectedProduct)
    : MOCK_REVIEWS_DATA;

  const headerActions = (
    <FilterSelect 
      options={MOCK_PRODUCTS} 
      value={selectedProduct} 
      onChange={setSelectedProduct} 
      placeholder="Filter by product..."
    />
  );

  return (
    <div className="space-y-6">
      <DataTable
        title="Product Reviews"
        description="Manage customer reviews for products."
        searchPlaceholder="Search reviews by customer..."
        searchKeys={['customerName', 'company', 'reviewText']}
        data={filteredData}
        columns={columns}
        headerActions={headerActions}
      />
      
      {selectedProduct && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Reviews for: <span className="text-primary">{selectedProduct}</span></h3>
          <ReviewStats data={filteredData} />
        </div>
      )}
    </div>
  );
}
