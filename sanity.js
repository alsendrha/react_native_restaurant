import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "b0m80nsh",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

// 이미지 rul 가져오는거
const builder = imageUrlBuilder(client);

export const rulFor = (source) => builder.image(source);

export default client;
