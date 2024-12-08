import { getStoryblokApi } from "@/lib/Storyblok";

import { SbBlokData, StoryblokServerComponent } from "@storyblok/react/rsc";

interface IPageProps {
  slug: string;
}

export default async function Page({ slug }: IPageProps) {
  const blocks = await getPageContent(slug);

  return (
    <main className="max-w-screen-lg w-4/5 m-auto mt-12">
      {blocks.map((block) => (
        <StoryblokServerComponent key={block._uid} blok={block} />
      ))}
    </main>
  );
}

const getPageContent = async (slug: string) => {
  return (
    await getStoryblokApi().get(`cdn/stories/${slug}`, { version: "draft" })
  ).data.story.content.body as SbBlokData[];
};
