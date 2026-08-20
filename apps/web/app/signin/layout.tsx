import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stealth - /sign-in",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
