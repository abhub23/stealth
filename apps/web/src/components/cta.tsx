"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import HeroFlame from "@/components/effects/flame/hero-flame";

export default function CTA() {
  return (
    <section className="relative pt-32 px-0 md:px-6 overflow-x-clip">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-16 mb-4 leading-tight text-foreground px-3 sm:px-6 md:px-0 space-y-2">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%", filter: "blur(2px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.1,
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
                initial={{ y: "100%", filter: "blur(2px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.25,
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
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: 0.6,
              ease: "easeInOut",
              duration: 0.8,
            }}
            className="lg:text-xl text-muted-foreground max-w-xl mb-6 px-6 md:px-0"
          >
            Skip the setup. Skip the boilerplate.<br />Let the agents do the heavy lifting.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: 0.7,
              ease: "easeInOut",
              duration: 0.8,
            }}
            className="flex flex-row items-center gap-4 lg:gap-8 sm:w-auto px-6 md:px-0 relative z-10"
          >
            <Button
              size="lg"
              className="rounded-md h-10 sm:h-12 px-3 sm:px-6 text-[15px] sm:text-base group cursor-pointer"
            >
              Start building
              <ArrowRight className="size-4 sm:size-5 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-md h-10 sm:h-12 px-3 sm:px-6 text-[15px] sm:text-base cursor-pointer"
            >
              Read the Docs
            </Button>
          </motion.div>

          <div className="-mt-[100px] mb-0">
            <HeroFlame />
          </div>

          <div className="w-full max-w-[1000px] my-16 rounded-xl overflow-hidden px-6 md:px-0">
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
