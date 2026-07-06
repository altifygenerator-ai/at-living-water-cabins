import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { buildPageMetadata, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildPageMetadata({
    title: "At Living Water Cabins | Creekside Cabins in Norman, Arkansas",
    description:
      "Book a peaceful creekside cabin in Norman, Arkansas at At Living Water Cabins. Four private cabins along Collier Creek between Glenwood and Mount Ida, near the Caddo River, Lake Ouachita, Ouachita Mountains, crystal mines, hiking, fishing, floating, and Hot Springs.",
    path: "/",
    keywords: [
      "Love Cabin Norman Arkansas",
      "Faith Cabin Norman Arkansas",
      "Hope Cabin Norman Arkansas",
      "Peace Cabin Norman Arkansas",
      "Arkansas cabin getaway",
      "private cabin rentals Arkansas",
      "peaceful cabin rentals Arkansas",
      "crystal mining cabins Arkansas",
    ],
  }),

  title: {
    default: "At Living Water Cabins | Creekside Cabins in Norman, Arkansas",
    template: `%s | ${siteName}`,
  },

  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  category: "travel",
  classification:
    "Creekside cabin rentals, lodging, travel, vacation rentals, Arkansas cabins",

  verification: {
    google: "Z1WKFNut0TsJsbDdJ9DCJax3uTGHw34VLDDOVSHaGEg",
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
