import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityPost } from "@/config/post-inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { BlogGrid } from "@/components/blog-grid"
import { BlogSort } from "@/components/blog-sort"
import React from "react"
import Booking from "@/components/booking"

interface Props {
  searchParams: {
    date?: string
    price?: string
    color?: string
    category?: string
    size?: string
    search?: string
  }
}

export default async function Page({ searchParams }: Props) {

  const { date = 'desc', price, color, category, size, search } = searchParams
  const priceOrder = price ? `| order(price ${price})` : ""
  const dateOrder = date ? `| order(_createdAt ${date})` : ""
  const order = `${priceOrder} ${dateOrder}`

  const postFilter = `_type == "post"`
  const colorFilter = color ? `&& "${color}" in colors` : ""
  const categoryFilter = category ? `&& "${category}" in categories` : ""
  const sizeFilter = size ? `&& "${size}" in sizes` : ""
  const searchFilter = search ? `&& name match "${search}"` : ""
  const filter = `*[${postFilter}${colorFilter}${categoryFilter}${sizeFilter}${searchFilter}]`


  const post = await client.fetch<SanityPost[]>(
    groq` ${filter} ${order} {
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    content,
    "slug": slug.current
    }`)

  return (
    <div>

      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {post.length} result{post.length === 1 ? "" : "s"}
            </h1>
            <BlogSort />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Posts
            </h2>
            <div className="grid-cols-1">
              <BlogGrid posts={post} />
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}
