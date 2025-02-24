"use client";

import localFont from "next/font/local";
import "./globals.css";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMSWReady, setIsMSWReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      import("../../mocks/browser")
        .then(({ worker }) => worker.start())
        .then(() => setIsMSWReady(true))
        .catch((err) => console.error("MSW Worker failed to start:", err));
    } else {
      setIsMSWReady(true); // Allow normal rendering outside development
    }
  }, []);

  if (!isMSWReady) {
    return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <p>Loading...</p>
        </body>
      </html>
    ); // Prevent API requests before MSW is ready
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
