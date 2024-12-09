import { storyblokEditable } from "@storyblok/react";
import PostLink from "./PostLink";

interface IFeaturedPosts {
  blok: {
    posts: [
      {
        slug: string;
        uuid: string;
        name: string;
      }
    ];
  };
}

export default function FeaturedPosts({ blok }: IFeaturedPosts) {
  return (
    <div className="flex flex-col gap-4" {...storyblokEditable(blok)}>
      <h2 className="text-xl font-montserrat">Checkout our posts</h2>
      {blok.posts.map((post) => {
        console.log(post);
        return <PostLink key={post.uuid} slug={post.slug} name={post.name} />;
      })}
    </div>
  );
}
