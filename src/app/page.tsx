import HeroB from "@/components/home/HeroB";
import StayDetailsStrip from "@/components/home/StayDetailsStrip";
import RetreatIntro from "@/components/home/RetreatIntro";
import FeaturedCabins from "@/components/home/FeaturedCabins";
import VideoBreakSection from "@/components/home/VideoBreakSection";
import StayExperience from "@/components/home/StayExperience";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroB />
      <StayDetailsStrip />
      <RetreatIntro />
      <FeaturedCabins />
      <VideoBreakSection />
      <StayExperience />
      <CTASection />
    </>
  );
}