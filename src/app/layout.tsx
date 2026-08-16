import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Phone3D from "@/components/Phone3D";
import Dancer3DWrapper from "@/components/Dancer3DWrapper";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dance Art Studio — Cursuri balet clasic pentru toate vârstele",
  description:
    "Dance Art Studio — cursuri de balet clasic pentru copii, adolescenți și adulți. Studio profesional cu parchet, oglinzi, bare și pian live. Înscrieri deschise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-night text-cream">
        <Dancer3DWrapper />
        <div className="relative z-10">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Suspense fallback={null}>
          <Phone3D />
        </Suspense>
      </body>
    </html>
  );
}
