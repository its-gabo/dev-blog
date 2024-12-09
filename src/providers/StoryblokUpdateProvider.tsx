"use client";

import { useStoryblokState } from "@storyblok/react";
import {
  ISbStoryData,
  SbBlokData,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

interface StoryblokUpdaterProps {
  initialStory: ISbStoryData;
}

export const StoryblokUpdateProvider = ({
  initialStory,
}: StoryblokUpdaterProps) => {
  const story = useStoryblokState(initialStory);

  return (
    <>
      {story?.content.body.map((block: SbBlokData) => (
        <StoryblokServerComponent key={block._uid} blok={block} />
      ))}
    </>
  );
};
