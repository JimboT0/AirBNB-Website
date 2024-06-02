
import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schema"


export default defineConfig({
  basePath: "/studio",
  projectId: "r663rbay",
  dataset: 'production',

  schema,
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
