import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Providers } from "@/components/providers"
import { SiteBlob } from "@/components/site-blob"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { product } from "@/sanity/schemas/product-schema"
import CaptureLandingPageURL from "@/components/captureLandingPageURL"
import Analytics from '@/components/analytics';


export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.name,
  icons: {
    icon: '/favicon.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
          <CaptureLandingPageURL />
            <div className="relative flex min-h-screen flex-col ">
              <Analytics />
              
              <SiteHeader />
              <SiteBlob />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
