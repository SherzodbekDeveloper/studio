"use client"

import { motion } from "framer-motion"
import { Video, Camera, Film, Sparkles, Music, Palette } from "lucide-react"
import PageLayout from "@/components/page-layout"

const services = [
  {
    icon: Video,
    title: "To'y Videografiyasi",
    description:
      "Professional operatorlar bilan to'yingizning har bir lahzasini yozib olamiz. 4K sifatida, kinematik uslubda.",
    features: ["4K video sifati", "Kinematik montaj", "Drone suratga olish", "Bir kunlik yoritish"],
  },
  {
    icon: Camera,
    title: "Fotosessiya",
    description: "Professional fotograflar bilan eng go'zal suratlar. Tabiiy va studiya sharoitida.",
    features: ["Professional fotograf", "Retush va tahrirlash", "Cheksiz suratlar", "Onlayn galereya"],
  },
  {
    icon: Film,
    title: "Nikoh Marosimi",
    description: "Nikoh marosimingizni professional tarzda yozib olamiz va montaj qilamiz.",
    features: ["To'liq yoritish", "Professional ovoz", "Tez montaj", "Onlayn ulashish"],
  },
  {
    icon: Sparkles,
    title: "Bayram Tadbirlari",
    description: "Tug'ilgan kun, yubiley va boshqa bayramlaringizni professional video qilib olamiz.",
    features: ["Ijodiy yondashuv", "Tez montaj", "Musiqiy montaj", "Onlayn yetkazish"],
  },
  {
    icon: Music,
    title: "Love Story",
    description: "Sizning sevgi hikoyangizni go'zal video lavhaga aylantiramiz. Romantik va kinematik.",
    features: ["Kinematik uslub", "Go'zal joylar", "Professional montaj", "Musiqiy fon"],
  },
  {
    icon: Palette,
    title: "Maxsus Loyihalar",
    description: "Har qanday maxsus tadbiringiz uchun individual yechimlar va ijodiy g'oyalar.",
    features: ["Individual yondashuv", "Ijodiy g'oyalar", "Cheksiz imkoniyatlar", "Professional jamoa"],
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

export default function ServicesPage() {
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
                Xizmatlarimiz
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              Sizning eng muhim kunlaringiz uchun professional video va foto xizmatlar
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-white/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
