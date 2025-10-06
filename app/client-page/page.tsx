"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { checkClientId } from "@/lib/checkCleintId"
import Cookies from "js-cookie"
import { Loader2, LogOut } from "lucide-react"

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
export interface Client {
  client_id: number
  name: string
  videos: string[]
}

export default function LoginPage() {
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([])
  const [code, setCode] = useState(Array(6).fill(""))
  const [error, setError] = useState("")
  const [client, setClient] = useState<Client | null>(null)
  const [loading, setLoading] = useState(false)
  const [shake, setShake] = useState(false)
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    const savedClientId = Cookies.get("client_id")
    if (savedClientId) {
      setLoading(true)
      checkClientId(savedClientId).then((clientData) => {
        if (clientData) {
          setClient(clientData)
        } else {
          Cookies.remove("client_id")
        }
        setLoading(false)
      })
    }
  }, [])

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)
    setError("")
    setShake(false)
    if (value && index < 5) inputsRef.current[index + 1]?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) inputsRef.current[index - 1]?.focus()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const clientId = code.join("")
    if (clientId.length < 6) return setError("ID to‘liq emas!")

    setLoading(true)
    const clientData = await checkClientId(clientId)
    setLoading(false)

    if (clientData) {
      setClient(clientData)
      Cookies.set("client_id", clientId, { expires: 30 })
    } else {
      setError("Mijoz topilmadi 😕")
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  const handleLogout = () => {
    Cookies.remove("client_id")
    setClient(null)
    setCode(Array(6).fill(""))
    setError("")
  }

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })),
    )
  }, [])

  if (loading && !client && code.every((c) => !c)) {
    return (
      <div className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
        <Loader2 className='animate-spin text-[#E11D48]' />
      </div>
    )
  }

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full mt-20 text-center"
      >
        {!client ? (
          <motion.form
            onSubmit={handleSubmit}
            animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="bg-white/10 backdrop-blur-xl max-w-lg mx-auto p-8 rounded-2xl shadow-2xl border border-white/20"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">Mijoz sahifasiga kirish</h2>
            <p className="text-white/70 mb-6">6 xonali mijoz ID raqamingizni kiriting</p>

            <div className="flex justify-between gap-2 mb-4">
              {code.map((num, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    inputsRef.current[i] = el
                  }}

                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={num}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-12 h-14 text-center text-xl font-semibold rounded-xl
                            bg-white/10 text-white border border-white/20
                            focus:outline-none focus:ring-2 focus:ring-indigo-400
                            transition-all duration-200 hover:bg-white/15"
                />
              ))}
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mb-4 font-medium"
              >
                {error}
              </motion.p>
            )}

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="group w-full relative overflow-hidden bg-[#E11D48] hover:bg-[#BE123C] text-white px-8 py-4 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {loading ? "Tekshirilmoqda..." : "Kirish"}
            </Button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl container mx-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">{client.name}</h2>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Chiqish
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {client.videos?.map((url: string, i: number) => (
                <div key={i} className="bg-black rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="260"
                    src={url}
                    title={`video-${i}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}
