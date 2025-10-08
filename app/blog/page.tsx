"use client"

import { Button } from "@/components/ui/button"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageSwitcher } from "@/components/language-switcher"

const articles = [
  {
    id: 1,
    title: "วิธีเพิ่มยอดผู้ติดตาม TikTok ปี 2025 อย่างมีประสิทธิภาพ",
    description: "เทคนิคและกลยุทธ์ที่จะช่วยให้คุณเพิ่มยอดผู้ติดตาม TikTok อย่างรวดเร็วและยั่งยืน",
    category: "TikTok",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    date: "15 ม.ค. 2025",
  },
  {
    id: 2,
    title: "ทำอย่างไรให้ Instagram โพสต์ไม่ถูกซ่อนโดยอัลกอริทึม",
    description: "เคล็ดลับการทำให้โพสต์ของคุณเข้าถึงผู้ติดตามได้มากขึ้นและไม่ถูกซ่อนโดยอัลกอริทึม",
    category: "Instagram",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    date: "14 ม.ค. 2025",
  },
  {
    id: 3,
    title: "กลยุทธ์เพิ่มยอดมีเดีย Instagram ปี 2025",
    description: "วิธีการเพิ่มยอดมีเดียและการมีส่วนร่วมบน Instagram ให้ได้ผลจริง พร้อมตัวอย่างที่ใช้ได้จริง",
    category: "Instagram",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80",
    date: "13 ม.ค. 2025",
  },
  {
    id: 4,
    title: "ใช้ฟีเจอร์ใหม่ใน Instagram ให้เกิดประโยชน์สูงสุด",
    description: "รู้จักและใช้งานฟีเจอร์ใหม่ๆ ของ Instagram ที่จะช่วยเพิ่มการมีส่วนร่วมและยอดผู้ติดตาม",
    category: "Instagram",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    date: "12 ม.ค. 2025",
  },
  {
    id: 5,
    title: "สร้างวิดีโอ Instagram Reels ให้ปัง ด้วยเทคนิคง่ายๆ",
    description: "5 ขั้นตอนง่ายๆ ในการสร้าง Instagram Reels ที่น่าสนใจและได้รับความนิยม พร้อมตัวอย่างที่ใช้ได้จริง",
    category: "Instagram",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    date: "11 ม.ค. 2025",
  },
  {
    id: 6,
    title: "เพิ่ม Engagement Carousel IG ด้วย 2 เทคนิค",
    description: "กลยุทธ์การใช้ Carousel Posts บน Instagram ให้ได้รับการมีส่วนร่วมสูงสุด พร้อมเคล็ดลับจากผู้เชี่ยวชาญ",
    category: "Instagram",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    date: "10 ม.ค. 2025",
  },
  {
    id: 7,
    title: "ใช้ฮิตแท็ก Instagram ให้ถูกวิธี",
    description: "วิธีการเลือกและใช้ Hashtag บน Instagram ให้มีประสิทธิภาพ เพิ่มการเข้าถึงและยอดผู้ติดตาม",
    category: "Instagram",
    image: "https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?w=800&q=80",
    date: "9 ม.ค. 2025",
  },
  {
    id: 8,
    title: "อัลกอริทึม TikTok 2025: ทำความเข้าใจและใช้ให้เป็นประโยชน์",
    description: "เจาะลึกอัลกอริทึม TikTok ปี 2025 และวิธีการทำให้วิดีโอของคุณติด For You Page",
    category: "TikTok",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80",
    date: "8 ม.ค. 2025",
  },
  {
    id: 9,
    title: "วิธีเพิ่มยอดไลค์ TikTok ให้ปังขึ้น",
    description: "เทคนิคการเพิ่มยอดไลค์บน TikTok ด้วยวิธีธรรมชาติและยั่งยืน พร้อมตัวอย่างที่ใช้ได้จริง",
    category: "TikTok",
    image: "https://images.unsplash.com/photo-1611926653670-1e4e4e8e5b1d?w=800&q=80",
    date: "7 ม.ค. 2025",
  },
  {
    id: 10,
    title: "TikTok ต้องมีกี่โพสต์ถึงจะไวรัล?",
    description: "คำตอบที่หลายคนอยากรู้ ว่าต้องโพสต์กี่ครั้งถึงจะมีโอกาสไวรัลบน TikTok พร้อมสถิติและข้อมูลจริง",
    category: "TikTok",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    date: "6 ม.ค. 2025",
  },
  {
    id: 11,
    title: "6 ปัญหาของ Instagram ที่คุณต้องรู้ (และวิธีแก้)",
    description: "ปัญหาที่พบบ่อยบน Instagram และวิธีการแก้ไขอย่างมีประสิทธิภาพ พร้อมคำแนะนำจากผู้เชี่ยวชาญ",
    category: "Instagram",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    date: "5 ม.ค. 2025",
  },
  {
    id: 12,
    title: "ทำอย่างไรให้ TikTok ไม่ซ้ำใคร",
    description: "เคล็ดลับการสร้างเนื้อหา TikTok ที่โดดเด่นและไม่เหมือนใคร เพื่อดึงดูดผู้ติดตามใหม่ๆ",
    category: "TikTok",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80",
    date: "4 ม.ค. 2025",
  },
]

export default function BlogPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("ทั้งหมด")
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 9
  const { t } = useLanguage()

  const categories = ["ทั้งหมด", "Instagram", "TikTok"]

  const filteredArticles =
    selectedCategory === "ทั้งหมด" ? articles : articles.filter((article) => article.category === selectedCategory)

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const currentArticles = filteredArticles.slice(startIndex, endIndex)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
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
              <Link href="/pricing" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                {t('nav.pricing')}
              </Link>
              <Link href="/blog" className="text-cyan-600 font-semibold border-b-2 border-cyan-600">
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

        {/* Mobile Menu */}
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
              className="block py-3 px-4 text-cyan-600 bg-cyan-50 rounded-lg font-semibold"
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
      <section className="bg-gradient-to-br from-[#FFF9F5] to-[#FFF3E0] py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              บล็อกหมวดปั้มเคล็ดลับการตลาดบน Instagram, YouTube และโซเชียลมีเดียโดยรวม
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              เป็นบล็อกสาระความรู้จากทาง SNS Helper ที่มีเนื้อหาเกี่ยวกับเคล็ดลับการตลาดบน Instagram, YouTube และ TikTok
              ที่จะช่วยให้คุณเพิ่มยอดผู้ติดตามและการมีส่วนร่วมได้อย่างมีประสิทธิภาพ
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-[73px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold whitespace-nowrap transition-all text-sm md:text-base ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {currentArticles.map((article, index) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group animate-fadeInUp cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-white ${
                        article.category === "Instagram" ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-black"
                      }`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-gray-500">{article.date}</span>
                    <span className="text-cyan-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      อ่านเพิ่มเติม →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 animate-fadeInUp">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ←
              </button>
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                      currentPage === page
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-110"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                )
              })}
              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  อยากให้เราช่วยเพิ่มยอดผู้ติดตามและการมีส่วนร่วมของคุณไหม?
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  ลองใช้บริการของ SNS Helper วันนี้ เพิ่มยอดผู้ติดตาม ไลค์ และการมีส่วนร่วมได้อย่างปลอดภัยและมีประสิทธิภาพ
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  ดูบริการของเรา
                </Button>
              </div>
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
                    href="/blog"
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
