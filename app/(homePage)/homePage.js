import Header from "../components/header";
import DynamicHeader from "../components/dymanicHeader";
import Slider from "./slider/HeroSlider";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import PromoBanner from "./PromoBanner";
import OurbusinessFields from "./OurBusinessFields";
import WhyUs from "./WhyUs";
import Review from "./Review";
import BusinessDeals from "../components/BusinessDeals";
import EquireAndMap from "../components/EquireAndMap";
import BrandWeRepresentSlider from "../components/BrandWeRepresentSlider";

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
      <main className="flex-grow">
        <div className="flex flex-col">
          {/* <Categories /> */}
          <FeaturedProducts />
          <OurbusinessFields />
          <WhyUs />
          <Review />
          <BusinessDeals />
          <EquireAndMap />
          <BrandWeRepresentSlider />
        </div>
      </main>
    </div>
  );
}
