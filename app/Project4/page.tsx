"use client";

import dynamic from "next/dynamic";
import Sidebar from "@/components/sidebar"; // Adjust import path to your sidebar component

const HtmlRenderer = dynamic(
  () => import("@/components/html-renderer"),
  { ssr: false }
);

export default function Project4Page() {
  return (
    <div className="flex w-full h-[calc(100vh-8rem)]">
      {/* Sidebar (fixed width) */}
      <div className="hidden md:block w-64 border-r bg-background">
        <Sidebar />
      </div>

      {/* Main content (scrollable) */}
      <div className="flex-1 overflow-auto">
        <HtmlRenderer 
          filePath="/notebooks/wordcloud_Spanish.html" 
          className="w-full h-full" 
        />
      </div>
    </div>
  );
}