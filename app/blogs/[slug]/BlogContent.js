"use client";

import React, { useState } from "react";
import Link from "next/link";
import FullScreenImageViewer from "../../components/FullScreenImageViewer";
import Button from "../../components/button";
import { FaArrowLeft, FaLink, FaCheck, FaXmark } from "react-icons/fa6";

export default function BlogContent({ post }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Post Not Found
        </h2>
        <Link
          href="/blogs"
          className="text-primary font-bold uppercase text-sm tracking-widest hover:underline"
        >
          Return to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      <article className="pb-24">
        {/* Header Container */}
        <div className="container mx-auto px-4 max-w-7xl mt-12 mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[12px] font-bold text-gray-500 uppercase tracking-widest hover:text-primary transition-colors mb-12"
          >
            <FaArrowLeft size={12} /> Back to all articles
          </Link>

          {/* 1. Date time & 2. Title */}
          <div className="mb-6">
            <div className="flex items-center gap-4 text-gray-400 text-[13px] font-bold uppercase tracking-widest mb-4">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* 3. Cover photo */}
        <div className="container mx-auto px-4 max-w-7xl mb-12">
          <div
            className="w-full aspect-video relative bg-gray-100 overflow-hidden shadow-sm group cursor-pointer"
            onClick={() => setSelectedImage(post.images && post.images[0])}
          >
            <img
              src={post.images && post.images[0]}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 font-bold uppercase tracking-widest text-sm transition-opacity duration-300 drop-shadow-md">
                View Fullscreen
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Body */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article Text */}
            <div className="lg:w-3/4 prose prose-lg prose-gray max-w-none">
              <div className="w-20 h-1 bg-primary/20 mb-8"></div>

              {/* 4. Photo grid (auto layout) */}
              {post.images && post.images.length > 1 && (
                <div className="mb-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {post.images.slice(1).map((img, idx) => (
                      <div
                        key={idx}
                        className="w-full aspect-video overflow-hidden bg-gray-100 shadow-sm group cursor-pointer relative"
                        onClick={() => setSelectedImage(img)}
                      >
                        <img
                          src={img}
                          alt={`${post.title} - gallery image ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 font-bold uppercase tracking-widest text-xs transition-opacity duration-300 drop-shadow-md">
                            View
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                The Impact of New Technologies
              </h3>
              <p className="text-gray-600 leading-loose mb-6">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Curabitur
                pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
                varius, turpis et commodo pharetra, est eros bibendum elit, nec
                luctus magna felis sollicitudin mauris. Integer in mauris eu
                nibh euismod gravida.
              </p>
              <p className="text-gray-600 leading-loose">
                Duis ac tellus et risus vulputate vehicula. Donec lobortis risus
                a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
                eros est euismod turpis, id tincidunt sapien risus a quam.
                Maecenas fermentum consequat mi. Donec fermentum. Pellentesque
                malesuada nulla a mi.
              </p>
            </div>

            {/* Sidebar / Social Share */}
            <div className="lg:w-1/4">
              <div className="sticky top-32">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Share this article
                </h4>
                <div className="flex flex-col items-start gap-3">
                  <Button
                    onClick={() => setShowSharePopup(true)}
                    variant="white"
                    showArrow={false}
                    className="!text-xs !py-2.5 decoration-solid"
                  >
                    <FaLink size={14} className="mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Fullscreen Image Modal */}
      <FullScreenImageViewer
        images={post.images}
        initialIndex={post.images ? post.images.indexOf(selectedImage) : 0}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {/* Share Popup Modal */}
      {showSharePopup && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowSharePopup(false)}
        >
          <div
            className="bg-white  shadow-2xl p-6 w-full max-w-md relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSharePopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <FaXmark size={20} />
            </button>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Share link</h3>
            <p className="text-sm text-gray-500 mb-6">
              Anyone with this link will be able to view this article.
            </p>

            <div className="flex items-center gap-2">
              <div className="bg-gray-50 border border-gray-200 px-3 py-2.5 flex-1 overflow-hidden">
                <p className="text-sm text-gray-600 truncate select-all">
                  {typeof window !== "undefined" ? window.location.href : ""}
                </p>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className={`flex-shrink-0 px-4 py-2.5 font-bold text-sm transition-all duration-300 ${
                  copied
                    ? "bg-green-100 text-green-700"
                    : "bg-primary text-white hover:bg-black"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
