"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
 { label: "Dashboard", href: "/control-dashboard" },
 { 
  label: "Product", 
  subMenus: [
   { label: "See Products", href: "/control-dashboard/product" },
   { label: "Add Product", href: "/control-dashboard/product/add" }
  ]
 },
 { label: "Brand", href: "/control-dashboard/brand" },
 { label: "Category", href: "/control-dashboard/category" },
 { label: "Featured Product", href: "/control-dashboard/featured-product" },
 { label: "Enquire", href: "/control-dashboard/enquire" },
 { label: "Homepage Review", href: "/control-dashboard/homepage-review" },
 { label: "Our Team", href: "/control-dashboard/our-team" },
 { label: "Blog", href: "/control-dashboard/blog" },
 { label: "Client", href: "/control-dashboard/client" },
 { label: "Newsletter", href: "/control-dashboard/newsletter" },
];

export default function Sidebar() {
 const pathname = usePathname();

 return (
  <aside className="w-64 bg-gray-900 text-white flex flex-col h-full shadow-lg">
   <div className="h-16 flex items-center px-6 border-b border-gray-800">
    <h1 className="text-xl font-bold tracking-wider text-primary">
     CONTROL PANEL
    </h1>
   </div>
   <div className="flex-1 overflow-y-auto py-4">
    <nav className="space-y-1 px-3 pb-6">
     {menus.map((menu, idx) => {
      if (menu.subMenus) {
       return (
        <div key={idx} className="mb-2 mt-4">
         <div className="px-4 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          {menu.label}
         </div>
         <div className="mt-1 space-y-1">
          {menu.subMenus.map((subMenu, subIdx) => (
           <Link
            key={subIdx}
            href={subMenu.href}
            className={`flex items-center px-4 py-2.5 ml-2 text-sm font-medium transition-colors ${
             pathname === subMenu.href
              ? "bg-primary text-white"
              : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
           >
            <span className="w-1.5 h-1.5 bg-current opacity-50 mr-3"></span>
            {subMenu.label}
           </Link>
          ))}
         </div>
        </div>
       );
      }
      
      return (
       <Link
        key={idx}
        href={menu.href}
        className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
         pathname === menu.href
          ? "bg-primary text-white"
          : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`}
       >
        {menu.label}
       </Link>
      );
     })}
    </nav>
   </div>
  </aside>
 );
}
