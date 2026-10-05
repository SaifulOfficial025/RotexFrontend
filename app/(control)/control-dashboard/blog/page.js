"use client";
import React, { useState } from "react";
import { FiEye, FiEdit2 } from "react-icons/fi";
import DataTable from "../components/DataTable";
import BlogForm from "./blog-form";

const MOCK_BLOG_DATA = [
  {
    id: 1,
    coverPhoto: "https://via.placeholder.com/160x90",
    title: "The Future of Industrial Automation",
    date: "2023-10-12",
    description: "<p>Industrial automation is moving rapidly...</p>",
  },
  {
    id: 2,
    coverPhoto: "https://via.placeholder.com/160x90",
    title: "10 Tips for Better Cooling Efficiency",
    date: "2023-11-05",
    description: "<p>Cooling is critical for...</p>",
  },
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
      <BlogForm
        mode={currentView}
        initialData={selectedItem}
        onBack={handleBack}
        onEdit={() => setCurrentView("edit")}
      />
    );
  }

  const columns = [
    {
      header: "Sl",
      className: "w-16 text-center",
      cellClassName: "text-center text-gray-500 font-bold",
      render: (_, __, gIndex) => gIndex + 1,
    },
    {
      header: "Cover Photo",
      className: "w-32",
      render: (item) => (
        <img
          src={item.coverPhoto}
          alt={item.title}
          className="w-20 h-11 object-cover border border-gray-200"
        />
      ),
    },
    {
      header: "Title",
      cellClassName: "font-bold text-gray-900",
      accessor: "title",
    },
    {
      header: "Date",
      className: "w-40",
      cellClassName: "text-gray-600",
      accessor: "date",
    },
    {
      header: "Actions",
      className: "w-32 text-center",
      render: (item) => (
        <div className="flex items-center justify-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => handleView(item)}
            className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
            title="View"
          >
            <FiEye size={16} />
          </button>
          <button
            onClick={() => handleEdit(item)}
            className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
            title="Edit"
          >
            <FiEdit2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      title="Blog Posts List"
      description="Manage articles and news for your blog."
      searchPlaceholder="Search blogs by title..."
      searchKeys={["title"]}
      data={MOCK_BLOG_DATA}
      columns={columns}
    />
  );
}
