import Link from 'next/link'
import React from 'react'
import ActivitiesInHero from './activitiesInHero'



export default function hero() {

        return (
            <div className="flex flex-col min-h-[100dvh]">
                <main className="flex-1">
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                                <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                            Discover and Book Unforgettable Activities
                                        </h1>
                                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                            Explore a world of exciting activities and experiences. Book your next adventure with ease.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link
                                            href="/activities"
                                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 dark:bg-white px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                            prefetch={false}
                                        >
                                            Start Booking
                                        </Link>
                                        <Link
                                            href="/shop"
                                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-400 dark:bg-gray-700 px-8 text-sm font-medium text-primary-background shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                            prefetch={false}
                                        >
                                            Shopping
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    src="/capetown.jpg"
                                    width="550"
                                    height="550"
                                    alt="Hero"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square order-1 sm:order-2"
                                />
                            </div>
                        </div>
                    </section>
                   <ActivitiesInHero />
                </main>
            </div>
        )
    }


