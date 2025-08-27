import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "ALB Consultoria - Planos de Saúde e Odontológicos",
  description:
    "Especialistas em planos de saúde corporativos, individuais, familiares e odontológicos há mais de 10 anos. Melhores planos de saúde do mercado.",
  keywords:
    "planos de saúde, planos odontológicos, ALB Consultoria, saúde corporativa, planos individuais, planos familiares",
  authors: [{ name: "ALB Consultoria" }],
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17424404960"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17424404960');
            `,
          }}
        />
        {/* End Google Analytics */}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
