import { getStoryblokApi } from "@/lib/Storyblok";
import { StoryblokUpdateProvider } from "@/providers/StoryblokUpdateProvider";

import { ISbStoryData } from "@storyblok/react/rsc";

interface IPageProps {
  slug: string;
}

export default async function Page({ slug }: IPageProps) {
  const story = await getPageContent(slug);

  return (
    <main className="max-w-screen-lg w-4/5 m-auto mt-12">
      <StoryblokUpdateProvider initialStory={story} />
    </main>
  );
}

const getPageContent = async (slug: string) => {
  return (
    await getStoryblokApi().get(`cdn/stories/${slug}`, { version: "draft" })
  ).data.story as ISbStoryData;
};
