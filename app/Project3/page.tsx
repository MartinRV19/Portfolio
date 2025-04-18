"use client"

import dynamic from "next/dynamic";

export default function Project3Page() {
  const NotebookViewer = dynamic(
    () => import("../../components/notebook-viewer"),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    }
  );
  return (
    <div className="container py-8 md:py-12">
      <NotebookViewer notebookPath="/notebooks/weather-analysis.html" />
    </div>
  );
}
