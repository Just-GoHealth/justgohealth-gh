import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { brHendrix } from "../../public/fonts/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Just Go Health",
  description: "Just Go Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brHendrix.variable} bg-white antialiased`}
      >
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
