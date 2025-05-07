"use client"

import { useLanguage } from "@/contexts/language-context"
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"
import contactData from "@/data/contact.json"

export default function ContactSection() {
  const { t } = useLanguage()

  // 图标映射
  const iconMap = {
    Phone: <Phone className="h-6 w-6 text-thai-blue" />,
    Mail: <Mail className="h-6 w-6 text-thai-red" />,
    MessageSquare: <MessageSquare className="h-6 w-6 text-thai-gold" />,
    MapPin: <MapPin className="h-6 w-6 text-thai-green" />,
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("Contact Us", "ติดต่อเรา")}</h2>
          <p className="text-lg text-gray-600">
            {t(
              "Get in touch with our team for any inquiries or to request a quote.",
              "ติดต่อทีมงานของเราสำหรับข้อสงสัยหรือขอใบเสนอราคา",
            )}
          </p>
        </div>

        <div className="bg-gradient-to-br from-thai-blue to-thai-blue/80 text-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-10">
            <h3 className="text-2xl font-bold mb-6 text-center">{t("Contact Information", "ข้อมูลการติดต่อ")}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {contactData.contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <div className="mr-4 p-3 bg-white/10 rounded-full flex-shrink-0">{iconMap[item.icon]}</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{t(item.title.en, item.title.th)}</h4>
                    <p className="text-white/90">
                      {typeof item.details === "object" ? t(item.details.en, item.details.th) : item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
