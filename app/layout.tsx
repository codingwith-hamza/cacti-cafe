import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

// Display: a characterful modern grotesque — architectural, not a tired serif.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Body: clean, warm, high x-height. Avoids the Inter default.
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cacti-sa.com"),
  title: "Cacti Café — A desert kept indoors · Riyadh",
  description:
    "A design-led coffee house in Riyadh where a living cactus garden, warm pine and river stone meet coffee made with intent. Open around the clock in Qurtubah.",
  openGraph: {
    title: "Cacti Café — Riyadh",
    description:
      "A desert kept indoors. Coffee, quiet, and a living cactus garden in Qurtubah, Riyadh.",
    images: ["/images/hero-staircase.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable}`}
    >
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
