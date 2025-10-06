"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-rose-500/10 to-orange-500/10 rounded-full blur-2xl animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-pacifico text-3xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creative Studio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sizning eng muhim lahzalaringizni professional video va fotosuratlarga aylantiramiz.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-purple-500/20 flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-purple-500/20 flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-purple-500/20 flex items-center justify-center transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space-grotesk text-lg font-semibold text-white mb-6">Tezkor havolalar</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Loyihalar
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Jamoa
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-space-grotesk text-lg font-semibold text-white mb-6">Xizmatlarimiz</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">To&apos;y videosuratlari</li>
              <li className="text-gray-400 text-sm">Professional fotosurat</li>
              <li className="text-gray-400 text-sm">Nikoh marosimlari</li>
              <li className="text-gray-400 text-sm">Bayram tadbirlari</li>
              <li className="text-gray-400 text-sm">Sevgi hikoyalari</li>
              <li className="text-gray-400 text-sm">Maxsus loyihalar</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-space-grotesk text-lg font-semibold text-white mb-6">Aloqa</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>+998 90 123 45 67</div>
                  <div>+998 91 234 56 78</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>info@creativestudio.uz</div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>Toshkent shahar, Chilonzor tumani, Bunyodkor ko&apos;chasi 12</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Creative Studio. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Maxfiylik siyosati
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Foydalanish shartlari
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
