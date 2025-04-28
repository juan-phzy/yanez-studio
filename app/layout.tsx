// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Yanez Studio",
    description: "Photo & video by drone and camera",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="antialiased bg-white text-black dark:bg-black dark:text-white overflow-x-hidden min-h-screen">
                {children}
            </body>
        </html>
    );
}
