import { Github, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Martin Rodriguez Valiente</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:contact@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hola, soy <span className="text-primary">Martin</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">Genio Mundial</h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Me gusta trabajar con datos y acá hay algunos de los proyectos que más me gustaron.
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  CV
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20">
            <img src="/placeholder.svg?height=300&width=300" alt="John Doe" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            About Me
          </h2>
          <div className="space-y-4 max-w-3xl">
            <p className="text-lg">
              I'm a passionate full-stack developer with HOLAAAAAAAAAAAAAA of experience building web applications. I specialize
              in React, Next.js, and Node.js, creating responsive and user-friendly interfaces.
            </p>
            <p className="text-lg">
              My journey in web development started when I built my first website in college. Since then, I've worked
              with startups and established companies to deliver high-quality software solutions.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new
              technologies.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Proyectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured online store with payment processing, user authentication, and inventory management."
              tags={["React", "Node.js", "MongoDB", "Stripe"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task manager with real-time updates, file sharing, and team communication features."
              tags={["Next.js", "TypeScript", "Firebase", "Tailwind"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A weather application that provides forecasts, historical data, and location-based weather alerts."
              tags={["React", "Redux", "Weather API", "Chart.js"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A responsive portfolio website built with modern web technologies to showcase projects and skills."
              tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Recipe Finder"
              description="An application that helps users discover recipes based on available ingredients and dietary preferences."
              tags={["React", "Node.js", "MongoDB", "Food API"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Fitness Tracker"
              description="A mobile-responsive web app for tracking workouts, nutrition, and fitness goals with data visualization."
              tags={["React", "TypeScript", "Firebase", "D3.js"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#projects">Projects</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
