"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Locale = 'th' | 'en' | 'lo';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Default messages to prevent hydration errors
const defaultMessages = {
  brand: {
    name: "พร้อมไลน์",
    tagline: "เชื่อมต่อทุกแพลตฟอร์มของคุณ"
  },
  loading: {
    text: "กำลังโหลด..."
  },
  nav: {
    home: "หน้าแรก",
    features: "ฟีเจอร์",
    pricing: "ราคา",
    blog: "บทความ",
    faq: "คำถามที่พบบ่อย",
    contact: "ติดต่อเรา",
    login: "เข้าสู่ระบบ",
    register: "ลงทะเบียน"
  },
  home: {
    hero: {
      badge: "ใช้งานฟรี ไม่มีค่าใช้จ่าย",
      title: "สร้างหน้าลิงก์รวมทุกโซเชียล เพิ่มยอดผู้ติดตามทุกแพลตฟอร์ม",
      subtitle: "รวมทุกโซเชียลไว้ในลิงก์เดียว พร้อมระบบปั้มยอด & วิเคราะห์ผล",
      startFree: "เริ่มต้นฟรี",
      login: "เข้าสู่ระบบ"
    }
  },
  footer: {
    description: "แพลตฟอร์มรวมลิงก์โซเชียลมีเดีย ที่ดีที่สุดสำหรับคุณ",
    copyright: "© 2025 พร้อมไลน์. สงวนลิขสิทธิ์."
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('th');
  const [messages, setMessages] = useState<any>(defaultMessages);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Load saved locale from localStorage only on client
    if (typeof window !== 'undefined') {
      const savedLocale = (localStorage.getItem('locale') as Locale) || 'th';
      setLocaleState(savedLocale);
      loadMessages(savedLocale);
    }
  }, []);

  const loadMessages = async (newLocale: Locale) => {
    try {
      const msgs = await import(`@/messages/${newLocale}.json`);
      setMessages(msgs.default);
    } catch (error) {
      console.error('Error loading messages:', error);
      setMessages(defaultMessages);
    }
  };

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
    loadMessages(newLocale);
  };

  const t = (key: string): string => {
    if (!mounted) {
      // During SSR, return key or default value
      return key;
    }

    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
