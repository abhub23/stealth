'use client'

import { ArrowRight } from "lucide-react";
import DecryptedText from "./DecryptedText";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden px-6">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-foreground">
              <DecryptedText text={"Supercharge your workflow with\nnext-generation AI"} />
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12">
              Stop writing boilerplate. Let our autonomous agents handle the repetitive tasks so you can focus on building extraordinary products.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
              <button className="h-12 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium transition-colors flex items-center justify-center gap-2 group cursor-pointer">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Right Placeholder Column (For Future Component) */}
          <div className="w-full flex justify-center lg:justify-end">
            {/* The right side is intentionally left empty for the user to add a component later */}
          </div>
          
        </div>
      </div>
    </section>
  );
}
