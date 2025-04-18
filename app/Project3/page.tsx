"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import dynamic from "next/dynamic"

// Dynamically import the HTML renderer with no SSR
const HtmlRenderer = dynamic(() => import("@/components/html-renderer"), { ssr: false })

export default function Project3Page() {
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
          <h1 className="text-4xl font-bold mb-4">Weather Dashboard</h1>
          <p className="text-lg text-muted-foreground mb-6">
            A weather application that provides forecasts, historical data, and location-based weather alerts. This
            weather dashboard application provides detailed weather information for any location. It includes current
            conditions, hourly and daily forecasts, historical weather data, and severe weather alerts.
          </p>
        </div>

        <Card className="p-4 md:p-6">
          <h2 className="text-2xl font-bold mb-4">Project Notebook</h2>
          <div className="bg-card border rounded-lg overflow-hidden">
            {isClient && <HtmlRenderer filePath="/notebooks/weather-analysis.html" height={800} />}
          </div>
        </Card>
      </div>
    </div>
  )
}
