import { storyblokEditable } from "@storyblok/react";

interface IHeaderProps {
  blok: {
    title: string;
    text: string;
  };
}

export default function BlogSection({ blok }: IHeaderProps) {
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="text-lg font-montserrat mb-3">{blok.title}</h2>
      <p className="text-md font-hind-madurai">{blok.text}</p>
    </div>
  );
}
