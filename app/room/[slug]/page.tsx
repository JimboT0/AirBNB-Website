import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityRoom} from "@/config/room-inventory"
import { RoomGallery } from "@/components/room-gallery"
import { ProductInfo } from "@/components/product-info"
import Booking from "@/components/booking"
import Feedback from "@/components/feedback"

interface Props {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const room  = await client.fetch<SanityRoom>(groq`*[_type == "room" && slug.current == "${params.slug}"][0] {
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
  console.log(room)

  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20  lg:gap-x-12">
          {/* Product gallery */}
          <RoomGallery room={room}/>


        </div>
        <Feedback />
      </div>
    </main>
  )
}
