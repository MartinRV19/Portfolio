import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  repoUrl: string
}

export default function ProjectCard({ title, description, tags, imageUrl, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full border bg-card text-card-foreground">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
