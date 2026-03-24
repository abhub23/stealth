"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full w-9 h-9 bg-transparent hover:bg-black/5 dark:hover:bg-white/5"
    >
      {theme === "dark" ? 
      <Sun className="size-4"/> : 
      <Moon className="size-4" />
      }
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
