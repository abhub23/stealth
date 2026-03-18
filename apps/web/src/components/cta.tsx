'use client'

import { ArrowRight } from "lucide-react";
import DecryptedText from "./DecryptedText";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden px-6">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
          
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb leading-tight text-foreground">
              <DecryptedText text={"Build your Agents, Confidently"} />
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mb-6">
              Stop writing boilerplate. Let our agents handle.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
              <Button size="lg" className="rounded-md h-12 px-6 text-base group cursor-pointer">
                Get Started
                <ArrowRight className="size-5 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
              </Button>
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
          
      </div>
    </section>
  );
}
