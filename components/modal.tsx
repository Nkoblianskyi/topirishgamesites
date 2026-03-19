"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import Link from "next/link"
import type { CasinoSite } from "../types"

interface Top3ModalProps {
  casinoSites: CasinoSite[]
}

export function Modal({ casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const pick = casinoSites[0]
  if (!pick) return null

  const welcomeOffer = pick.welcomeOffer ?? pick.bonus

  return (
    <div
      className="fixed inset-0 z-[55] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-sm sm:max-w-md relative">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute -top-1 -right-1 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-card)] border-2 border-gold-primary/50 text-gold-primary hover:bg-gold-primary hover:text-black transition-colors shadow-lg"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="rounded-2xl overflow-hidden border-2 border-gold-primary/50 bg-[var(--bg-card)] shadow-[0_0_40px_rgba(212,175,55,0.2)]">
          {/* Header strip */}
          <div className="py-2 px-4 bg-gradient-to-r from-gold-primary/20 to-transparent border-b border-gold-primary/30">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-primary">Today&apos;s top pick</span>
          </div>

          <div className="p-5 sm:p-6">
            {/* Logo on white */}
            <div className="flex justify-center mb-4">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-white border-2 border-gold-primary/40 p-3 flex items-center justify-center shadow-inner">
                <img
                  src={pick.logo || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h2 id="modal-title" className="text-center text-lg sm:text-xl font-bold text-white mb-2">{pick.name}</h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-primary text-gold-primary" aria-hidden />
              ))}
              <span className="ml-2 text-sm font-bold text-gold-primary">{pick.score.toFixed(1)}</span>
            </div>

            {/* Bonus */}
            <div className="rounded-xl border border-gold-primary/30 bg-[var(--bg-elevated)] p-3 sm:p-4 mb-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gold-primary mb-1">Welcome bonus</p>
              <p className="text-base sm:text-lg font-bold text-white leading-tight">{pick.bonus}</p>
              <p className="text-sm font-semibold text-white/80 mt-0.5">{welcomeOffer}</p>
            </div>

            <Link
              href={pick.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 rounded-xl font-bold text-center text-black bg-gold-primary hover:bg-gold-hover transition-colors shadow-lg shadow-gold-primary/30 active:scale-[0.98]"
            >
              Claim bonus →
            </Link>
            <p className="mt-2.5 text-[10px] text-white/40 text-center line-clamp-2">
              {pick.terms ?? "18+ · T&Cs apply"}
            </p>
          </div>

          <div className="py-2.5 px-4 border-t border-white/10 bg-black/40 text-center">
            <p className="text-[10px] text-white/50">
              18+ · <a href="https://www.gambleaware.org" className="text-gold-primary hover:underline" target="_blank" rel="noreferrer">BeGambleAware.org</a>
            </p>
          </div>
        </div>

        <p className="text-center mt-3 text-[11px] text-white/40">topirishgamesites.com</p>
      </div>
    </div>
  )
}
