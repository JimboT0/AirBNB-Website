import { Image, PortableTextBlock } from "sanity"

interface InventoryRoom {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  content: PortableTextBlock[]
  sku: string
}

export interface SanityRoom extends Omit<InventoryRoom, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryRoom[] = [
 
  
]
