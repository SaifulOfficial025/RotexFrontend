"use client";

import React, { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import { blogPosts } from "./BlogData";
import { FaArrowRight } from "react-icons/fa6";



function BlogCard({ post }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!post.images || post.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % post.images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [post.images]);

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Image container with Slider */}
      <div className="w-full aspect-video relative overflow-hidden bg-gray-100">
        {post.images && post.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${post.title} - Image ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ${
              idx === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 shadow-sm z-20">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-4">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>{post.author}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug">
          {post.title}
        </h3>

        <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-grow">
          {post.snippet}
        </p>

        <div className="mt-auto flex items-center text-[13px] font-bold text-primary uppercase tracking-widest group-hover:gap-3 transition-all duration-300 gap-2">
          Read Article <FaArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 3;
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const currentPosts = blogPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 max-w-7xl py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post, idx) => (
          <BlogCard key={idx} post={post} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-16">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:text-primary font-bold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IoChevronBack size={18} />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center font-bold transition-colors ${
                  currentPage === page
                    ? "bg-primary text-white shadow-md"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:text-primary font-bold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IoChevronForward size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
