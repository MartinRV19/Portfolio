"use client";

import dynamic from "next/dynamic";

const HtmlRenderer = dynamic(
  () => import("@/components/html-renderer"),
  { ssr: false }
);

export default function Project4Page() { 
  return (
    <HtmlRenderer
      filePath="/notebooks/wordcloud_Spanish.html"
      className="w-full"
    />
  );
}