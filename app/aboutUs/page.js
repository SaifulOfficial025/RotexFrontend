import Header from "../components/header";
import DynamicHeader from "../components/dymanicHeader";
import Footer from "../components/footer";
import Menubarforotherpages from "../components/MenubarforOtherPages";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";
import MissionVision from "./MissionVision";
import QualityControl from "./QualityControl";
import BusinessDeals from "../components/BusinessDeals";
import BrandWeRepresent from "../components/BrandWeRepresentSlider";
import MobileHeader from "../components/MobileHeader";
import CEO from "./CEO";

export const metadata = {
  title: "About Us | Rotex",
  description:
    "Learn about our story, mission, vision, and the dedicated team driving our commitment to uncompromising quality.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Headers */}
      <Header />
      <MobileHeader />
      <Menubarforotherpages />
      <DynamicHeader />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Modular Sections */}
        <OurStory />
        <CEO />
        <MissionVision />
        <OurTeam />
        <QualityControl />
        <BusinessDeals />
        <BrandWeRepresent />
      </main>

      <Footer />
    </div>
  );
}
