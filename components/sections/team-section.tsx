"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Instagram, Facebook, Youtube, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Sardor Karimov",
    role: "Bosh Rejissyor",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio: "10 yillik tajribaga ega professional videograf",
    social: {
      instagram: "#",
      facebook: "#",
      youtube: "#",
    },
  },
  {
    name: "Nilufar Azimova",
    role: "Bosh Fotograf",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio: "Xalqaro mukofotlarga sazovor bo'lgan fotograf",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Jasur Tursunov",
    role: "Video Montajchi",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio: "Kinematik montaj bo'yicha mutaxassis",
    social: {
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "Madina Rahimova",
    role: "Kreativ Direktor",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio: "Noyob g'oyalar va ijodiy yechimlar muallifi",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Aziz Yusupov",
    role: "Drone Operator",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio: "Havo suratga olish va FPV drone mutaxassisi",
    social: {
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "Sevara Alimova",
    role: "Rang Korreksiyachi",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio: "Professional rang korreksiyasi va grading mutaxassisi",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= team.length ? 0 : prev + 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, team.length - 3) : prev - 3))
  }

  const visibleTeam = team.slice(currentIndex, currentIndex + 3)

  return (
    <div id="team" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-100/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 font-display text-balance">
            Bizning Jamoa
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-balance">
            Professional mutaxassislar jamoasi sizning xizmatizda
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTeam.map((member, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
                      >
                        <Instagram className="w-5 h-5 text-[#E11D48]" />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
                      >
                        <Facebook className="w-5 h-5 text-[#E11D48]" />
                      </a>
                    )}
                    {member.social.youtube && (
                      <a
                        href={member.social.youtube}
                        className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
                      >
                        <Youtube className="w-5 h-5 text-[#E11D48]" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1 font-display">{member.name}</h3>
                <div className="text-[#E11D48] font-medium mb-2">{member.role}</div>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full border-gray-300 bg-white hover:bg-gray-100 text-[#E11D48] disabled:opacity-40 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(team.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === index ? "bg-[#E11D48] w-8" : "bg-[#E11D48]/30 w-2"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex + 3 >= team.length}
              className="rounded-full border-gray-300 bg-white hover:bg-gray-100 text-[#E11D48] disabled:opacity-40 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
