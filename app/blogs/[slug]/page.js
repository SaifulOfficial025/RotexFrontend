import React from "react";
import Header from "../../components/header";
import DynamicHeader from "../../components/dymanicHeader";
import Footer from "../../components/footer";
import Menubarforotherpages from "../../components/MenubarforOtherPages";
import MobileHeader from "../../components/MobileHeader";
import BlogContent from "./BlogContent";
import { blogPosts } from "../BlogData";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | Rotex Lab`,
    description: post.snippet,
  };
}

export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      {/* Navigation */}
      <Header />
      <MobileHeader />
      <Menubarforotherpages />
      <DynamicHeader />

      {/* Main Content */}
      <main className="flex-grow">
        <BlogContent post={post} />
      </main>

      <Footer />
    </div>
  );
}
