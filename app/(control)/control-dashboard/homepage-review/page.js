"use client";
import React, { useState } from "react";
import { FiEye, FiEdit2 } from "react-icons/fi";
import DataTable from "../components/DataTable";
import HomepageReviewForm from "./homepage-review-form";

const MOCK_REVIEW_DATA = [
  { id: 1, image: "https://via.placeholder.com/160x90", name: "Mark Johnson", company: "TechCorp", date: "2023-10-12", review: "Great products and excellent service!" },
  { id: 2, image: "https://via.placeholder.com/160x90", name: "Sarah Williams", company: "BuildIt Ltd", date: "2023-11-05", review: "Very reliable machinery." }
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
      <HomepageReviewForm 
        mode={currentView} 
        initialData={selectedItem} 
        onBack={handleBack} 
        onEdit={() => setCurrentView("edit")}
      />
    );
  }

  const columns = [
    { header: "Sl", className: "w-16 text-center", cellClassName: "text-center text-gray-500 font-bold", render: (_, __, gIndex) => gIndex + 1 },
    { header: "Image", className: "w-32", render: (item) => <img src={item.image} alt={item.name} className="w-20 h-11 object-cover border border-gray-200" /> },
    { header: "Reviewer Name", cellClassName: "font-bold text-gray-900", accessor: "name" },
    { header: "Company", cellClassName: "text-gray-600", accessor: "company" },
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
      title="Homepage Reviews List"
      description="Manage customer reviews for the homepage."
      searchPlaceholder="Search reviews by name or company..."
      searchKeys={['name', 'company']}
      data={MOCK_REVIEW_DATA}
      columns={columns}
    />
  );
}
