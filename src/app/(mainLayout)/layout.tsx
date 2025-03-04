import type { Metadata } from "next";
import TopBanner from "@/components/Custom/TopBanner";
import AppFooter from "@/components/Custom/AppFooter";
import { Suspense } from "react";
import Loading from "@/components/Custom/Loading";


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
    <div
      className={`antialiased flex items-center justify-center`}
    >
      <div className="md:max-w-2xl  w-full border">
        <Suspense fallback={<Loading />}>
          <TopBanner />
          <div className="min-h-[calc(100vh-190px)] overflow-y-scroll"> {children}</div>
          <AppFooter />
        </Suspense>
      </div>
    </div>

  );
}
