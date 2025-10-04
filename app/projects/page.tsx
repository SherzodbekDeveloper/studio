"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import PageLayout from "@/components/page-layout"

const projects = [
  {
    title: "Dilnoza & Sardor",
    category: "To'y Videografiyasi",
    image: "/elegant-wedding-ceremony-uzbek-couple.jpg",
    videoUrl: "#",
  },
  {
    title: "Madina & Jasur",
    category: "Love Story",
    image: "/romantic-couple-photoshoot-uzbekistan.jpg",
    videoUrl: "#",
  },
  {
    title: "Nilufar & Otabek",
    category: "To'y Videografiyasi",
    image: "/luxury-wedding-celebration-uzbek.jpg",
    videoUrl: "#",
  },
  {
    title: "Sevara & Bekzod",
    category: "Nikoh Marosimi",
    image: "/traditional-uzbek-wedding-nikah.jpg",
    videoUrl: "#",
  },
  {
    title: "Malika & Sherzod",
    category: "To'y Videografiyasi",
    image: "/modern-wedding-reception-uzbekistan.jpg",
    videoUrl: "#",
  },
  {
    title: "Gulnora & Timur",
    category: "Love Story",
    image: "/couple-love-story-uzbek-mountains.jpg",
    videoUrl: "#",
  },
]

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
}

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300 font-pacifico">
                Loyihalarimiz
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              Bizning eng yaxshi ishlarimiz va baxtli juftliklarning hikoyalari
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-indigo-400 mb-2 font-medium">{project.category}</div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
