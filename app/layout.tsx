import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cafe-planken.de"),
  title: {
    default: "Café Planken — Manufaktur auf den Planken in Mannheim",
    template: "%s — Café Planken Mannheim",
  },
  description:
    "Hausgemachtes Eis, frische Pasta und ehrlicher Kaffee — mitten in Mannheim, auf den Planken. Täglich geöffnet, eigene Manufaktur, O6 6.",
  keywords: [
    "Café Mannheim",
    "Eis Mannheim",
    "Pasta Mannheim",
    "Café Planken",
    "Mannheimer Eismanufaktur",
    "Kaffee Innenstadt Mannheim",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Café Planken — Manufaktur auf den Planken in Mannheim",
    description:
      "Eis, Pasta, Kuchen, Kaffee. Eigene Manufaktur in der O6 6, mitten auf den Planken.",
    siteName: "Café Planken",
    url: "https://cafe-planken.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Planken Mannheim",
    description:
      "Eis, Pasta, Kuchen, Kaffee. Eigene Manufaktur auf den Planken.",
  },
  authors: [{ name: "Café Planken" }],
  category: "Café",
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Café Planken Mannheim",
  image: ["https://cafe-planken.de/og.jpg"],
  url: "https://cafe-planken.de",
  telephone: business.phone,
  email: business.email,
  priceRange: "€€",
  servesCuisine: ["Café", "Italienisch", "Eis", "Frühstück"],
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    postalCode: business.address.postal,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  openingHoursSpecification: business.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.schemaDays,
    opens: h.opens,
    closes: h.closes,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.value,
    reviewCount: business.rating.count,
  },
  sameAs: business.social.map((s) => s.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-bg text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
