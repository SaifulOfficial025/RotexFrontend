"use client";
import React, { useState } from "react";
import { FiEye, FiEdit2 } from "react-icons/fi";
import DataTable from "../components/DataTable";
import ClientForm from "./client-form";

const MOCK_CLIENT_DATA = [
  { id: 1, logo: "https://via.placeholder.com/150", name: "Acme Corporation" },
  { id: 2, logo: "https://via.placeholder.com/150", name: "Global Industries Ltd." }
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
      <ClientForm 
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
    { header: "Logo", className: "w-32", render: (item) => <img src={item.logo} alt={item.name} className="w-12 h-12 object-cover border border-gray-200" /> },
    { header: "Client Name", cellClassName: "font-bold text-gray-900", accessor: "name" },
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
      title="Clients List"
      description="Manage your partners and clients."
      searchPlaceholder="Search clients by name..."
      searchKeys={['name']}
      data={MOCK_CLIENT_DATA}
      columns={columns}
    />
  );
}
