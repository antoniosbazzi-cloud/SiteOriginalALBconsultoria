"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, Users, Award, Quote } from "lucide-react"

export default function AboutSection() {
  const redirectToWhatsApp = () => {
    const message = "Olá! gostaria de solicitar uma cotação gratuita de plano de saúde."
    const whatsappUrl = `https://wa.me/5511977367924?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleConhecerCases = () => {
    const element = document.getElementById("depoimentos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const values = [
    {
      icon: Target,
      title: "Foco no Cliente",
      description:
        "Cada pessoa e empresa é única, por isso desenvolvemos soluções personalizadas para atender necessidades específicas em planos de saúde e odontológicos.",
    },
    {
      icon: Heart,
      title: "Compromisso com o Bem-estar",
      description: "Acreditamos que ter acesso à saúde de qualidade é fundamental para uma vida plena e próspera.",
    },
    {
      icon: Award,
      title: "Excelência em Serviços",
      description:
        "Buscamos constantemente a melhoria contínua para oferecer sempre o melhor atendimento em planos de saúde e odontológicos.",
    },
    {
      icon: Users,
      title: "Relacionamento Duradouro",
      description:
        "Construímos parcerias sólidas com as maiores operadoras do país, garantindo os melhores benefícios para todos os públicos.",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      company: "Cliente Individual",
      role: "Plano Familiar",
      content:
        "A ALB Consultoria me ajudou a encontrar o plano de saúde perfeito para minha família. Conseguimos economizar 30% e ter uma cobertura muito melhor.",
      rating: 5,
    },
    {
      name: "João Santos",
      company: "Indústria Moderna Ltda",
      role: "CEO",
      content:
        "Parceria excepcional! O atendimento é personalizado e os planos de saúde oferecidos superaram nossas expectativas. Recomendo para qualquer empresa.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      company: "Cliente Individual",
      role: "Plano Odontológico",
      content:
        "Profissionalismo e dedicação em cada etapa do processo. A implementação do meu plano odontológico foi rápida e sem complicações.",
      rating: 5,
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Sobre a <span className="text-primary">ALB Consultoria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Há mais de 10 anos no mercado, somos especialistas em planos de saúde e odontológicos para todos os
            públicos: corporativo, individual, familiar e odontológico, oferecendo soluções inteligentes e econômicas.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="text-center p-8 bg-white border-0 shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Oferecer os melhores planos de saúde e odontológicos para todos os públicos, promovendo o bem-estar
              através de soluções de qualidade e atendimento personalizado.
            </p>
          </Card>

          <Card className="text-center p-8 bg-white border-0 shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida como a principal consultoria em planos de saúde e odontológicos do país, referência em
              inovação e excelência no atendimento.
            </p>
          </Card>

          <Card className="text-center p-8 bg-white border-0 shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transparência, compromisso, inovação e foco no relacionamento duradouro com nossos clientes e as maiores
              operadoras de saúde do país.
            </p>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold text-foreground">O que nos move</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossos valores fundamentais guiam cada decisão em nossa jornada de excelência em planos de saúde e
              odontológicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold text-foreground">O que nossos clientes dizem</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="space-y-1">
                      <h5 className="font-bold text-foreground">{testimonial.name}</h5>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 bg-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Pronto para encontrar o plano ideal?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solicite uma cotação sem compromisso e descubra como podemos ajudar você a encontrar os melhores planos de
              saúde e odontológicos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={redirectToWhatsApp}
            >
              Solicitar Cotação
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              onClick={handleConhecerCases}
            >
              Conhecer Cases de Sucesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
