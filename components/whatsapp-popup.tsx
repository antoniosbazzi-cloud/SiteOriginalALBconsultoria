"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, MessageCircle, Phone } from "lucide-react"

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    funcionarios: "",
    mensagem: "",
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000) // Mostra o popup após 5 segundos

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Olá! Gostaria de solicitar uma cotação de plano de saúde:

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*Telefone:* ${formData.telefone}
*Número de funcionários:* ${formData.funcionarios}
*Mensagem:* ${formData.mensagem}

Aguardo retorno!`

    const whatsappUrl = `https://wa.me/5511977367924?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="relative">
          <Button variant="ghost" size="sm" className="absolute right-2 top-2" onClick={() => setIsOpen(false)}>
            <X className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl text-foreground">Solicite sua Cotação</CardTitle>
              <p className="text-sm text-muted-foreground">Fale direto conosco no WhatsApp</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="nome" placeholder="Seu nome completo" value={formData.nome} onChange={handleChange} required />
            <Input
              name="empresa"
              placeholder="Nome da empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
            />
            <Input
              name="telefone"
              placeholder="Seu telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
            <Input
              name="funcionarios"
              placeholder="Número de funcionários"
              value={formData.funcionarios}
              onChange={handleChange}
              required
            />
            <Textarea
              name="mensagem"
              placeholder="Conte-nos sobre suas necessidades..."
              value={formData.mensagem}
              onChange={handleChange}
              rows={3}
            />
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Enviar para WhatsApp
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
