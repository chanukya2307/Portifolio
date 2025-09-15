"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div
          className={`glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto animate-float ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-[var(--font-space-grotesk)]">
              Chanukya <span className="text-primary">Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-[var(--font-dm-sans)] leading-relaxed">
              Full-Stack Developer & UI/UX Designer 
            </p>
            <p className="text-lg text-foreground mb-10 max-w-2xl mx-auto font-[var(--font-dm-sans)] leading-relaxed">
              Crafting beautiful, functional, and user-centered digital experiences with modern technologies and
              innovative design principles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="animate-glow hover:scale-105 transition-transform duration-300">
                 <Link href="#projects">View My Work</Link>
              </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass hover:scale-105 transition-transform duration-300 bg-transparent"
            >
              <a
                href="https://drive.google.com/file/d/1SJFEh7zCEECPo0AahjfoAcz2euqc8DAN/view?usp=drive_link" // replace with your resume public link
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>

            </div>

            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/chanukya2307/", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/chanukya-chintha/", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 animate-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-6 h-6 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary mx-auto" />
        </div>
      </div>
    </section>
  )
}
