import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import { components } from "@/lib/storyblokComponents";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: { https: true },
  components,

  enableFallbackComponent: true,
});
