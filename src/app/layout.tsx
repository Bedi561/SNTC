import type { Metadata } from "next";
import "./globals.css";
import { qurova } from "../font"; // import your local font

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
        className={`${qurova.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
