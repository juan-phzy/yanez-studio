// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { LenisWrapper } from "@/components/layout/LenisWrapper";

export const metadata: Metadata = {
  title: "Yanez Studio",
  description: "Luxury Drone & Ground Photography | Yanez Studio",
  keywords: ["drone", "photography", "videography", "luxury real estate", "events", "Yanez Studio"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black dark:bg-black dark:text-white overflow-x-hidden min-h-screen">
        <LenisWrapper>
          {children}
        </LenisWrapper>
      </body>
    </html>
  );
}
