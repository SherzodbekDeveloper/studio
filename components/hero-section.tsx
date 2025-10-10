"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Star, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

function FloatingParticle({ delay = 0, x = 0, y = 0 }: { delay?: number; x?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [x, x + Math.random() * 100 - 50],
        y: [y, y - 100],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2,
      }}
      className="absolute w-1 h-1 bg-white/40 rounded-full"
      style={{ left: `${x}%`, top: `${y}%` }}
    />
  )
}

export default function HeroGeometric({
  title1 = "Elevate Your",
  title2 = "Digital Vision",
  description = "Crafting exceptional digital experiences",
}: {
  title1?: string
  title2?: string
  description?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  }
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 500,
      })),
    )
  }, [])

  return (
    <div
      className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#030303]"
      suppressHydrationWarning
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {particles.map((p, i) => (
        <FloatingParticle key={i} delay={i * 0.3} x={p.x} y={p.y} />
      ))}

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 " >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.23, 0.86, 0.39, 0.96],
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6cl font-bold tracking-tight  leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#b38641] to-[#ded280] text-balance mt-2">
                Biz bilan tarixni yarating!
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.23, 0.86, 0.39, 0.96],
            }}
            className="flex flex-col items-center justify-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-4xl mx-auto mb-6"
            >
              <div className="absolute inset-0" />
              <img
                src="/logo.gold.studio.png"
                alt="Creative Studio Logosi"
                className="w-full object-contain relative z-10"
              />
            </motion.div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 mb-8"
          >
            <motion.p
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-base -mt-[40px] sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-balance"
            >
              Brendingizni go‘zal dizaynlar bilan o‘zgartiring — ular diqqatni tortadi, ilhomlantiradi va natija beradi.
              <span className="text-[#b38641] font-semibold ml-1">
                500+ mijozlar bizga ishonishgan.
              </span>
            </motion.p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6 mt-10"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#b38641] to-[#b38641]/40  text-white px-8 py-6 text-lg font-bold rounded-full shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  Hoziroq bog&apos;lanish
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="#about">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-white text-black border border-[#b38641]/60 hover:bg-gradient-to-r px-8 py-6 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(179,134,65,0.2)] hover:shadow-[0_0_40px_rgba(179,134,65,0.4)] transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-black/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  Biz haqimizda
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#b38641] to-[#b38641] border-2 border-[#030303] flex items-center justify-center text-xs font-bold text-black"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-gray-400">
                  <span className="text-white font-semibold">900+</span> baxtli mijozlar
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-gray-400">
                  <span className="text-white font-semibold">4.9/5</span> reyting
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="text-gray-400">
                  <span className="text-white font-semibold">1000+</span> loyihalar yetkazilgan
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>


      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}
