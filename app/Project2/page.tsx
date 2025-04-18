"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import NotebookViewer from "@/components/notebook-viewer";

// No need for useState and useEffect as NotebookViewer handles loading
export default function Project2Page() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <div className="grid gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Task Management Analytics</h1>
          <p className="text-lg text-muted-foreground mb-6">
            A task management application with user engagement analytics. This project provides insights into user
            productivity and task completion rates.
          </p>
        </div>

        <Card className="p-4 md:p-6">
          <h2 className="text-2xl font-bold mb-4">Project Notebook</h2>
          <div className="bg-card border rounded-lg overflow-hidden">
            <NotebookViewer notebookPath="/notebooks/venta_departamentos_properati-aUmoPwcZcDrI4sqYyZKCEn2WXMxNJ6.html" />
          </div>
        </Card>
      </div>
    </div>
  )
}
