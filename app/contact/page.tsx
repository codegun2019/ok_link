"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("ขอบคุณที่ติดต่อเรา! เราจะตอบกลับโดยเร็วที่สุด")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-lg shadow-cyan-500/5 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 animate-slideInLeft">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg"></div>
              <span className="font-bold text-xl md:text-2xl">{t('brand.name')}</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 animate-fadeInUp">
              <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                {t('nav.home')}
              </Link>
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
              <Link href="/contact" className="text-cyan-600 font-semibold border-b-2 border-cyan-600">
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
            <Link
              href="/"
              className="block py-3 px-4 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
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
              className="block py-3 px-4 text-cyan-600 bg-cyan-50 rounded-lg font-semibold"
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
      <section className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">ติดต่อเรา</h1>
            <p className="text-xl md:text-2xl text-white/90">มีคำถามหรือข้อสงสัย? เราพร้อมช่วยเหลือคุณตลอด 24/7</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slideInLeft">
              <div className="bg-gradient-to-br from-gray-50 to-cyan-50 p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">ส่งข้อความถึงเรา</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      ชื่อ-นามสกุล
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="กรอกชื่อของคุณ"
                      className="w-full h-12 border-2 focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      อีเมล
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full h-12 border-2 focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700 font-medium">
                      หัวข้อ
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="เรื่องที่ต้องการติดต่อ"
                      className="w-full h-12 border-2 focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      ข้อความ
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="รายละเอียดที่ต้องการติดต่อ..."
                      rows={6}
                      className="w-full resize-none border-2 focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    ส่งข้อความ
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slideInRight">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">ข้อมูลติดต่อ</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    ทีมงานของเราพร้อมให้บริการและตอบคำถามของคุณตลอด 24 ชั่วโมง 7 วันต่อสัปดาห์
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">อีเมล</h3>
                      <p className="text-gray-600">support@alllink.com</p>
                      <p className="text-gray-600">info@alllink.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">โทรศัพท์</h3>
                      <p className="text-gray-600">+66 2 123 4567</p>
                      <p className="text-gray-600">+66 89 123 4567</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">ที่อยู่</h3>
                      <p className="text-gray-600">
                        123 ถนนสุขุมวิท แขวงคลองเตย
                        <br />
                        เขตคลองเตย กรุงเทพฯ 10110
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">เวลาทำการ</h3>
                      <p className="text-gray-600">จันทร์ - ศุกร์: 9:00 - 18:00</p>
                      <p className="text-gray-600">เสาร์ - อาทิตย์: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">ติดตามเราบนโซเชียลมีเดีย</h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">แผนที่</h2>
              <p className="text-lg text-gray-600">ที่ตั้งสำนักงานของเรา</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">แผนที่จะแสดงที่นี่</p>
                  <p className="text-sm text-gray-500 mt-2">123 ถนนสุขุมวิท แขวงคลองเตย กรุงเทพฯ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">มีคำถามเพิ่มเติม?</h2>
            <p className="text-lg text-gray-600 mb-8">ลองดูคำถามที่พบบ่อยของเรา หรือติดต่อทีมงานโดยตรง</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 bg-transparent"
                asChild
              >
                <Link href="/faq">ดูคำถามที่พบบ่อย</Link>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              >
                แชทกับเรา
              </Button>
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
              <h3 className="font-bold text-base md:text-lg mb-4">ผลิตภัณฑ์</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    ฟีเจอร์
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    ราคา
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    แพลตฟอร์มที่รองรับ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    ตัวอย่างการใช้งาน
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">บริษัท</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    เกี่ยวกับเรา
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    บล็อก
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    ร่วมงานกับเรา
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    ติดต่อเรา
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    พันธมิตร
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">ช่วยเหลือ</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    ศูนย์ช่วยเหลือ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    คำถามที่พบบ่อย
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    คู่มือการใช้งาน
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    สถานะระบบ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    รายงานปัญหา
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
                  นโยบายความเป็นส่วนตัว
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  เงื่อนไขการใช้งาน
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  นโยบายคุกกี้
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
