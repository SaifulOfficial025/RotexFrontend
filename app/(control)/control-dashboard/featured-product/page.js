"use client";
import React, { useState } from "react";
import { FiEye, FiEdit2 } from "react-icons/fi";
import DataTable from "../components/DataTable";
import FeaturedProductForm from "./featured-product-form";

const MOCK_FEATURED_DATA = [
  { id: 1, image: "https://via.placeholder.com/150", name: "Industrial Pump X-200", category: "Featured" },
  { id: 2, image: "https://via.placeholder.com/150", name: "Heavy Duty Motor V8", category: "Best Sellers" }
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

  const handleBack = () => {
    setCurrentView("list");
    setSelectedItem(null);
  };

  if (currentView === "view" || currentView === "edit") {
    return (
      <FeaturedProductForm 
        mode={currentView} 
        initialData={selectedItem} 
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

  const columns = [
    { header: "Sl", className: "w-16 text-center", cellClassName: "text-center text-gray-500 font-bold", render: (_, __, gIndex) => gIndex + 1 },
    { header: "Product Image", className: "w-32", render: (item) => <img src={item.image} alt={item.name} className="w-16 h-16 object-cover border border-gray-200" /> },
    { header: "Product Name", cellClassName: "font-bold text-gray-900", accessor: "name" },
    { header: "Feature Category", className: "w-40", cellClassName: "text-primary font-bold", accessor: "category" },
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
      title="Featured Products List"
      description="Manage products featured on the homepage."
      searchPlaceholder="Search featured products..."
      searchKeys={['name', 'category']}
      data={MOCK_FEATURED_DATA}
      columns={columns}
    />
  );
}
