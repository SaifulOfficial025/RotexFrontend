"use client";
import React, { useState } from "react";
import { FiEye, FiEdit2 } from "react-icons/fi";
import DataTable from "../components/DataTable";
import SlideForm from "./slide-form";

const MOCK_SLIDES_DATA = [
  { 
    id: 1, 
    productName: "Rotex Industrial Fan", 
    category: "Industrial Fans",
    shortDescription: "High-power industrial fan for large spaces.",
    price: "$299.99",
    thumbnail: "https://via.placeholder.com/150",
    bgColor: "#f3f4f6"
  },
  { 
    id: 2, 
    productName: "Samsung Smart TV", 
    category: "Electronics",
    shortDescription: "4K UHD Smart TV with vibrant colors.",
    price: "$899.00",
    thumbnail: "https://via.placeholder.com/150",
    bgColor: "#ffffff"
  }
];

export default function Page() {
  const [currentView, setCurrentView] = useState("list");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleView = (item) => {
    setSelectedItem(item);
    setCurrentView("view");
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setCurrentView("edit");
  };

  const handleDelete = (item) => {
    if (confirm("Are you sure you want to delete this slide?")) {
      alert("Slide deleted successfully!");
      handleBack();
    }
  };

  const handleBack = () => {
    setCurrentView("list");
    setSelectedItem(null);
  };

  if (currentView === "view" || currentView === "edit") {
    return (
      <SlideForm 
        mode={currentView} 
        initialData={selectedItem} 
        onBack={handleBack} 
        onEdit={() => setCurrentView("edit")}
        onDelete={() => handleDelete(selectedItem)}
      />
    );
  }

  const columns = [
    { header: "Sl", className: "w-16 text-center", cellClassName: "text-center text-gray-500 font-bold", render: (_, __, gIndex) => gIndex + 1 },
    { header: "Thumbnail", className: "w-20", render: (item) => <img src={item.thumbnail} alt={item.productName} className="w-10 h-10 object-cover border border-gray-200" /> },
    { header: "Product Name", cellClassName: "font-bold text-gray-900", accessor: "productName" },
    { header: "Category", cellClassName: "text-gray-600", accessor: "category" },
    { header: "Short Description", cellClassName: "text-gray-500 text-sm max-w-[200px] truncate", accessor: "shortDescription" },
    { header: "Price", cellClassName: "text-gray-900 font-bold", accessor: "price" },
    { header: "BG Color", className: "w-24 text-center", render: (item) => (
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 border border-gray-300 shadow-sm" style={{ backgroundColor: item.bgColor }}></div>
        </div>
      )
    },
    { header: "Actions", className: "w-32 text-center", render: (item) => (
        <div className="flex items-center justify-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
          <button onClick={() => handleView(item)} className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors" title="View"><FiEye size={16} /></button>
          <button onClick={() => handleEdit(item)} className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors" title="Edit"><FiEdit2 size={16} /></button>
        </div>
      )
    }
  ];

  return (
    <DataTable
      title="Slides List"
      description="Manage and view your homepage slider slides."
      searchPlaceholder="Search slides by product name..."
      searchKeys={['productName', 'category']}
      data={MOCK_SLIDES_DATA}
      columns={columns}
    />
  );
}
