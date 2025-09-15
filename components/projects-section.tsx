"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useRef } from "react"

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-animate")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.",
      image: "/ecommerce.png",
      technologies: ["Next.js", "TypeScript", "Razorpay", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Document Sharing Platform",
      description:
        "A secure web application built with the MERN stack that allows users to upload, store, and share documents using unique access codes.",
      image: "/document-sharing.png",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A stunning portfolio website with glassmorphism design, smooth animations, and responsive layout.",
      image: "/portfolio.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    }
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-space-grotesk)] text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="scroll-animate">
              <Card className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 animate-glow group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground font-[var(--font-space-grotesk)]">
                    {project.title}
                  </h3>
                  <p className="text-foreground mb-4 leading-relaxed font-[var(--font-dm-sans)]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="glass animate-scale-in"
                        style={{ animationDelay: `${index * 0.1 + techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button size="sm" className="flex-1 animate-glow" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 glass bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
