"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Project2Page() {
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
          <h1 className="text-4xl font-bold mb-4">Apartment Sales Analysis in Buenos Aires</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Analysis of apartment sales data in different neighborhoods of Buenos Aires, Argentina. The analysis
            includes visualizations of price distributions, price per square meter, and a choropleth map.
          </p>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: notebookContent }} />
    </div>
  )
}
