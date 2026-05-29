import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://romesteadguide.top"),
  title: {
    default: "Romestead Guide - Guides, Wiki, Bosses, Weapons & Armor",
    template: "%s | Romestead Guide",
  },
  description:
    "Romestead guides and wiki for building order, farming, crafting, weapons, armor, bosses, biomes, co-op, and progression decisions.",
  openGraph: {
    title: "Romestead Guide - Guides & Wiki",
    description:
      "Romestead guides and wiki for building order, farming, crafting, weapons, armor, bosses, biomes, co-op, and progression decisions.",
    url: "https://romesteadguide.top",
    siteName: "Romestead Guide",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
