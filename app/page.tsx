"use client"

import { Button } from "@/components/ui/button"
import {
  SparklesIcon,
  ChartBarIcon,
  UsersIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  LockClosedIcon,
  BoltIcon,
  Bars3Icon,
  XMarkIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline"
import { CheckCircleIcon as CheckCircleSolid, StarIcon as StarSolid } from "@heroicons/react/24/solid"
import { Youtube, Facebook, Check, Users, Palette, Globe } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useCounter } from "@/hooks/use-counter"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const usersCounter = useCounter({ end: 2, decimals: 0, suffix: "M+" })
  const linksCounter = useCounter({ end: 50, decimals: 0, suffix: "M+" })
  const countriesCounter = useCounter({ end: 150, decimals: 0, suffix: "+" })

  const uptimeCounter = useCounter({ end: 99.9, decimals: 1, suffix: "%" })
  const speedCounter = useCounter({ end: 1, decimals: 0, prefix: "<", suffix: "s" })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-lg shadow-cyan-500/5 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 animate-slideInLeft">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg"></div>
              <span className="font-bold text-xl md:text-2xl">{t('brand.name')}</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 animate-fadeInUp">
              <a href="/" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                {t('nav.home')}
              </a>
              <Link href="/features" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                {t('nav.features')}
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                {t('nav.pricing')}
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                {t('nav.blog')}
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                {t('nav.faq')}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                {t('nav.contact')}
              </Link>
            </nav>
            <div className="flex items-center gap-3 md:gap-4 animate-slideInRight">
              <LanguageSwitcher />
              <Button variant="ghost" className="text-gray-700 hover:text-cyan-600 hidden sm:inline-flex" asChild>
                <Link href="/login">{t('nav.login')}</Link>
              </Button>
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/register">{t('nav.register')}</Link>
              </Button>
              <button
                className="md:hidden p-2 hover:bg-cyan-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6 text-gray-700" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container mx-auto px-4 py-4 space-y-3 bg-white/90 backdrop-blur-xl border-t border-white/20">
            <a
              href="/"
              className="block py-3 px-4 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </a>
            <Link
              href="/features"
              className="block py-3 px-4 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.features')}
            </Link>
            <Link
              href="/pricing"
              className="block py-3 px-4 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.pricing')}
            </Link>
            <Link
              href="/blog"
              className="block py-3 px-4 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.blog')}
            </Link>
            <Link
              href="/faq"
              className="block py-3 px-4 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.faq')}
            </Link>
            <Link
              href="/contact"
              className="block py-3 px-4 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <div className="pt-3 border-t border-cyan-200">
              <Button
                variant="ghost"
                className="w-full text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 justify-start mb-2"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <Link href="/login">{t('nav.login')}</Link>
              </Button>
              <Button
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <Link href="/register">{t('nav.register')}</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E0F7FA] via-[#E0F7FA] to-cyan-100 py-12 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB6A3] rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse-slow delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left animate-slideInLeft">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <SparklesIcon className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-gray-700">{t('home.hero.badge')}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('home.hero.title')}
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0 font-medium">
                {t('home.hero.subtitle')}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-base md:text-lg"
                  asChild
                >
                  <Link href="/register">{t('home.hero.startFree')}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-cyan-500 transition-all text-base md:text-lg"
                  asChild
                >
                  <Link href="/login">{t('home.hero.login')}</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-slideInRight">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
              <div className="relative z-10 flex items-center justify-center gap-3 md:gap-4 flex-wrap">
                <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl transition-all hover:scale-110 animate-float">
                  <svg
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                    viewBox="0 0 24 24"
                    fill="url(#instagram-gradient)"
                  >
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl transition-all hover:scale-110 animate-float delay-200">
                  <svg className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="#FF0000">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl transition-all hover:scale-110 animate-float delay-400">
                  <svg className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Button Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fadeInUp">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              {t('home.socialSection.title')}
            </h2>
            <h3 className="text-base md:text-lg text-gray-600 font-medium">{t('home.socialSection.description')}</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto">
            <button className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn text-sm md:text-base">
              Instagram
            </button>
            <button className="bg-red-600 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn delay-100 text-sm md:text-base">
              YouTube
            </button>
            <button className="bg-black text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn delay-200 text-sm md:text-base">
              TikTok
            </button>
            <button className="bg-blue-600 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn delay-300 text-sm md:text-base">
              Facebook
            </button>
            <button className="bg-sky-500 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn delay-400 text-sm md:text-base">
              Twitter
            </button>
            <button className="bg-green-500 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn delay-500 text-sm md:text-base">
              LINE
            </button>
            <button className="bg-purple-600 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn delay-600 text-sm md:text-base">
              Twitch
            </button>
            <button className="bg-blue-700 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn text-sm md:text-base">
              LinkedIn
            </button>
            <button className="bg-red-700 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn delay-100 text-sm md:text-base">
              Pinterest
            </button>
            <button className="bg-green-600 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn delay-200 text-sm md:text-base">
              Spotify
            </button>
            <button className="bg-gray-900 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn delay-300 text-sm md:text-base">
              GitHub
            </button>
            <button className="bg-orange-600 text-white p-3 md:p-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all animate-scaleIn delay-400 text-sm md:text-base">
              SoundCloud
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fadeInUp">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-600">{t('home.features.description')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-fadeInUp">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-7 h-7 md:w-8 md:h-8 text-orange-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-center">{t('home.features.analytics.title')}</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">{t('home.features.analytics.description')}</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-fadeInUp delay-200">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-7 h-7 md:w-8 md:h-8 text-cyan-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-center">{t('home.features.customize.title')}</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                {t('home.features.customize.description')}
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-fadeInUp delay-400 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="w-7 h-7 md:w-8 md:h-8 text-purple-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-center">{t('home.features.accessible.title')}</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                {t('home.features.accessible.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boost Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fadeInUp">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              {t('home.boostSection.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-600">{t('home.additionalFeatures.description')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="text-center group animate-fadeInUp">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <BoltIcon className="w-7 h-7 md:w-8 md:h-8 text-cyan-600" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{t('home.boostSection.automated')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('home.boostSection.automatedDesc')}</p>
            </div>

            <div className="text-center group animate-fadeInUp delay-200">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <ShieldCheckIcon className="w-7 h-7 md:w-8 md:h-8 text-purple-600" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{t('home.boostSection.fastSafe')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('home.boostSection.fastSafeDesc')}</p>
            </div>

            <div className="text-center group animate-fadeInUp delay-400">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <UsersIcon className="w-7 h-7 md:w-8 md:h-8 text-orange-600" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{t('home.boostSection.realGrowth')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('home.boostSection.realGrowthDesc')}</p>
            </div>

            <div className="text-center group animate-fadeInUp delay-600">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <ChartBarIcon className="w-7 h-7 md:w-8 md:h-8 text-green-600" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{t('home.boostSection.deepInsights')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('home.boostSection.deepInsightsDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fadeInUp">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              {t('home.trustSection.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-600">{t('home.trustSection.description')}</p>
          </div>

          <div className="relative max-w-4xl mx-auto mb-8 md:mb-12 animate-scaleIn">
            <img src="/world-map-location-pins.png" alt="World Map" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-fadeInUp">
              <div
                ref={usersCounter.ref}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2"
              >
                {usersCounter.displayValue}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{t('home.stats.users')}</div>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-fadeInUp delay-200">
              <div
                ref={linksCounter.ref}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2"
              >
                {linksCounter.displayValue}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{t('home.stats.links')}</div>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-fadeInUp delay-400 sm:col-span-3 lg:col-span-1">
              <div
                ref={countriesCounter.ref}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
              >
                {countriesCounter.displayValue}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{t('home.stats.countries')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.whySection.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div ref={uptimeCounter.ref} className="text-5xl font-bold text-orange-600 mb-2">
                {uptimeCounter.displayValue}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{t('home.stats.uptime')}</div>
              <p className="text-gray-600">{t('home.stats.uptimeDesc')}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div ref={speedCounter.ref} className="text-5xl font-bold text-cyan-600 mb-2">
                {speedCounter.displayValue}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{t('home.stats.speed')}</div>
              <p className="text-gray-600">{t('home.stats.speedDesc')}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{t('home.stats.support')}</div>
              <p className="text-gray-600">{t('home.stats.supportDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Integration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t('home.integrations.instagram.badge')}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.integrations.instagram.title')}</h2>
              <p className="text-gray-600 mb-6">{t('home.integrations.instagram.description')}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.instagram.feature1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.instagram.feature2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.instagram.feature3')}</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                {t('home.integrations.instagram.button')}
              </Button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold">@yourusername</div>
                    <div className="text-sm text-gray-500">Instagram</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-gray-200 rounded-lg"></div>
                  <div className="aspect-square bg-gray-200 rounded-lg"></div>
                  <div className="aspect-square bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="bg-red-100 p-8 rounded-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Youtube className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Your Channel</div>
                      <div className="text-sm text-gray-500">YouTube</div>
                    </div>
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-3"></div>
                  <div className="text-sm font-semibold text-gray-900">วิดีโอล่าสุด</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t('home.integrations.youtube.badge')}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.integrations.youtube.title')}</h2>
              <p className="text-gray-600 mb-6">{t('home.integrations.youtube.description')}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.youtube.feature1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.youtube.feature2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.youtube.feature3')}</span>
                </li>
              </ul>
              <Button className="bg-red-600 hover:bg-red-700 text-white">{t('home.integrations.youtube.button')}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* TikTok Integration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t('home.integrations.tiktok.badge')}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.integrations.tiktok.title')}</h2>
              <p className="text-gray-600 mb-6">{t('home.integrations.tiktok.description')}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.tiktok.feature1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.tiktok.feature2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.tiktok.feature3')}</span>
                </li>
              </ul>
              <Button className="bg-black hover:bg-gray-900 text-white">{t('home.integrations.tiktok.button')}</Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-black rounded-full"></div>
                  <div>
                    <div className="font-semibold">@yourtiktok</div>
                    <div className="text-sm text-gray-500">TikTok</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-[9/16] bg-gray-200 rounded-lg"></div>
                  <div className="aspect-[9/16] bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="bg-blue-100 p-8 rounded-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Your Page</div>
                      <div className="text-sm text-gray-500">Facebook</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="aspect-video bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t('home.integrations.facebook.badge')}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.integrations.facebook.title')}</h2>
              <p className="text-gray-600 mb-6">{t('home.integrations.facebook.description')}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.facebook.feature1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.facebook.feature2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('home.integrations.facebook.feature3')}</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">{t('home.integrations.facebook.button')}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.howItWorks.title')}</h2>
            <p className="text-gray-600">{t('home.howItWorks.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.howItWorks.step1.title')}</h3>
              <p className="text-gray-600">{t('home.howItWorks.step1.description')}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center">
                  <Palette className="w-8 h-8 text-cyan-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.howItWorks.step2.title')}</h3>
              <p className="text-gray-600">{t('home.howItWorks.step2.description')}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.howItWorks.step3.title')}</h3>
              <p className="text-gray-600">{t('home.howItWorks.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fadeInUp">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{t('home.testimonials.title')}</h2>
            <p className="text-base md:text-lg text-gray-600">{t('home.testimonials.description')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-fadeInUp">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarSolid key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                "{t('home.testimonials.review1.text')}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm md:text-base text-gray-900">{t('home.testimonials.review1.author')}</div>
                  <div className="text-xs md:text-sm text-gray-500">{t('home.testimonials.review1.role')}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-fadeInUp delay-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarSolid key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                "{t('home.testimonials.review2.text')}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm md:text-base text-gray-900">{t('home.testimonials.review2.author')}</div>
                  <div className="text-xs md:text-sm text-gray-500">{t('home.testimonials.review2.role')}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-fadeInUp delay-400 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarSolid key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                "{t('home.testimonials.review3.text')}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm md:text-base text-gray-900">{t('home.testimonials.review3.author')}</div>
                  <div className="text-xs md:text-sm text-gray-500">{t('home.testimonials.review3.role')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 text-base md:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
              >
                {t('home.cta.startFree')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 px-8 text-base md:text-lg bg-transparent backdrop-blur-sm shadow-xl hover:scale-105 transition-all"
              >
                {t('home.cta.viewPackages')}
              </Button>
            </div>
            <p className="text-white/80 mt-6 text-sm md:text-base">{t('home.cta.note')}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fadeInUp">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{t('home.faq.title')}</h2>
            <p className="text-base md:text-lg text-gray-600">{t('home.faq.description')}</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-cyan-50 p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all animate-fadeInUp">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                <CheckCircleSolid className="w-5 h-5 md:w-6 md:h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>{t('home.faq.q1.question')}</span>
              </h3>
              <p className="text-sm md:text-base text-gray-600 ml-7 md:ml-8">
                {t('home.faq.q1.answer')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all animate-fadeInUp delay-200">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                <CheckCircleSolid className="w-5 h-5 md:w-6 md:h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>{t('home.faq.q2.question')}</span>
              </h3>
              <p className="text-sm md:text-base text-gray-600 ml-7 md:ml-8">
                {t('home.faq.q2.answer')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all animate-fadeInUp delay-400">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                <CheckCircleSolid className="w-5 h-5 md:w-6 md:h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>{t('home.faq.q3.question')}</span>
              </h3>
              <p className="text-sm md:text-base text-gray-600 ml-7 md:ml-8">
                {t('home.faq.q3.answer')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all animate-fadeInUp delay-600">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                <CheckCircleSolid className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{t('home.faq.q4.question')}</span>
              </h3>
              <p className="text-sm md:text-base text-gray-600 ml-7 md:ml-8">
                {t('home.faq.q4.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg"></div>
                <span className="font-bold text-xl md:text-2xl">{t('brand.name')}</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">{t('footer.products.title')}</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.products.features')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.products.pricing')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.products.platforms')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.products.examples')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.products.api')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">{t('footer.company.title')}</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.company.about')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.company.blog')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.company.careers')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.company.contact')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.company.partners')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">{t('footer.support.title')}</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.support.helpCenter')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.support.faq')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.support.guide')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.support.status')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {t('footer.support.report')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">{t('footer.copyright')}</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  {t('footer.privacy')}
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  {t('footer.terms')}
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  {t('footer.cookies')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
