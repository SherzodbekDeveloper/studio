"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Cake, Calendar, PartyPopper } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { type Employee, sampleEmployees, type TimeRemaining } from "@/types"

function calculateTimeRemaining(birthdayStr: string): TimeRemaining {
  const now = new Date()
  const currentYear = now.getFullYear()
  const [month, day] = birthdayStr.split("-").map(Number)

  let nextBirthday = new Date(currentYear, month - 1, day, 23, 59, 59, 999)

  if (nextBirthday < now) {
    nextBirthday = new Date(currentYear + 1, month - 1, day, 23, 59, 59, 999)
  }

  const totalMs = nextBirthday.getTime() - now.getTime()

  const months = Math.floor(totalMs / (1000 * 60 * 60 * 24 * 30.44))
  const remainingAfterMonths = totalMs - months * 1000 * 60 * 60 * 24 * 30.44
  const days = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remainingAfterMonths % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((remainingAfterMonths % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((remainingAfterMonths % (1000 * 60)) / 1000)

  return { months, days, hours, minutes, seconds, totalMs }
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

function FallingCelebration() {
  const [elements, setElements] = useState<Array<{ id: number; x: number; icon: string; delay: number }>>([])

  useEffect(() => {
    const celebrationIcons = ["🎉", "🎊", "🎈", "🎁", "✨", "🌟"]
    const newElements = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      icon: celebrationIcons[Math.floor(Math.random() * celebrationIcons.length)],
      delay: Math.random() * 2,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ y: -50, x: `${element.x}vw`, opacity: 1, rotate: 0 }}
          animate={{
            y: "110vh",
            rotate: 360,
            opacity: [1, 1, 0.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: element.delay,
            ease: "linear",
          }}
          className="absolute text-2xl"
          style={{ left: 0 }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  )
}

function TimeDisplay({ employee }: { employee: Employee & { timeRemaining: TimeRemaining } }) {
  const [mounted, setMounted] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(employee.timeRemaining)

  useEffect(() => {
    setMounted(true)

    const timer = setInterval(() => {
      const newTime = calculateTimeRemaining(employee.birthday)
      setTimeRemaining(newTime)
    }, 1000)

    return () => clearInterval(timer)
  }, [employee.birthday])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-400">--</div>
          <div className="text-xs text-gray-500">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
      {timeRemaining.months > 0 && (
        <>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">{timeRemaining.months}</div>
            <div className="text-xs text-gray-600">Oy</div>
          </div>
          <div className="text-2xl text-gray-300">:</div>
        </>
      )}
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-gray-900">{timeRemaining.days}</div>
        <div className="text-xs text-gray-600">Kun</div>
      </div>
      <div className="text-2xl text-gray-300">:</div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-gray-900">{timeRemaining.hours}</div>
        <div className="text-xs text-gray-600">Soat</div>
      </div>
      <div className="text-2xl text-gray-300">:</div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-gray-900">{timeRemaining.minutes}</div>
        <div className="text-xs text-gray-600">Minut</div>
      </div>
      <div className="text-2xl text-gray-300">:</div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-gray-900">{timeRemaining.seconds}</div>
        <div className="text-xs text-gray-600">Sekund</div>
      </div>
    </div>
  )
}

function SmallTimeDisplay({ employee }: { employee: Employee & { timeRemaining: TimeRemaining } }) {
  const [mounted, setMounted] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(employee.timeRemaining)

  useEffect(() => {
    setMounted(true)

    const timer = setInterval(() => {
      const newTime = calculateTimeRemaining(employee.birthday)
      setTimeRemaining(newTime)
    }, 1000)

    return () => clearInterval(timer)
  }, [employee.birthday])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-400">--</div>
          <div className="text-xs text-gray-500">Loading</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {timeRemaining.months > 0 && (
        <>
          <div className="text-center">
            <div className="text-lg font-semibold text-[#E11D48]">{timeRemaining.months}</div>
            <div className="text-xs text-gray-600">Oy</div>
          </div>
          <div className="text-sm text-gray-300">:</div>
        </>
      )}
      <div className="text-center">
        <div className="text-lg font-semibold text-[#E11D48]">{timeRemaining.days}</div>
        <div className="text-xs text-gray-600">Kun</div>
      </div>
      <div className="text-sm text-gray-300">:</div>
      <div className="text-center">
        <div className="text-lg font-semibold text-[#E11D48]">{timeRemaining.hours}</div>
        <div className="text-xs text-gray-600">Soat</div>
      </div>
      <div className="text-sm text-gray-300">:</div>
      <div className="text-center">
        <div className="text-lg font-semibold text-[#E11D48]">{timeRemaining.minutes}</div>
        <div className="text-xs text-gray-600">Minut</div>
      </div>
      <div className="text-sm text-gray-300">:</div>
      <div className="text-center">
        <div className="text-lg font-semibold text-[#E11D48]">{timeRemaining.seconds}</div>
        <div className="text-xs text-gray-600">Sekund</div>
      </div>
    </div>
  )
}

export default function EmployeeBirthdaySection({ employees = sampleEmployees }: { employees?: Employee[] }) {
  const [mounted, setMounted] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const upcomingBirthdays = employees
    .map((employee) => ({
      ...employee,
      timeRemaining: calculateTimeRemaining(employee.birthday),
    }))
    .sort((a, b) => a.timeRemaining.totalMs - b.timeRemaining.totalMs)

  const closestBirthday = upcomingBirthdays[0]
  const nextThreeBirthdays = upcomingBirthdays.slice(1, 4)

  const isBirthdayToday = (employee: Employee & { timeRemaining: TimeRemaining }) => {
    const now = new Date()
    const [month, day] = employee.birthday.split("-").map(Number)
    const birthdayThisYear = new Date(now.getFullYear(), month - 1, day)

    return now.getMonth() === birthdayThisYear.getMonth() && now.getDate() === birthdayThisYear.getDate()
  }

  const celebratingToday = upcomingBirthdays.filter((employee) => isBirthdayToday(employee))

  useEffect(() => {
    if (!inView) return

    if (celebratingToday.length > 0) {
      setShowCelebration(true)
      const timer = setTimeout(() => {
        setShowCelebration(false)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [inView, celebratingToday.length])

  if (upcomingBirthdays.length === 0) {
    return null
  }

  return (
    <motion.section
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      {showCelebration && <FallingCelebration />}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-50 via-transparent to-transparent opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Cake className="w-7 h-7 text-[#E11D48]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Yaqinlashayotgan Tug'ilgan Kunlar
            </h2>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">Jamoamiz a'zolarini nishonlaymiz</p>
        </motion.div>

        <div className="space-y-8">
          {closestBirthday && mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-[#E11D48]/10">
                  <AvatarImage src={closestBirthday.image} alt={closestBirthday.name} />
                  <AvatarFallback className="text-2xl font-bold bg-[#E11D48]/10 text-[#E11D48]">
                    {getInitials(closestBirthday.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center md:text-left">
                  {isBirthdayToday(closestBirthday) ? (
                    <div>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, repeat: 3 }}
                        className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#E11D48] text-white rounded-full"
                      >
                        <PartyPopper className="w-5 h-5" />
                        <span className="text-lg font-semibold">Bugun Tug'ilgan Kun!</span>
                        <PartyPopper className="w-5 h-5" />
                      </motion.div>
                      <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">{closestBirthday.name}</h3>
                      <p className="text-lg text-gray-600 mb-1">{closestBirthday.position}</p>
                      <p className="text-base text-gray-500 mb-6">{closestBirthday.department}</p>
                      <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-base text-gray-700 leading-relaxed">
                          Butun kompaniya nomidan sizga quvonch, kulgi va maxsus lahzalar bilan to'la ajoyib tug'ilgan
                          kun tilaymiz! 🎉
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-[#E11D48] text-white rounded-full text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        <span>Keyingi Tug'ilgan Kun</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">{closestBirthday.name}</h3>
                      <p className="text-base text-gray-600 mb-1">{closestBirthday.position}</p>
                      <p className="text-sm text-gray-500 mb-6">{closestBirthday.department}</p>

                      <TimeDisplay employee={closestBirthday} />

                      <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(
                            new Date().getFullYear(),
                            Number.parseInt(closestBirthday.birthday.split("-")[0]) - 1,
                            Number.parseInt(closestBirthday.birthday.split("-")[1]),
                          ).toLocaleDateString("uz-UZ", { month: "long", day: "numeric" })}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {nextThreeBirthdays.length > 0 && mounted && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextThreeBirthdays.map((employee, index) => (
                <motion.div
                  key={employee.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-[#E11D48]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="w-24 h-24 border-2 border-gray-100">
                      <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
                      <AvatarFallback className="text-lg font-bold bg-[#E11D48]/10 text-[#E11D48]">
                        {getInitials(employee.name)}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className="text-xl font-bold mb-1 text-gray-900">{employee.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{employee.position}</p>
                      <p className="text-xs text-gray-500">{employee.department}</p>
                    </div>

                    <SmallTimeDisplay employee={employee} />

                    <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100 w-full justify-center">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(
                          new Date().getFullYear(),
                          Number.parseInt(employee.birthday.split("-")[0]) - 1,
                          Number.parseInt(employee.birthday.split("-")[1]),
                        ).toLocaleDateString("uz-UZ", { month: "short", day: "numeric" })}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
