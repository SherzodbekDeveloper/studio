"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import CountUp from "react-countup"
import { Button } from "../ui/button"

const stats = [
  { id: 1, value: 1000, label: "Loyihalar", suffix: "+" },
  { id: 2, value: 900, label: "Baxtli mijozlar", suffix: "+" },
  { id: 3, value: 10, label: "Yillik tajriba", suffix: "" },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <div className="relative py-16 sm:py-20 md:py-32 overflow-hidden bg-white transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Chap qism */}
        <div className="flex flex-col gap-10 sm:gap-12 w-full lg:w-1/2">
          <div className="flex items-start gap-4">
            <div className="w-6 sm:w-10 md:w-12 h-40 sm:h-48 md:h-50 bg-gradient-to-b from-[#E11D48] to-white"></div>
            <h1 className="text-black/80 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Biz haqimizda ko&apos;proq bilib oling. Sifat, ishonch va
              <span className="text-[#E11D48]"> ijodkorlik.</span>
            </h1>
          </div>
          <div>
            <img
              className="rounded-2xl w-full  mx-auto"
              src="https://www.aces.edu/wp-content/uploads/2021/11/GettyImages-875599880-scaled.jpg"
              alt=""
            />
          </div>
        </div>

        {/* O'ng qism */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row items-center w-full gap-4 sm:gap-2">
            <img
              className="w-full sm:w-1/2 rounded-2xl"
              src="https://ifs.org.uk/sites/default/files/styles/full_height_banner/public/2023-05/woman-working-at-dining-table_0.jpg?itok=-dWSAbHY"
              alt=""
            />
            <img
              className="w-full sm:w-1/2 rounded-2xl"
              src="https://www.workitdaily.com/media-library/happy-woman-on-laptop-works-from-home.jpg?id=33675981&width=1245&height=700&coordinates=0%2C87%2C0%2C7"
              alt=""
            />
          </div>

          <div>
            <p className="text-black/80 text-base sm:text-lg leading-relaxed">
              Biz — ijodiy studiyamiz, professional video va dizayn loyihalarini amalga oshiramiz.
              Har bir loyiha biz uchun alohida ahamiyatga ega, chunki biz mijozlarimizning ishonchini qadrlaymiz.
              Tajribali jamoamiz bilan sizning g‘oyalaringizni haqiqatga aylantiramiz.
            </p>

          
            <div className="w-full py-10 sm:py-16">
              <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col items-center justify-start transition-all duration-300 p-4 sm:p-6 md:p-8"
                  >
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#E11D48] mb-2">
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                      />
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-black/80 text-base sm:text-lg leading-relaxed">
              Biz — ijodiy studiyamiz, professional video va dizayn loyihalarini amalga oshiramiz.
              Har bir loyiha biz uchun alohida ahamiyatga ega, chunki biz mijozlarimizning ishonchini qadrlaymiz.
            </p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-[#E11D48] hover:bg-[#BE123C] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Jamoa bilan tanishish
            </Button>

            <Button
              size="lg"
              className="group relative overflow-hidden bg-transparent hover:bg-black/10 text-[#BE123C] border-[#BE123C] border px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-black/10 to-black/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Biz bilan bog&apos;lanish
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
