"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Heart, Camera, Users } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Professional Uskunalar",
    description: "Eng zamonaviy 4K va 8K kameralar bilan ishlaymiz",
  },
  {
    icon: Heart,
    title: "Muhabbat Bilan",
    description: "Har bir loyihaga yurak va ruh qo'yamiz",
  },
  {
    icon: Award,
    title: "Mukofotli Jamoa",
    description: "Xalqaro tanlovlarda g'olib bo'lgan mutaxassislar",
  },
  {
    icon: Users,
    title: "500+ Mijozlar",
    description: "Minglab baxtli juftliklar bizga ishonishdi",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display text-balance">Biz Haqimizda</h2>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto text-balance">
            2016 yildan beri O'zbekistonda eng yaxshi to'y va bayram videolarini yaratib kelmoqdamiz. Bizning maqsadimiz
            - har bir lahzani abadiy esdalik qilish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2 font-display">{feature.title}</h3>
              <p className="text-white/50">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-rose-500/10 border border-white/10"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">Bizning Missiyamiz</h3>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Kokonut Studio - bu faqat video studiya emas, bu sizning hayotingizdagi eng muhim lahzalarni abadiy saqlab
            qolish san'ati. Biz har bir to'y, har bir bayramni noyob hikoyaga aylantiramiz. Professional jamoamiz,
            zamonaviy uskunalarimiz va ijodiy yondashuvimiz bilan sizning orzularingizni amalga oshiramiz.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
