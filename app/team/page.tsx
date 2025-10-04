"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Youtube } from "lucide-react"
import PageLayout from "@/components/page-layout"

const team = [
  {
    name: "Aziz Rahimov",
    role: "Bosh Rejissyor",
    image: "/professional-videographer-uzbek-man.jpg",
    bio: "10 yillik tajribaga ega professional rejissyor va operator",
    social: {
      instagram: "#",
      facebook: "#",
      youtube: "#",
    },
  },
  {
    name: "Malika Karimova",
    role: "Bosh Fotograf",
    image: "/professional-photographer-uzbek-woman.jpg",
    bio: "Professional fotograf va vizual san'atkor",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Sardor Tursunov",
    role: "Operator",
    image: "/cameraman-uzbek-professional.jpg",
    bio: "Kinematik video va drone suratga olish mutaxassisi",
    social: {
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "Dilnoza Alimova",
    role: "Montajchi",
    image: "/video-editor-uzbek-woman.jpg",
    bio: "Professional video montaj va rang korreksiyasi mutaxassisi",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Jasur Yusupov",
    role: "Operator",
    image: "/videographer-uzbek-man-camera.jpg",
    bio: "To'y va bayram videografiyasi bo'yicha mutaxassis",
    social: {
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "Nilufar Sharipova",
    role: "Fotograf",
    image: "/wedding-photographer-uzbek-woman.jpg",
    bio: "To'y fotografiyasi va portret suratga olish mutaxassisi",
    social: {
      instagram: "#",
      facebook: "#",
    },
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

export default function TeamPage() {
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
                Bizning Jamoa
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              Professional va ijodiy jamoamiz bilan tanishing
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />

                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#030303]/80">
                      <div className="flex gap-4">
                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            <Instagram className="w-5 h-5 text-white" />
                          </a>
                        )}
                        {member.social.facebook && (
                          <a
                            href={member.social.facebook}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            <Facebook className="w-5 h-5 text-white" />
                          </a>
                        )}
                        {member.social.youtube && (
                          <a
                            href={member.social.youtube}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            <Youtube className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-pacifico text-white mb-1">{member.name}</h3>
                    <div className="text-sm text-indigo-400 mb-3 font-medium">{member.role}</div>
                    <p className="text-sm text-white/60 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
