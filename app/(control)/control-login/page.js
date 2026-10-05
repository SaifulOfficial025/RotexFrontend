"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ControlLogin() {
 const [id, setId] = useState("");
 const [password, setPassword] = useState("");
 const router = useRouter();

 const handleLogin = (e) => {
  e.preventDefault();
  if (id && password) {
   router.push("/control-dashboard");
  }
 };

 return (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
   <div className="w-full max-w-md bg-white shadow-xl p-8">
    <div className="text-center mb-8">
     <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
    </div>

    <form onSubmit={handleLogin} className="space-y-6">
     <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">
       ID
      </label>
      <input
       type="text"
       value={id}
       onChange={(e) => setId(e.target.value)}
       className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary rounded-md outline-none transition-all"
       placeholder="Enter your ID"
       required
      />
     </div>

     <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">
       Password
      </label>
      <input
       type="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary rounded-md outline-none transition-all"
       placeholder="Enter your password"
       required
      />
     </div>

     <button
      type="submit"
      className="w-full py-3 bg-primary text-white font-bold rounded-md hover:bg-black transition-colors"
     >
      Login
     </button>
    </form>
   </div>
  </div>
 );
}
