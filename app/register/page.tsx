"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import Link from "next/link"
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] via-white to-cyan-50 flex items-center justify-center p-4">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB6A3] rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse-slow delay-500"></div>

      <div className="w-full max-w-md relative z-10 animate-fadeInUp">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg"></div>
            <span className="font-bold text-3xl text-gray-900">พร้อมไลน์</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">สร้างบัญชีใหม่</h1>
          <p className="text-gray-600">เริ่มต้นใช้งานฟรี ไม่มีค่าใช้จ่าย</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-sm bg-opacity-95">
          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <Button
              variant="outline"
              className="w-full h-12 border-2 hover:bg-gray-50 transition-all hover:scale-[1.02] hover:shadow-lg bg-transparent"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-gray-700 font-medium">ลงทะเบียนด้วย Google</span>
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 border-2 hover:bg-blue-50 transition-all hover:scale-[1.02] hover:shadow-lg bg-transparent"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-gray-700 font-medium">ลงทะเบียนด้วย Facebook</span>
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 border-2 hover:bg-green-50 transition-all hover:scale-[1.02] hover:shadow-lg bg-transparent"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="#06C755">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              <span className="text-gray-700 font-medium">ลงทะเบียนด้วย LINE</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">หรือลงทะเบียนด้วยอีเมล</span>
            </div>
          </div>

          {/* Registration Form */}
          <form className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                ชื่อ-นามสกุล
              </Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="กรอกชื่อ-นามสกุล"
                  className="pl-10 h-12 border-2 focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                อีเมล
              </Label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  className="pl-10 h-12 border-2 focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                รหัสผ่าน
              </Label>
              <div className="relative">
                <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="สร้างรหัสผ่าน"
                  className="pl-10 pr-10 h-12 border-2 focus:border-cyan-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                ยืนยันรหัสผ่าน
              </Label>
              <div className="relative">
                <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="ยืนยันรหัสผ่านอีกครั้ง"
                  className="pl-10 pr-10 h-12 border-2 focus:border-cyan-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-1" />
              <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                ฉันยอมรับ{" "}
                <Link href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">
                  เงื่อนไขการใช้งาน
                </Link>{" "}
                และ{" "}
                <Link href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">
                  นโยบายความเป็นส่วนตัว
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <SparklesIcon className="w-5 h-5 mr-2" />
              สร้างบัญชีฟรี
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              มีบัญชีอยู่แล้ว?{" "}
              <Link href="/login" className="text-cyan-600 hover:text-cyan-700 font-semibold hover:underline">
                เข้าสู่ระบบ
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm hover:underline">
            ← กลับสู่หน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  )
}
