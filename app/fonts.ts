import localFont from "next/font/local";

export const benzin = localFont({
    src: [
        { path: "./fonts/BENZIN-MEDIUM.woff2", weight: "500", style: "normal" },
        { path: "./fonts/BENZIN-SEMIBOLD.woff2", weight: "600", style: "normal" },
        { path: "./fonts/BENZIN-BOLD.woff2", weight: "700", style: "normal" },
        { path: "./fonts/BENZIN-EXTRABOLD.woff2", weight: "800", style: "normal" },
    ],
});