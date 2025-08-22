// In app/layout.js

import { Inter } from "next/font/google";
import Navbar from "./components/navbar"; // <-- ADD THIS
import Footer from "./components/footer";   // <-- ADD THIS
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* <-- ADD THIS */}
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {children}
        </main>
        <Footer /> {/* <-- ADD THIS */}
      </body>
    </html>
  );
}