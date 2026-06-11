import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlivingwatercabins.com"),

  title: {
    default:
      "At Living Water Cabins | Creekside Cabins in Norman, Arkansas",
    template: "%s | At Living Water Cabins",
  },

  description:
    "Book a peaceful creekside cabin in Norman, Arkansas at At Living Water Cabins. Four private cabins along Collier Creek between Glenwood and Mount Ida, near the Caddo River, Lake Ouachita, Ouachita Mountains, crystal mines, hiking, fishing, floating, and Hot Springs.",

  keywords: [
    "At Living Water Cabins",
    "At Living Water Cabins Norman AR",
    "Norman Arkansas cabins",
    "cabins in Norman Arkansas",
    "Norman AR cabin rentals",
    "Glenwood Arkansas cabin rentals",
    "cabins near Glenwood Arkansas",
    "Mount Ida Arkansas cabins",
    "cabins near Mount Ida Arkansas",
    "Caddo River cabins",
    "cabins near Caddo River",
    "Collier Creek cabins",
    "creekside cabins Arkansas",
    "Arkansas creekside cabins",
    "Ouachita Mountain cabins",
    "Ouachita Mountains cabin rentals",
    "cabins near Lake Ouachita",
    "cabins near Hot Springs Arkansas",
    "Southwest Arkansas cabin rentals",
    "Arkansas cabin getaway",
    "peaceful cabin rentals Arkansas",
    "private cabin rentals Arkansas",
    "crystal mining cabins Arkansas",
    "Love Cabin",
    "Faith Cabin",
    "Hope Cabin",
    "Peace Cabin",
  ],

  authors: [{ name: "At Living Water Cabins" }],
  creator: "At Living Water Cabins",
  publisher: "At Living Water Cabins",
  applicationName: "At Living Water Cabins",
  category: "travel",
  classification:
    "Creekside cabin rentals, lodging, travel, vacation rentals, Arkansas cabins",

  verification: {
    google: "Z1WKFNut0TsJsbDdJ9DCJax3uTGHw34VLDDOVSHaGEg",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atlivingwatercabins.com",
    siteName: "At Living Water Cabins",
    title:
      "At Living Water Cabins | Creekside Cabins in Norman, Arkansas",
    description:
      "Peaceful creekside cabin rentals in Norman, Arkansas, between Glenwood and Mount Ida. Stay along Collier Creek near the Caddo River with full kitchens, porches, Starlink WiFi, outdoor space, and easy access to the Ouachita Mountains, Lake Ouachita, crystal mines, and Hot Springs.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "At Living Water Cabins creekside cabin rentals in Norman, Arkansas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "At Living Water Cabins | Creekside Cabins in Norman, Arkansas",
    description:
      "Book a quiet creekside cabin stay along Collier Creek in Norman, Arkansas, near Glenwood, Mount Ida, the Caddo River, Lake Ouachita, and Hot Springs.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "geo.region": "US-AR",
    "geo.placename": "Norman, Arkansas",
    "geo.position": "34.459;-93.681",
    ICBM: "34.459, -93.681",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}