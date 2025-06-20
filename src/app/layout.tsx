import { TempoInit } from "@/components/tempo-init";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { CrosshairProvider } from "@/components/providers/crosshair-provider";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://integraserve247.co.za'),
  title: "IntegraServe 24/7 - Professional Security Training Academy",
  description: "Leading security and firearm training academy in South Africa. PSIRA certified courses, professional instructors, and guaranteed job placement.",
  keywords: "security training, firearm training, PSIRA, South Africa, security academy, professional training",
  authors: [{ name: "IntegraServe 24/7" }],
  openGraph: {
    title: "IntegraServe 24/7 - Professional Security Training Academy",
    description: "Leading security and firearm training academy in South Africa. PSIRA certified courses, professional instructors, and guaranteed job placement.",
    url: "https://integraserve247.co.za",
    siteName: "IntegraServe 24/7",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IntegraServe 24/7 Security Training Academy",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntegraServe 24/7 - Professional Security Training Academy",
    description: "Leading security and firearm training academy in South Africa.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CrosshairProvider>
            {children}
            <TempoInit />
          </CrosshairProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
