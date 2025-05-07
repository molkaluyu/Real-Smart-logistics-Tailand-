"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-4 text-thai-gold">Real Smart Logistics</h3>
            <p className="text-gray-300 mb-4">Real Solutions, Smarter Logistics</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-thai-gold">{t("Quick Links", "ลิงก์ด่วน")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  {t("About Us", "เกี่ยวกับเรา")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  {t("Our Services", "บริการของเรา")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white">
                  {t("Contact Us", "ติดต่อเรา")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-thai-gold">{t("Contact Information", "ข้อมูลการติดต่อ")}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-thai-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+66 6-3940-5799</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-thai-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">june.ren_bkk@rssclogistics.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-thai-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {t(
                    "193/52 Lake Rajada Office, Unit 14A1, 14th Floor, Rachadapisek Road, Klongtoey, Bangkok 10110, Thailand",
                    "193/52 Lake Rajada Office, หน่วย 14A1 ชั้น 14 ถนนรัชดาภิเษก แขวงคลองสี่ เขตคลองสี่ กรุงเทพฯ 10110 ประเทศไทย",
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()}{" "}
            {t(
              "Real Smart Logistics (Thailand) Co., Ltd. All rights reserved.",
              "รีซอัล สเมาร์ท ล็อกจิสติกส์ (ประเทศไทย) จำกัด สงวนลิขสิทธิ์",
            )}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="#" className="text-gray-300 hover:text-white text-sm">
              {t("Privacy Policy", "นโยบายความเป็นส่วนตัว")}
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm">
              {t("Terms of Service", "เงื่อนไขการให้บริการ")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
