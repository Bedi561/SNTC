import localFont from "next/font/local";

export const plusJakartaSans = localFont({
  src: [
    // Extra Light (200)
    {
      path: "/fonts/PlusJakartaSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/PlusJakartaSans-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    // Light (300)
    {
      path: "/fonts/PlusJakartaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/PlusJakartaSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    // Regular (400 - PlusJakartaSans-Italic.ttf is the only regular one uploaded)
    // Assuming the file named 'PlusJakartaSans-Italic.ttf' is meant for regular weight italic
    {
      path: "/fonts/PlusJakartaSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    // Medium (500)
    {
      path: "/fonts/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    // SemiBold (600 - No SemiBold file was uploaded, skipping)

    // Bold (700)
    {
      path: "/fonts/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/PlusJakartaSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    // Extra Bold (800)
    {
      path: "/fonts/PlusJakartaSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/fonts/PlusJakartaSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});