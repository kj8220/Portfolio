// In app/layout.js

"use client"; // STEP 1: Make the layout a client component

import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic"; // STEP 2: Import dynamic
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
// STEP 3: Remove the old static import
// import ScrollToTop from "./components/helper/scroll-to-top";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

// STEP 4: Dynamically import the client-only component
const ScrollToTop = dynamic(
  () => import("./components/helper/scroll-to-top"),
  { ssr: false }
);

// We can no longer export metadata from a Client Component layout.
// Move the metadata object to your app/page.js file.
// export const metadata = { ... };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop /> {/* This will now work correctly */}
        </main>
        <Footer />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}