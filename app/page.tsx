import HeroGeometric from "@/components/hero-section"
import ScrollingLogos, { sampleLogos } from '@/components/logos-carousel'
import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import ProjectsSection from '@/components/sections/projects-section'
import ServicesSection from "@/components/sections/service-section"
import TeamSection from "@/components/sections/team-section"
import TestimonialsSection from "@/components/sections/testimonials-section"

export default function HomePage() {
  return (
    <main >
      <section id="hero">
        <HeroGeometric
          title2="Biz bilan tarixni yarating !"
          description="To'ylar va bayramlar uchun professional video va foto xizmatlar. Har bir lahzani san'atga aylantiramiz."
        />
      </section>

      <section id="about">
        <AboutSection />

      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section>
        <ProjectsSection />
      </section>

      <section id="team">
        <TeamSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
      <section>
        <div className=" antialiased py-12 ">
          <div className="container mx-auto px-6">
            <div className="text-center mx-auto max-w-lg mb-8">
              <h1 className="font-mono font-medium text-[#BE123C] uppercase text-xs tracking-widest">
                Bizga ishonch bildirgan kompaniyalar
              </h1>
            </div>
            <ScrollingLogos logos={sampleLogos} />
          </div>
        </div>
      </section>
    </main>
  )
}
