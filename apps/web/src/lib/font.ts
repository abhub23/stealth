import { Lexend, Literata } from "next/font/google";

const lexend_font = Lexend({
  weight: "300",
});

export const literataFont = Literata({
  weight: '500',
  subsets: ["latin"],
  style: "italic",
  display: "swap",
});

export const lexend = lexend_font.className;
export const literata = literataFont.className;
