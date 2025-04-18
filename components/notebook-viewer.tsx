"use client"

import { useEffect, useState } from "react"
import IpynbRenderer from "react-ipynb-renderer"
import "react-ipynb-renderer/dist/styles/default.css"

interface NotebookViewerProps {
  notebookPath: string
  fallbackData?: any
}

export default function NotebookViewer({ notebookPath, fallbackData }: NotebookViewerProps) {
  const [notebookData, setNotebookData] = useState<any>(fallbackData || null)
  const [loading, setLoading] = useState(!fallbackData)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchNotebook() {
      if (fallbackData) {
        setNotebookData(fallbackData)
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const response = await fetch(notebookPath)

        if (!response.ok) {
          throw new Error(`Failed to fetch notebook: ${response.status}`)
        }

        const text = await response.text()
        try {
          const data = JSON.parse(text)
          setNotebookData(data)
          setError(null)
        } catch (parseErr) {
          console.error("Error parsing notebook JSON:", parseErr)
          setError("Invalid notebook format")
          // Use fallback data if available
          if (fallbackData) {
            setNotebookData(fallbackData)
          }
        }
      } catch (err: any) {
        console.error("Error loading notebook:", err)
        setError(err.message || "Failed to load notebook")
        // Use fallback data if available
        if (fallbackData) {
          setNotebookData(fallbackData)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchNotebook()
  }, [notebookPath, fallbackData])

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4">Loading notebook...</p>
      </div>
    )
  }

  if (error && !notebookData) {
    return (
      <div className="p-8 text-center">
        <p className="text-destructive">Error: {error}</p>
        <p className="mt-2">Unable to load the notebook file.</p>
      </div>
    )
  }

  if (!notebookData) {
    return (
      <div className="p-8 text-center">
        <p>No notebook data available.</p>
      </div>
    )
  }

  return (
    <div className="notebook-wrapper p-4">
      <IpynbRenderer ipynb={notebookData} syntaxTheme="prism" language="python" bgStyle="light" />
    </div>
  )
}
