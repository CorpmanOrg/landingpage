import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "CorpMan - Financial Solutions",
  description: "Chase your dreams with our financial solutions",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}
