"use client"

import { useEffect, useRef, useState } from "react"

interface HtmlRendererProps {
  filePath: string
  className?: string
  height?: string | number
}

export default function HtmlRenderer({ filePath, className = "", height = 600 }: HtmlRendererProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadHtml = async () => {
      try {
        setLoading(true)

        // Use a simple fetch to get the HTML content
        const response = await fetch(filePath)

        if (!response.ok) {
          throw new Error(`Failed to load HTML: ${response.status}`)
        }

        const html = await response.text()

        // Get the iframe element
        const iframe = iframeRef.current
        if (iframe && iframe.contentWindow) {
          // Write the HTML content to the iframe
          iframe.contentWindow.document.open()
          iframe.contentWindow.document.write(html)
          iframe.contentWindow.document.close()

          // Set loading to false after a short delay to ensure content is rendered
          setTimeout(() => {
            setLoading(false)
          }, 500)
        }
      } catch (err) {
        console.error("Error loading HTML:", err)
        setError(err instanceof Error ? err.message : "Unknown error")
        setLoading(false)
      }
    }

    if (typeof window !== "undefined") {
      loadHtml()
    }
  }, [filePath])

  return (
    <div className={`notebook-container relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4">Loading notebook...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
          <div className="text-center p-4">
            <p className="text-destructive">Error: {error}</p>
            <p className="mt-2">Unable to load the notebook file.</p>
          </div>
        </div>
      )}

      <iframe
        ref={iframeRef}
        className="w-full border-0 overflow-auto"
        style={{ 
          height: typeof height === "number" ? `${height}px` : height,
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
        title="Notebook Content"
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  )
}
