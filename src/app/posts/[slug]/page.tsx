import { Page } from "@/components";

interface IPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: IPostPageProps) {
  const slug = (await params).slug;

  return <Page slug={`/posts/${slug}`} />;
}
