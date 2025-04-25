"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projectsData } from "@/data/projects"
import { getFallbackNotebook } from "@/data/fallback-notebooks"
import dynamic from "next/dynamic"

// Dynamically import the Jupyter Notebook renderer with no SSR
const NotebookViewer = dynamic(() => import("@/components/notebook-viewer"), { ssr: false })

export default function ProjectPage() {
  const { slug } = useParams()
  const [project, setProject] = useState<any>(null)
  const fallbackNotebook = typeof slug === "string" ? getFallbackNotebook(slug as string) : null

  useEffect(() => {
    // Find the project that matches the slug
    if (typeof slug === "string") {
      const foundProject = projectsData.find((p) => p.slug === slug)
      setProject(foundProject)
    }
  }, [slug])

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Button asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="py-8 md:py-12">
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
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-lg text-muted-foreground mb-6">{project.longDescription || project.description}</p>

          <div className="flex gap-4 mb-8">
            <Button asChild>
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          </div>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <img
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">Project Notebook</h2>
        <NotebookViewer notebookPath={project.notebookPath} fallbackData={fallbackNotebook} />
      </div>
    </div>
  )
}
