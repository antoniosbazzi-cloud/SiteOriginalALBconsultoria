import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, Clock, Shield, Users, Award, Zap } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Economia de até 30%",
      description: "Negociamos diretamente com as operadoras para garantir os melhores preços do mercado.",
      highlight: "Economia Garantida",
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Processos otimizados que reduzem o tempo de implementação dos benefícios em até 50%.",
      highlight: "Rapidez",
    },
    {
      icon: Shield,
      title: "Segurança e Confiabilidade",
      description: "15 anos de experiência no mercado com mais de 500 empresas atendidas com sucesso.",
      highlight: "Experiência",
    },
    {
      icon: Users,
      title: "Suporte Personalizado",
      description: "Equipe dedicada para cada cliente, garantindo atendimento humanizado e eficiente.",
      highlight: "Atendimento VIP",
    },
    {
      icon: Award,
      title: "Melhores Operadoras",
      description: "Parcerias exclusivas com as principais operadoras de saúde e seguradoras do país.",
      highlight: "Qualidade Premium",
    },
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Processo de implementação simplificado, com início dos benefícios em até 15 dias.",
      highlight: "Agilidade",
    },
  ]

  const stats = [
    { number: "500+", label: "Empresas Atendidas" },
    { number: "15", label: "Anos de Experiência" },
    { number: "30%", label: "Economia Média" },
    { number: "98%", label: "Satisfação dos Clientes" },
  ]

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Por que escolher a <span className="text-primary">ALB Consultoria</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em benefícios corporativos e oferecemos muito mais que simples corretagem. Somos seus
            parceiros estratégicos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      {benefit.highlight}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process Steps */}
        <div className="bg-card/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold text-foreground">Como Funciona Nosso Processo</h3>
            <p className="text-lg text-muted-foreground">
              Um processo simples e transparente para implementar os melhores benefícios na sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análise Inicial",
                description: "Entendemos as necessidades específicas da sua empresa e colaboradores.",
              },
              {
                step: "02",
                title: "Cotação Personalizada",
                description: "Elaboramos propostas customizadas com as melhores operadoras do mercado.",
              },
              {
                step: "03",
                title: "Apresentação",
                description: "Apresentamos as opções com análise comparativa detalhada de custos e benefícios.",
              },
              {
                step: "04",
                title: "Implementação",
                description: "Cuidamos de todo o processo de implementação e treinamento da equipe.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {process.step}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-foreground">{process.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-8 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
