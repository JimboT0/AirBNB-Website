import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityPost} from "@/config/post-inventory"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { BlogPostInfo } from "@/components/blog-post-info"
import { BlogPostGallery } from "@/components/blog-post-gallery"
import Booking from "@/components/booking"
import { Button } from "@/components/ui/button"

interface Props {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const post = await client.fetch<SanityPost>(groq`*[_type == "post" && slug.current == "${params.slug}"][0] {
    _id,
    _createdAt,
    "id": _id,
    name,
    sku,
    images,
    price,
    currency,
    content,
    sizes,
    categories,
    colors,
    "slug": slug.current
    

  }`
  )
  // console.log(post)

  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Product gallery */}
          <BlogPostGallery post={post}/>
          {/* Product info */}
          <BlogPostInfo post={post}/>
          
        </div>
      </div>
    </main>
  )
}
