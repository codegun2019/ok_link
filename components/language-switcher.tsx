"use client"

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GlobeAltIcon } from "@heroicons/react/24/outline"

const languages = [
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'lo', name: 'ລາວ', flag: '🇱🇦' }
] as const;

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 gap-2"
        >
          <GlobeAltIcon className="w-5 h-5" />
          <span className="hidden sm:inline">{currentLanguage.flag} {currentLanguage.name}</span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLocale(language.code as 'th' | 'en' | 'lo')}
            className={`cursor-pointer ${
              locale === language.code ? 'bg-cyan-50 text-cyan-600 font-semibold' : ''
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
