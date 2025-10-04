"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Aziza & Sardor",
    category: "To'y Videografiyasi",
    thumbnail: "/elegant-wedding-ceremony.png",
    duration: "12:30",
  },
  {
    id: 2,
    title: "Nilufar & Jasur",
    category: "Love Story",
    thumbnail: "/romantic-couple-photoshoot.jpg",
    duration: "8:45",
  },
  {
    id: 3,
    title: "Madina & Otabek",
    category: "To'y Videografiyasi",
    thumbnail: "/luxury-wedding-celebration.jpg",
    duration: "15:20",
  },
  {
    id: 4,
    title: "Sevara & Bekzod",
    category: "Nikoh Marosimi",
    thumbnail: "/traditional-wedding-ceremony.jpg",
    duration: "6:15",
  },
  {
    id: 5,
    title: "Dilnoza & Sherzod",
    category: "To'y Videografiyasi",
    thumbnail: "/modern-wedding-party.jpg",
    duration: "14:00",
  },
  {
    id: 6,
    title: "Kamola & Rustam",
    category: "Love Story",
    thumbnail: "/couple-in-nature-photoshoot.jpg",
    duration: "7:30",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display text-balance">
            Bizning Loyihalar
          </h2>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto text-balance">
            Eng so&apos;nggi ishlarimiz bilan tanishing. Har bir loyiha - bu noyob hikoya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-sm text-indigo-300 mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-1 font-display">{project.title}</h3>
                <div className="text-sm text-white/60">{project.duration}</div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  scale: hoveredId === project.id ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 -z-10"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg rounded-full"
            >
              Barcha Loyihalarni Ko&apos;rish
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
