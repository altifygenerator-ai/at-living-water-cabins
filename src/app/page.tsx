import HeroB from "@/components/home/HeroB";
import StayDetailsStrip from "@/components/home/StayDetailsStrip";
import RetreatIntro from "@/components/home/RetreatIntro";
import FeaturedCabins from "@/components/home/FeaturedCabins";
import VideoBreakSection from "@/components/home/VideoBreakSection";
import StayExperience from "@/components/home/StayExperience";
import OwnerRezBookingSection from "@/components/home/OwnerRezBookingSection";
import CTASection from "@/components/home/CTASection";
import ReviewsSection from "@/components/home/ReviewsSection";
import OwnerRezFullCalendarSection from "@/components/home/OwnerRezFullCalendarSection";
import GoogleReviewsCarousel from "@/components/home/GoogleReviewsCarousel";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  businessSchema,
  buildPageMetadata,
  webPageSchema,
  webSiteSchema,
} from "@/lib/seo";
const pageTitle = "Creekside Cabins in Norman, Arkansas";
const pageDescription =
  "Book a peaceful creekside cabin in Norman, Arkansas at At Living Water Cabins, located along Collier Creek between Glenwood and Mount Ida near the Caddo River, Lake Ouachita, and Hot Springs.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/",
  keywords: [
    "creekside cabin rentals Norman Arkansas",
    "cabins between Glenwood and Mount Ida",
    "cabins near the Caddo River",
    "Ouachita Mountain cabin rentals",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          businessSchema,
          webSiteSchema,
          webPageSchema({
            path: "/",
            title: pageTitle,
            description: pageDescription,
          }),
        ]}
      />

      <HeroB />
      <StayDetailsStrip />
      <RetreatIntro />
      <FeaturedCabins />
      <VideoBreakSection />
      <GoogleReviewsCarousel />
      <ReviewsSection />
      <StayExperience />
      <OwnerRezBookingSection />
<OwnerRezFullCalendarSection />
      <CTASection />
    </>
  );
}