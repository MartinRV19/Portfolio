import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  date: string
  imageUrl: string
  demoUrl: string
  repoUrl: string
  projectNumber: number
}

export default function ProjectCard({
  title,
  description,
  date,
  imageUrl,
  demoUrl,
  repoUrl,
  projectNumber,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full border bg-card text-card-foreground relative">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="flex-none">
        <CardTitle className="line-clamp-1">
          <Link href={demoUrl} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-none">
        {/* Espacio vacío para mantener el layout */}
      </CardContent>
      <div className="absolute bottom-16 left-6">
        <div className="text-sm text-muted-foreground font-semibold">
          {date}
        </div>
      </div>
      <CardFooter className="flex-none flex justify-between mt-auto">
        <Button variant="outline" size="sm" asChild>
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Repo
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={demoUrl}>
            <ExternalLink className="mr-2 h-4 w-4" />
            Notebook
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
