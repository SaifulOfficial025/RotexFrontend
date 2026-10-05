"use client";
import React, { useState } from "react";
import { FiEye, FiArrowLeft, FiCheck, FiFilter } from "react-icons/fi";
import DataTable from "../components/DataTable";

const INITIAL_MOCK_ENQUIRES = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+1234567890", company: "ABC Corp", date: "2023-10-15", message: "I am interested in your industrial pumps.", isResponded: false, respondedBy: null },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+1987654321", company: "XYZ Ltd", date: "2023-11-02", message: "Can you provide a quotation for 5 motors?", isResponded: true, respondedBy: "Admin Sarah" }
];

export default function EnquirePage() {
  const [enquires, setEnquires] = useState(INITIAL_MOCK_ENQUIRES);
  const [currentView, setCurrentView] = useState("list");
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("all"); // 'all', 'responded', 'not-responded'
  
  // States for marking as responded
  const [isMarking, setIsMarking] = useState(false);
  const [responderName, setResponderName] = useState("");

  const handleView = (item) => {
    setSelectedItem(item);
    setCurrentView("view");
    setIsMarking(false);
    setResponderName("");
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      setEnquires(enquires.filter(e => e.id !== item.id));
    }
  };

  const submitResponse = () => {
    if (!responderName.trim()) {
      alert("Please enter a responder name or ID.");
      return;
    }
    const updated = enquires.map(e => {
      if (e.id === selectedItem.id) {
        return { ...e, isResponded: true, respondedBy: responderName.trim() };
      }
      return e;
    });
    setEnquires(updated);
    setSelectedItem({ ...selectedItem, isResponded: true, respondedBy: responderName.trim() });
    setIsMarking(false);
  };

  const filteredEnquires = enquires.filter(e => {
    if (filter === "responded") return e.isResponded;
    if (filter === "not-responded") return !e.isResponded;
    return true;
  });

  if (currentView === "view" && selectedItem) {
    return (
      <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
          <button
            onClick={() => setCurrentView("list")}
            className="p-2 border border-gray-300 hover:bg-gray-50 hover:text-primary transition-colors"
          >
            <FiArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Enquiry Details</h2>
            <p className="text-gray-500 text-sm mt-1">Viewing details of the selected enquiry.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Full Name</p>
              <p className="text-lg font-medium text-gray-900">{selectedItem.name}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
              <p className="text-lg font-medium text-gray-900">{selectedItem.email}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Phone/Whatsapp</p>
              <p className="text-lg font-medium text-gray-900">{selectedItem.phone}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Address/Company Name</p>
              <p className="text-lg font-medium text-gray-900">{selectedItem.company}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Date</p>
              <p className="text-lg font-medium text-gray-900">{selectedItem.date}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Status</p>
              <div className="mt-1">
                {selectedItem.isResponded ? (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 border border-green-200 text-sm font-bold">
                    <FiCheck size={16} />
                    Responded by {selectedItem.respondedBy}
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 text-sm font-bold">
                    Not Responded
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-100 pt-6">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Query</p>
          <div className="bg-gray-50 p-6 border border-gray-200 text-gray-800 whitespace-pre-wrap">
            {selectedItem.message}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 flex justify-between items-center">
          <div>
            <button
              type="button"
              onClick={() => {
                if (confirm("Are you sure you want to delete this enquiry?")) {
                  handleDelete(selectedItem);
                  setCurrentView("list");
                }
              }}
              className="px-6 py-3 bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-sm"
            >
              Delete
            </button>
          </div>
          <div className="flex justify-end">
          {!selectedItem.isResponded && !isMarking && (
            <button 
              onClick={() => setIsMarking(true)}
              className="px-6 py-2.5 bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
            >
              Mark as Responded
            </button>
          )}

          {isMarking && (
            <div className="flex items-center gap-3">
              <input 
                type="text" 
                placeholder="Enter responder Name or ID" 
                value={responderName}
                onChange={(e) => setResponderName(e.target.value)}
                className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 text-sm"
              />
              <button 
                onClick={submitResponse}
                className="px-6 py-2 bg-green-600 text-white font-bold hover:bg-green-700 transition-colors text-sm"
              >
                Save
              </button>
              <button 
                onClick={() => setIsMarking(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }

  const columns = [
    { header: "Sl", className: "w-16 text-center", cellClassName: "text-center text-gray-500 font-bold", render: (_, __, gIndex) => gIndex + 1 },
    { header: "Full Name", cellClassName: "font-bold text-gray-900", accessor: "name" },
    { header: "Company/Address", cellClassName: "text-gray-600", accessor: "company" },
    { header: "Email", cellClassName: "text-gray-600", accessor: "email" },
    { header: "Status", className: "w-32 text-center", render: (item) => (
      item.isResponded ? (
        <span className="px-2 py-1 bg-green-50 text-green-700 border border-green-200 text-xs font-bold inline-block">Responded</span>
      ) : (
        <span className="px-2 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-bold inline-block whitespace-nowrap">Not Responded</span>
      )
    )},
    { header: "Date", className: "w-32", cellClassName: "text-gray-500", accessor: "date" },
    { header: "Actions", className: "w-32 text-center", render: (item) => (
        <div className="flex items-center justify-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
          <button onClick={() => handleView(item)} className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors" title="View"><FiEye size={16} /></button>
        </div>
      )
    }
  ];

  const headerActions = (
    <div className="flex items-center gap-3">
      <div className="relative flex items-center">
        <FiFilter className="absolute left-3 text-gray-400" size={16} />
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="pl-9 pr-8 py-3 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-bold outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none cursor-pointer hover:bg-gray-100 transition-colors min-w-[160px]"
        >
          <option value="all">All Enquiries</option>
          <option value="not-responded">Not Responded</option>
          <option value="responded">Responded</option>
        </select>
      </div>
    </div>
  );

  return (
    <DataTable
      title="Enquiries"
      description="Manage all incoming enquiries from customers."
      searchPlaceholder="Search by name, email or company..."
      searchKeys={['name', 'email', 'company']}
      data={filteredEnquires}
      columns={columns}
      headerActions={headerActions}
    />
  );
}
