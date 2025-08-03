import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { clsx } from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anmol Jhamb's Portfolio",
  description:
    "Welcome to the digital world of Anmol Jhamb. Dive into my journey as a developer and explore a collection of my latest web development projects and creations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
