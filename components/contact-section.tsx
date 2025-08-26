"use client"

import type React from "react"
import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      content: "(11) 97736-7924",
      description: "Atendimento de segunda a sexta",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "albconsultoriabeneficios@outlook.com",
      description: "Resposta em até 2 horas",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Alexandre Levi, 150 - São Paulo/SP",
      description: "Atendimento presencial com agendamento",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "08:00 às 18:00",
      description: "Segunda a sexta-feira",
    },
  ]

  const handleWhatsAppClick = () => {
    const message = "Olá! gostaria de solicitar uma cotação gratuita de plano de saúde."
    const whatsappUrl = `https://wa.me/5511977367924?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      employees: formData.get("employees") as string,
      planType: formData.get("planType") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage("Solicitação enviada com sucesso! Entraremos em contato em breve.")
        ;(e.target as HTMLFormElement).reset()
      } else {
        setSubmitMessage("Erro ao enviar solicitação. Tente novamente ou entre em contato via WhatsApp.")
      }
    } catch (error) {
      setSubmitMessage("Erro ao enviar solicitação. Tente novamente ou entre em contato via WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você. Fale conosco e descubra como podemos ajudar você a encontrar os melhores
            planos de saúde e odontológicos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Solicite sua Cotação</h3>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas úteis.
              </p>
            </div>

            <Card className="p-8 bg-card/50 border-0 shadow-lg">
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nome completo *</label>
                    <Input name="name" placeholder="Seu nome completo" className="bg-white" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">E-mail *</label>
                    <Input name="email" type="email" placeholder="seu@email.com" className="bg-white" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Telefone *</label>
                    <Input name="phone" type="tel" placeholder="(11) 99999-9999" className="bg-white" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nome da empresa</label>
                    <Input name="company" placeholder="Nome da sua empresa" className="bg-white" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Número de funcionários</label>
                    <select
                      name="employees"
                      className="w-full px-3 py-2 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="">Selecione</option>
                      <option value="1-10">1 a 10 funcionários</option>
                      <option value="11-50">11 a 50 funcionários</option>
                      <option value="51-100">51 a 100 funcionários</option>
                      <option value="100+">Mais de 100 funcionários</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Tipo de plano</label>
                    <select
                      name="planType"
                      className="w-full px-3 py-2 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="">Selecione</option>
                      <option value="individual">Plano Individual</option>
                      <option value="familiar">Plano Familiar</option>
                      <option value="corporativo">Plano Corporativo</option>
                      <option value="odontologico">Plano Odontológico</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensagem</label>
                  <Textarea
                    name="message"
                    placeholder="Conte-nos mais sobre suas necessidades de planos de saúde..."
                    className="bg-white min-h-[120px]"
                  />
                </div>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-md text-sm ${
                      submitMessage.includes("sucesso")
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade e aceita receber
                  comunicações da ALB Consultoria.
                </p>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Informações de Contato</h3>
              <p className="text-muted-foreground">
                Múltiplos canais de atendimento para sua comodidade. Escolha a forma que preferir para falar conosco.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index} className="p-6 bg-card/50 border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-foreground">{info.title}</h4>
                        <p className="text-primary font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Atendimento via WhatsApp
              </h4>
              <Card className="p-6 bg-green-50 border border-green-200">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="space-y-2">
                    <h5 className="font-medium text-foreground">Fale Conosco Agora</h5>
                    <p className="text-sm text-muted-foreground">
                      Solicite sua cotação de plano de saúde diretamente pelo WhatsApp
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    (11) 97736-7924
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map placeholder */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-primary mx-auto" />
                  <p className="text-foreground font-medium">Nosso Escritório</p>
                  <p className="text-sm text-muted-foreground">Rua Alexandre Levi, 150 - São Paulo/SP</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
