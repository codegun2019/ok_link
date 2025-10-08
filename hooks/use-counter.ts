"use client"

import { useEffect, useRef, useState } from "react"

interface UseCounterOptions {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  separator?: string
}

export function useCounter({
  end,
  duration = 2000,
  decimals = 0,
  suffix = "",
  prefix = "",
  separator = "",
}: UseCounterOptions) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = easeOutQuart * end

      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isVisible, end, duration])

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals)
    if (separator && num >= 1000) {
      return fixed.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    }
    return fixed
  }

  const displayValue = `${prefix}${formatNumber(count)}${suffix}`

  return { ref, displayValue, count }
}
