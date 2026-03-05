import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Інтернет-магазин наборів для самозамісу рідин Punch",
  description: "Магазин Punch пропонує недорого набори для самозамісу ✓ Великий вибір ✓ Якісний товар ✓ Офіційна гарантія ✈ Швидка доставка по Україні ☎"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
