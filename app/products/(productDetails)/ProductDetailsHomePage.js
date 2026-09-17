"use client";

import Header from "../../components/header";
import DynamicHeader from "../../components/dymanicHeader";
import Footer from "../../components/footer";
import Menubarforotherpages from "../../components/MenubarforOtherPages";
import ProductImage from "./ProductImage";
import ProductDetailsRightSide from "./ProductDetailsRightSide";
import ProductDetails from "./ProductDetails";
import RelatedProduct from "../../components/RelatedProduct";
import BrandWeRepresent from "../../components/BrandWeRepresentSlider";

export default function ProductDetailsHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Headers */}
      <Header />
      <Menubarforotherpages />
      <DynamicHeader />

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10 md:py-16">
        {/* Breadcrumbs (Optional but good for UX) */}
        <div className="text-sm text-gray-500 mb-8 font-medium">
          Home <span className="mx-2">/</span> Products{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-gray-900">
            Professional Digital Laboratory Scale
          </span>
        </div>

        {/* ─── Split Layout: Sticky Image & Scrolling Details ─── */}
        <div className="flex flex-col lg:flex-row gap-10 items-start relative pb-10 border-b border-gray-100">
          {/* Left Side: Sticky Product Image */}
          {/* top-32 accounts for fixed headers */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 z-10">
            <ProductImage />
          </div>

          {/* Right Side: Scrolling Product Details */}
          <div className="w-full lg:w-1/2 min-h-[800px]">
            <ProductDetailsRightSide />
          </div>
        </div>

        {/* ─── Related Products ─── */}
        <div className="mt-10">
          <ProductDetails />
          <RelatedProduct />
        </div>
      </main>
      <BrandWeRepresent />
      <Footer />
    </div>
  );
}
