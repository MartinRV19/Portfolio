"use client"

import NotebookViewer from "@/components/notebook-viewer";

const Project2Page = () => {
  return (
    <div className="container py-8 md:py-12">
      <div className="bg-card border rounded-lg overflow-hidden">
        <NotebookViewer notebookPath="/notebooks/venta_departamentos_properati.html" />
      </div>
    </div>
  );
};

export default Project2Page;
