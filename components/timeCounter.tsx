import { Employee, TimeRemaining } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { motion } from "framer-motion"
import { Calendar, Gift, PartyPopper, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'


export default function EmployeeCard({ employee, isToday }: { employee: Employee & { timeRemaining: TimeRemaining }; isToday: boolean }) {
  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase()

  return (
    <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#E11D48] to-[#BE123C] text-white shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Avatar className="w-60 h-60 rounded-xl border-4 border-white shadow-xl">
          <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
          <AvatarFallback className="text-2xl font-bold rounded-xl bg-white text-[#E11D48]">
            {getInitials(employee.name)}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 text-center md:text-left">
          {isToday ? (
            <div>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <PartyPopper className="w-8 h-8" />
                <span className="text-2xl sm:text-3xl font-bold">Tug‘ilgan kuningiz bilan!</span>
                <PartyPopper className="w-8 h-8" />
              </motion.div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">{employee.name}</h3>
              <p className="text-lg mb-1 opacity-90">{employee.position}</p>
              <p className="text-base opacity-80">{employee.department}</p>

              <motion.div className="mt-6 p-4 bg-white/20 rounded-xl" animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <Gift className="w-6 h-6" />
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-lg font-semibold leading-relaxed">
                  Butun kompaniya nomidan sizga quvonch, kulgi va maxsus lahzalar bilan to‘la ajoyib tug‘ilgan kun tilaymiz!
                </p>
              </motion.div>
            </div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-2 mb-3 bg-white/20 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Keyingi Tug‘ilgan Kun</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{employee.name}</h3>
              <p className="text-base mb-1 opacity-90">{employee.position}</p>
              <p className="text-sm mb-4 opacity-80">{employee.department}</p>

              <Countdown birthday={employee.birthday} />

              <div className="flex items-center gap-2 mt-4 text-sm opacity-80">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(new Date().getFullYear(), Number(employee.birthday.split("-")[0]) - 1, Number(employee.birthday.split("-")[1]))
                    .toLocaleDateString("uz-UZ", { month: "long", day: "numeric" })}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}



function Countdown({ birthday }: { birthday: string }) {
		const [time, setTime] = useState<TimeRemaining>(calculateTimeRemaining(birthday))

		useEffect(() => {
				const timer = setInterval(() => setTime(calculateTimeRemaining(birthday)), 1000)
				return () => clearInterval(timer)
		}, [birthday])

		return (
				<div className="flex items-center gap-1 flex-wrap">
						{time.months > 0 && (
								<>
										<div className="text-center">
												<div className="text-xl font-bold text-[#E11D48]">{time.months}</div>
												<div className="text-xs text-gray-600">Oy</div>
										</div>
										<div className="text-lg text-gray-300">:</div>
								</>
						)}
						<div className="text-center">
								<div className="text-xl font-bold text-[#E11D48]">{time.days}</div>
								<div className="text-xs text-gray-600">Kun</div>
						</div>
						<div className="text-lg text-gray-300">:</div>
						<div className="text-center">
								<div className="text-xl font-bold text-[#E11D48]">{time.hours}</div>
								<div className="text-xs text-gray-600">Soat</div>
						</div>
						<div className="text-lg text-gray-300">:</div>
						<div className="text-center">
								<div className="text-xl font-bold text-[#E11D48]">{time.minutes}</div>
								<div className="text-xs text-gray-600">Minut</div>
						</div>
						<div className="text-lg text-gray-300">:</div>
						<div className="text-center">
								<div className="text-xl font-bold text-[#E11D48]">{time.seconds}</div>
								<div className="text-xs text-gray-600">Sekund</div>
						</div>
				</div>
		)
}


export  function calculateTimeRemaining(birthdayStr: string): TimeRemaining {
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