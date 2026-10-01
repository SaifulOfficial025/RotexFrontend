import React from "react";
import Header from "../components/header";
import DynamicHeader from "../components/dymanicHeader";
import Footer from "../components/footer";
import Menubarforotherpages from "../components/MenubarforOtherPages";
import MobileHeader from "../components/MobileHeader";
import HonorableClientSlider from "../components/HonorableClientSlider";

export const metadata = {
  title: "Our Clients | Rotex Lab",
  description: "Meet our honorable clients at Rotex.",
};

export default function OurClientsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      {/* Navigation */}
      <Header />
      <MobileHeader />
      <Menubarforotherpages />
      <DynamicHeader />

      {/* Main Content */}
      <main className="flex-grow ">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white shadow-sm p-6 md:p-12">
            <HonorableClientSlider />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
