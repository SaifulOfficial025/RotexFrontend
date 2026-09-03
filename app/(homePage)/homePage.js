import Header from "../components/header";
import DynamicHeader from "../components/dymanicHeader";
import Slider from "./slider/HeroSlider";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import PromoBanner from "./PromoBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Global Header */}
      <Header />

      {/* Sticky/Dynamic Header */}
      <DynamicHeader />

      {/* Hero Slider */}
      <Slider />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col gap-6 mt-8">
          {/* <Categories /> */}
          <FeaturedProducts />
          {/* <PromoBanner /> */}
        </div>
      </main>
    </div>
  );
}
