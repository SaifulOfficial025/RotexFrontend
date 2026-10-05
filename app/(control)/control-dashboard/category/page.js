"use client";
import React, { useState } from "react";
import { FiEye, FiEdit2 } from "react-icons/fi";
import DataTable from "../components/DataTable";
import CategoryForm from "./category-form";

const MOCK_CATEGORY_DATA = [
  { id: 1, icon: "https://via.placeholder.com/50", name: "Machinery", subcategories: ["Motors", "Pumps"] },
  { id: 2, icon: "https://via.placeholder.com/50", name: "Electronics", subcategories: ["Sensors", "Switches"] }
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
      <CategoryForm 
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
    { header: "Icon", className: "w-20", render: (item) => <img src={item.icon} alt={item.name} className="w-10 h-10 object-cover border border-gray-200" /> },
    { header: "Category Name", cellClassName: "font-bold text-gray-900", accessor: "name" },
    { header: "Subcategories", cellClassName: "text-gray-600", render: (item) => item.subcategories.join(", ") },
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
      title="Categories List"
      description="Manage your categories and subcategories."
      searchPlaceholder="Search categories..."
      searchKeys={['name']}
      data={MOCK_CATEGORY_DATA}
      columns={columns}
    />
  );
}
