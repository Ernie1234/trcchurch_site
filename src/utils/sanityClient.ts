import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const config: ClientConfig = {
  projectId: "a36g7ho3", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2022-03-07", // use current date (YYYY-MM-DD) to target the latest API version
  token: import.meta.env.VITE_SANITY_TOKEN, //
};
export const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
