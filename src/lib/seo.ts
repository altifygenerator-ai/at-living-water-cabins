import type { Metadata } from "next";

export const siteUrl = "https://atlivingwatercabins.com";
export const siteName = "At Living Water Cabins";
export const siteTagline = "Creekside Cabins in Norman, Arkansas";
export const defaultOgImage = "/images/og-image.png";
export const defaultOgImageAlt =
  "At Living Water Cabins creekside cabin rentals in Norman, Arkansas";

export const businessPhoneDisplay = "903-702-9184";
export const businessPhoneE164 = "+19037029184";

export const businessAddress = {
  streetAddress: "136 Living Water Dr",
  addressLocality: "Norman",
  addressRegion: "AR",
  postalCode: "71960",
  addressCountry: "US",
};

export const businessGeo = {
  latitude: 34.459,
  longitude: -93.681,
};

export const nearbyAreas = [
  "Norman, Arkansas",
  "Glenwood, Arkansas",
  "Mount Ida, Arkansas",
  "Caddo River",
  "Ouachita River",
  "Lake Ouachita",
  "Ouachita Mountains",
  "Hot Springs, Arkansas",
  "Murfreesboro, Arkansas",
  "Lake Greeson",
  "Ouachita National Forest",
];

export const regionalKeywords = [
  "At Living Water Cabins",
  "At Living Water Cabins Norman AR",
  "Norman Arkansas cabins",
  "Norman AR cabin rentals",
  "cabins in Norman Arkansas",
  "Glenwood Arkansas cabin rentals",
  "cabins near Glenwood Arkansas",
  "Mount Ida Arkansas cabins",
  "cabins near Mount Ida Arkansas",
  "Caddo River cabins",
  "cabins near Caddo River",
  "Collier Creek cabins",
  "creekside cabins Arkansas",
  "Ouachita Mountains cabin rentals",
  "cabins near Lake Ouachita",
  "cabins near Hot Springs Arkansas",
  "Southwest Arkansas cabin rentals",
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = defaultOgImage,
  imageAlt = defaultOgImageAlt,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path || "/";
  const uniqueKeywords = Array.from(new Set([...keywords, ...regionalKeywords]));

  return {
    title,
    description,
    keywords: uniqueKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: absoluteUrl(canonicalPath),
      siteName,
      title: `${title} | ${siteName}`,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [absoluteUrl(image)],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : undefined,
  };
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "LocalBusiness"],
  "@id": `${siteUrl}/#lodging`,
  name: siteName,
  url: siteUrl,
  image: absoluteUrl(defaultOgImage),
  logo: absoluteUrl("/favicon.ico"),
  description:
    "At Living Water Cabins offers quiet creekside cabin rentals in Norman, Arkansas, along Collier Creek between Glenwood and Mount Ida near the Caddo River and Ouachita Mountains.",
  telephone: businessPhoneE164,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...businessAddress,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessGeo.latitude,
    longitude: businessGeo.longitude,
  },
  areaServed: nearbyAreas.map((name) => ({
    "@type": "Place",
    name,
  })),
  amenityFeature: [
    "Creekside cabins",
    "Full kitchens",
    "Starlink WiFi",
    "Linens and bedding provided",
    "Towels provided",
    "Front porches",
    "Fire rings",
    "Charcoal grills",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#lodging`,
  },
  inLanguage: "en-US",
};

export function webPageSchema({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#lodging`,
    },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListSchema({
  id,
  name,
  items,
}: {
  id: string;
  name: string;
  items: { name: string; url: string; description?: string; image?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl(id)}#itemlist`,
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: item.name,
        url: absoluteUrl(item.url),
        ...(item.description ? { description: item.description } : {}),
        ...(item.image ? { image: absoluteUrl(item.image) } : {}),
      },
    })),
  };
}
