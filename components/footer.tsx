"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" },
  ]

  return (
    <footer className="py-12 px-4 bg-foreground/5">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-primary font-[var(--font-space-grotesk)] ">
                Portfolio
              </h3>
              <p className="text-muted-foreground mt-2 font-[var(--font-dm-sans)]">
                Building the future, one line of code at a time.
              </p>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 animate-glow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-border/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground font-[var(--font-dm-sans)] flex items-center justify-center gap-2">
              © {currentYear} John Developer. Made with
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
