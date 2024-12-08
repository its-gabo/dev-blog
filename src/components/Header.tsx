import Image from "next/image";

import { storyblokEditable } from "@storyblok/react";

interface IHeaderProps {
  blok: {
    title: string;
    subtitle: string;
    logo: string;
  };
}

export default function Header({ blok }: IHeaderProps) {
  return (
    <header className="flex gap-4 items-center" {...storyblokEditable(blok)}>
      <Image
        width={60}
        height={60}
        src={`https:${blok.logo}`}
        alt="header image"
      />
      <div>
        <h1 className="text-2xl font-montserrat">{blok.title}</h1>
        <p className="text-lg font-lora">{blok.subtitle}</p>
      </div>
    </header>
  );
}
