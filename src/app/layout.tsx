import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlivingwatercabins.com"),

  title: {
    default:
      "At Living Water Cabins | Creekside Cabin Rentals in Norman, Arkansas",
    template: "%s | At Living Water Cabins",
  },

  description:
    "Book a quiet creekside cabin stay at At Living Water Cabins in Norman, Arkansas. Four peaceful cabins along Collier Creek between Glenwood and Mount Ida, near the Caddo River, Ouachita Mountains, Lake Ouachita, crystal mines, hiking, fishing, floating, and Hot Springs.",

  keywords: [
    "At Living Water Cabins",
    "Norman Arkansas cabins",
    "cabins in Norman Arkansas",
    "Glenwood Arkansas cabin rentals",
    "Mount Ida Arkansas cabins",
    "Caddo River cabins",
    "Collier Creek cabins",
    "Ouachita Mountain cabins",
    "Arkansas creekside cabins",
    "Southwest Arkansas cabin rentals",
    "cabins near Lake Ouachita",
    "cabins near Hot Springs Arkansas",
    "crystal mining cabins Arkansas",
    "peaceful cabin rentals Arkansas",
    "creekside cabin rentals Arkansas",
    "Love Cabin",
    "Faith Cabin",
    "Hope Cabin",
    "Peace Cabin",
  ],

  authors: [{ name: "At Living Water Cabins" }],
  creator: "At Living Water Cabins",
  publisher: "At Living Water Cabins",

  alternates: {
    canonical: "https://atlivingwatercabins.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atlivingwatercabins.com",
    siteName: "At Living Water Cabins",
    title:
      "At Living Water Cabins | Creekside Cabin Rentals in Norman, Arkansas",
    description:
      "Quiet creekside cabin rentals in Norman, Arkansas, between Glenwood and Mount Ida. Stay along Collier Creek near the Caddo River with full kitchens, porches, Starlink WiFi, outdoor space, and easy access to the Ouachita Mountains, Lake Ouachita, crystal mines, and Hot Springs.",
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
      "At Living Water Cabins | Creekside Cabin Rentals in Norman, Arkansas",
    description:
      "Book a quiet creekside cabin stay along Collier Creek in Norman, Arkansas, near Glenwood, Mount Ida, the Caddo River, Lake Ouachita, and Hot Springs.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "travel",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      </body>
    </html>
  );
}