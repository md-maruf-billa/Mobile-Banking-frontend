import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/Custom/TopBanner";
import AppFooter from "@/components/Custom/AppFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CashaGo",
  description: "This is a simple MFS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center justify-center`}
      >
        <div className="md:max-w-2xl  w-full border">
          <TopBanner />
          <div className="min-h-[calc(100vh-190px)] overflow-y-scroll"> {children}</div>
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
