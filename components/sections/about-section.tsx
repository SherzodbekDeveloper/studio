"use client"
import { motion, useInView } from "framer-motion"
import { Award, Camera, Heart, PlayCircle, Users } from "lucide-react"
import { useRef } from "react"
import CountUp from 'react-countup'
import { Button } from '../ui/button'
import { Play } from 'next/font/google'

const stats = [
  { id: 1, value: 12000, label: "Loyihalar", suffix: "+" },
  { id: 2, value: 8500, label: "Baxtli mijozlar", suffix: "+" },
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
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <div className="relative py-24 md:py-32 overflow-hidden bg-white transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-row gap-10">
        <div className="flex flex-col gap-12 w-1/2">
          <div className="flex items-start gap-4 ">
            <div className="w-16 h-50 bg-gradient-to-b from-[#E11D48] to-gray-100"></div>
            <h1 className="text-black/80 text-4xl md:text-5xl font-bold leading-tight">
              Biz haqimizda ko&apos;proq bilib oling. Sifat, ishonch va
              <span className="text-[#E11D48]"> ijodkorlik.</span>
            </h1>



          </div>
          <div className="">
            <img className='rounded-2xl max-w-[400pxn]' src="https://www.aces.edu/wp-content/uploads/2021/11/GettyImages-875599880-scaled.jpg" alt="" />
          </div>
        </div>
        <div className='w-1/2 flex flex-col gap-10 '>
          <div className='flex items-center w-full gap-2'>
            <img className='w-full rounded-2xl' src="https://ifs.org.uk/sites/default/files/styles/full_height_banner/public/2023-05/woman-working-at-dining-table_0.jpg?itok=-dWSAbHY" alt="" />
            <img className='w-full rounded-2xl ' src="https://www.workitdaily.com/media-library/happy-woman-on-laptop-works-from-home.jpg?id=33675981&width=1245&height=700&coordinates=0%2C87%2C0%2C7" alt="" />
          </div>
          <div className=''>
            <p className='text-black/80 '>
              Biz — ijodiy studiyamiz, professional video va dizayn loyihalarini amalga oshiramiz.
              Har bir loyiha biz uchun alohida ahamiyatga ega, chunki biz mijozlarimizning ishonchini qadrlaymiz.
              Tajribali jamoamiz bilan sizning g‘oyalaringizni haqiqatga aylantiramiz.
            </p>

            <div className="w-full py-16">
              <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col items-center justify-start transition-all duration-300 p-8"
                  >
                    <h2 className="text-5xl font-extrabold text-[#E11D48] mb-2">
                      <CountUp end={stat.value} duration={2.5} separator="," suffix={stat.suffix} />
                    </h2>
                    <p className="text-gray-700 text-lg font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className='text-black/80 '>
              Biz — ijodiy studiyamiz, professional video va dizayn loyihalarini amalga oshiramiz.
              Har bir loyiha biz uchun alohida ahamiyatga ega, chunki biz mijozlarimizning ishonchini qadrlaymiz.
            </p>
          </div>
          <motion.div variants={itemVariants}>
            <div className='flex gap-4'>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-[#E11D48] hover:bg-[#BE123C] text-white px-8 py-6 text-base md:text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                Jamoa bilan tanishish
              </Button>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-transparent hover:bg-gray-50 text-black border-[#BE123C] border-1 px-8 py-6 text-base md:text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                Biz bilan bog&apos;lanish
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
