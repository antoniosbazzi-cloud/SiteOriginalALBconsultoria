"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, CheckCircle, MessageCircle, Phone, X } from "lucide-react"

export default function HeroSection() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false)
  const [showAutoPopup, setShowAutoPopup] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoPlano: "",
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAutoPopup(true)
    }, 2000) // Show popup after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  const redirectToWhatsApp = () => {
    const message = "Olá! gostaria de solicitar uma cotação gratuita de plano de saúde."
    const whatsappUrl = `https://wa.me/5511977367924?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setShowWhatsAppPopup(false)
    setShowAutoPopup(false)
  }

  const sendFormToWhatsApp = (data: typeof formData) => {
    const message = `Olá! Solicito uma cotação gratuita de plano de saúde.

*Dados do Cliente:*
Nome: ${data.nome}
E-mail: ${data.email}
Telefone: ${data.telefone}
Tipo de Plano: ${data.tipoPlano}

Aguardo retorno. Obrigado!`

    const whatsappUrl = `https://wa.me/5511977367924?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const makePhoneCall = () => {
    window.open("tel:+5511977367924", "_self")
    setShowAutoPopup(false)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formDataObj = new FormData(form)

    const data = {
      nome: formDataObj.get("nome") as string,
      email: formDataObj.get("email") as string,
      telefone: formDataObj.get("telefone") as string,
      tipoPlano: formDataObj.get("tipoPlano") as string,
    }

    sendFormToWhatsApp(data)
  }

  const handleSolicitarCotacao = () => {
    redirectToWhatsApp()
  }

  const handleConhecerServicos = () => {
    const element = document.getElementById("servicos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">Melhores planos saúde</span> do mercado
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Especialistas em planos de saúde corporativos, individuais, familiares e odontológicos. Oferecemos
                soluções personalizadas com as melhores operadoras do mercado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleSolicitarCotacao}
              >
                Solicitar Cotação Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                onClick={handleConhecerServicos}
              >
                Conhecer Nossos Serviços
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">+500 clientes atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">10 anos de experiência</span>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="lg:pl-8">
            <Card className="p-8 bg-white shadow-xl border-0">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Economize até 30% em planos de saúde</h3>
                  <p className="text-muted-foreground">Preencha o formulário e receba uma proposta personalizada</p>
                </div>

                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome completo"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Telefone"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <select
                      name="tipoPlano"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-muted-foreground"
                    >
                      <option value="">Tipo de plano desejado</option>
                      <option value="Plano Individual">Plano Individual</option>
                      <option value="Plano Familiar">Plano Familiar</option>
                      <option value="Plano Corporativo">Plano Corporativo</option>
                      <option value="Plano Odontológico">Plano Odontológico</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                    Receber Proposta Gratuita
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center">
                  Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Operadoras Parceiras section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground">Algumas das operadoras parceiras</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <img
              src="/images/operadoras-parceiras.webp"
              alt="Logotipos das principais operadoras de planos de saúde parceiras: Bradesco Saúde, Hapvida, Amil, NotreDame Intermédica, SulAmérica e Porto Seguro"
              className="w-3/5 h-auto mx-auto"
            />
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <div className="flex items-center justify-center h-full">
            <Shield className="w-96 h-96 text-primary" />
          </div>
        </div>
      </div>

      {showAutoPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-foreground">Solicite sua Cotação Gratuita!</h3>
              <button onClick={() => setShowAutoPopup(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-muted-foreground mb-6">
              Somos especialistas em planos de saúde e odontológicos! Escolha como prefere falar conosco:
            </p>
            <div className="flex flex-col gap-3">
              <Button onClick={redirectToWhatsApp} className="w-full bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Solicitar Cotação via WhatsApp
              </Button>
              <Button onClick={makePhoneCall} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                Ligar Agora
              </Button>
              <Button variant="outline" onClick={() => setShowAutoPopup(false)} className="w-full">
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
