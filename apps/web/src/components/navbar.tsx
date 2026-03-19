"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-2 pointer-events-none">
      <div
        className={cn(
          "relative mx-auto flex items-center justify-between transition-all duration-300 ease-in-out pointer-events-auto h-16",
          isScrolled
            ? "max-w-4xl px-6 md:px-8 bg-background/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg"
            : "max-w-6xl px-6 md:px-8 bg-background/80 backdrop-blur-md border border-transparent rounded-md",
        )}
      >
        <Link href="/" className="text-xl font-bold text-foreground">
          Stealth
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8">
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

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="lg"
              variant="outline"
              className="rounded-md border-none"
              asChild
            >
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button size="lg" className="rounded-md" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          <button
            className="md:hidden relative w-10 h-10 -mr-2 text-foreground focus:outline-none flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu
              className={`absolute w-6 h-6 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0 scale-50 -rotate-90" : "opacity-100 scale-100 rotate-0"}`}
            />
            <X
              className={`absolute w-6 h-6 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-background border border-muted-foreground/20 rounded-2xl shadow-2xl px-6 py-6 flex flex-col gap-6 overflow-hidden">
          <div className="flex flex-col gap-5">
            <Link
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[16px] font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[16px] font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[16px] font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[16px] font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Customers
            </Link>
          </div>

          <div className="w-full h-px bg-white/10"></div>

          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="rounded-full border-white/20 w-full"
              asChild
            >
              <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                Sign In
              </Link>
            </Button>
            <Button className="rounded-md w-full" asChild>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
