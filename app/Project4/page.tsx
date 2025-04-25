"use client";

import dynamic from "next/dynamic";

const HtmlRenderer = dynamic(
  () => import("@/components/html-renderer"),
  { ssr: false }
);

export default function Project4Page() {
  return (
    <div className="ml-0 md:ml-[var(--sidebar-width)] w-full h-[calc(100vh-8rem)] overflow-auto">
      <HtmlRenderer 
        filePath="/notebooks/wordcloud_Spanish.html" 
        className="w-full h-full" 
      />
    </div>
  );
}