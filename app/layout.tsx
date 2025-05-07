import type React from "react"
import type { Metadata } from "next"
import { Inter, Kanit } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const kanit = Kanit({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
})

export const metadata: Metadata = {
  title: "Real Smart Logistics (Thailand) Co., Ltd",
  description: "Real Solutions, Smarter Logistics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kanit.variable}`}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
