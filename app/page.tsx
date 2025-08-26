import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import BenefitsSection from "@/components/benefits-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <AboutSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
