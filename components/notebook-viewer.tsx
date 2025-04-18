"use client"

import { useState, useEffect, useRef } from "react"

interface NotebookViewerProps {
  notebookPath: string;
}

const NotebookViewer: React.FC<NotebookViewerProps> = ({ notebookPath }) => {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        setLoading(true)
        const response = await fetch(notebookPath);
        if (!response.ok) {
          throw new Error(`Failed to fetch HTML: ${response.status}`);
        }
        let html = await response.text();

        // Extract notebook name from path
        const notebookName = notebookPath.split("/").pop()?.replace(".html", "");
        const baseURL = `/notebooks/${notebookName}_files/`;

        // Replace image paths
        html = html.replace(/venta_departamentos_properati_files\/figure-html\//g, baseURL + "figure-html/");

        setHtmlContent(html);
        setError(null);
      } catch (err) {
        setError("Failed to load HTML content.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchHtmlContent();
  }, [notebookPath]);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-destructive">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="notebook-content" style={{ width: "100%", overflow: "hidden" }}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent || "" }} />
    </div>
  );
};

export default NotebookViewer;
