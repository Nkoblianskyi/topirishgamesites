"use client"

import { Card } from "./card"
import { casinoSites } from "../data/mock-data"
import type { CasinoSite } from "../types"

export function SitesList() {
  return (
    <section className="w-full mt-8 sm:mt-10" aria-labelledby="rating-heading">
      <div className="rounded-2xl border border-gold-primary/25 bg-[var(--surface-panel)] backdrop-blur-sm p-5 sm:p-6 lg:p-8 shadow-xl shadow-[0_8px_32px_rgba(212,175,55,0.08)]">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-1 rounded-full bg-gold-primary shadow-[0_0_12px_rgba(212,175,55,0.4)]" aria-hidden />
          <div>
            <h2 id="rating-heading" className="text-lg sm:text-xl font-bold text-white">
              Top Irish gaming sites
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-0.5">Compare offers and scores — updated regularly</p>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-5">
          {casinoSites.map((site: CasinoSite, index: number) => (
            <Card key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
