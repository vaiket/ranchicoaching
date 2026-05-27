import dynamic from "next/dynamic";
import CustomCursor from "@/components/common/CustomCursor";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ProgressBar from "@/components/common/ProgressBar";
import BeforeAfter from "@/components/sections/BeforeAfter";
import CtaSection from "@/components/sections/CtaSection";
import DigitalReality from "@/components/sections/DigitalReality";
import GrowthJourney from "@/components/sections/GrowthJourney";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import MarketOverview from "@/components/sections/MarketOverview";
import Packages from "@/components/sections/Packages";
import StatsTicker from "@/components/sections/StatsTicker";
import StudentsTable from "@/components/sections/StudentsTable";
import TargetMarket from "@/components/sections/TargetMarket";
import UseCases from "@/components/sections/UseCases";

const RoiCalculator = dynamic(() => import("@/components/sections/RoiCalculator"), {
  loading: () => <div className="mx-auto max-w-7xl px-5 py-24 text-muted2">ROI calculator loading...</div>,
});

export default function Home() {
  return (
    <>
      <ProgressBar />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <MarketOverview />
        <StudentsTable />
        <DigitalReality />
        <BeforeAfter />
        <UseCases />
        <GrowthJourney />
        <TargetMarket />
        <Packages />
        <StatsTicker />
        <RoiCalculator />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
