"use client";

import dynamic from "next/dynamic";

const HtmlRenderer = dynamic(
  () => import("@/components/html-renderer"),
  { ssr: false }
);

export default function Project4Page() {
  return (
    <div className="w-full h-[calc(100vh-8rem)] overflow-auto">
      <div className="max-w-4xl mx-auto p-4">
        <HtmlRenderer 
          filePath="/notebooks/wordcloud_Spanish.html" 
          className="w-full"
        />
      </div>
    </div>
  );
}