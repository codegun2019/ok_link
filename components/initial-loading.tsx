"use client"

import { useEffect, useState } from "react"

export function InitialLoading() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Prevent hydration mismatch
  if (!mounted || !loading) return null

  return (
    <div className="fixed inset-0 z-[99999] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center animate-fadeOut">
      <div className="flex flex-col items-center gap-6 animate-fadeInUp">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-24 h-24 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          {/* Inner ring */}
          <div className="absolute inset-2 w-20 h-20 border-4 border-white/20 border-t-orange-300 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-lg shadow-2xl flex items-center justify-center animate-pulse">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">พร้อมไลน์</h1>
          <p className="text-white/80 text-sm animate-pulse">Promline | ພ້ອມລາຍ</p>
        </div>

        <div className="flex gap-2 mt-4">
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}
