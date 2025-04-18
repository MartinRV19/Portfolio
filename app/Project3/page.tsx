tsx
import dynamic from "next/dynamic";

// Dynamically import the HTML renderer with no SSR
const HtmlRenderer = dynamic(() => import("@/components/html-renderer"), {
  ssr: false,
});

export default function Project3Page() {
  return (
    <div className="container py-8 md:py-12">
      <div className="bg-card border rounded-lg overflow-hidden"><HtmlRenderer filePath="/notebooks/task-analytics.html" height={800} /></div>
    </div>
  );
}