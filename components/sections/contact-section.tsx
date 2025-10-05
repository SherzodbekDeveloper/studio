"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useRef, useState } from "react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <div className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-display text-balance">
            Biz bilan bog&apos;laning
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-balance">
            Savollaringiz bormi? Biz bilan bog&apos;laning va biz sizga yordam beramiz
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 font-display">
              Aloqa ma&apos;lumotlari
            </h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Telefon</div>
                  <a
                    href="tel:+998901234567"
                    className="text-xl text-gray-900 hover:text-indigo-600 transition-colors"
                  >
                    +998 (90) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Email</div>
                  <a
                    href="mailto:info@creative.uz"
                    className="text-xl text-gray-900 hover:text-rose-600 transition-colors"
                  >
                    info@creative.uz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Manzil</div>
                  <div className="text-xl text-gray-900">
                    Toshkent, Chilonzor tumani, Bunyodkor ko&apos;chasi 12
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-rose-50 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 font-display">Ish vaqti</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Dushanba - Juma:</span>
                  <span className="text-gray-900">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shanba:</span>
                  <span className="text-gray-900">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Yakshanba:</span>
                  <span className="text-gray-500">Dam olish</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 mb-2 font-medium">
                  Ismingiz
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ismingizni kiriting"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-900 mb-2 font-medium">
                  Telefon raqam
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+998 (90) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 mb-2 font-medium">
                  Xabar
                </label>
                <Textarea
                  id="message"
                  placeholder="Xabaringizni yozing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 min-h-32 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white h-12 text-lg font-medium"
              >
                Xabar yuborish
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
