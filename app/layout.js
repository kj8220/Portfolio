// In app/layout.js

import { Inter } from "next/font/google";
import "./css/globals.scss"; // We'll keep the global styles

const inter = Inter({ subsets: ["latin"] });

// We'll add metadata back later, in page.js
// export const metadata = { ... };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}