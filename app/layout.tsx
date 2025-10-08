import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Sarabun } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { FloatingMenu } from "@/components/floating-menu"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { InitialLoading } from "@/components/initial-loading"
import { PageLoading } from "@/components/page-loading"
import "./globals.css"

const sarabun = Sarabun({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["thai", "latin"],
  variable: "--font-sarabun",
  display: "swap",
})

export const metadata: Metadata = {
  title: "พร้อมไลน์ - สร้างหน้าลิงก์รวมทุกโซเชียล เพิ่มยอดผู้ติดตามทุกแพลตฟอร์ม",
  description: "รวมทุกโซเชียลไว้ในลิงก์เดียว พร้อมระบบปั้มยอด & วิเคราะห์ผล | Instagram, YouTube, TikTok, Facebook",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body className={`font-thai ${sarabun.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <InitialLoading />
          <PageLoading />
          <Suspense>{children}</Suspense>
          <FloatingMenu />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
