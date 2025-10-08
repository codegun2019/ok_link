"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon, Bars3Icon } from "@heroicons/react/24/outline"
import Link from "next/link"

export function FloatingMenu() {
  const [showGoTop, setShowGoTop] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setIsCollapsed(false)
    timerRef.current = setTimeout(() => {
      setIsCollapsed(true)
    }, 30000) // 30 seconds
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoTop(true)
      } else {
        setShowGoTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    resetTimer()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    resetTimer()
  }

  const handleInteraction = () => {
    resetTimer()
  }

  return (
    <div
      className="fixed right-4 md:right-6 bottom-6 z-50 animate-fade-in"
      onMouseEnter={handleInteraction}
      onClick={handleInteraction}
    >
      {isCollapsed ? (
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
          onClick={() => setIsCollapsed(false)}
        >
          <Bars3Icon className="h-6 w-6" />
        </Button>
      ) : (
        <div className="flex flex-col gap-3 bg-white/90 backdrop-blur-lg rounded-full p-3 shadow-lg border border-gray-200/50 transition-all duration-300">
          {/* LINE */}
          <Link
            href="https://line.me/ti/p/~yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </Button>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              LINE
            </span>
          </Link>

          {/* WhatsApp */}
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="group relative">
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </Button>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              WhatsApp
            </span>
          </Link>

          {/* Facebook */}
          <Link
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-[#1877F2] hover:bg-[#1565d8] text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Button>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Facebook
            </span>
          </Link>

          {/* TikTok */}
          <Link
            href="https://tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-black hover:bg-gray-800 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </Button>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              TikTok
            </span>
          </Link>

          {showGoTop && (
            <div className="relative group">
              <Button
                onClick={scrollToTop}
                size="icon"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ArrowUpIcon className="h-6 w-6" />
              </Button>
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                กลับขึ้นด้านบน
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
