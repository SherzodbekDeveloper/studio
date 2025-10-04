import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, Pacifico } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from '@/components/footer'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export const metadata: Metadata = {
  title: "Kokonut Studio - To'y va Bayram Videolari",
  description: "Professional video production for weddings and celebrations",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${pacifico.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
