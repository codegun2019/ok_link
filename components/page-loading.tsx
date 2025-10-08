"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"

export function PageLoading() {
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname, mounted])

  if (!mounted || !loading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-white/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-200 border-t-cyan-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-orange-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg animate-pulse"></div>
          <span className="font-bold text-xl text-gray-900">{t('brand.name')}</span>
        </div>
        <p className="text-sm text-gray-600 animate-pulse">{t('loading.text')}</p>
      </div>
    </div>
  )
}
