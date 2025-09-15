"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import "./style.css"
export function AboutSection() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-space-grotesk)] text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-13 items-center">
          <div className="scroll-animate">
            <Card className="glass-card p-8 animate-float">
              <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-6xl font-bold">
                  <img id="dp" src=".\Chanukya.jpg" alt="" />
                </div>
              </div>
            </Card>
          </div>

          <div className="scroll-animate">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground font-[var(--font-space-grotesk)]">
                Passionate Developer & Designer
              </h3>
              <p className="text-foreground mb-6 leading-relaxed font-[var(--font-dm-sans)]">
                I’m Chanukya Kumar, a Full-Stack Developer passionate about crafting secure, scalable, and user-friendly applications.
                Currently pursuing B.Tech in CSE at KL University, 
                I specialize in the Full stack, cloud computing, and UI/UX design.
              </p>
              <p className="text-foreground mb-6 leading-relaxed font-[var(--font-dm-sans)]">
                I’ve built projects like a cloud-based document sharing platform and a full-stack e-commerce application.
                Certified in AWS Cloud Practitioner, Salesforce AI, and Red Hat Developer, I bring strong technical depth with modern tools.
                With skills in problem-solving, teamwork, and leadership, I aim to deliver impactful digital solutions.
              </p>

              
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
