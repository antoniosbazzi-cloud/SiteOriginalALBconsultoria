import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, employees, planType, message } = body

    // Create email content
    const emailContent = `
Nova solicitação de cotação recebida:

Nome: ${name}
Email: ${email}
Telefone: ${phone}
Empresa: ${company}
Número de funcionários: ${employees || "Não informado"}
Tipo de plano: ${planType || "Não informado"}
Mensagem: ${message || "Não informada"}

---
Enviado através do site ALB Consultoria
Data: ${new Date().toLocaleString("pt-BR")}
    `

    // For now, we'll use a simple approach with fetch to a service like Formspree or EmailJS
    // You can replace this with your preferred email service
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "albconsultoriabeneficios@outlook.com",
        subject: `Nova cotação de ${name} - ${company}`,
        message: emailContent,
        _replyto: email,
      }),
    })

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Email enviado com sucesso!" })
    } else {
      throw new Error("Falha ao enviar email")
    }
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json({ success: false, message: "Erro ao enviar email. Tente novamente." }, { status: 500 })
  }
}
