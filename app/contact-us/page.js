import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import EnquireAndMap from "../components/EnquireAndMap";
import Header from "../components/header";
import DynamicHeader from "../components/dymanicHeader";
import Footer from "../components/footer";
import Menubarforotherpages from "../components/MenubarforOtherPages";
import MobileHeader from "../components/MobileHeader";
import BrandWeRepresentSlider from "../components/BrandWeRepresentSlider";
import BusinessDeals from "../components/BusinessDeals";

export const metadata = {
  title: "Contact Us | Rotex",
  description:
    "Get in touch with Rotex International. We're here to help you with our scientific products and services.",
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Headers */}
      <Header />
      <MobileHeader />
      <Menubarforotherpages />
      <DynamicHeader />
      <EnquireAndMap />

      {/* Main Content Area */}
      <main className="flex-grow mt-6 pb-16 md:pb-24">
        <ContactInfo />
        <BusinessDeals />
      </main>

      <BrandWeRepresentSlider />
      <Footer />
    </div>
  );
}
