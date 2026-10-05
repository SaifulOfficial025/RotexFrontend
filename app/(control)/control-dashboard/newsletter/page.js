"use client";
import React, { useState } from "react";
import { FiDownload, FiMail, FiChevronDown } from "react-icons/fi";
import DataTable from "../components/DataTable";
import EmailModal from "../components/EmailModal";

const MOCK_NEWSLETTER = [
  { id: 1, email: "john@example.com", date: "2023-10-15" },
  { id: 2, email: "jane@example.com", date: "2023-11-02" }
];

export default function NewsletterPage() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);

  const handleDelete = (item) => {
    if (window.confirm("Are you sure you want to delete this subscriber?")) {
      console.log("Deleted subscriber:", item.id);
    }
  };

  const handleExport = (format) => {
    console.log(`Exporting as ${format}`);
    alert(`Exporting subscribers as ${format.toUpperCase()}`);
    setIsExportDropdownOpen(false);
  };

  const columns = [
    { header: "Sl", className: "w-16 text-center", cellClassName: "text-center text-gray-500 font-bold", render: (_, __, gIndex) => gIndex + 1 },
    { header: "Email", cellClassName: "font-bold text-gray-900", accessor: "email" },
    { header: "Subscribed Date", className: "w-40", cellClassName: "text-gray-500", accessor: "date" },
    { header: "Actions", className: "w-32 text-center", render: (item) => (
        <div className="flex items-center justify-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
        </div>
      )
    }
  ];

  const headerActions = (
    <div className="flex items-center gap-3">
      <div className="relative">
        <button 
          onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
          className="flex items-center gap-2 px-4 py-3 bg-gray-100 border border-gray-200 text-gray-700 font-bold hover:bg-gray-200 transition-colors text-sm"
        >
          <FiDownload size={16} />
          Export
          <FiChevronDown size={14} className={`transition-transform ${isExportDropdownOpen ? "rotate-180" : ""}`} />
        </button>
        
        {isExportDropdownOpen && (
          <div className="absolute right-0 top-full mt-1 w-32 bg-white shadow-xl border border-gray-100 z-50">
            <button onClick={() => handleExport('csv')} className="w-full text-left px-4 py-2 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium">CSV</button>
            <button onClick={() => handleExport('xlsx')} className="w-full text-left px-4 py-2 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium">XLSX</button>
            <button onClick={() => handleExport('pdf')} className="w-full text-left px-4 py-2 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium">PDF</button>
          </div>
        )}
      </div>

      <button 
        onClick={() => setIsEmailModalOpen(true)}
        className="flex items-center gap-2 px-4 py-3 bg-primary text-white font-bold hover:bg-primary/90 transition-colors text-sm whitespace-nowrap"
      >
        <FiMail size={16} />
        Send Email to All
      </button>
    </div>
  );

  return (
    <>
      <DataTable
        title="Newsletter Subscribers"
        description="Manage all your newsletter subscribers."
        searchPlaceholder="Search by email..."
        searchKeys={['email']}
        data={MOCK_NEWSLETTER}
        columns={columns}
        headerActions={headerActions}
      />
      
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
    </>
  );
}
