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
    description:
      "4K va 8K sifatda professional to'y videolari. Kinematik yondashuv va professional montaj.",
    price: "dan 5,000,000 so'm",
    features: ["4K/8K video", "Drone suratga olish", "Professional montaj", "Kinematik effektlar"],
  },
  {
    icon: Camera,
    title: "To'y Fotografiyasi",
    description:
      "Professional fotosessiya va har bir muhim lahzani qo'lga olish. Yuqori sifatli rasmlar.",
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

]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.05] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div>
          <div className="relative w-full h-[550px] overflow-hidden rounded-2xl z-0">
            <img
              src="https://ro-bust.co.za/wp-content/uploads/2023/09/handsome-videographer-looking-at-camera-display-in-2023-05-24-03-34-38-utc-scaled.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />

            <h2 className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold bg-black/40">
              Bizning xizmatlar
            </h2>
          </div>

          <div className="relative z-10 px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl hover:border-[#E11D48]/40 transition-all duration-300"
              >
                <service.icon className="w-14 h-14 text-[#E11D48] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900 mb-4 font-display">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="#contact">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-[#E11D48] hover:bg-[#BE123C] text-white px-8 py-4 text-base md:text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    Buyurtma berish
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
