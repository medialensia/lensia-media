import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lensiamedia.com"),

  title: {
    default: "Lensia Media | YouTube Growth Agency",
    template: "%s | Lensia Media",
  },

  description:
    "Premium YouTube growth agency specializing in thumbnails, editing, SEO and channel strategy.",

  keywords: [
    "YouTube Growth",
    "YouTube SEO",
    "Thumbnail Design",
    "Video Editing",
    "Channel Strategy",
    "Brand Identity",
    "Lensia Media",
  ],

  authors: [{ name: "Lensia Media" }],

  openGraph: {
    title: "Lensia Media | YouTube Growth Agency",
    description:
      "Premium YouTube growth agency specializing in thumbnails, editing, SEO and channel strategy.",
    url: "https://lensiamedia.com",
    siteName: "Lensia Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lensia Media — YouTube Growth Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lensia Media | YouTube Growth Agency",
    description:
      "Premium YouTube growth agency specializing in thumbnails, editing, SEO and channel strategy.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}