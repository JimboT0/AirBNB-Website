
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
            <div className="p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Activity"
                    className="rounded-t-xl object-cover w-full aspect-[3/2]"
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Skydiving</h3>
                    <p className="text-muted-foreground">
                        Experience the thrill of free-falling from thousands of feet in the air.
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
            <div className="p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Activity"
                    className="rounded-t-xl object-cover w-full aspect-[3/2]"
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Cooking Class</h3>
                    <p className="text-muted-foreground">Learn to cook delicious meals from expert chefs.</p>
                    <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Book Now
                    </Link>
                </div>
            </div>
            <div className="p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Activity"
                    className="rounded-t-xl object-cover w-full aspect-[3/2]"
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Hiking Tour</h3>
                    <p className="text-muted-foreground">Explore stunning natural landscapes on a guided hike.</p>
                    <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Book Now
                    </Link>
                </div>
            </div>
            <div className="p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Activity"
                    className="rounded-t-xl object-cover w-full aspect-[3/2]"
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Kayaking</h3>
                    <p className="text-muted-foreground">Paddle through serene waterways and explore hidden coves.</p>
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
