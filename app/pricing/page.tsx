"use client"

import { Button } from "@/components/ui/button"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function PricingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("instagram")
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveTab(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Header */}
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
              <Link href="/pricing" className="text-cyan-600 font-semibold border-b-2 border-cyan-600">
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
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-xl transition-all" asChild>
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
              className="block py-3 px-4 text-cyan-600 bg-cyan-50 rounded-lg font-semibold"
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fadeInUp">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">ราคาบริการ</h1>
            <p className="text-base md:text-lg text-gray-600">เลือกแพ็คเกจที่เหมาะกับคุณ รองรับทุกแพลตฟอร์มโซเชียลมีเดีย</p>
          </div>
        </div>
      </section>

      {/* Platform Tabs */}
      <section className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            <button
              onClick={() => scrollToSection("instagram")}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeTab === "instagram"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Instagram
            </button>
            <button
              onClick={() => scrollToSection("youtube")}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeTab === "youtube"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              YouTube
            </button>
            <button
              onClick={() => scrollToSection("tiktok")}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeTab === "tiktok" ? "bg-black text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              TikTok
            </button>
            <button
              onClick={() => scrollToSection("facebook")}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeTab === "facebook"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Facebook
            </button>
            <button
              onClick={() => scrollToSection("twitter")}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeTab === "twitter"
                  ? "bg-sky-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              X (Twitter)
            </button>
            <button
              onClick={() => scrollToSection("other")}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeTab === "other"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              บริการอื่นๆ
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section id="instagram" className="py-12 md:py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-semibold mb-4">
              Instagram
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">บริการ Instagram</h2>
          </div>

          {/* Instagram Hashtag Ranking */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fadeInUp">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              เพิ่มอันดับแฮชแท็ก
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">บริการ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ราคา (฿/10)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ขั้นต่ำ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">สูงสุด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์โพสต์ ให้ติดอันดับสูงในเพจ</td>
                    <td className="py-3 px-4 text-center font-semibold text-pink-600">฿12.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">500</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="py-3 px-4 text-sm">บริการรักษาให้โพสต์ติดอันดับสูง</td>
                    <td className="py-3 px-4 text-center font-semibold text-pink-600">฿3,500</td>
                    <td className="py-3 px-4 text-center text-gray-600">1</td>
                    <td className="py-3 px-4 text-center text-gray-600">30</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์โพสต์เพจคนต่างชาติ</td>
                    <td className="py-3 px-4 text-center font-semibold text-pink-600">฿2</td>
                    <td className="py-3 px-4 text-center text-gray-600">200</td>
                    <td className="py-3 px-4 text-center text-gray-600">1850</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Instagram Likes */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fadeInUp">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              เพิ่มยอดไลก์
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">บริการ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ราคา (฿/10)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ขั้นต่ำ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">สูงสุด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์คนไทย</td>
                    <td className="py-3 px-4 text-center font-semibold text-pink-600">฿15.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">50</td>
                    <td className="py-3 px-4 text-center text-gray-600">4000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์ต่างชาติ (บัญชีจริง) ⭐</td>
                    <td className="py-3 px-4 text-center font-semibold text-pink-600">฿0.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">50</td>
                    <td className="py-3 px-4 text-center text-gray-600">50000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์จากทั่วโลก (คุณภาพสูง)</td>
                    <td className="py-3 px-4 text-center font-semibold text-pink-600">฿0.39</td>
                    <td className="py-3 px-4 text-center text-gray-600">10</td>
                    <td className="py-3 px-4 text-center text-gray-600">50000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Instagram Followers */}
          <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              เพิ่มผู้ติดตาม
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">บริการ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ราคา (฿/10)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ขั้นต่ำ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">สูงสุด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามคนไทย</td>
                    <td className="py-3 px-4 text-center font-semibold text-pink-600">฿28.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">50</td>
                    <td className="py-3 px-4 text-center text-gray-600">4000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามต่างชาติ (บัญชีที่ดีที่สุด) ⭐</td>
                    <td className="py-3 px-4 text-center font-semibold text-pink-600">฿2.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">100000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามคนทั่วโลก (คุณภาพสูง)</td>
                    <td className="py-3 px-4 text-center font-semibold text-pink-600">฿1.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">800000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section id="youtube" className="py-12 md:py-16 scroll-mt-32 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-semibold mb-4">YouTube</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">บริการ YouTube</h2>
          </div>

          {/* YouTube Views */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fadeInUp">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              เพิ่มยอดวิว
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">บริการ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ราคา (฿/10)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ขั้นต่ำ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">สูงสุด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มยอดวิววิดีโอ (คนไทย & ช่วยเพิ่มอันดับ) ⭐</td>
                    <td className="py-3 px-4 text-center font-semibold text-red-600">฿4</td>
                    <td className="py-3 px-4 text-center text-gray-600">1000</td>
                    <td className="py-3 px-4 text-center text-gray-600">800000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มยอดวิววิดีโอ (ช่วยเพิ่มอันดับ) ⭐</td>
                    <td className="py-3 px-4 text-center font-semibold text-red-600">฿1.69</td>
                    <td className="py-3 px-4 text-center text-gray-600">500</td>
                    <td className="py-3 px-4 text-center text-gray-600">6500000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มวิววิดีโอ</td>
                    <td className="py-3 px-4 text-center font-semibold text-red-600">฿1.29</td>
                    <td className="py-3 px-4 text-center text-gray-600">500</td>
                    <td className="py-3 px-4 text-center text-gray-600">8000000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* YouTube Subscribers */}
          <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              เพิ่มผู้ติดตาม
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">บริการ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ราคา (฿/10)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ขั้นต่ำ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">สูงสุด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามช่อง (50-200 คน/วัน)</td>
                    <td className="py-3 px-4 text-center font-semibold text-red-600">฿12</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">100000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามช่อง (300-600 คน/วัน)</td>
                    <td className="py-3 px-4 text-center font-semibold text-red-600">฿15</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">200000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามช่อง (1000+ คน/วัน รวดเร็ว)</td>
                    <td className="py-3 px-4 text-center font-semibold text-red-600">฿18</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">200000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* TikTok Section */}
      <section id="tiktok" className="py-12 md:py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block bg-black text-white px-4 py-2 rounded-full font-semibold mb-4">TikTok</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">บริการ TikTok</h2>
          </div>

          {/* TikTok Likes */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fadeInUp">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              เพิ่มยอดไลก์
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">บริการ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ราคา (฿/10)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ขั้นต่ำ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">สูงสุด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์คนไทย (บัญชีที่ดีที่สุด) ⭐</td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">฿39</td>
                    <td className="py-3 px-4 text-center text-gray-600">10</td>
                    <td className="py-3 px-4 text-center text-gray-600">800</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์วิดีโอ (บัญชีที่ดีที่สุด) ⭐</td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">฿1.70</td>
                    <td className="py-3 px-4 text-center text-gray-600">50</td>
                    <td className="py-3 px-4 text-center text-gray-600">200000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์วิดีโอ (บัญชีคุณภาพสูง)</td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">฿1</td>
                    <td className="py-3 px-4 text-center text-gray-600">50</td>
                    <td className="py-3 px-4 text-center text-gray-600">100000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TikTok Followers */}
          <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              เพิ่มผู้ติดตาม
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">บริการ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ราคา (฿/10)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ขั้นต่ำ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">สูงสุด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามคนไทย (บัญชีที่ดีที่สุด) ⭐</td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">฿39</td>
                    <td className="py-3 px-4 text-center text-gray-600">10</td>
                    <td className="py-3 px-4 text-center text-gray-600">800</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามบัญชี (บัญชีจริง) ⭐</td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">฿4.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">10000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามบัญชี (บัญชีที่ดีที่สุด)</td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">฿3.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">50000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Section */}
      <section id="facebook" className="py-12 md:py-16 scroll-mt-32 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold mb-4">
              Facebook
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">บริการ Facebook</h2>
          </div>

          {/* Facebook Likes */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fadeInUp">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              เพิ่มยอดไลก์
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">บริการ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ราคา (฿/10)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ขั้นต่ำ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">สูงสุด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์โพสต์คนไทย (บัญชีจริง) ⭐</td>
                    <td className="py-3 px-4 text-center font-semibold text-blue-600">฿11.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">10</td>
                    <td className="py-3 px-4 text-center text-gray-600">15000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="py-3 px-4 text-sm">ปั้มไลค์โพสต์ คนไทย (บัญชีที่ดีที่สุด)</td>
                    <td className="py-3 px-4 text-center font-semibold text-blue-600">฿6.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">1500</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์โพสต์ (บัญชีจริง)</td>
                    <td className="py-3 px-4 text-center font-semibold text-blue-600">฿4</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">10000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Facebook Page Services */}
          <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              บริการเพจ
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">บริการ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ราคา (฿/10)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">ขั้นต่ำ</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">สูงสุด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์และผู้ติดตามเพจคนไทย (บัญชีจริง) ⭐</td>
                    <td className="py-3 px-4 text-center font-semibold text-blue-600">฿14.90</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">10000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="py-3 px-4 text-sm">เพิ่มไลค์และผู้ติดตามเพจ</td>
                    <td className="py-3 px-4 text-center font-semibold text-blue-600">฿4.50</td>
                    <td className="py-3 px-4 text-center text-gray-600">100</td>
                    <td className="py-3 px-4 text-center text-gray-600">30000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Twitter Section */}
      <section id="twitter" className="py-12 md:py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block bg-sky-500 text-white px-4 py-2 rounded-full font-semibold mb-4">
              X (Twitter)
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">บริการ X (Twitter)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Twitter Likes */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                เพิ่มยอดไลก์
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">บริการ</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700 text-sm">ราคา</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-sky-50 transition-colors">
                      <td className="py-3 px-4 text-sm">เพิ่มไลค์คนไทย</td>
                      <td className="py-3 px-4 text-center font-semibold text-sky-600">฿29</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-sky-50 transition-colors">
                      <td className="py-3 px-4 text-sm">เพิ่มไลค์โพสต์ (บัญชีจริง)</td>
                      <td className="py-3 px-4 text-center font-semibold text-sky-600">฿22.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Twitter Followers */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                เพิ่มผู้ติดตาม
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">บริการ</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700 text-sm">ราคา</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-sky-50 transition-colors">
                      <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามคนไทย</td>
                      <td className="py-3 px-4 text-center font-semibold text-sky-600">฿29</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-sky-50 transition-colors">
                      <td className="py-3 px-4 text-sm">เพิ่มผู้ติดตามบัญชี (บัญชีจริง)</td>
                      <td className="py-3 px-4 text-center font-semibold text-sky-600">฿24.90</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section id="other" className="py-12 md:py-16 scroll-mt-32 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full font-semibold mb-4">
              บริการอื่นๆ
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">บริการแพลตฟอร์มอื่นๆ</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Threads */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Threads</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>เพิ่มผู้ติดตามทั่วโลก</span>
                  <span className="font-semibold text-purple-600">฿5</span>
                </li>
                <li className="flex justify-between">
                  <span>เพิ่มไลค์จากต่างชาติ</span>
                  <span className="font-semibold text-purple-600">฿3.80</span>
                </li>
              </ul>
            </div>

            {/* Telegram */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Telegram</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>เพิ่มสมาชิกช่อง</span>
                  <span className="font-semibold text-purple-600">฿7.50</span>
                </li>
                <li className="flex justify-between">
                  <span>เพิ่มยอดวิวโพสต์</span>
                  <span className="font-semibold text-purple-600">฿0.25</span>
                </li>
              </ul>
            </div>

            {/* Spotify */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Spotify</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>เพิ่มจำนวนการเล่น</span>
                  <span className="font-semibold text-purple-600">฿1.50</span>
                </li>
                <li className="flex justify-between">
                  <span>เพิ่มผู้ฟังรายเดือน</span>
                  <span className="font-semibold text-purple-600">฿10</span>
                </li>
              </ul>
            </div>

            {/* Twitch */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Twitch</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>เพิ่มผู้ชมไลฟ์ (30 นาที)</span>
                  <span className="font-semibold text-purple-600">฿28</span>
                </li>
                <li className="flex justify-between">
                  <span>เพิ่มผู้ติดตาม</span>
                  <span className="font-semibold text-purple-600">฿3</span>
                </li>
              </ul>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
              <h3 className="text-lg font-bold text-gray-900 mb-4">LinkedIn</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>เพิ่มไลค์โพสต์</span>
                  <span className="font-semibold text-purple-600">฿90</span>
                </li>
                <li className="flex justify-between">
                  <span>เพิ่มผู้ติดตาม</span>
                  <span className="font-semibold text-purple-600">฿90</span>
                </li>
              </ul>
            </div>

            {/* Discord */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Discord</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>เพิ่มสมาชิกออนไลน์</span>
                  <span className="font-semibold text-purple-600">฿35</span>
                </li>
                <li className="flex justify-between">
                  <span>เพิ่มสมาชิกออฟไลน์</span>
                  <span className="font-semibold text-purple-600">฿17.50</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">พร้อมเริ่มต้นแล้วหรือยัง?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">สมัครสมาชิกวันนี้ รับส่วนลดพิเศษ 20% สำหรับการสั่งซื้อครั้งแรก</p>
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 text-lg shadow-2xl hover:scale-105 transition-all"
            >
              ลงทะเบียนเลย
            </Button>
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
