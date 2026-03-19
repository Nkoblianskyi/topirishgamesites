"use client"

import { useState } from "react"
import { Modal } from "./modal"
import { CookieBanner } from "./cookie-banner"
import { InfoSections } from "./info-sections"
import { AdvertiserDisclosureModal } from "./advertiser-disclosure-modal"
import { TermsModal } from "./terms-modal"
import { BackgroundCoins } from "./background-coins"
import { casinoSites } from "../data/mock-data"
import { HeroSection } from "./hero-section"
import { MainLayout } from "./main-layout"
import { SitesList } from "./sites-list"

export default function IrishPage() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      <BackgroundCoins />
      <div className="relative z-10">
        <MainLayout>
          <HeroSection
            onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
            onTermsModalOpen={() => setIsTermsModalOpen(true)}
          />
          <SitesList />
          <InfoSections />
        </MainLayout>
      </div>

      <Modal casinoSites={casinoSites} />
      <CookieBanner />
      <AdvertiserDisclosureModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
