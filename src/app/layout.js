import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FreeCuli - Universal Zero-Cloud Hardware Methodology",
  description: "FreeCuli is the commercial certification brand for the ZC-CORE methodology. The trademarked seal of quality and zero-cloud dependency for AIoT and Edge AI hardware manufacturers.",
  keywords: ["FreeCuli", "ZC-CORE", "AIoT", "Edge AI", "Zero Cloud", "Hardware Trust Boundary", "Appliance AI", "Data Diode", "Semantic Routing"],
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
    title: "FreeCuli - Universal Zero-Cloud Hardware Methodology",
    description: "The commercial certification brand for the ZC-CORE methodology. Absolute privacy and physical zero-cloud compliance for AIoT and Edge AI hardware manufacturers.",
    url: "https://freeculi.com",
    siteName: "FreeCuli",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "FreeCuli - Universal Zero-Cloud Hardware Methodology",
    description: "The commercial certification brand for the ZC-CORE methodology.",
  },
  verification: {
    google: '8XPi0nf_PN-jeCRfBZA3lmTEhY_A4SW8U6PkdwZCpMs',
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
