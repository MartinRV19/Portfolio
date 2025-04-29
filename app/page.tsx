import { Github, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { ThemeToggle } from "@/components/theme-toggle"
export default function Portfolio() {
  // Lista de proyectos con fechas
  const projects = [
    {
      title: "Real Estate Insights",
      description: "Visualization and analysis of real estate data for better decision making.",
      date: "Agosto 2024",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "/Project8",
      repoUrl: "https://github.com",
      projectNumber: 8,
    },
    {
      title: "Weather Analysis",
      description: "A dashboard for analyzing weather data and visualizing trends over time.",
      date: "Julio 2024",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "/Project7",
      repoUrl: "https://github.com",
      projectNumber: 7,
    },
    {
      title: "Fitness Tracker",
      description: "A mobile-responsive web app for tracking workouts, nutrition, and fitness goals with data visualization.",
      date: "Junio 2024",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "/Project6",
      repoUrl: "https://github.com",
      projectNumber: 6,
    },
    {
      title: "Recipe Finder",
      description: "An application that helps users discover recipes based on available ingredients and dietary preferences.",
      date: "Mayo 2024",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "/Project5",
      repoUrl: "https://github.com",
      projectNumber: 5,
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies to showcase projects and skills.",
      date: "Abril 2024",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "/Project4",
      repoUrl: "https://github.com",
      projectNumber: 4,
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides forecasts, historical data, and location-based weather alerts.",
      date: "Marzo 2024",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "/Project3",
      repoUrl: "https://github.com",
      projectNumber: 3,
    },
    {
      title: "Task Management App",
      description: "A collaborative task manager with real-time updates, file sharing, and team communication features.",
      date: "Febrero 2024",
      imageUrl: "/wordcloud.png?height=200&width=300",
      demoUrl: "/Project2",
      repoUrl: "https://github.com",
      projectNumber: 2,
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with payment processing, user authentication, and inventory management.",
      date: "Enero 2024",
      imageUrl: "/mapa_ciudad.png?height=200&width=300", 
      demoUrl: "/Project1",
      repoUrl: "https://github.com",
      projectNumber: 1,
    },
  ];

  return ( 
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between ">
          <div className="font-bold text-xl">Martin Valiente</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre mí
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Proyectos
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/MartinRV19" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/martinrodriguezvaliente" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:rodriguezvalientemartin@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container main-content pt-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hola, Soy <span className="text-primary">Martin</span> 👋
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Acá podes encontrar algunos de los proyectos que hice. datos. 
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="outline" asChild>
                <Link href="/CV_Martin_Rodriguez_Valiente.pdf" target="_blank">   
                  CV
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20">
            <img src="/foto_portada.png?height=300&width=300" alt="Martin Valiente" className="w-full h-full object-cover" />
          </div>  
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Sobre mí
          </h2>
          <div className="space-y-4 max-w-3xl">
            <p className="text-lg">
              I'm a passionate full-stack developer with 5+ years of experience building web applications. I specialize
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
            Projectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.projectNumber}
                title={project.title}
                description={project.description}
                date={project.date}
                imageUrl={project.imageUrl}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
                projectNumber={project.projectNumber}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

