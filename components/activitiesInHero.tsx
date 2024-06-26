
"use client"

import Link from 'next/link'
import React from 'react'

import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { XCircle } from "lucide-react"

import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

interface Props {
  products: SanityProduct[]
}

export default function activitiesInHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className=" bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                    src="/adventure.jpg"
                    width="300"
                    height="200"
                    alt="Activity"
                    className="rounded-t-xl object-cover w-full aspect-[3/2]"
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Adventure</h3>
                    <p className="text-muted-foreground">
                        Experience the scenic outdoors of Cape Town.
                    </p>
                    <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Book Now
                    </Link>
                </div>
            </div>
            <div className=" bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                    src="/dinecapetown.jpg"
                    width="300"
                    height="200"
                    alt="Activity"
                    className="rounded-t-xl object-cover w-full aspect-[3/2] border"
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Dining</h3>
                    <p className="text-muted-foreground">Visit the best restaurants and wine farms in the cape</p>
                    <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Book Now
                    </Link>
                </div>
            </div>
            <div className=" bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                    src="/staycapetown.jpg"
                    width="300"
                    height="200"
                    alt="Activity"
                    className="rounded-t-xl object-cover w-full aspect-[3/2]"
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Accomodation</h3>
                    <p className="text-muted-foreground">Find a place to stay in the heart of the city or a retreat in the winelands.</p>
                    <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Book Now
                    </Link>
                </div>
            </div>
            <div className=" bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                    src="/jeeprent.jpg"
                    width="300"
                    height="200"
                    alt="Activity"
                    className="rounded-t-xl object-cover w-full aspect-[3/2]"
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Travel</h3>
                    <p className="text-muted-foreground">Explore the Western Cape however suits you best.</p>
                    <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
