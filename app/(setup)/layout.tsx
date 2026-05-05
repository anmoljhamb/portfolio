import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { clsx } from "clsx";
import { GlobalSchemaMarkup } from "@/app/components/SchemaMarkup";
import { FULL_NAME, BIO_SHORT, SITE_URL } from "@/app/data/about";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FULL_NAME} — Software Engineer | Portfolio`,
    template: `%s | ${FULL_NAME}`,
  },
  description: BIO_SHORT,
  keywords: [
    "Anmol Jhamb",
    "software engineer",
    "full stack developer",
    "portfolio",
    "Google Code-in winner",
    "ICPC regionalist",
    "React developer",
    "Python developer",
    "TypeScript",
    "ConsultAdd",
    "competitive programming",
    "web developer India",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${FULL_NAME} — Portfolio`,
    title: `${FULL_NAME} — Software Engineer | Portfolio`,
    description: BIO_SHORT,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${FULL_NAME} — Software Engineer`,
    description: BIO_SHORT,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GlobalSchemaMarkup />
      </head>
      <body
        className={clsx(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
