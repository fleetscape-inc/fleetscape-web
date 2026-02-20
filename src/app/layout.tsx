import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollRevealProvider } from "@/components/ScrollRevealProvider";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fleetscape.com"),
  title: "Fleetscape | Precision Ground Cover Installation — California Central Coast",
  description:
    "Premium pneumatic ground cover installation for commercial properties, municipalities, and HOAs across California's Central Coast. Mulch, playground chips, and erosion control installed with blower truck precision.",
  openGraph: {
    title: "Fleetscape | Precision Ground Cover Installation",
    description:
      "Premium pneumatic ground cover installation for commercial properties across California's Central Coast.",
    type: "website",
    url: "https://fleetscape.com",
    images: [{ url: "/images/logo-with-tagline.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${sourceSans.variable}`}>
      <body className="antialiased">
        <ScrollRevealProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
