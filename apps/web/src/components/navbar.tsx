"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-8">
        <Link href="/" className="text-xl font-bold text-foreground">Stealth</Link>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="text-[15px] text-foreground hover:text-foreground/80 transition-colors"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="text-[15px] text-foreground hover:text-foreground/80 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-[15px] text-foreground hover:text-foreground/80 transition-colors"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-[15px] text-foreground hover:text-foreground/80 transition-colors"
          >
            Customers
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="text-sm px-3 py-[6px] rounded-full border border-white/20 text-foreground hover:text-foreground/80 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-sm px-3 py-[6px] rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
