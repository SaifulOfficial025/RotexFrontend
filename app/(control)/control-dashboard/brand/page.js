"use client";
import React, { useState } from "react";
import { FiEye, FiEdit2 } from "react-icons/fi";
import DataTable from "../components/DataTable";
import BrandForm from "./brand-form";

const MOCK_BRANDS_DATA = [
  { id: 1, logo: "https://via.placeholder.com/150", title: "Brand A" },
  { id: 2, logo: "https://via.placeholder.com/150", title: "Brand B" }
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
      <BrandForm 
        mode={currentView} 
        initialData={selectedItem} 
        onBack={handleBack} 
        onEdit={() => setCurrentView("edit")}
      />
    );
  }

  const columns = [
    { header: "Sl", className: "w-16 text-center", cellClassName: "text-center text-gray-500 font-bold", render: (_, __, gIndex) => gIndex + 1 },
    { header: "Logo", className: "w-20", render: (item) => <img src={item.logo} alt={item.title} className="w-10 h-10 object-cover border border-gray-200" /> },
    { header: "Title", className: "", cellClassName: "font-bold text-gray-900", accessor: "title" },
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
      title="Brands List"
      description="Manage and view your brands."
      searchPlaceholder="Search brands..."
      searchKeys={['title']}
      data={MOCK_BRANDS_DATA}
      columns={columns}
    />
  );
}
