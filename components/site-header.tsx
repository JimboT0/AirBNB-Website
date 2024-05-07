"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Edit, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { ThemeToggle } from "@/components/theme-toggle"
import NavBar from "@/components/navbar"
import { SanityRoom } from "@/config/room-inventory"

interface Props {
  room: SanityRoom
}

export function SiteHeader({ room }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultSearchQuery = searchParams.get('search') ?? ""

  if (pathname.startsWith("/studio")) return null

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get("search")
    router.replace(`/shop/?search=${searchQuery}`)
  }

  function onBlogSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get("search")
    router.replace(`/blog/?search=${searchQuery}`)
  }

  return (
    <header className="sticky top-0 z-40  border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 md:px-6 sm:space-x-0">
        <div className="order-2 md:order-1">
          <div className="pl-5 items-center">
            <p>fuck</p>
          </div>
        </div>
        {pathname.startsWith('/shop') || pathname.startsWith('/blog') ? (
          <div className="order-1 md:order-2">
            <form onSubmit={pathname.startsWith('/shop') ? onSubmit : onBlogSubmit} className="hidden items-center lg:inline-flex">
              <Input
                id="search"
                name="search"
                type="search"
                autoComplete="off"
                placeholder={pathname.startsWith('/shop') ? "Search products..." : "Search Posts..."}
                className="h-9 lg:w-[300px]"
                defaultValue={defaultSearchQuery}
              />
            </form>
          </div>
        ) : (
          <div className="order-1 md:order-2">
            <NavBar />
          </div>
        )}


        <div className="flex items-center space-x-1 order-3">
          <Link href="/cart">
          </Link>
          <ThemeToggle />

        </div>
      </div>
    </header>
  )
}
