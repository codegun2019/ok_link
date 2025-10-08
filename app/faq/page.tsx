"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SparklesIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Instagram, Youtube, Facebook } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageSwitcher } from "@/components/language-switcher"

const getCategories = (t: (key: string) => string) => [
  { id: "general", name: t('faqPage.categories.general'), icon: SparklesIcon },
  { id: "instagram", name: t('faqPage.categories.instagram'), icon: Instagram },
  { id: "youtube", name: t('faqPage.categories.youtube'), icon: Youtube },
  { id: "tiktok", name: t('faqPage.categories.tiktok'), icon: null },
  { id: "facebook", name: t('faqPage.categories.facebook'), icon: Facebook },
  { id: "twitter", name: t('faqPage.categories.twitter'), icon: null },
  { id: "cancel", name: t('faqPage.categories.cancel'), icon: null },
  { id: "common", name: t('faqPage.categories.common'), icon: null },
]

const faqData = {
  instagram: [
    {
      question: "สามารถปรับความเร็วในการดำเนินการได้หรือไม่?",
      answer:
        "ขออภัย แต่เราไม่สามารถปรับความเร็วในการดำเนินการได้ การสั่งซื้ออาจดำเนินการได้อย่างรวดเร็วหรือช้าขึ้นอยู่กับปริมาณการสั่งซื้อและสถานะของเซิร์ฟเวอร์",
    },
    {
      question: "จะใส่ลิงก์อย่างไร?",
      answer: "คุณสามารถคัดลอกลิงก์จากโพสต์ Instagram ของคุณและวางในช่องที่กำหนด ตรวจสอบให้แน่ใจว่าลิงก์เป็นแบบสาธารณะ",
    },
    {
      question: "ควรเลือกบริษัทให้บริการแบบไหน?",
      answer: "ควรเลือกบริษัทที่มีความน่าเชื่อถือ มีรีวิวที่ดี และให้บริการหลังการขายที่ชัดเจน",
    },
    {
      question: "ประโยชน์ของการซื้อผู้ติดตาม",
      answer: "ช่วยเพิ่มความน่าเชื่อถือของบัญชี เพิ่มการมองเห็น และสร้างความประทับใจแรกที่ดีให้กับผู้เข้าชมใหม่",
    },
    {
      question: "คุณภาพของบัญชีที่ให้บริการเป็นอย่างไร?",
      answer: "เราให้บริการบัญชีคุณภาพสูงที่มีโปรไฟล์สมบูรณ์ มีรูปภาพ และดูเหมือนบัญชีจริง",
    },
    {
      question: "การปั้มผู้ติดตามไอจีช่วยให้ได้รับโฆษณาจากแบรนด์หรือไม่",
      answer: "การมีผู้ติดตามจำนวนมากอาจช่วยเพิ่มโอกาสในการได้รับความสนใจจากแบรนด์ แต่ยังต้องมีการมีส่วนร่วมที่แท้จริงด้วย",
    },
    {
      question: "สามารถสั่งซื้อต่ำกว่าปริมาณขั้นต่ำได้หรือไม่?",
      answer: "ขออภัย เราไม่สามารถรับคำสั่งซื้อที่ต่ำกว่าปริมาณขั้นต่ำที่กำหนดไว้ในแต่ละบริการ",
    },
    {
      question: "หากยอดผู้ติดตาม Instagram ลดลงหลังการสั่งซื้อ ควรทำอย่างไร?",
      answer: "หากยอดลดลงภายในระยะเวลารับประกัน กรุณาติดต่อฝ่ายสนับสนุนเพื่อขอรับบริการเติมเต็มฟรี",
    },
    {
      question: "ทำไมการสั่งซื้อยอดไลก์ Instagram ถึงถูกยกเลิก?",
      answer: "อาจเกิดจากการตั้งค่าบัญชีเป็นส่วนตัว ลิงก์ไม่ถูกต้อง หรือโพสต์ถูกลบ",
    },
    {
      question: "ทำไมการสั่งซื้อยอดผู้ติดตาม Instagram ถึงถูกยกเลิกเรื่อยๆ?",
      answer: "อาจเกิดจากชื่อผู้ใช้ไม่ถูกต้อง บัญชีถูกตั้งค่าเป็นส่วนตัว หรือมีปัญหาทางเทคนิค",
    },
    {
      question: "จะเกิดอะไรขึ้นหากเปลี่ยนบัญชีเป็นส่วนตัวในระหว่างการดำเนินการสั่งซื้อ?",
      answer: "การสั่งซื้อจะถูกยกเลิกทันที และคุณจะได้รับเงินคืนตามนโยบาย",
    },
    {
      question: "ทำไมการสั่งซื้อยอดรับชม Instagram ถึงถูกยกเลิกเรื่อยๆ?",
      answer: "อาจเกิดจากวิดีโอถูกลบ ลิงก์ไม่ถูกต้อง หรือบัญชีถูกตั้งค่าเป็นส่วนตัว",
    },
    {
      question: "กรณีป้อนชื่อผู้ใช้ Instagram ผิด ต้องทำอย่างไร?",
      answer: "กรุณาติดต่อฝ่ายสนับสนุนทันทีพร้อมหมายเลขคำสั่งซื้อ เราจะช่วยแก้ไขให้",
    },
    {
      question: "ยอดผู้ติดตาม Instagram ที่ได้รับน้อยกว่าที่สั่งซื้อ แต่สถานะคำสั่งซื้อแสดงว่าเสร็จสมบูรณ์",
      answer: "กรุณาติดต่อฝ่ายสนับสนุนพร้อมหลักฐานและหมายเลขคำสั่งซื้อ เราจะตรวจสอบและแก้ไขให้",
    },
  ],
  youtube: [
    {
      question: "ข้อควรระวังในการใช้บริการเพิ่มความคิดเห็น YouTube",
      answer: "ควรใช้ความคิดเห็นที่ดูเป็นธรรมชาติ ไม่ซ้ำกัน และเกี่ยวข้องกับเนื้อหาวิดีโอ",
    },
    {
      question: "ทำไมถึงควรเลือกใช้ SNS Helper?",
      answer: "เราให้บริการที่มีคุณภาพสูง ราคาสมเหตุสมผล มีการรับประกัน และทีมสนับสนุนตลอด 24/7",
    },
    {
      question: "การซื้อชั่วโมง YouTube เสร็จสิ้นแล้ว แต่ยังไม่เห็นผล ต้องทำอย่างไร",
      answer: "YouTube อาจใช้เวลาในการอัพเดทข้อมูล กรุณารอ 24-48 ชั่วโมง หากยังไม่เห็นผลติดต่อฝ่ายสนับสนุน",
    },
    {
      question: "แต่ละบริการมีการจำกัดจำนวนการสั่งซื้อหรือไม่?",
      answer: "บางบริการมีจำนวนสูงสุดต่อคำสั่งซื้อ คุณสามารถตรวจสอบได้ในหน้ารายละเอียดบริการ",
    },
    {
      question: "สามารถกำหนดเวลาสำหรับการสั่งซื้อยอดผู้ชมสตรีมสดล่วงหน้าได้หรือไม่?",
      answer: "ได้ คุณสามารถกำหนดเวลาเริ่มต้นได้ แต่ควรสั่งล่วงหน้าอย่างน้อย 2-3 ชั่วโมง",
    },
    {
      question: "สามารถซื้อบริการเพิ่มยอดวิวได้หรือไม่ระหว่างการไลฟ์สด YouTube ได้หรือไม่",
      answer: "ได้ แต่แนะนำให้สั่งก่อนเริ่มไลฟ์สดเพื่อผลลัพธ์ที่ดีที่สุด",
    },
    {
      question: "ซื้อวิว YouTube ต้องปิดการสร้างรายได้หรือไม่",
      answer: "ไม่จำเป็น คุณสามารถใช้บริการได้โดยไม่ต้องปิดการสร้างรายได้",
    },
    {
      question: "ก่อนซื้อบริการปั้มวิวยูทูป ควรตรวจสอบการตั้งค่าเหล่านี้",
      answer: "ตรวจสอบว่าวิดีโอเป็นสาธารณะ ไม่มีข้อจำกัดอายุ และไม่ละเมิดนโยบายของ YouTube",
    },
    {
      question: "สามารถสั่งซื้อยอดไลก์วิดีโอได้หรือไม่ หากตั้งค่าจำนวนไลก์เป็นส่วนตัว?",
      answer: "ไม่ได้ คุณต้องเปิดให้แสดงจำนวนไลก์เป็นสาธารณะก่อน",
    },
    {
      question: "ข้อควรระวังในการซื้อบริการเพิ่มผู้ติดตาม YouTube",
      answer: "ควรเพิ่มผู้ติดตามอย่างค่อยเป็นค่อยไป ไม่ควรเพิ่มจำนวนมากเกินไปในคราวเดียว",
    },
  ],
  tiktok: [
    {
      question: "วิธีเพิ่มความน่าสนใจและการเติบโตของบัญชี TikTok คืออะไร?",
      answer: "โพสต์เนื้อหาที่มีคุณภาพสม่ำเสมอ ใช้แฮชแท็กที่เกี่ยวข้อง และมีส่วนร่วมกับผู้ติดตาม",
    },
    {
      question: "การปั้มผู้ติดตาม TikTok ช่วยให้ได้รับโฆษณาจากแบรนด์หรือไม่",
      answer: "การมีผู้ติดตามจำนวนมากช่วยเพิ่มโอกาส แต่แบรนด์มักดูที่การมีส่วนร่วมและคุณภาพเนื้อหาด้วย",
    },
    {
      question: "มีผู้ติดตามเยอะใน TikTok จะได้รับเงินหรือไม่?",
      answer: "ได้ หากคุณเข้าร่วม TikTok Creator Fund หรือได้รับสปอนเซอร์จากแบรนด์",
    },
    {
      question: "ตรวจสอบราคาบริการ TikTok ได้ที่ไหน?",
      answer: "คุณสามารถตรวจสอบราคาได้ที่หน้าบริการ TikTok ของเรา",
    },
    {
      question: "สามารถปรับความเร็วในการดำเนินการบริการ TikTok ได้หรือไม่?",
      answer: "ไม่ได้ ความเร็วขึ้นอยู่กับระบบและปริมาณงาน",
    },
    {
      question: "สามารถตั้งค่าบัญชี TikTok เป็นส่วนตัวหลังจากซื้อบริการได้หรือไม่?",
      answer: "ได้ แต่แนะนำให้รอจนกว่าการสั่งซื้อจะเสร็จสมบูรณ์ก่อน",
    },
    {
      question: "สิ่งที่ควรระวังเมื่อใช้บริการ TikTok คืออะไร?",
      answer: "ไม่ควรซื้อจำนวนมากเกินไปในคราวเดียว และควรรักษาคุณภาพเนื้อหา",
    },
    {
      question: "หากซื้อผู้ติดตาม TikTok บัญชีจะดูผิดธรรมชาติหรือไม่",
      answer: "ไม่ หากคุณเลือกบริการคุณภาพสูงและเพิ่มอย่างค่อยเป็นค่อยไป",
    },
    {
      question: "บริการ TikTok มีจำนวนขั้นต่ำหรือสูงสุดในการสั่งซื้อหรือไม่?",
      answer: "มี แต่ละบริการมีจำนวนขั้นต่ำและสูงสุดที่แตกต่างกัน",
    },
    {
      question: "ข้อควรระวังในการใช้บริการเพิ่มคนดูไลฟ์สด TikTok",
      answer: "ควรสั่งล่วงหน้าและเริ่มไลฟ์สดตรงเวลาที่กำหนด",
    },
    {
      question: "สามารถแบ่งคำสั่งซื้อเพิ่มความคิดเห็นติ๊กต๊อกไปยังหลายโพสต์ได้หรือไม่",
      answer: "ไม่ได้ แต่ละคำสั่งซื้อสามารถใช้กับโพสต์เดียวเท่านั้น",
    },
    {
      question: "หากลบโพสต์หลังการซื้อปั้มไลค์ติ๊กต๊อก จะสามารถขอคืนเงินได้หรือไม่",
      answer: "ไม่ได้ หากคำสั่งซื้อเสร็จสมบูรณ์แล้ว",
    },
    {
      question: "หากป้อนชื่อบัญชี TikTok ผิด สามารถยกเลิกคำสั่งซื้อได้หรือไม่?",
      answer: "ได้ หากคำสั่งซื้อยังไม่เริ่มดำเนินการ",
    },
  ],
  facebook: [
    {
      question: "จะทำอย่างไรหากยอดไลก์หรือผู้ติดตาม Facebook ลดลงหลังจากการสั่งซื้อ?",
      answer: "ติดต่อฝ่ายสนับสนุนภายในระยะเวลารับประกันเพื่อขอรับบริการเติมเต็มฟรี",
    },
    {
      question: "เหตุผลที่การสั่งซื้อผู้ติดตาม Facebook สำหรับบัญชีส่วนตัวถูกยกเลิกคืออะไร?",
      answer: "Facebook มีข้อจำกัดสำหรับบัญชีส่วนตัว แนะนำให้ใช้เพจแทน",
    },
    {
      question: "เหตุผลที่การสั่งซื้อบริการยอดไลก์ Facebook ถูกยกเลิกเรื่อยๆ คืออะไร?",
      answer: "อาจเกิดจากโพสต์ถูกลบ ตั้งค่าเป็นส่วนตัว หรือลิงก์ไม่ถูกต้อง",
    },
    {
      question: "สามารถสั่งซื้อจำนวนต่ำกว่าขั้นต่ำได้หรือไม่?",
      answer: "ไม่ได้ เราไม่สามารถรับคำสั่งซื้อที่ต่ำกว่าจำนวนขั้นต่ำ",
    },
    {
      question: "สามารถกำหนดความเร็วในการดำเนินการบริการได้หรือไม่?",
      answer: "ไม่ได้ ความเร็วขึ้นอยู่กับระบบและปริมาณงาน",
    },
    {
      question: "จะเกิดอะไรขึ้นหากเปลี่ยนบัญชี Facebook เป็นส่วนตัวระหว่างการดำเนินการคำสั่งซื้อ",
      answer: "คำสั่งซื้อจะถูกยกเลิกและคุณจะได้รับเงินคืน",
    },
    {
      question: "เหตุผลที่การสั่งซื้อยอดรับชม Facebook ถูกยกเลิกเรื่อยๆ คืออะไร?",
      answer: "อาจเกิดจากวิดีโอถูกลบ ตั้งค่าเป็นส่วนตัว หรือลิงก์ไม่ถูกต้อง",
    },
    {
      question: "หากป้อน Facebook ID ผิดจะทำอย่างไรได้บ้าง?",
      answer: "ติดต่อฝ่ายสนับสนุนทันทีพร้อมหมายเลขคำสั่งซื้อ",
    },
    {
      question: "วิธีใส่ลิงก์สำหรับการสั่งซื้อบริการ Facebook",
      answer: "คัดลอกลิงก์จากโพสต์หรือเพจและวางในช่องที่กำหนด",
    },
    {
      question: "เหตุผลที่การสั่งซื้อยอดไลก์และผู้ติดตาม Facebook Fan Page ถูกยกเลิกคืออะไร?",
      answer: "อาจเกิดจากเพจถูกลบ ตั้งค่าไม่ถูกต้อง หรือลิงก์ผิด",
    },
  ],
  twitter: [
    {
      question: "ทำไมบริการเพิ่มไลค์ Twitter (X) ถึงไม่ดำเนินการและถูกยกเลิกเรื่อยๆ",
      answer: "อาจเกิดจากทวีตถูกลบ บัญชีถูกล็อค หรือตั้งค่าเป็นส่วนตัว",
    },
    {
      question: "หลังจากสั่งซื้อบริการ Twitter (X) แล้ว ยอดลดลง สามารถขอบริการหลังการขายได้หรือไม่?",
      answer: "ได้ หากอยู่ในระยะเวลารับประกัน",
    },
    {
      question: "สามารถตรวจสอบราคาบริการ Twitter (X) ได้ที่ไหน?",
      answer: "ตรวจสอบได้ที่หน้าบริการ X (Twitter) ของเรา",
    },
    {
      question: "หลังจากสั่งซื้อบริการ Twitter (X) แล้ว จะใช้เวลานานแค่ไหน?",
      answer: "โดยปกติใช้เวลา 1-24 ชั่วโมง ขึ้นอยู่กับปริมาณ",
    },
  ],
  cancel: [
    {
      question: "บริการหลังการขายเริ่มต้นเมื่อไหร่?",
      answer: "บริการหลังการขายเริ่มต้นทันทีหลังจากคำสั่งซื้อเสร็จสมบูรณ์และอยู่ในระยะเวลารับประกัน",
    },
    {
      question: "บริการหลังการขายไม่ดำเนินการ",
      answer: "กรุณาติดต่อฝ่ายสนับสนุนพร้อมหมายเลขคำสั่งซื้อและหลักฐาน",
    },
    {
      question: "รายละเอียดการให้บริการหลังการขายเป็นอย่างไร?",
      answer: "เราให้บริการเติมเต็มฟรีหากยอดลดลงภายในระยะเวลารับประกันที่ระบุในแต่ละบริการ",
    },
    {
      question: "คำสั่งซื้อถูกยกเลิกแล้ว จะได้รับเงินคืนอย่างไร?",
      answer: "เงินจะถูกคืนเข้าบัญชีของคุณโดยอัตโนมัติภายใน 24 ชั่วโมง",
    },
    {
      question: "สามารถยกเลิกคำสั่งซื้อได้หรือไม่?",
      answer: "ได้ หากคำสั่งซื้อยังไม่เริ่มดำเนินการ",
    },
  ],
  common: [
    {
      question: "ทำไมคำสั่งซื้อถึงดำเนินการล่าช้า?",
      answer: "อาจเกิดจากปริมาณงานมาก ปัญหาทางเทคนิค หรือข้อจำกัดของแพลตฟอร์ม",
    },
    {
      question: "สั่งซื้อแล้ว แต่สถานะคำสั่งซื้อแสดงว่า 'กำลังดำเนินการ'",
      answer: "นี่เป็นเรื่องปกติ กรุณารอจนกว่าสถานะจะเปลี่ยนเป็น 'เสร็จสมบูรณ์'",
    },
    {
      question: "สามารถสั่งซื้อซ้ำสำหรับลิงก์เดียวกันได้หรือไม่?",
      answer: "ได้ แต่ควรรอให้คำสั่งซื้อก่อนหน้าเสร็จสมบูรณ์ก่อน",
    },
    {
      question: "กรอกลิงก์ผิดต้องทำอย่างไร?",
      answer: "ติดต่อฝ่ายสนับสนุนทันทีหากคำสั่งซื้อยังไม่เริ่มดำเนินการ",
    },
    {
      question: "สั่งซื้อแล้ว คำสั่งซื้อจะเสร็จสมบูรณ์เมื่อไหร่?",
      answer: "ขึ้นอยู่กับบริการและปริมาณ โดยปกติใช้เวลา 1-72 ชั่วโมง",
    },
    {
      question: "'ดำเนินการเสร็จบางส่วน' หมายถึงอะไร?",
      answer: "หมายความว่าบางส่วนของคำสั่งซื้อเสร็จสมบูรณ์แล้ว แต่ยังไม่ครบตามจำนวนที่สั่ง",
    },
    {
      question: "บริการปลอดภัยหรือไม่?",
      answer: "ปลอดภัย เราใช้วิธีการที่ปลอดภัยและไม่ละเมิดนโยบายของแพลตฟอร์ม",
    },
    {
      question: "คำสั่งซื้อที่สั่งไปอาจลดลงได้หรือไม่?",
      answer: "อาจลดลงได้บ้าง แต่เรามีบริการรับประกันเติมเต็มฟรี",
    },
    {
      question: "ทำไมราคาของ SNS Helper ถึงถูกชนาดนี้?",
      answer: "เราสามารถเสนอราคาที่ดีได้เพราะมีปริมาณงานมากและระบบอัตโนมัติที่มีประสิทธิภาพ",
    },
    {
      question: "เติมเงินได้อย่างไร?",
      answer: "คุณสามารถเติมเงินผ่านช่องทางต่างๆ ที่ระบุในหน้าเติมเงิน",
    },
    {
      question: "เวลาการให้บริการของศูนย์ลูกค้า",
      answer: "ศูนย์ลูกค้าของเราให้บริการตลอด 24 ชั่วโมง 7 วันต่อสัปดาห์",
    },
    {
      question: "สามารถใช้งานผ่านมือถือได้หรือไม่?",
      answer: "ได้ เว็บไซต์ของเรารองรับการใช้งานบนมือถือทุกระบบ",
    },
    {
      question: "วิธีซื้อบริการและขั้นตอนการดำเนินการเป็นอย่างไร?",
      answer: "เลือกบริการ กรอกข้อมูล ชำระเงิน และรอรับบริการตามระยะเวลาที่กำหนด",
    },
    {
      question: "เวลาให้บริการของ SNS Helper เป็นอย่างไร?",
      answer: "เราให้บริการตลอด 24/7 ทุกวัน",
    },
    {
      question: "SNS Helper คืออะไร?",
      answer: "SNS Helper คือแพลตฟอร์มให้บริการเพิ่มยอดโซเชียลมีเดียที่มีคุณภาพและราคาสมเหตุสมผล",
    },
    {
      question: "หากต้องการสมัครแต่ระบบแจ้งว่าอีเมลนี้มีการสมัครแล้วต้องทำอย่างไร?",
      answer: "ใช้ฟีเจอร์ลืมรหัสผ่านเพื่อรีเซ็ตรหัสผ่าน หรือติดต่อฝ่ายสนับสนุน",
    },
    {
      question: "วิธีการยกเลิกบัญชีสมาชิกคืออะไร?",
      answer: "ติดต่อฝ่ายสนับสนุนเพื่อขอยกเลิกบัญชี",
    },
    {
      question: "หากยกเลิกบัญชี ข้อมูลส่วนตัวทั้งหมดจะถูกลบหรือไม่?",
      answer: "ใช่ ข้อมูลทั้งหมดจะถูกลบตามนโยบายความเป็นส่วนตัว",
    },
    {
      question: "หากลืมชื่อผู้ใช้หรือรหัสผ่านต้องทำอย่างไร?",
      answer: "ใช้ฟีเจอร์ลืมรหัสผ่านในหน้าเข้าสู่ระบบ",
    },
    {
      question: "มีการจำกัดอายุในการสมัครสมาชิกหรือไม่?",
      answer: "ต้องมีอายุ 18 ปีขึ้นไปเพื่อสมัครสมาชิก",
    },
  ],
}

