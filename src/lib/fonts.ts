import { DM_Sans, Space_Mono } from "next/font/google";

export const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = DM_Sans({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const fontMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});
