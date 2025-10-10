import HeroGeometric from "@/components/hero-section"
import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
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


      <section id="team">
        <TeamSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  )
}
