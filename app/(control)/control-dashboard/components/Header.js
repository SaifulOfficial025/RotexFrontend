"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";

export default function Header({ onMenuClick }) {
 const [time, setTime] = useState("");
 const router = useRouter();

 useEffect(() => {
  const updateTime = () => {
   const now = new Date();
   setTime(now.toLocaleString("en-US", { 
    weekday: "short", month: "short", day: "numeric", 
    hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true 
   }));
  };
  updateTime();
  const interval = setInterval(updateTime, 1000);
  return () => clearInterval(interval);
 }, []);

 const handleLogout = () => {
  router.push("/control-login");
 };

 return (
  <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 md:px-6 z-10 border-b border-gray-200">
   <div className="flex items-center gap-4">
    <button 
     onClick={onMenuClick}
     className="p-2 lg:hidden text-gray-600 hover:bg-gray-100 transition-colors"
    >
     <FiMenu size={24} />
    </button>
    <div className="text-xs md:text-sm text-gray-600 font-bold hidden sm:block">{time}</div>
   </div>
   <button 
    onClick={handleLogout}
    className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-bold transition-colors"
   >
    Logout
   </button>
  </header>
 );
}
