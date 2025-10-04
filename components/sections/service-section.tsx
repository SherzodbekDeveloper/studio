"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Video, Camera, Film, Sparkles, Heart, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Video,
    title: "To'y Videografiyasi",
    description: "4K va 8K sifatda professional to'y videolari. Kinematik yondashuv va professional montaj.",
    price: "dan 5,000,000 so'm",
    features: ["4K/8K video", "Drone suratga olish", "Professional montaj", "Kinematik effektlar"],
  },
  {
    icon: Camera,
    title: "To'y Fotografiyasi",
    description: "Professional fotosessiya va har bir muhim lahzani qo'lga olish. Yuqori sifatli rasmlar.",
    price: "dan 3,000,000 so'm",
    features: ["Professional fotograf", "Cheksiz suratlar", "Retush va tahrirlash", "Online galereya"],
  },
  {
    icon: Heart,
    title: "Nikoh Marosimi",
    description: "Nikoh marosimingizni professional darajada yozib olish va tahrirlab berish xizmati.",
    price: "dan 2,500,000 so'm",
    features: ["2 kamera", "Professional audio", "Tez montaj", "HD sifat"],
  },
  {
    icon: Film,
    title: "Love Story",
    description: "Sizning sevgi hikoyangizni kinematik video formatida taqdim etamiz.",
    price: "dan 4,000,000 so'm",
    features: ["Kinematik video", "Lokatsiya tanlash", "Professional yoritish", "Musiqiy montaj"],
  },
  {
    icon: Sparkles,
    title: "Bayram Videolari",
    description: "Tug'ilgan kun, yubiley va boshqa bayramlar uchun professional video xizmat.",
    price: "dan 2,000,000 so'm",
    features: ["Professional video", "Tez montaj", "Ijodiy yondashuv", "HD sifat"],
  },
  {
    icon: Gift,
    title: "Maxsus Loyihalar",
    description: "Sizning individual talablaringiz bo'yicha maxsus video loyihalar yaratamiz.",
    price: "Kelishilgan narx",
    features: ["Individual yondashuv", "Cheksiz imkoniyatlar", "Professional jamoa", "Yuqori sifat"],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.02] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display text-balance">
            Bizning Xizmatlar
          </h2>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto text-balance">
            Har bir tadbir uchun professional yechimlar. Sizning ehtiyojlaringizga moslashtirilgan xizmatlar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-300"
            >
              <service.icon className="w-14 h-14 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-3 font-display">{service.title}</h3>
              <p className="text-white/60 mb-4 leading-relaxed">{service.description}</p>

              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-4 font-display">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="#contact">
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  Buyurtma Berish
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
