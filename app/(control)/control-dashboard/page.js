import React from "react";
import Link from "next/link";
import {
  FiBox,
  FiTag,
  FiGrid,
  FiLayers,
  FiStar,
  FiMessageSquare,
  FiThumbsUp,
  FiUsers,
  FiEdit3,
  FiBriefcase,
  FiMail,
  FiTrendingUp,
} from "react-icons/fi";

const stats = [
  {
    label: "Products",
    count: 145,
    icon: FiBox,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    link: "/control-dashboard/product",
  },
  {
    label: "Brands",
    count: 24,
    icon: FiTag,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    link: "/control-dashboard/brand",
  },
  {
    label: "Categories",
    count: 18,
    icon: FiGrid,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    link: "/control-dashboard/category",
  },
  {
    label: "Subcategories",
    count: 42,
    icon: FiLayers,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    link: "/control-dashboard/category",
  },
  {
    label: "Featured",
    count: 12,
    icon: FiStar,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    link: "/control-dashboard/featured-product",
  },
  {
    label: "Enquiries",
    count: 5,
    icon: FiMessageSquare,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
    link: "/control-dashboard/enquire",
    highlight: true,
  },
  {
    label: "Reviews",
    count: 87,
    icon: FiThumbsUp,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
    link: "/control-dashboard/homepage-review",
  },
  {
    label: "Team",
    count: 14,
    icon: FiUsers,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    link: "/control-dashboard/our-team",
  },
  {
    label: "Blogs",
    count: 32,
    icon: FiEdit3,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    link: "/control-dashboard/blog",
  },
  {
    label: "Clients",
    count: 45,
    icon: FiBriefcase,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    link: "/control-dashboard/client",
  },
  {
    label: "Newsletters",
    count: 1250,
    icon: FiMail,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
    link: "/control-dashboard/newsletter",
  },
];

export default function Page() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-10 min-h-[80vh]">
      {/* Quote Section */}
      <div className="bg-white p-6 border-l-4 border-primary shadow-sm flex items-start gap-4">
        <FiTrendingUp className="text-primary shrink-0 mt-1" size={24} />
        <div>
          <p className="text-lg text-gray-800 italic font-medium">
            "Success usually comes to those who are too busy to be looking for
            it."
          </p>
          <p className="text-sm font-bold text-gray-500 mt-1 uppercase tracking-widest">
            — Henry David Thoreau
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-8 bg-primary"></div>
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider">
            Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Link
                href={stat.link}
                key={index}
                className={`group relative bg-white border ${stat.border} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${stat.highlight ? "ring-1 ring-red-500 shadow-sm" : "shadow-sm"}`}
              >
                {stat.highlight && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-none shadow-sm animate-pulse border-2 border-white"></span>
                )}

                <div className="flex items-center justify-between h-full">
                  <div className="flex flex-col gap-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center ${stat.bg} ${stat.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={20} />
                    </div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>

                  <div className="flex items-center h-full">
                    <p className="text-5xl font-extrabold text-gray-900 tracking-tight">
                      {stat.count.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-current ${stat.color} transition-all duration-300 group-hover:w-full opacity-50`}
                ></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
