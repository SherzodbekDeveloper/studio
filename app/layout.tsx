import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "sonner"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Creative Studio - To'y va Bayram Videolari",
  description: "Jizzaxda professional video va fotosurat xizmatlari. To'y, love story, bayram va maxsus loyihalar uchun videolar tayyorlaymiz.",
  keywords: [
    "creative studio",
    "video ishlab chiqarish",
    "to'y videosuratlari",
    "love story videosi",
    "tadbir videolari",
    "Jizzax video",
    "bayram videolari",
    "professional fotosurat",
    "maxsus loyiha videolari"
  ].join(", "),
  authors: [{ name: "Creative Studio", url: "https://creativestudio.uz" }],
  openGraph: {
    title: "Creative Studio - To'y va Bayram Videolari",
    description: "Jizzaxda professional video va fotosurat xizmatlari",
    url: "https://creativestudio.uz",
    siteName: "Creative Studio",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjuV39rea102NvpyZg8gRtbyPGrXggb1TkQ&s",
        width: 1200,
        height: 630,
        alt: "Creative Studio - Professional Video Xizmatlari"
      }
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Studio - To'y va Bayram Videolari",
    description: "Jizzaxda professional video va fotosurat xizmatlari",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjuV39rea102NvpyZg8gRtbyPGrXggb1TkQ&s"],
    site: "@CreativeStudio",
    creator: "@CreativeStudio"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://creativestudio.uz" />
        <link rel="alternate" hrefLang="uz" href="https://creativestudio.uz" />
        <link rel="alternate" hrefLang="ru" href="https://creativestudio.uz/ru" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Creative Studio",
              "url": "https://creativestudio.uz",
              "logo": "https://creativestudio.uz/logo.png",
              "sameAs": [
                "https://instagram.com/creativestudio",
                "https://facebook.com/creativestudio",
                "https://youtube.com/creativestudio"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+998901234567",
                "contactType": "customer service",
                "contactOption": "Jizzax, O'zbekiston"
              }
            })
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <Navbar />
          {children}
          <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  )
}
