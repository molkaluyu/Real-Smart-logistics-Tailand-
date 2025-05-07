"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

const navigation = [
  { name: { en: "Home", th: "หน้าแรก" }, href: "/" },
  { name: { en: "About", th: "เกี่ยวกับเรา" }, href: "#about" },
  { name: { en: "Services", th: "บริการ" }, href: "#services" },
  { name: { en: "Contact", th: "ติดต่อ" }, href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en")
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Real Smart Logistics</span>
            <div className="flex items-center">
              <div className="text-2xl font-bold text-thai-blue">
                <span className="text-thai-red">Real</span> Smart <span className="text-thai-green">Logistics</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 text-gray-900 hover:text-thai-blue transition-colors",
                pathname === item.href && "text-thai-blue",
              )}
            >
              {language === "en" ? item.name.en : item.name.th}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="text-sm font-semibold leading-6 border-thai-gold text-thai-gold hover:bg-thai-gold/10"
          >
            {language === "en" ? "ภาษาไทย" : "English"}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex items-center justify-between p-4">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Real Smart Logistics</span>
                  <div className="text-2xl font-bold text-thai-blue">
                    <span className="text-thai-red">Real</span> Smart <span className="text-thai-green">Logistics</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6 px-4">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-md px-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {language === "en" ? item.name.en : item.name.th}
                    </a>
                  ))}
                  <Button
                    variant="outline"
                    onClick={toggleLanguage}
                    className="w-full mt-4 text-base font-semibold leading-7 border-thai-gold text-thai-gold hover:bg-thai-gold/10"
                  >
                    {language === "en" ? "ภาษาไทย" : "English"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
