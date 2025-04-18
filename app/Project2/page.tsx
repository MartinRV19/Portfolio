"use client"

import NotebookViewer from "@/components/notebook-viewer";

const Project2Page = () => {
  return (
    <div className="container py-8 md:py-12">
      <NotebookViewer notebookPath="/notebooks/venta_departamentos_properati.html" />
    </div>
  );
};

export default Project2Page;
