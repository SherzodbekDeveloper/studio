"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Aziza va Sardor",
    role: "To'y Mijozlari",
    content:
      "Creative Studio bizning to'yimizni haqiqiy kinoga aylantirdi! Har bir lahza shunday go'zal yozilganki, har safar ko'rganimizda ko'z yoshlarimiz to'kiladi.",
    image: "/happy-couple-portrait.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Nilufar va Jasur",
    role: "Love Story Mijozlari",
    content:
      "Love Story videomiz ajoyib chiqdi! Professional jamoa, zamonaviy uskunalar va eng muhimi - yurakdan ishlashdi. Hammaga tavsiya qilamiz!",
    image: "/romantic-couple.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Madina va Otabek",
    role: "To'y Mijozlari",
    content:
      "Eng yaxshi tanlov! Creative Studio jamoasi juda professional va samimiy. Bizning to'yimiz videosi barcha kutganlarimizdan ham zo'r chiqdi!",
    image: "/wedding-couple-smiling.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Sevara va Bekzod",
    role: "Nikoh Marosimi",
    content:
      "Nikoh marosimimizni shunday chiroyli yozib olishganki, hamma do'stlarimiz hayron qolishdi. Sifat va xizmat darajasi a'lo!",
    image: "/traditional-wedding-couple.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Dilnoza va Rustam",
    role: "To'y Mijozlari",
    content:
      "Ajoyib tajriba! Jamoa juda professional, video sifati yuqori darajada. To'yimizni abadiy esda qoladigan qilib olishdi.",
    image: "/elegant-couple.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Kamola va Sherzod",
    role: "Love Story",
    content:
      "Bizning sevgi hikoyamizni shunday go'zal tasvirlab berishganki, har safar ko'rganimizda o'sha kunlarni qayta yashayapmiz. Rahmat!",
    image: "/young-couple-love.jpg",
    rating: 5,
  },
  {
    id: 7,
    name: "Sevara va Bekzod",
    role: "Nikoh Marosimi",
    content:
      "Nikoh marosimimizni shunday chiroyli yozib olishganki, hamma do'stlarimiz hayron qolishdi. Sifat va xizmat darajasi a'lo!",
    image: "/traditional-wedding-couple.jpg",
    rating: 5,
  },
  {
    id: 8,
    name: "Dilnoza va Rustam",
    role: "To'y Mijozlari",
    content:
      "Ajoyib tajriba! Jamoa juda professional, video sifati yuqori darajada. To'yimizni abadiy esda qoladigan qilib olishdi.",
    image: "/elegant-couple.jpg",
    rating: 5,
  },
  {
    id: 9,
    name: "Kamola va Sherzod",
    role: "Love Story",
    content:
      "Bizning sevgi hikoyamizni shunday go'zal tasvirlab berishganki, har safar ko'rganimizda o'sha kunlarni qayta yashayapmiz. Rahmat!",
    image: "/young-couple-love.jpg",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, testimonials.length - 3) : prev - 3))
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3)

  return (
    <div className="relative py-24 md:py-32 bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-100/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-display leading-tight max-w-[700px]">
              Biz haqimizda mijozlarimiz <br className="hidden md:block" />
              <span className="text-[#E11D48]">nimalar deyishadi</span>

            </h2>

            <p className="text-lg md:text-2xl text-end text-gray-600 max-w-[550px]">
              Har bir loyiha — bu biz uchun nafaqat ish, balki ishonchdir.
              Bizning mijozlarimiz fikrlari bizni har kuni yanada yaxshiroq bo‘lishga undaydi.
            </p>
          </div>
        </motion.div>


        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="flex flex-col h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <Quote className="w-10 h-10 text-[#E11D48] mb-4" />

                  <div className="flex-1 mb-6">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed line-clamp-6">
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div>
                      <div className="text-base font-bold text-gray-900 font-display">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              className="rounded-full border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-40"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / 3) === index ? "bg-gray-900 w-8" : "bg-gray-300 w-2"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              disabled={currentIndex + 3 >= testimonials.length}
              className="rounded-full border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-40"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
