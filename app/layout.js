"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Providers from "./providers"; // Import the new Providers component
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

const ScrollToTop = dynamic(
  () => import("./components/helper/scroll-to-top"),
  { ssr: false }
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers> {/* Wrap your layout's content with the Providers component */}
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </Providers>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}