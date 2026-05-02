import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "At Living Water Cabins | Cabin Rentals in Norman, Arkansas",
    template: "%s | At Living Water Cabins",
  },
  description:
    "Creekside cabin rentals and a family lodge in the Ouachita Mountains between Glenwood and Mount Ida, Arkansas.",
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