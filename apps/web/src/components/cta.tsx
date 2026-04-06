"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { literata } from "@/lib/font";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden px-6">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight text-foreground"
          >
            Build your Agents,{" "}
            <span className={`relative inline-block ${literata} px-1`}>
              Confidently
              <svg
                className="absolute w-[102%] h-[0.4em] -bottom-[0.1em] -left-[1%] text-primary/80 z-[-1] drop-shadow-sm"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 14 C 15 16, 30 12, 50 13 C 70 14, 85 11, 98 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            className="text-lg text-muted-foreground max-w-xl mb-6"
          >
            Stop writing boilerplate. Let our agents handle.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2"
          >
            <Button
              size="lg"
              className="rounded-md h-12 px-6 text-base group cursor-pointer"
            >
              Get Started
              <ArrowRight className="size-5 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
            </Button>
          </motion.div>

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
