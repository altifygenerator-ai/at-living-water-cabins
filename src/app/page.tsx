import HeroB from "@/components/home/HeroB";
import StayDetailsStrip from "@/components/home/StayDetailsStrip";
import RetreatIntro from "@/components/home/RetreatIntro";
import FeaturedCabins from "@/components/home/FeaturedCabins";
import VideoBreakSection from "@/components/home/VideoBreakSection";
import StayExperience from "@/components/home/StayExperience";
import OwnerRezBookingSection from "@/components/home/OwnerRezBookingSection";
import CTASection from "@/components/home/CTASection";
import ReviewsSection from "@/components/home/ReviewsSection";
const homeSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://atlivingwatercabins.com/#lodging",
  name: "At Living Water Cabins",
  url: "https://atlivingwatercabins.com",
  image: "https://atlivingwatercabins.com/images/og-image.png",
  description:
    "At Living Water Cabins offers four quiet creekside cabin rentals in Norman, Arkansas, along Collier Creek between Glenwood and Mount Ida near the Caddo River and Ouachita Mountains.",
  telephone: "+13184612650",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "136 Living Water Dr",
    addressLocality: "Norman",
    addressRegion: "AR",
    postalCode: "71960",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Norman, Arkansas",
    },
    {
      "@type": "Place",
      name: "Glenwood, Arkansas",
    },
    {
      "@type": "Place",
      name: "Mount Ida, Arkansas",
    },
    {
      "@type": "Place",
      name: "Caddo River",
    },
    {
      "@type": "Place",
      name: "Ouachita Mountains",
    },
  ],
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Creekside cabins",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Full kitchens",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Starlink WiFi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Linens and bedding provided",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Towels provided",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Porches",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Fire rings",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Charcoal grills",
      value: true,
    },
  ],
  containsPlace: [
    {
      "@type": "Accommodation",
      name: "Love Cabin",
      url: "https://atlivingwatercabins.com/cabins/love",
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: 4,
      },
    },
    {
      "@type": "Accommodation",
      name: "Faith Cabin",
      url: "https://atlivingwatercabins.com/cabins/faith",
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: 4,
      },
    },
    {
      "@type": "Accommodation",
      name: "Hope Cabin",
      url: "https://atlivingwatercabins.com/cabins/hope",
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: 4,
      },
    },
    {
      "@type": "Accommodation",
      name: "Peace Cabin",
      url: "https://atlivingwatercabins.com/cabins/peace",
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: 4,
      },
    },
  ],
  makesOffer: {
    "@type": "Offer",
    name: "Creekside cabin rentals in Norman, Arkansas",
    availability: "https://schema.org/InStock",
    url: "https://atlivingwatercabins.com/#book-direct",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
      />

      <HeroB />
      <StayDetailsStrip />
      <RetreatIntro />
      <FeaturedCabins />
      <VideoBreakSection />
      <ReviewsSection />
      <StayExperience />
      <OwnerRezBookingSection />
      <CTASection />
    </>
  );
}