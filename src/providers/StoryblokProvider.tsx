"use client";

import { apiPlugin, storyblokInit } from "@storyblok/react";
import React from "react";

interface IStoryblokProviderProps {
  children: React.ReactNode;
}

export const StoryblokProvider: React.FC<IStoryblokProviderProps> = ({
  children,
}) => {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    apiOptions: { https: true },
    components: {},

    enableFallbackComponent: true,
  });

  return children;
};
