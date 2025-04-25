"use client"

import dynamic from "next/dynamic"

// Dynamically import the HTML renderer with no SSR
const HtmlRenderer = dynamic(() => import("@/components/html-renderer"), { ssr: false })

export default function Project4Page() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-8">
        <div className="bg-card border rounded-lg overflow-hidden">
          <HtmlRenderer filePath="/notebooks/venta_departamentos_properati.html" height={800} />
        </div>
      </div>
    </div>
  )
}