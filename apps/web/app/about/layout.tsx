import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stealth - /about",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
