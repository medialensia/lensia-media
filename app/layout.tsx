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
    default: "Lensia Media | Growth Together",
    template: "%s | Lensia Media",
  },

  description:
    "Premium YouTube growth agency specializing in thumbnail design, SEO, branding and channel strategy.",

  keywords: [
    "YouTube Growth",
    "YouTube SEO",
    "Thumbnail Design",
    "Brand Identity",
    "Channel Strategy",
    "Lensia Media",
  ],

  authors: [{ name: "Lensia Media" }],

  openGraph: {
    title: "Lensia Media",
    description:
      "Helping creators grow through strategy, thumbnails and optimization.",
    url: "https://lensiamedia.com",
    siteName: "Lensia Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lensia Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lensia Media",
    description:
      "Helping creators grow through strategy, thumbnails and optimization.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico", apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}