// In app/layout.js

import "./css/globals.scss";

export const metadata = {
  title: "Portfolio of Roopan Raj",
  description: "This is the portfolio of Roopan Raj.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}