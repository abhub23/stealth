"use client";
import { motion } from "motion/react";
import { Subheading } from "./text";
import { clsx } from "cn";

export function BentoCard({
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-white shadow-xs ring-1 ring-black/5",
        // dark mode only — matches the page so the fade blends seamlessly
        "dark:bg-background dark:shadow-none dark:ring-white/10",
      )}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-linear-to-b from-white to-50% dark:from-background" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-linear-to-t from-white to-50% dark:from-background" />
        )}
      </div>
      <div className="relative p-10">
        <Subheading as="h3" className="dark:text-neutral-400">
          {eyebrow}
        </Subheading>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 dark:text-neutral-50">
          {title}
        </p>
        <p className="mt-2 max-w-150 text-sm/6 text-gray-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
