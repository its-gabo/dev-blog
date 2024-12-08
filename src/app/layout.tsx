import type { Metadata } from "next";

import { StoryblokProvider } from "@/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Blog Starter",
  description: "A starter for a developer blog using Next.js and Storyblok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className="font-hind-madurai">{children}</body>
      </html>
    </StoryblokProvider>
  );
}
