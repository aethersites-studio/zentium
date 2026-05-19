import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { MotionProvider } from "@/components/motion-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zentiumhq.com"),
  title: {
    default: "Zentium | SEO Growth Partner for Law Firms",
    template: "%s | Zentium",
  },
  description:
    "Zentium helps family law firms attract qualified consultations, dominate local search, and convert more visitors into retained cases. Specialized SEO built exclusively for law firms.",
  keywords: [
    "law firm SEO",
    "family law SEO",
    "legal SEO agency",
    "local SEO for lawyers",
    "law firm marketing",
    "intake optimization",
    "Google Business Profile optimization",
  ],
  authors: [{ name: "Zentium" }],
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zentiumhq.com",
    siteName: "Zentium",
    title: "Zentium | SEO Growth Partner for Law Firms",
    description:
      "Specialized SEO and intake optimization for family law firms. Retained cases, not just rankings.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentium | SEO Growth Partner for Law Firms",
    description:
      "Specialized SEO and intake optimization for family law firms.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zentium",
  url: "https://zentiumhq.com",
  description:
    "Specialized SEO and digital growth partner for family law firms.",
  serviceType: "SEO Agency",
  areaServed: "US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <MotionProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyCTA />
        </MotionProvider>
      </body>
    </html>
  );
}
