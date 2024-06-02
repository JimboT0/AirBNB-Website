import Link from 'next/link'
import React from 'react'



export default function hero() {
    return (

        <section className="w-full py-4 md:py-6 lg:py-12">
<<<<<<< HEAD
            {/* <div className="container px-4 md:px-6">
=======
            <div className="container px-4 md:px-6">
>>>>>>> main
                <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
                    <img
                        alt="Airbnb"
                        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                        height="650"
                        src="/airbnb-cape-town.png"
                        width="650"
                    />
                    <div className="flex flex-col justify-center space-y-4 md:pl-10 pl-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Welcome to 1st street bnb!
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                We are excited to have you.
                                Please make use of our site to view, book activities, shop online or leave a review!
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 sm:w-full"
                                href="/activities"
                            >
                                Explore Activities
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 sm:w-full"
                                href="/shop"
                            >
                                Online Shopping
                            </Link>
                        </div>
                        <br />

                    </div>



                </div>

            </div>

<<<<<<< HEAD
 */}
=======

>>>>>>> main

        </section>


    )
}


