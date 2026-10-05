"use client";
import React, { useState } from "react";
import { FiEye, FiEdit2 } from "react-icons/fi";
import DataTable from "../components/DataTable";
import OurTeamForm from "./our-team-form";

const MOCK_TEAM_DATA = [
  { id: 1, photo: "https://via.placeholder.com/150x200", name: "John Doe", designation: "CEO" },
  { id: 2, photo: "https://via.placeholder.com/150x200", name: "Jane Smith", designation: "Chief Engineer" }
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
      <OurTeamForm 
        mode={currentView} 
        initialData={selectedItem} 
        onBack={handleBack} 
        onEdit={() => setCurrentView("edit")}
      />
    );
  }

  const columns = [
    { header: "Sl", className: "w-16 text-center", cellClassName: "text-center text-gray-500 font-bold", render: (_, __, gIndex) => gIndex + 1 },
    { header: "Photo", className: "w-28", render: (item) => <img src={item.photo} alt={item.name} className="w-12 h-16 object-cover border border-gray-200" /> },
    { header: "Name", cellClassName: "font-bold text-gray-900", accessor: "name" },
    { header: "Designation", cellClassName: "text-gray-600", accessor: "designation" },
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
      title="Our Team Members"
      description="Manage team profiles."
      searchPlaceholder="Search by name or designation..."
      searchKeys={['name', 'designation']}
      data={MOCK_TEAM_DATA}
      columns={columns}
    />
  );
}
