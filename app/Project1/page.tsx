"use client"

import dynamic from "next/dynamic"

// Dynamically import the HTML renderer with no SSR
const HtmlRenderer = dynamic(() => import("@/components/html-renderer"), { ssr: false })

export default function Project1Page() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-8">
        <div className="bg-card border rounded-lg overflow-hidden">
          <HtmlRenderer filePath="/notebooks/ecommerce-analysis.html" height={800} />
        </div>
      </div>
    </div>
  )
}
