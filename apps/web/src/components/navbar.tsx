"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8">
        <Link href="/" className="text-xl font-bold text-foreground">Stealth</Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
          <Link href="#" className="text-[15px] text-foreground hover:text-foreground/80 transition-colors">
            Docs
          </Link>
          <Link href="#" className="text-[15px] text-foreground hover:text-foreground/80 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-[15px] text-foreground hover:text-foreground/80 transition-colors">
            About
          </Link>
          <Link href="#" className="text-[15px] text-foreground hover:text-foreground/80 transition-colors">
            Customers
          </Link>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
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

          <button
            className="md:hidden relative w-10 h-10 -mr-2 text-foreground focus:outline-none flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu 
              className={`absolute w-6 h-6 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 scale-50 -rotate-90' : 'opacity-100 scale-100 rotate-0'}`} 
            />
            <X 
              className={`absolute w-6 h-6 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'}`} 
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-background border border-muted-foreground/20 rounded-2xl shadow-2xl px-6 py-6 flex flex-col gap-6 overflow-hidden">
          <div className="flex flex-col gap-5">
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-medium text-foreground hover:text-foreground/80 transition-colors">
              Docs
            </Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-medium text-foreground hover:text-foreground/80 transition-colors">
              Pricing
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-medium text-foreground hover:text-foreground/80 transition-colors">
              About
            </Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-medium text-foreground hover:text-foreground/80 transition-colors">
              Customers
            </Link>
          </div>
          
          <div className="w-full h-[1px] bg-white/10"></div>
          
          <div className="flex flex-col gap-3">
            <Link
              href="/signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm px-4 py-2.5 rounded-full border border-white/20 text-foreground hover:text-foreground/80 transition-colors text-center w-full focus:outline-none"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm px-4 py-2.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors text-center w-full focus:outline-none"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