export default function FAQPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("instagram")
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const { t } = useLanguage()
  const categories = getCategories(t)

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((cat) => ({
        id: cat.id,
        element: document.getElementById(cat.id),
      }))

      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        if (section.element) {
          const top = section.element.offsetTop
          const bottom = top + section.element.offsetHeight

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveCategory(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [categories])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileSidebarOpen(false)
  }

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
              <Link href="/faq" className="text-cyan-600 font-semibold border-b-2 border-cyan-600">
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
              className="block py-3 px-4 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.blog')}
            </Link>
            <Link
              href="/faq"
              className="block py-3 px-4 text-cyan-600 bg-cyan-50 rounded-lg font-semibold"
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
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t('faqPage.hero.title')}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {t('faqPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex gap-8 relative">
          {/* Mobile Sidebar Toggle */}
          <button
            className="lg:hidden fixed bottom-6 right-6 z-40 bg-orange-500 text-white p-4 rounded-full shadow-2xl hover:bg-orange-600 transition-all"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>

          {/* Left Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">{t('faqPage.sidebar.title')}</h2>
              <nav className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => scrollToSection(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeCategory === category.id
                          ? "bg-orange-50 text-orange-600 border-2 border-orange-500 font-semibold"
                          : "text-gray-700 hover:bg-gray-50 border-2 border-transparent"
                      }`}
                    >
                      {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
                      {!Icon && <SparklesIcon className="w-5 h-5 flex-shrink-0" />}
                      <span className="text-sm">{category.name}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </aside>

          {/* Mobile Sidebar */}
          <div
            className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
              mobileSidebarOpen ? "visible" : "invisible"
            }`}
          >
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                mobileSidebarOpen ? "opacity-50" : "opacity-0"
              }`}
              onClick={() => setMobileSidebarOpen(false)}
            ></div>
            <div
              className={`absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ${
                mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900">{t('faqPage.sidebar.mobileTit')}</h2>
                  <button
                    onClick={() => setMobileSidebarOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => scrollToSection(category.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                          activeCategory === category.id
                            ? "bg-orange-50 text-orange-600 border-2 border-orange-500 font-semibold"
                            : "text-gray-700 hover:bg-gray-50 border-2 border-transparent"
                        }`}
                      >
                        {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
                        {!Icon && <SparklesIcon className="w-5 h-5 flex-shrink-0" />}
                        <span className="text-sm">{category.name}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              {/* Instagram Section */}
              <div id="instagram" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Instagram</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('faqPage.linkText')}{" "}
                  <Link href="/pricing" className="text-orange-600 hover:underline font-medium">
                    {t('faqPage.linkService')} {t('faqPage.categories.instagram')}
                  </Link>
                </p>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.instagram.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`instagram-${index}`}
                      className="border border-gray-200 rounded-lg px-6 hover:border-orange-300 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* YouTube Section */}
              <div id="youtube" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">YouTube</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('faqPage.linkText')}{" "}
                  <Link href="/pricing" className="text-orange-600 hover:underline font-medium">
                    {t('faqPage.linkService')} {t('faqPage.categories.youtube')}
                  </Link>
                </p>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.youtube.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`youtube-${index}`}
                      className="border border-gray-200 rounded-lg px-6 hover:border-orange-300 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* TikTok Section */}
              <div id="tiktok" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">TikTok</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('faqPage.linkText')}{" "}
                  <Link href="/pricing" className="text-orange-600 hover:underline font-medium">
                    {t('faqPage.linkService')} {t('faqPage.categories.tiktok')}
                  </Link>
                </p>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.tiktok.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`tiktok-${index}`}
                      className="border border-gray-200 rounded-lg px-6 hover:border-orange-300 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Facebook Section */}
              <div id="facebook" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Facebook</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('faqPage.linkText')}{" "}
                  <Link href="/pricing" className="text-orange-600 hover:underline font-medium">
                    {t('faqPage.linkService')} {t('faqPage.categories.facebook')}
                  </Link>
                </p>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.facebook.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`facebook-${index}`}
                      className="border border-gray-200 rounded-lg px-6 hover:border-orange-300 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Twitter Section */}
              <div id="twitter" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">X (Twitter)</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('faqPage.linkText')}{" "}
                  <Link href="/pricing" className="text-orange-600 hover:underline font-medium">
                    {t('faqPage.linkService')} {t('faqPage.categories.twitter')}
                  </Link>
                </p>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.twitter.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`twitter-${index}`}
                      className="border border-gray-200 rounded-lg px-6 hover:border-orange-300 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Cancel & Refund Section */}
              <div id="cancel" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">ยกเลิก & คืนเงิน</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.cancel.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`cancel-${index}`}
                      className="border border-gray-200 rounded-lg px-6 hover:border-orange-300 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Common Questions Section */}
              <div id="common" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">คำถามทั่วไป</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.common.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`common-${index}`}
                      className="border border-gray-200 rounded-lg px-6 hover:border-orange-300 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <img src="/customer-support.png" alt="Customer Support" className="w-48 h-48 mx-auto" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('faqPage.cta.title')}</h2>
            <p className="text-gray-600 mb-6">{t('faqPage.cta.description')}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t('faqPage.cta.contact')} {t('brand.name')}</h3>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
              asChild
            >
              <Link href="https://lin.ee/l1W3pW7" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t('faqPage.cta.button')}: @snshelperth
              </Link>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              {t('faqPage.cta.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg"></div>
                <span className="font-bold text-xl md:text-2xl">{t('brand.name')}</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">{t('footer.description')}</p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">{t('faqPage.services.instagram')}</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    {t('faqPage.categories.instagram')} {t('nav.pricing')}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    {t('faqPage.categories.instagram')} {t('nav.features')}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    {t('faqPage.categories.instagram')} {t('nav.blog')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">{t('faqPage.services.youtube')}</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    {t('faqPage.categories.youtube')} {t('nav.pricing')}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    {t('faqPage.categories.youtube')} {t('nav.features')}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    {t('faqPage.categories.youtube')} {t('nav.blog')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg mb-4">{t('faqPage.services.tiktok')}</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    {t('faqPage.categories.tiktok')} {t('nav.pricing')}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    {t('faqPage.categories.tiktok')} {t('nav.features')}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    {t('faqPage.categories.tiktok')} {t('nav.blog')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">{t('footer.copyright')}</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
                <Link href="/faq" className="hover:text-cyan-400 transition-colors">
                  {t('footer.privacy')}
                </Link>
                <Link href="/faq" className="hover:text-cyan-400 transition-colors">
                  {t('footer.terms')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
