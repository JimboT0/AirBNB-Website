import { defineField, defineType } from "sanity";

export const post = defineType({
    name: "post",
    title: "Posts",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"

        }),
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{type: 'image'}]
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{type: 'string'}]
        },
        {
            name: "sizes",
            title: "Sizes",
            type: "array",
            of: [{type: 'string'}]
        },
        {
            name: "colors",
            title: "Colors",
            type: "array",
            of: [{type: 'string'}]
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{type: "block"}]
        },
        {
            name: "sku",
            title: "SKU",
            type: "string",
        },
        {
            name: "currency",
            title: "Currency",
            type: "string",
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        }
    ]

})