import React from "react";

export default function BlogHero() {
  return (
    <div className="bg-gray-50 border-b border-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Rotex <span className="text-primary">Insights</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Stay updated with the latest news, technological advancements, and expert advice from the world of laboratory and medical equipment.
        </p>
      </div>
    </div>
  );
}
