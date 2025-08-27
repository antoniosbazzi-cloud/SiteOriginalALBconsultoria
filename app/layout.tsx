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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T9S32SMW');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9S32SMW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  )
}
