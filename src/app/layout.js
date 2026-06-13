import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FreeCuli - Zero Cloud. Zero Cost. Absolute Freedom.",
  description: "FreeCuli is the commercial ingredient brand for the HFSCA methodology. The trademarked seal of quality and zero-cloud dependency for smart kitchen manufacturers.",
  keywords: ["FreeCuli", "HFSCA", "Smart Kitchen", "Edge AI", "Zero Cloud", "Appliance AI", "Cooking Copilot", "On-device AI", "Semantic Routing"],
  authors: [{ name: "Yemek AI Engineering", url: "https://yemekyarismasi.com" }],
  creator: "Yemek AI Engineering",
  publisher: "FreeCuli",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://freeculi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FreeCuli - Zero Cloud. Zero Cost. Absolute Freedom.",
    description: "The commercial ingredient brand for the HFSCA methodology. Absolute privacy and zero-cost scaling for smart kitchen manufacturers.",
    url: "https://freeculi.com",
    siteName: "FreeCuli",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "FreeCuli - Zero Cloud. Zero Cost. Absolute Freedom.",
    description: "The commercial ingredient brand for the HFSCA methodology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
