import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FreeCuli - Zero Cloud. Zero Cost. Absolute Freedom.",
  description: "FreeCuli is the commercial ingredient brand for the HFSCA methodology. The trademarked seal of quality and zero-cloud dependency for hardware manufacturers.",
  keywords: "FreeCuli, HFSCA, Smart Kitchen, Edge AI, Zero Cloud, Appliance AI",
  openGraph: {
    title: "FreeCuli - Zero Cloud. Zero Cost. Absolute Freedom.",
    description: "The commercial ingredient brand for the HFSCA methodology.",
    url: "https://freeculi.com",
    siteName: "FreeCuli",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
