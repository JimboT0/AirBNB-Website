import { Image, PortableTextBlock } from "sanity"

interface InventoryRoom {
  id: string
  name: string
  email: string
  image: string
  images: string[]
  button1: string,
  button1link: string,
  button2: string,
  button2link: string,
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
