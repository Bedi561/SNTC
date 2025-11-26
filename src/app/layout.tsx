import type { Metadata } from "next";
import "./globals.css";
import { plusJakartaSans } from "../font"; // use ONLY Plus Jakarta Sans

export const metadata: Metadata = {
  title: "SunTrans Movers",
  description: "Logistics solutions simplified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} ${plusJakartaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
