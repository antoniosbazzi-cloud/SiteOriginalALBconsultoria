"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const [showPopup, setShowPopup] = useState(false)

  const redirectToWhatsApp = () => {
    const message = "Olá! gostaria de solicitar uma cotação gratuita de plano de saúde."
    const whatsappUrl = `https://wa.me/5511977367924?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setShowPopup(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setShowPopup(true)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* WhatsApp Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-foreground">Fale Conosco no WhatsApp</h3>
              <button onClick={() => setShowPopup(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-muted-foreground mb-6">
              Somos especialistas em planos de saúde e odontológicos! Clique no botão abaixo para falar diretamente com
              nossa equipe no WhatsApp.
            </p>
            <div className="flex gap-3">
              <Button onClick={redirectToWhatsApp} className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Abrir WhatsApp
              </Button>
              <Button variant="outline" onClick={() => setShowPopup(false)} className="flex-1">
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
