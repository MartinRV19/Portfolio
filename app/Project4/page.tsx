"use client";

import dynamic from "next/dynamic";

const HtmlRenderer = dynamic(
  () => import("@/components/html-renderer"),
  { ssr: false }
);

export default function Project4Page() { 
    return (
        <div className="h-full overflow-hidden">
            <HtmlRenderer
                filePath="/notebooks/wordcloud_Spanish.html"
                className="w-full"
                height="100vh"
            />
        </div>
    );
}