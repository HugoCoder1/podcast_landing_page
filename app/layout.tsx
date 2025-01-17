import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Red_Hat_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Transition from "@/components/animation/Transition";

const monumentExtended = localFont({
  src: "../public/fonts/MonumentExtended-Regular.otf",
  display: "swap", // Option pour éviter les sauts de texte (FOUT)
  variable: "--font-monument-extended", // Nom de la variable CSS pour la police
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
  icons: {
    icon: "/Group 427319719.png",
  },
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
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
