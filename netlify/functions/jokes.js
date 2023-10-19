import { Config, Context } from "@netlify/functions";

export default async (req, context) => {
  return new Response(`Hello World Jokes!`)
}

export const config = {
  path: "/jokes"
}