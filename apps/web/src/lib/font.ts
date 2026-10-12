import { Lexend, Literata, Funnel_Display } from "next/font/google";

const lexendFont = Lexend({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const funnelDisplayFont = Funnel_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const literataFont = Literata({
  weight: "500",
  subsets: ["latin"],
  style: "italic",
  display: "swap",
});

export const lexend = lexendFont.className;
export const fd = funnelDisplayFont.className;
export const literata = literataFont.className;
