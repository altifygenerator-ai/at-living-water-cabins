import HeroB from "@/components/home/HeroB";
import FeaturedCabins from "@/components/home/FeaturedCabins";
import AmenitiesPreview from "@/components/home/AmenitiesPreview";
import TrustBar from "@/components/sections/TrustBar";
import ActivitiesPreview from "@/components/home/ActivitiesPreview";
import CTASection from "@/components/home/CTASection";
import VideoBreakSection from "@/components/home/VideoBreakSection";

export default function Home() {
  return (
    <main>
      <HeroB />
      <TrustBar />
      <FeaturedCabins />
      <VideoBreakSection />
      <AmenitiesPreview />
      <ActivitiesPreview />
      <CTASection />
    </main>
  );
}