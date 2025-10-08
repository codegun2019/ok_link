"use client"

import { Button } from "@/components/ui/button"
import {
  SparklesIcon,
  ChartBarIcon,
  GlobeAltIcon,
  BoltIcon,
  ShieldCheckIcon,
  CogIcon,
  Bars3Icon,
  XMarkIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function FeaturesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

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
              <Link href="/features" className="text-cyan-600 font-semibold border-b-2 border-cyan-600">
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
            <Link
              href="/"
              className="block py-3 px-4 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/features"
              className="block py-3 px-4 text-cyan-600 bg-cyan-50 rounded-lg font-semibold"
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
      <section className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <SparklesIcon className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">บริการครบครัน</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              ฟีเจอร์ที่ทรงพลัง
              <br />
              สำหรับการเติบโตบนโซเชียล
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              บริการปั้มยอดโซเชียลมีเดียครบวงจร รวดเร็ว ปลอดภัย และราคาย่อมเยา
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 shadow-2xl hover:scale-105 transition-all"
              asChild
            >
              <Link href="/register">เริ่มต้นใช้งานฟรี</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ฟีเจอร์หลัก</h2>
            <p className="text-lg text-gray-600">ทำไมต้องเลือกใช้บริการของเรา</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BoltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ส่งมอบรวดเร็ว</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                ระบบอัตโนมัติทำงานทันที เริ่มส่งมอบภายใน 1-5 นาที หลังสั่งซื้อ ไม่ต้องรอนาน
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>เริ่มงานทันที 1-5 นาที</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>ระบบอัตโนมัติ 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>ไม่มีวันหยุด</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <CheckBadgeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">คุณภาพสูง</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                ยอดจากบัญชีจริง คุณภาพสูง ไม่หาย ไม่ดรอป มีการันตีคืนยอดหากมีปัญหา
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  <span>บัญชีจริง คุณภาพสูง</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  <span>ไม่หาย ไม่ดรอป</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  <span>รับประกันคืนยอด</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ปลอดภัย 100%</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                ไม่ต้องให้รหัสผ่าน ไม่เสี่ยงโดนแบน ระบบปลอดภัย SSL Certificate เข้ารหัสข้อมูล
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>ไม่ต้องให้รหัสผ่าน</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>ไม่เสี่ยงโดนแบน</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>SSL Certificate</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <CurrencyDollarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ราคาย่อมเยา</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                ราคาถูกที่สุดในไทย เริ่มต้นเพียง 10 บาท มีแพ็คเกจให้เลือกหลากหลาย
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>ราคาถูกที่สุด</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>เริ่มต้นเพียง 10 บาท</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>แพ็คเกจหลากหลาย</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">บริการ 24/7</h3>
              <p className="text-gray-700 leading-relaxed mb-4">ระบบทำงานอัตโนมัติตลอด 24 ชั่วโมง สั่งซื้อได้ทุกเวลา ไม่มีวันหยุด</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>ทำงาน 24 ชั่วโมง</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>สั่งซื้อได้ทุกเวลา</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>ไม่มีวันหยุด</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">รองรับทุกแพลตฟอร์ม</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Instagram, YouTube, TikTok, Facebook, Twitter และอื่นๆ อีกมากมาย
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <span>Instagram, YouTube</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <span>TikTok, Facebook</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <span>Twitter และอื่นๆ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ฟีเจอร์เพิ่มเติม</h2>
            <p className="text-lg text-gray-600">บริการครบครัน ตอบโจทย์ทุกความต้องการ</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <ChartBarIcon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ติดตามสถานะแบบเรียลไทม์</h3>
                <p className="text-gray-600 leading-relaxed">
                  ตรวจสอบสถานะออเดอร์ได้ทุกเวลา ดูความคืบหน้าแบบเรียลไทม์ รู้ว่ายอดเข้าไปแล้วเท่าไหร่
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <ArrowPathIcon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">รับประกันคืนยอด (Refill)</h3>
                <p className="text-gray-600 leading-relaxed">
                  หากยอดหายภายในระยะเวลาที่กำหนด เราจะเติมคืนให้ฟรี ไม่มีค่าใช้จ่ายเพิ่มเติม
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <GlobeAltIcon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ยอดจากทั่วโลก</h3>
                <p className="text-gray-600 leading-relaxed">ยอดมาจากผู้ใช้งานจริงทั่วโลก ดูเป็นธรรมชาติ ไม่ใช่บอท ปลอดภัยต่อบัญชี</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ซัพพอร์ตตลอด 24 ชั่วโมง</h3>
                <p className="text-gray-600 leading-relaxed">
                  ทีมงานพร้อมให้คำปรึกษาและแก้ไขปัญหา ตอบกลับเร็ว ผ่าน LINE, Facebook, Email
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <CurrencyDollarIcon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ช่องทางชำระเงินหลากหลาย</h3>
                <p className="text-gray-600 leading-relaxed">
                  รองรับการชำระเงินผ่านโอนธนาคาร, พร้อมเพย์, TrueMoney Wallet และบัตรเครดิต
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <CogIcon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">API สำหรับรีเซลเลอร์</h3>
                <p className="text-gray-600 leading-relaxed">มี API สำหรับผู้ที่ต้องการนำไปขายต่อ เชื่อมต่อง่าย เอกสารครบถ้วน</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">พร้อมเพิ่มยอดโซเชียลของคุณแล้วหรือยัง?</h2>
            <p className="text-xl text-white/90 mb-8">ลงทะเบียนวันนี้ รับส่วนลดพิเศษ เริ่มต้นเพียง 10 บาท</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 shadow-2xl hover:scale-105 transition-all"
                asChild
              >
                <Link href="/register">เริ่มต้นใช้งานฟรี</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 px-8 bg-transparent backdrop-blur-sm"
                asChild
              >
                <Link href="/pricing">ดูราคาบริการ</Link>
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
