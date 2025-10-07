"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Азиза ва Сардор",
    role: "Туй мижозлари",
    content:
      "Creative Studio бизнинг туйимизни ҳақиқий кинога айлантирди. Ҳар бир лаҳза жуда гўзал ва хотирада сақланади.",
    image: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Нилуфар ва Жасур",
    role: "Лаве Стори мижозлари",
    content:
      "Love Story видеомиз ажойиб чиқди. Жамоа профессионал ва барча ишларни эътибор билан бажарди. Ҳаммага тавсия қиламиз.",
    image: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Мадина ва Отабек",
    role: "Туй мижозлари",
    content:
      "Creative Studio жамоаси профессионал ва самимий. Туйимиз видеоси барча кутганларимиздан ҳам яхши чиқди.",
    image: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Севара ва Бекзод",
    role: "Никоҳ маросими",
    content:
      "Никоҳ маросимимизни чиройли ва диққат билан ёзишди. Хизмат ва сифат даражаси юқори.",
    image: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Дилноза ва Рустам",
    role: "Туй мижозлари",
    content:
      "Жамоа профессионал ва видео сифати жуда яхши. Туйимиз эсда қоладиган бўлди.",
    image: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Камола ва Шерзод",
    role: "Лаве Стори",
    content:
      "Севги ҳикоямизни гўзал ва эътибор билан тасвирлаб беришди. Ҳар сафар кўрганимизда шодланамиз. Раҳмат!",
    image: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
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
        {/* --- Animated Heading --- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display leading-tight max-w-[700px]">
              Biz haqimizda mijozlarimiz{" "}
              <br className="hidden md:block" />
              <span className="text-[#E11D48]">nimalar deyishadi</span>
            </h2>

            <p className="lg:text-end text-center sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-[550px]">
              Har bir loyiha — bu biz uchun nafaqat ish, balki ishonchdir.
              Bizning mijozlarimiz fikrlari bizni har kuni yanada yaxshiroq bo‘lishga undaydi.
            </p>
          </div>
        </motion.div>

        {/* --- Testimonials Grid --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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

        {/* --- Carousel Controls --- */}
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
  )
}
