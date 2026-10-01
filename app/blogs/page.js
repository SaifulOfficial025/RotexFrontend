import React from "react";
import Header from "../components/header";
import DynamicHeader from "../components/dymanicHeader";
import Footer from "../components/footer";
import Menubarforotherpages from "../components/MenubarforOtherPages";
import MobileHeader from "../components/MobileHeader";
import BlogHero from "./BlogHero";
import BlogList from "./BlogList";

export const metadata = {
  title: "Blogs | Rotex Lab - Insights & News",
  description:
    "Read the latest news, updates, and articles on laboratory equipment and medical devices.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      {/* Navigation */}
      <Header />
      <MobileHeader />
      <Menubarforotherpages />
      <DynamicHeader />

      {/* Main Content */}
      <main className="flex-grow">
        {/* <BlogHero /> */}
        <BlogList />
      </main>

      <Footer />
    </div>
  );
}
