import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const monumentExtended = localFont({
  src: "../public/fonts/MonumentExtended-Regular.otf",
  display: "swap",
  variable: "--font-monument-extended",
});
const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const metadata: Metadata = {
  title: "Podcast Landing Page",
  description: "Podcast Landing Page",
  // icons: {
  //   icon: "/Group 427319719.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} ${poppins.variable} ${monumentExtended.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
