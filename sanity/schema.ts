import { type SchemaTypeDefinition } from "sanity"
import { product } from "./schemas/product-schema"
import { post } from "./schemas/post-schema"
import { room } from "./schemas/room-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, post, room], 
}
