"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from './ui/button'
import Link from 'next/link'

const navItems = [
  { name: "Bosh sahifa", href: "/", scrollTo: "hero" },
  { name: "Biz haqimizda", href: "/#about", scrollTo: "about" },
  { name: "Xizmatlar", href: "/#services", scrollTo: "services" },
  { name: "Jamoa", href: "/#team", scrollTo: "team" },
  { name: "Aloqa", href: "/#contact", scrollTo: "contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map(item => item.scrollTo).filter(Boolean)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, item) => {
    // Agar login yoki boshqa sahifa link bo‘lsa, to‘xtatma
    if (!item.scrollTo) return

    e.preventDefault()

    const element = document.getElementById(item.scrollTo)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }

    setIsMobileMenuOpen(false)
  }


  const isActive = (item) => {
    if (item.scrollTo === "hero" && !isScrolled) return true
    return activeSection === item.scrollTo
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#030303]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, navItems[0])}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
              Creative Studio
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${isActive(item)
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.name}
              </a>
            ))}

            <Link href={'/client-page'}>
              <Button
                size='sm'
                className="group cursor-pointer relative overflow-hidden bg-white hover:bg-[#BE123C] text-black hover:text-white px-4 py-3 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute  inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                Mijoz sahifasi
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#030303]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${isActive(item)
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}