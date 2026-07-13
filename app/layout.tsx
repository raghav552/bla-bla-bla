import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thewebgrowth.in"),
  title: {
    default: "WebGrowth | Premium Digital Growth Agency",
    template: "%s | WebGrowth",
  },
  description:
    "WebGrowth helps ambitious brands launch premium websites, growth systems, and high-converting digital experiences.",
  applicationName: "WebGrowth",
  keywords: [
    "digital growth agency",
    "website design",
    "SEO",
    "content systems",
    "performance marketing",
  ],
  alternates: {
    canonical: "https://www.thewebgrowth.in",
  },
  openGraph: {
    title: "WebGrowth | Premium Digital Growth Agency",
    description:
      "WebGrowth helps ambitious brands launch premium websites, growth systems, and high-converting digital experiences.",
    url: "https://www.thewebgrowth.in",
    siteName: "WebGrowth",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "WebGrowth brand preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebGrowth | Premium Digital Growth Agency",
    description:
      "WebGrowth helps ambitious brands launch premium websites, growth systems, and high-converting digital experiences.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f5f7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
