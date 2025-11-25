import localFont from "next/font/local";

export const qurova = localFont({
  src: [
    { path: "/fonts/QurovaDEMO-Light-BF67a5c6380ebd4.otf", weight: "300", style: "normal" },
    { path: "/fonts/QurovaDEMO-Regular-BF67a5c637a5dc9.otf", weight: "400", style: "normal" },
    { path: "/fonts/QurovaDEMO-Medium-BF67a5c6382651c.otf", weight: "500", style: "normal" },
    { path: "/fonts/QurovaDEMO-SemiBold-BF67a5c637bcd0b.otf", weight: "600", style: "normal" },
    { path: "/fonts/QurovaDEMO-Bold-BF67a5c637eed62.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-qurova",
  display: "swap",
});
