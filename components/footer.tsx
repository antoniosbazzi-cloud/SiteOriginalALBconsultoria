import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function Footer() {
  const redirectToWhatsApp = () => {
    const message = "Olá! gostaria de solicitar uma cotação gratuita de plano de saúde."
    const whatsappUrl = `https://wa.me/5511977367924?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const services = [
    "Planos de Saúde Corporativos",
    "Planos Odontológicos",
    "Consultoria em Convênios Médicos",
    "Gestão de Benefícios de Saúde",
    "Suporte Especializado",
    "Negociação com Operadoras",
  ]

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Contato", href: "#contato" },
  ]

  const legalLinks = [
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Termos de Uso", href: "/termos" },
    { name: "LGPD", href: "/lgpd" },
    { name: "Trabalhe Conosco", href: "/carreiras" },
  ]

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Receba dicas exclusivas sobre planos de saúde e odontológicos
              </h3>
              <p className="text-background/80 leading-relaxed">
                Assine nossa newsletter e fique por dentro das novidades do mercado, dicas de gestão de planos de saúde
                e ofertas especiais das melhores operadoras.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="bg-background text-foreground border-background/20"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-background/60">Não enviamos spam. Você pode cancelar a qualquer momento.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-background">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="#servicos" className="text-background/80 hover:text-background transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-background">Links Rápidos</h4>
            <div className="space-y-6">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <h5 className="font-medium text-background">Legal</h5>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-background/80 hover:text-background transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-background">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-background font-medium">(11) 97736-7924</p>
                  <p className="text-background/60 text-sm">WhatsApp - Segunda a sexta, 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-background font-medium">albconsultoriabeneficios@outlook.com</p>
                  <p className="text-background/60 text-sm">Resposta em até 2 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-background font-medium">Rua Alexandre Levi, 150</p>
                  <p className="text-background/60 text-sm">São Paulo/SP</p>
                  <p className="text-background/60 text-sm">Atendimento com agendamento</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h5 className="font-medium text-background">Certificações</h5>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-background/10 rounded text-xs text-background">ANS</div>
                <div className="px-3 py-1 bg-background/10 rounded text-xs text-background">SUSEP</div>
                <div className="px-3 py-1 bg-background/10 rounded text-xs text-background">ISO 9001</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">© 2024 ALB Consultoria. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span>CNPJ: 47.368.612/0001-03</span>
              <span>|</span>
              <span>Desenvolvido com ❤️ para cuidar da saúde dos seus colaboradores</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
