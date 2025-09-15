"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
      icon: "🎨",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
      icon: "⚙️",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
      icon: "🛠️",
    },
    {
      title: "Design & UX",
      skills: ["UI/UX Design", "Prototyping", "Wireframing", "User Research", "Adobe Creative Suite"],
      icon: "✨",
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-space-grotesk)] text-foreground">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="scroll-animate">
              <Card className="glass-card p-6 h-full hover:scale-105 transition-all duration-300 animate-glow">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-[var(--font-space-grotesk)]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="glass animate-scale-in"
                      style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
