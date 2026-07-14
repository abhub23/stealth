"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import { literata } from "@/lib/font";

export default function CTA() {
  return (
    <section className="relative pt-32 px-0 md:px-6">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-16 mb-4 leading-tight text-foreground px-3 sm:px-6 md:px-0 space-y-2">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0,
                  ease: "easeInOut",
                  duration: 0.6,
                }}
                className="block whitespace-nowrap"
              >
                Agents that <span className="text-orange-800">outperform</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.10,
                  ease: "easeInOut",
                  duration: 0.6,
                }}
                className="block whitespace-nowrap"
              >
                your entire roadmap.
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            className="text-lg text-muted-foreground max-w-xl mb-6 px-6 md:px-0"
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
            className="flex flex-col sm:flex-row items-center gap-4 sm:w-auto px-6 md:px-0"
          >
            <Button
              size="lg"
              className="rounded-md h-12 px-6 text-base group cursor-pointer"
            >
              Get Started
              <ArrowRight className="size-5 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
            </Button>
          </motion.div>

          {/* <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground">
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
          </div> */}

          <div className="w-full max-w-[1000px] my-16 lg:mt-32 rounded-xl overflow-hidden px-6 md:px-0">
            <Image
              src="/scene.jpg"
              alt="Hero"
              width={1000}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
