"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john@example.com",
      href: "mailto:john@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-space-grotesk)] text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="scroll-animate">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground font-[var(--font-space-grotesk)]">
                Let's Work Together
              </h3>
              <p className="text-foreground mb-8 leading-relaxed font-[var(--font-dm-sans)]">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 animate-scale-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="glass-card p-3 rounded-full group-hover:animate-glow">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground font-[var(--font-space-grotesk)]">{info.label}</div>
                      <div className="text-muted-foreground font-[var(--font-dm-sans)]">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          <div className="scroll-animate">
            <Card className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass border-0 focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass border-0 focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="glass border-0 focus:ring-2 focus:ring-primary/50 resize-none"
                    required
                  />
                </div>
                <Button type="submit" className="w-full animate-glow hover:scale-105 transition-transform duration-300">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
