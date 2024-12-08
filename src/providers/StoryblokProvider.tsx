"use client";

import React from "react";

import { getStoryblokApi } from "@/lib/Storyblok";

interface IStoryblokProviderProps {
  children: React.ReactNode;
}

export const StoryblokProvider: React.FC<IStoryblokProviderProps> = ({
  children,
}) => {
  getStoryblokApi();

  return children;
};
