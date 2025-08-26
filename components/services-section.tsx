"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Heart, Calculator, FileText, Headphones, CheckCircle } from "lucide-react"

export default function ServicesSection() {
  const redirectToWhatsApp = () => {
    const message = "Olá! gostaria de solicitar uma cotação gratuita de plano de saúde."
    const whatsappUrl = `https://wa.me/5511977367924?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const services = [
    {
      icon: Shield,
      title: "Planos de Saúde Corporativos",
      description:
        "Soluções completas em planos de saúde para empresas de todos os portes, com as melhores operadoras do mercado.",
      features: ["Cobertura nacional", "Rede credenciada ampla", "Atendimento 24h"],
    },
    {
      icon: Users,
      title: "Planos Individuais e Familiares",
      description:
        "Proteção completa para você e sua família com planos personalizados que atendem suas necessidades específicas.",
      features: ["Planos individuais", "Cobertura familiar", "Flexibilidade de escolha"],
    },
    {
      icon: Heart,
      title: "Planos Odontológicos",
      description:
        "Cuidado completo com a saúde bucal para todos os públicos, incluindo procedimentos preventivos e curativos.",
      features: ["Limpeza e prevenção", "Tratamentos curativos", "Ortodontia disponível"],
    },
    {
      icon: Calculator,
      title: "Consultoria Personalizada",
      description:
        "Análise detalhada das suas necessidades para encontrar a melhor solução em planos de saúde e odontológicos.",
      features: ["Análise de custos", "Comparativo de operadoras", "Relatórios detalhados"],
    },
    {
      icon: FileText,
      title: "Gestão de Benefícios",
      description:
        "Administração completa dos seus planos, desde a implementação até o suporte contínuo para todos os tipos de cliente.",
      features: ["Implementação", "Suporte contínuo", "Relatórios mensais"],
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description:
        "Atendimento dedicado com especialistas em planos de saúde e odontológicos para esclarecer dúvidas e resolver questões.",
      features: ["Atendimento dedicado", "Especialistas qualificados", "Suporte via WhatsApp"],
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em planos de saúde e odontológicos para pessoas físicas, famílias e empresas,
            sempre focando no melhor custo-benefício e bem-estar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
