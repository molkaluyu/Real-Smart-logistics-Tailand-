"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Anchor, Globe, Users } from "lucide-react"
import Image from "next/image"
import strengthsData from "@/data/strengths.json"

export default function AboutSection() {
  const { t } = useLanguage()

  // 图标映射
  const iconMap = {
    Anchor: <Anchor className="h-8 w-8 text-thai-red" />,
    Globe: <Globe className="h-8 w-8 text-thai-blue" />,
    Users: <Users className="h-8 w-8 text-thai-green" />,
  }

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("About Us", "เกี่ยวกับเรา")}</h2>
          <p className="text-lg text-gray-600">
            {t(
              "Real Smart Logistics (Thailand) Co., Ltd, established in 2025, is a leading comprehensive logistics service provider headquartered in Thailand with global reach. We specialize in integrated air, sea, and land transportation services, with particular strengths in sea freight, oversized/overweight cargo handling, and cold chain logistics.",
              "รีซอัล สเมาร์ท ล็อกจิสติกส์ (ประเทศไทย) จำกัด ก่อตั้งขึ้นเมื่อ 2568 เป็นผู้ให้บริการโลจิสติกส์เชิงประจักษ์อย่างครบวงจรที่มีสำนักงานใหญ่ในประเทศไทยและมีอิทธิพลระดับโลก เราเชี่ยวชาญในบริการขนส่งทางอากาศ เรือ และบกที่บูรณาการ โดยมีจุดแข็งเฉพาะในการขนส่งทางทะเล การจัดการสินค้าขนาดใหญ่/น้ำหนักมาก และโลจิสติกส์ควบคุมอุณหภูมิ",
            )}
          </p>
        </div>

        <div className="waterfall-grid">
          {strengthsData.strengths.map((strength, index) => (
            <div key={index} className="waterfall-item">
              <Card className="thai-border hover-card h-full overflow-hidden">
                <div className="card-image-container">
                  <Image
                    src={strength.image || "/placeholder.svg"}
                    alt={t(strength.alt.en, strength.alt.th)}
                    width={400}
                    height={200}
                    className="object-cover card-image"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-gray-100 rounded-full">{iconMap[strength.icon]}</div>
                    <h3 className="text-xl font-bold mb-2">{t(strength.title.en, strength.title.th)}</h3>
                    <p className="text-gray-600">{t(strength.description.en, strength.description.th)}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
