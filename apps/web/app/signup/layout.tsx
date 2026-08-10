import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stealth - /sign-up",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}