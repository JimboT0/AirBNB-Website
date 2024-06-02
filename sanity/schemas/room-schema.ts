import { defineField, defineType } from "sanity";

export const room = defineType({
    name: "room",
    title: "Room",
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
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{type: 'image'}]
        },
        {
            name: "button1",
            title: "Button1",
            type: "string",
        },
        {
            name: "button1link",
            title: "Button1link",
            type: "string",
        },
        {
            name: "button2",
            title: "Button2",
            type: "string",
        },
        {
            name: "button2link",
            title: "Button2link",
            type: "string",
        },

        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{type: "block"}],
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
