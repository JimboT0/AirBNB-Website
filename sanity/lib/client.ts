import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset: "production",
  projectId: "r663rbay",
  useCdn,
  token: "skYd7CLMgeM1JQrroJ4gS9V3xUakOhsvfWLhX0hV9dakXVOSI3Inq40jR4S4wgNBVENeD09ppjtVh1oFZmpXQFbulTvWqHTTk53S9DQTQRI4G0BqyrbvwSlyZDQ6duhJdCl9F2PZHkEAXKXQR9UkFBU9I7w1wJToC8lfS4zWspGk4AxYZ75K"
})

export default client;
