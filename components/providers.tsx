"use client"

import { CartProvider } from "use-shopping-cart"
import { Toaster } from 'sonner'
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster position='top-right' richColors expand closeButton />
      <TailwindIndicator />
      </ThemeProvider>

  )
}

