"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, Ship, FileCheck, Truck, Package, Thermometer } from "lucide-react"
import Image from "next/image"
import servicesData from "@/data/services.json"

export default function ServicesSection() {
  const { t } = useLanguage()

  // 图标映射
  const iconMap = {
    Plane: <Plane className="h-8 w-8 text-thai-blue" />,
    Ship: <Ship className="h-8 w-8 text-thai-red" />,
    FileCheck: <FileCheck className="h-8 w-8 text-thai-green" />,
    Truck: <Truck className="h-8 w-8 text-thai-purple" />,
    Package: <Package className="h-8 w-8 text-thai-gold" />,
    Thermometer: <Thermometer className="h-8 w-8 text-thai-blue" />,
  }

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("Our Services", "บริการของเรา")}</h2>
          <p className="text-lg text-gray-600">
            {t(
              "We provide comprehensive logistics solutions tailored to your specific needs across air, sea, land, and specialized transport requirements.",
              "เราให้บริการโซลูชันโลจิสติกส์ที่ครอบคลุมและปรับแต่งตามความต้องการเฉพาะของคุณทั้งทางอากาศ ทางทะเล ทางบก และความต้องการด้านการขนส่งเฉพาะทาง",
            )}
          </p>
        </div>

        <div className="waterfall-grid">
          {servicesData.services.map((service, index) => (
            <div key={index} className="waterfall-item">
              <Card className="thai-border service-card h-full overflow-hidden">
                <div className="card-image-container">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={t(service.alt.en, service.alt.th)}
                    width={400}
                    height={200}
                    className="object-cover card-image"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-gray-100 rounded-full service-icon">{iconMap[service.icon]}</div>
                    <h3 className="text-xl font-bold mb-2">{t(service.title.en, service.title.th)}</h3>
                    <p className="text-gray-600">{t(service.description.en, service.description.th)}</p>
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
