import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { brHendrix } from "../../public/fonts/fonts";

import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
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
        className={`${inter.variable} ${brHendrix.variable} bg-white antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
