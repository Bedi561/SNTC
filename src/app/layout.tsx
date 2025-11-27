import type { Metadata } from "next";
import "./globals.css";
import { plusJakartaSans } from "../font"; // use ONLY Plus Jakarta Sans

export const metadata: Metadata = {
  title: "Kruze Cabs",
  description: "Premium mobility, elevated with care, comfort, and attention to detail—every ride, every time.",
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
