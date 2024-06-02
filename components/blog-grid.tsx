"use client"

import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { XCircle } from "lucide-react"


import { SanityPost } from "@/config/post-inventory"


interface Props {
  posts: SanityPost[]
}

export function BlogGrid({ posts }: Props) {



  if (posts.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:col-span-3 lg:gap-x-8 relative overflow-hidden">
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug}`} className="group text-sm border-2 border-gray-200 dark:border-gray-800  rounded-xl">
          <div className="w-full overflow-hidden rounded-lg  border-2 border-white dark:border-gray-800 hover:opacity-50"
            style={{ backgroundImage: `url(${urlForImage(post.images[0]).url()})` }}>
            <div className=" p-4">
              
              <h1 className="text-white font-extrabold p-10 h-40">{post.name}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}








