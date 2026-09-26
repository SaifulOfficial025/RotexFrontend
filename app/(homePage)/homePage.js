import dynamic from "next/dynamic";
import Header from "../components/header";
import DynamicHeader from "../components/dymanicHeader";
import Slider from "./slider/HeroSlider";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import PromoBanner from "./PromoBanner";
import OurbusinessFields from "./OurBusinessFields";
import WhyUs from "./WhyUs";
import MobileHeader from "../components/MobileHeader";
const Review = dynamic(() => import("./Review"));
const BusinessDeals = dynamic(() => import("../components/BusinessDeals"));
const EnquireAndMap = dynamic(() => import("../components/EnquireAndMap"));
const BrandWeRepresentSlider = dynamic(
  () => import("../components/BrandWeRepresentSlider"),
);
const HonorableClientSlider = dynamic(
  () => import("../components/HonorableClientSlider"),
);
const Footer = dynamic(() => import("../components/footer"));

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Global Header */}
      <Header />
      <MobileHeader />

      {/* Sticky/Dynamic Header */}
      <DynamicHeader />

      {/* Hero Slider */}
      <Slider />

      {/* Main Content */}
      <main className="flex-grow">
        <h1 className="sr-only">
          Rotex Lab - Premium Laboratory, Medical, and Scientific Equipment in
          Bangladesh
        </h1>
        <div className="flex flex-col">
          {/* <Categories /> */}
          <FeaturedProducts />
          <OurbusinessFields />
          <WhyUs />
          <Review />
          {/* <BusinessDeals /> */}
          <EnquireAndMap />
          <HonorableClientSlider />
          <BrandWeRepresentSlider />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
