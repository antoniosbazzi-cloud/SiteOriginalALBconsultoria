"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const redirectToWhatsApp = () => {
    const message = "Olá! gostaria de solicitar uma cotação gratuita de plano de saúde."
    const whatsappUrl = `https://wa.me/5511977367924?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/alb-logo.png" alt="ALB Consultoria" width={200} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </Link>
            <Link href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </Link>
            <Link href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre Nós
            </Link>
            <Link href="#beneficios" className="text-foreground hover:text-primary transition-colors font-medium">
              Benefícios
            </Link>
            <Link href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={redirectToWhatsApp}>
              Solicitar Cotação
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-foreground hover:text-primary">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Início
              </Link>
              <Link
                href="#servicos"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
              <Link
                href="#sobre"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Sobre Nós
              </Link>
              <Link
                href="#beneficios"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Benefícios
              </Link>
              <Link
                href="#contato"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Contato
              </Link>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4"
                onClick={redirectToWhatsApp}
              >
                Solicitar Cotação
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
