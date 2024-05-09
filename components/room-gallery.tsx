"use client"

import { useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

import { SanityRoom } from "@/config/room-inventory"
import { shimmer, toBase64 } from "@/lib/image"
import Link from "next/link"
import { PortableText } from '@portabletext/react';

interface Props {
  room: SanityRoom
}

export function RoomGallery({ room }: Props) {
  const [selectedImage, setSelectedImage] = useState(0)
  return (



    <section className="w-full py-4 md:py-6 lg:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">

          <Image
            priority
            src={urlForImage(room.images[selectedImage]).url()}
            alt={`Main ${room.name} Image`}
            width={600}
            height={750}
            className="h-full w-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(600, 750)
            )}`}
          />

          <div className="flex flex-col justify-center space-y-4 px-2">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {room.name}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                <PortableText value={room.content} />
              </p>
            </div>
          </div>


          <div className="flex flex-col gap-2 md:flex-row">
            {room.button2link !== null && (
              <Link
                className="inline-flex h-10 items-center justify-center text-white dark:text-black rounded-md border dark:border-gray-200 dark:bg-white px-8 text-sm font-medium shadow-sm transition-colors dark:hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 dark:focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-gray-950 hover:bg-gray-800 dark:hover:text-gray-50 focus-visible:ring-gray-300 sm:w-full"
                href={room.button1link}
              >
                {room.button1}
              </Link>
            )}
            {room.button2link !== null && (
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 sm:w-full"
                href={room.button2link}
              >
                {room.button2}
              </Link>
            )}
          </div>





        </div>

      </div>



    </section>

  )
}

