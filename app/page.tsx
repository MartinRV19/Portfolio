import { Github, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
export default function Portfolio() {
  // Lista de proyectos con fechas
  const projects = [
    {
      title: "Donaciones Funcionarios Públicos", 
      description: "Dashboards con datos de donaciones y viajes de funcionarios públicos.",
      date: "Noviembre 2024",
      imageUrl: "/portada_donaciones_viajes_funcionarios_2024.png?height=200&width=300",
      demoUrl: "/donaciones_viajes_funcionarios_2024", 
      repoUrl: "https://github.com/MartinRV19/donaciones_viajes_funcionarios_2024",
      projectNumber: 6,
    },
    {
      title: "Salarios NBA",
      description: "Análisis estadístico de salarios de jugadores de la NBA y su relación con su performance pasada. En python y en Excel/Stata.",
      date: "Agosto 2023",
      imageUrl: "/portada_nba_analisis_salarios.png?height=200&width=300",
      demoUrl: "/nba_analisis_salarios",
      repoUrl: "https://github.com/MartinRV19/nba_analisis_salarios",
      projectNumber: 5,
    },
    {
      title: "Acciones del Merval",
      description: "Evolución del rendimiento de las acciones que componen el Panel Líder del S&P Merval (2018-2022).",
      date: "Marzo 2023",
      imageUrl: "/portada_merval_acciones.png?height=200&width=300",  
      demoUrl: "/merval_acciones",
      repoUrl: "https://github.com/MartinRV19/merval_acciones",
      projectNumber: 1,
    },
    {
      title: "Brecha cambiaria e Inflación",
      description: "Análisis de la evolución del Dólar Minorista, Dólar Blue e Inflación.",
      date: "Febrero 2023",
      imageUrl: "/portada_evolucion_dolar.png?height=200&width=300",
      demoUrl: "/evolucion_dolar",
      repoUrl: "https://github.com/MartinRV19/evolucion_dolar",
      projectNumber: 4,
    },
    {
      title: "Satisfacción de pasajeros",
      description: "Modelo de predicción de satisfacción de pasajeros de aerolínea.",
      date: "Mayo 2022",
      imageUrl: "/portada_airline_passenger_satisfaction.png?height=200&width=300",
      demoUrl: "/airline_passenger_satisfaction",
      repoUrl: "https://github.com/MartinRV19/airline_passenger_satisfaction",
      projectNumber: 8,
    },
    {
      title: "Discursos de asunción presidencial",
      description: "Wordcloud de los discursos de asunción presidencial en Argentina desde 1983 a 2019.",
      date: "Marzo 2022",
      imageUrl: "/portada_wordcloud_asuncion_presidencial.png?height=200&width=300", 
      demoUrl: "/wordcloud_asuncion_presidencial",
      repoUrl: "https://github.com/MartinRV19/wordcloud_asuncion_presidencial",
      projectNumber: 2,
    },
    {
      title: "Departamentos en venta en CABA", 
      description: "Análisis de departamentos en venta en Ciudad de Buenos Aires (Marzo-2022).",
      date: "Marzo 2022",
      imageUrl: "/portada_departamentos_caba_venta_2022.png?height=200&width=300",
      demoUrl: "/departamentos_caba_venta_2022",
      repoUrl: "https://github.com/MartinRV19/departamentos_caba_venta_2022",
      projectNumber: 3,
    },
    {
      title: "Predicción de inflación",
      description: "Inflación en Argentina. Con datos de 2004 a 2020 y un modelo univariado de proceso autorregresivo y media móvil se predice los valores de 2021 y 2022.",
      date: "Febrero 2022",
      imageUrl: "/portada_arg_inflation_prediction_2022.png?height=200&width=300",
      demoUrl: "/arg_inflation_prediction_2022",
      repoUrl: "https://github.com/MartinRV19/arg_inflation_prediction_2022",
      projectNumber: 7,
    }
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
              Hola, soy <span className="text-primary">Martin</span> 👋
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Espero que estés teniendo un gran día. Bienvenido a mi portfolio 👍 
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
              Soy de Hurlingham, Buenos Aires. Soy licenciado en Economía y me interesa
              descubrir qué cuentan los datos. Muchas veces escuchamos conclusiones sesgadas,
              por eso busco entender las historias reales detrás de los números.
              Al final del día, dato mata relato. 
            </p>
            <p className="text-lg">
              Me gusta la economía y la estadística, y acá vas a encontrar proyectos que combinan ambas.
              También tienen distintas formas de obtener datos: desde la clásica descarga de un csv,
              hasta el uso de APIs o web scraping cuando no queda otra.
            </p>
            <p className="text-lg">
              Todo feedback es bienvenido. Podés contactarme al siguiente <a href="mailto:rodriguezvalientemartin@gmail.com" className="text-primary hover:underline">mail</a>
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

