import Link from "next/link";

interface IPostLinkProps {
  slug: string;
  name: string;
}

export default function PostLink({ slug, name }: IPostLinkProps) {
  return (
    <Link className="bg-slate-800 px-3 py-2 rounded-md" href={`/posts/${slug}`}>
      <h3 className="font-lora italic">{name}</h3>
    </Link>
  );
}
