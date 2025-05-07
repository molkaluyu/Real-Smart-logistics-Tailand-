"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="thai-pattern">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-thai-blue sm:text-6xl">
              {t("Real Smart Logistics (Thailand) Co., Ltd", "รีซอัล สเมาร์ท ล็อกจิสติกส์ (ประเทศไทย) จำกัด")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t("Real Solutions, Smarter Logistics", "Real Solutions, Smarter Logistics")}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-thai-red hover:bg-thai-red/90">
                {t("Our Services", "บริการของเรา")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-thai-blue text-thai-blue hover:bg-thai-blue/10">
                {t("Contact Us", "ติดต่อเรา")}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white"></div>
      </div>
    </div>
  )
}
