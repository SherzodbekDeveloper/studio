import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, Pacifico } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})




export const metadata: Metadata = {
  title: "Creative Studio - To'y va Bayram Videolari",
  description: "Professional video production for weddings and celebrations",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <Navbar />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
