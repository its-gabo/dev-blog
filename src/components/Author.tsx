import Image from "next/image";

import { storyblokEditable } from "@storyblok/react";

interface IAuthorProps {
  blok: {
    name: string;
    avatar: string;
  };
}

export default function Author({ blok }: IAuthorProps) {
  return (
    <div className="flex items-center gap-3" {...storyblokEditable(blok)}>
      <Image
        className="rounded-full"
        width={30}
        height={30}
        src={`${blok.avatar}`}
        alt="author image"
      />
      <p className="text-md font-lora italic">{blok.name}</p>
    </div>
  );
}
