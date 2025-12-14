"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Sardor & Nilufar - Nikoh Marosimi",
    category: "Toy",
    thumbnail:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:32",
  },
  {
    id: 2,
    title: "Jasur's Birthday Celebration",
    category: "Bazm",
    thumbnail:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:45",
  },
  {
    id: 3,
    title: "Corporate Event 2024",
    category: "Clip",
    thumbnail:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "7:15",
  },
  {
    id: 4,
    title: "Madina & Aziz - Engagement",
    category: "Toy",
    thumbnail:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:20",
  },
  {
    id: 5,
    title: "Summer Festival Highlights",
    category: "Maxsus",
    thumbnail:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6:10",
  },
  {
    id: 6,
    title: "Sevara's Sweet 16",
    category: "Bazm",
    thumbnail:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:50",
  },
]

const categories = ["Barchasi", "Toy", "Bazm", "Maxsus", "Clip"]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "Barchasi" ? projects : projects.filter((project) => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div id="projects" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-100/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Bizning <span className="text-[#E11D48]">Loyihalar</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Biz yaratgan eng yaxshi videolarni ko'ring. Har bir loyiha — ijodkorlik va sifatning namunasi.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#E11D48] text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#E11D48] hover:text-[#E11D48]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#E11D48] flex items-center justify-center shadow-lg">
                    <Play className="w-7 h-7 text-white fill-white" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                  {project.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#E11D48] px-3 py-1 rounded-full text-white text-xs font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#E11D48] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-white text-xl font-bold mt-4">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-4 px-6 py-2 bg-[#E11D48] text-white rounded-full font-medium hover:bg-[#BE123C] transition-colors duration-300"
              >
                Yopish
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
