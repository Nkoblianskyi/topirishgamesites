"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CasinoSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: CasinoSite
  rank: number
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const termsContainerRef = useRef<HTMLDivElement>(null)

  const isFirst = rank === 1
  const termsText = site.terms ?? ""
  const welcomeOffer = site.welcomeOffer ?? site.bonus

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const limit = isMobile ? 72 : 350
    setShowReadMore(termsText.length > limit)
  }, [termsText, site.name, isMobile])

  const formatVotes = (votes: number) => votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const starRating = site.score / 2
  const getStarFill = (index: number) => {
    const raw = Math.max(0, Math.min(1, starRating - index))
    return Math.round(raw * 5) / 5
  }

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  const shouldShowSpecialBadge = rank === 1 || rank === 2 || rank === 4 || rank === 7
  const getSpecialBadgeText = () => {
    if (rank === 1) return "TOP BRAND"
    if (rank === 2) return "EXCLUSIVE"
    if (rank === 4) return "TRENDING"
    if (rank === 7) return "GROWTH"
    return ""
  }

  const TermsBlock = ({ className = "", mobile = false }: { className?: string; mobile?: boolean }) => (
    <div
      className={`border-t border-white/10 bg-black/30 ${mobile ? "px-3 py-2" : "px-4 py-2.5"} ${className}`}
      ref={termsContainerRef}
    >
      <p className="text-[7px] sm:text-[8px] font-bold uppercase tracking-wider text-white/40 mb-0.5 text-center">Terms</p>
      <div
        className={`text-white/50 leading-tight text-center max-w-4xl mx-auto ${mobile ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-xs"} ${!isTermsExpanded ? (mobile ? "line-clamp-1" : "line-clamp-2") : ""}`}
      >
        {termsText}
      </div>
      {showReadMore && (
        <button type="button" onClick={handleTermsClick} className="text-irish-green-light hover:text-irish-green underline mt-0.5 text-[10px] sm:text-xs font-semibold block mx-auto">
          {isTermsExpanded ? "Less" : "Full terms"}
        </button>
      )}
    </div>
  )

  const accentClass = isFirst ? "card-accent-gold" : "card-accent-green"
  const rankCircleClass = isFirst
    ? "bg-gold-primary text-black font-black shadow-lg shadow-gold-primary/40"
    : "bg-[var(--bg-elevated)] text-irish-green-light border border-irish-green/50 font-black"
  const cardShadowClass = isFirst
    ? "shadow-[0_4px_24px_rgba(212,175,55,0.2),0_0_0_1px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.25),0_0_0_1px_rgba(212,175,55,0.4)]"
    : "shadow-[0_4px_20px_rgba(212,175,55,0.12),0_0_0_1px_rgba(212,175,55,0.2)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.18),0_0_0_1px_rgba(212,175,55,0.3)]"
  const logoBorderClass = isFirst ? "border-gold-primary/50 shadow-md shadow-gold-primary/20" : "border-gold-primary/30"

  return (
    <div className="block">
      {/* Desktop — accent bar, gold accents, white logo bg */}
      <div className={`hidden lg:block overflow-hidden rounded-xl border border-gold-primary/30 bg-[var(--bg-card)] hover:border-gold-primary/50 transition-all duration-300 ${accentClass} ${cardShadowClass}`}>
        <div className="flex">
          <div className="w-20 xl:w-24 shrink-0 flex flex-col items-center justify-center py-5 bg-[var(--bg-elevated)]/80">
            <span className="text-[9px] font-semibold uppercase tracking-widest text-white/40 mb-2">Rank</span>
            <div className={`flex h-14 w-14 xl:h-16 xl:w-16 items-center justify-center rounded-full text-2xl xl:text-3xl tabular-nums ${rankCircleClass}`} aria-hidden>
              {rank}
            </div>
          </div>

          <Link href={site.link} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-0 flex items-stretch gap-4 xl:gap-5 py-4 pl-5 pr-5 group/cell">
            <div className={`flex-[0_0_24%] xl:flex-[0_0_26%] flex flex-col rounded-xl bg-white border ${logoBorderClass} p-3 group-hover/cell:border-gold-primary/60 transition-colors`}>
              {shouldShowSpecialBadge && (
                <div className="flex justify-center shrink-0 mb-2">
                  <span className="px-2 py-0.5 text-[7px] font-bold uppercase bg-irish-green/30 text-irish-green-light border border-irish-green/40 rounded-md">
                    {getSpecialBadgeText()}
                  </span>
                </div>
              )}
              <div className="flex-1 min-h-0 flex items-center justify-center">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="max-h-[4.5rem] xl:max-h-[5rem] w-full object-contain" />
              </div>
            </div>

            <div className="flex-1 min-w-0 flex flex-col justify-center rounded-xl bg-[var(--bg-elevated)]/60 border border-gold-primary/20 px-4 py-3 text-center group-hover/cell:border-gold-primary/40 transition-colors shadow-inner">
              <p className="text-[9px] font-bold uppercase tracking-wider text-gold-primary mb-1">Offer</p>
              <p className="text-base xl:text-lg font-bold text-white leading-tight">{site.bonus}</p>
              <p className="text-sm xl:text-base font-semibold text-white/80 leading-tight">{welcomeOffer}</p>
            </div>

            <div className="flex-[0_0_16%] flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-16 xl:w-[4.5rem] xl:h-[4.5rem] rounded-xl bg-[var(--bg-elevated)] border-2 border-gold-primary/50 flex flex-col items-center justify-center shadow-[0_0_16px_rgba(212,175,55,0.15)]" aria-hidden>
                <span className="text-2xl xl:text-3xl font-black leading-none text-gold-primary">{site.score.toFixed(1)}</span>
                <span className="text-[8px] font-semibold uppercase text-gold-primary/80 mt-0.5">score</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => {
                  const fill = getStarFill(i)
                  return (
                    <span key={i} className="relative inline-block w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0">
                      <Star className="absolute inset-0 w-full h-full fill-none stroke-gold-primary stroke-[1.5]" />
                      <Star className="absolute inset-0 w-full h-full fill-gold-primary stroke-0" style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }} />
                    </span>
                  )
                })}
              </div>
              <span className="text-[9px] text-white/40">{formatVotes(site.reviews)} votes</span>
            </div>

            <div className="flex-[0_0_12%] flex flex-col items-center justify-center min-w-[6.5rem]">
              <span className={`w-full rounded-xl font-bold text-xs xl:text-sm py-3.5 xl:py-4 text-center transition-colors ${isFirst ? "bg-gold-primary hover:bg-gold-hover text-black shadow-lg shadow-gold-primary/30" : "bg-irish-green hover:bg-irish-green-light text-white shadow-lg shadow-gold-primary/15 border border-gold-primary/30"}`}>
                GET BONUS
              </span>
              <span className="text-[10px] text-white/40 mt-1.5 group-hover/cell:text-white/60">{site.name} →</span>
            </div>
          </Link>
        </div>
        <TermsBlock />
      </div>

      {/* Tablet */}
      <div className={`hidden md:block lg:hidden overflow-hidden rounded-xl border border-gold-primary/25 bg-[var(--bg-card)] transition-all ${accentClass} shadow-[0_4px_20px_rgba(212,175,55,0.1)]`}>
        <div className="flex items-stretch min-h-[140px]">
          <div className="w-16 shrink-0 flex flex-col items-center justify-center py-3 bg-[var(--bg-elevated)]/80">
            <span className="text-[8px] font-semibold uppercase text-white/40 mb-1">Rank</span>
            <div className={`flex h-11 w-11 items-center justify-center rounded-full text-xl tabular-nums ${rankCircleClass}`}>{rank}</div>
          </div>
          <Link href={site.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-stretch min-w-0 group/tab">
            <div className={`flex-[0_0_28%] flex flex-col p-2 border-r border-gold-primary/20 bg-white ${logoBorderClass}`}>
              {shouldShowSpecialBadge && (
                <div className="flex justify-center shrink-0 mb-1">
                  <span className="px-1.5 py-0.5 text-[7px] font-bold uppercase bg-irish-green/30 text-irish-green-light rounded">{getSpecialBadgeText()}</span>
                </div>
              )}
              <div className="flex-1 flex items-center justify-center">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="max-h-[3.5rem] w-full object-contain" />
              </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center px-3 py-2 gap-2">
              <div className="rounded-lg bg-[var(--bg-elevated)]/80 border border-gold-primary/20 px-2 py-1.5 text-center">
                <p className="text-[8px] uppercase text-gold-primary font-bold">Bonus</p>
                <p className="text-sm font-bold text-white leading-tight">{site.bonus}</p>
                <p className="text-xs font-semibold text-white/80">{welcomeOffer}</p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-elevated)] border-2 border-gold-primary/40 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.15)]">
                    <span className="text-sm font-black text-gold-primary">{site.score.toFixed(1)}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => {
                      const fill = getStarFill(i)
                      return (
                        <span key={i} className="relative inline-block w-3 h-3 shrink-0">
                          <Star className="absolute inset-0 w-full h-full fill-none stroke-gold-primary stroke-[1.5]" />
                          <Star className="absolute inset-0 w-full h-full fill-gold-primary stroke-0" style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }} />
                        </span>
                      )
                    })}
                  </div>
                </div>
                <span className={`rounded-lg shrink-0 px-4 py-2.5 text-xs font-bold transition-colors ${isFirst ? "bg-gold-primary text-black hover:bg-gold-hover shadow shadow-gold-primary/30" : "bg-irish-green text-white hover:bg-irish-green-light border border-gold-primary/30"}`}>BONUS</span>
              </div>
            </div>
          </Link>
        </div>
        <TermsBlock />
      </div>

      {/* Mobile — accent bar, two columns, white logo area */}
      <div className={`md:hidden overflow-hidden rounded-xl border border-gold-primary/25 bg-[var(--bg-card)] transition-all ${accentClass} shadow-[0_4px_16px_rgba(212,175,55,0.12)]`}>
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block active:opacity-95">
          <div className="grid grid-cols-[1fr_1fr] min-h-[168px] sm:min-h-[176px]">
            <div className="relative flex flex-col justify-between py-3 px-3 bg-white border-r border-gold-primary/30">
              <div className={`absolute left-3 top-3 z-10 flex size-9 sm:size-10 items-center justify-center rounded-full text-sm font-black tabular-nums ${rankCircleClass}`} aria-label={`Rank ${rank}`}>
                {rank}
              </div>
              <div className="flex flex-col items-center justify-center min-h-0 flex-1 pt-8">
                {shouldShowSpecialBadge && (
                  <div className="flex justify-center shrink-0 mb-1">
                    <span className="px-1.5 py-0.5 text-[8px] font-bold uppercase bg-irish-green/30 text-irish-green-light rounded border border-irish-green/40">{getSpecialBadgeText()}</span>
                  </div>
                )}
                <div className="flex-1 flex items-center justify-center min-h-0 w-full">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-11 sm:h-12 w-auto max-w-full object-contain" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 w-full shrink-0 pt-2">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => {
                      const fill = getStarFill(i)
                      return (
                        <span key={i} className="relative inline-block w-3 h-3 shrink-0">
                          <Star className="absolute inset-0 w-full h-full fill-none stroke-gold-primary stroke-[1.5]" />
                          <Star className="absolute inset-0 w-full h-full fill-gold-primary stroke-0" style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }} />
                        </span>
                      )
                    })}
                  </div>
                  <span className="text-[9px] text-gray-600">{formatVotes(site.reviews)}</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg sm:text-xl font-bold leading-none text-gold-primary">{site.score.toFixed(1)}</span>
                  <span className="text-[8px] text-gray-600 mt-0.5">Score</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between py-3 px-3 min-w-0 bg-[var(--bg-card)] relative border-l border-gold-primary/20">
              <div className="text-center flex-1 flex flex-col justify-center min-h-0">
                <div className="text-[9px] text-gold-primary uppercase font-semibold mb-0.5">Welcome bonus</div>
                <div className="text-sm sm:text-base font-bold text-white leading-tight break-words line-clamp-2">{site.bonus}</div>
                <div className="text-xs sm:text-sm font-semibold text-white/80 leading-tight break-words line-clamp-2">{welcomeOffer}</div>
              </div>
              <Button className={`rounded-xl font-bold px-3 py-2.5 text-xs sm:text-sm w-full min-h-[44px] mt-2 ${isFirst ? "bg-gold-primary hover:bg-gold-hover text-black shadow-lg shadow-gold-primary/30" : "bg-irish-green hover:bg-irish-green-light text-white shadow-lg shadow-gold-primary/15 border border-gold-primary/30"}`}>
                GET BONUS
              </Button>
            </div>
          </div>
        </Link>
        <TermsBlock mobile className="rounded-b-xl" />
      </div>
    </div>
  )
}
