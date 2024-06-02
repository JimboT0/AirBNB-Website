"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="transition-all duration-500 ease-in-out"
    >
      <Icons.sun
        className={`rotate-0 scale-100 dark:-rotate-90 dark:scale-0 ${
          theme === "dark" ? "scale-0" : "scale-100"
        }`}
      />
      <Icons.moon
        className={`absolute rotate-90 dark:rotate-0 dark:scale-100 ${
          theme === "dark" ? "scale-100" : "scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
