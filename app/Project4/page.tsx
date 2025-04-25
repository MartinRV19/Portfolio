"use client";

import dynamic from "next/dynamic";

const HtmlRenderer = dynamic(
  () => import("@/components/html-renderer"),
  { ssr: false }
);

export default function Project4Page() {
  return (
    <div className="flex flex-1 w-full h-[calc(100vh-8rem)] overflow-auto"> {/* Scrollable container */}
      <HtmlRenderer 
        filePath="/notebooks/wordcloud_Spanish.html" 
        className="w-full h-full min-h-[calc(100vh-8rem)]" // Ensures content fills space
      />
    </div>
  );
}