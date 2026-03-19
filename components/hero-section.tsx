"use client"

import Image from "next/image"
import { Clock, ShieldCheck } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getRatingsRevisedDate() {
  const d = new Date()
  return {
    iso: d.toISOString().slice(0, 10),
    short: d.toLocaleDateString("en-IE", { month: "short", year: "numeric" }),
  }
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso: ratingsRevisedIso, short: dateShort } = getRatingsRevisedDate()

  const Indicators = ({ compact }: { compact?: boolean }) => (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1">
        <Image src="/flag-ireland.svg" alt="" width={compact ? 14 : 18} height={compact ? 10 : 12} className="rounded-sm shrink-0" />
        <span className={`font-semibold text-white ${compact ? "text-[9px]" : "text-[10px]"} uppercase tracking-wide`}>IE</span>
      </div>
      <div className="inline-flex items-center gap-1.5 rounded-full bg-irish-green/20 border border-irish-green/40 px-2.5 py-1">
        <ShieldCheck className={`text-irish-green-light shrink-0 ${compact ? "w-3 h-3" : "w-3.5 h-3.5"}`} strokeWidth={2.5} aria-hidden />
        <span className={`font-semibold text-white ${compact ? "text-[9px]" : "text-[10px]"} uppercase tracking-wide`}>Secure</span>
      </div>
      <div className="inline-flex items-center gap-1.5 rounded-full bg-irish-green/20 border border-irish-green/40 px-2.5 py-1">
        <Clock className={`text-irish-green-light shrink-0 ${compact ? "w-3 h-3" : "w-3.5 h-3.5"}`} strokeWidth={2.25} aria-hidden />
        <span className={`font-semibold text-white ${compact ? "text-[9px]" : "text-[10px]"} uppercase tracking-wide`}>Fast payouts</span>
      </div>
      <div className="inline-flex items-center justify-center rounded-full bg-gold-primary text-black px-2.5 py-1 font-bold shadow-lg shadow-gold-primary/25">
        <span className={`${compact ? "text-[9px]" : "text-[10px]"} uppercase tracking-wider`}>+18</span>
      </div>
      {!compact && (
        <>
          <button type="button" onClick={onAdvertiserModalOpen} className="rounded-full bg-white/5 border border-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/95 hover:bg-white/10 backdrop-blur-sm">
            Disclosure
          </button>
          <button type="button" onClick={onTermsModalOpen} className="rounded-full bg-white/5 border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/90 hover:bg-white/10 backdrop-blur-sm">
            Rules
          </button>
        </>
      )}
    </div>
  )

  const TopRow = ({ label, date }: { label: string; date: string }) => (
    <div className="flex items-center justify-between gap-4 w-full max-w-3xl">
      <span className="text-xs font-semibold uppercase tracking-widest text-irish-green-light">{label}</span>
      <time dateTime={ratingsRevisedIso} className="text-xs text-white/60">{date}</time>
    </div>
  )

  return (
    <>
      {/* Desktop — reworked: top row (label + date), then title, description, indicators */}
      <div
        className="hidden lg:block relative w-full overflow-hidden rounded-2xl min-h-[300px] border border-gold-primary/20 shadow-2xl bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-8.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="absolute inset-0 opacity-50" style={{ background: "linear-gradient(135deg, rgba(22,155,98,0.2) 0%, rgba(0,0,0,0.75) 20%, rgba(0,0,0,0.85) 20%)" }} aria-hidden />
        <div className="relative z-10 flex flex-col items-center px-8 xl:px-14 py-10 xl:py-12">
          <TopRow label="Independent rankings" date={dateShort} />
          <h1 className="font-hero-display text-3xl xl:text-[2.75rem] 2xl:text-[3rem] font-extrabold leading-tight tracking-tight text-white text-center mt-4">
            Trusted Irish <span className="text-gold-primary">gaming sites</span>, ranked for you
          </h1>
          <p className="mt-3 text-sm xl:text-base text-white/80 max-w-xl text-center leading-relaxed">
            Bonuses, games, payouts and support — one place to compare licensed operators.
          </p>
          <div className="mt-6">
            <Indicators />
          </div>
        </div>
      </div>

      {/* Tablet — reworked: same structure */}
      <div
        className="hidden md:block lg:hidden relative w-full overflow-hidden rounded-2xl min-h-[240px] border border-gold-primary/20 shadow-xl bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-8.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(22,155,98,0.15) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.85) 100%)" }} aria-hidden />
        <div className="relative z-10 flex flex-col items-center px-6 py-7">
          <TopRow label="Independent rankings" date={dateShort} />
          <h1 className="font-hero-display text-2xl md:text-3xl font-extrabold leading-tight text-white text-center mt-3">
            Irish <span className="text-gold-primary">gaming sites</span> ranked
          </h1>
          <p className="mt-2 text-xs text-white/75 max-w-md text-center">Bonuses, games & payouts at a glance.</p>
          <div className="mt-4">
            <Indicators />
          </div>
        </div>
      </div>

      {/* Mobile — reworked: top row (label + date), title, description, indicators, buttons */}
      <div
        className="md:hidden relative w-full overflow-hidden rounded-2xl min-h-[220px] border border-gold-primary/20 shadow-xl bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-7.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/25" aria-hidden />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(22,155,98,0.12) 0%, rgba(0,0,0,0.65) 60%" }} aria-hidden />
        <div className="relative z-10 flex flex-col justify-center px-4 py-5 min-h-[220px] gap-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-irish-green-light">Rankings</span>
            <time dateTime={ratingsRevisedIso} className="text-[11px] text-white/60">{dateShort}</time>
          </div>
          <h1 className="font-hero-display text-xl font-extrabold leading-snug text-white">
            Irish <span className="text-gold-primary">gaming sites</span> ranked
          </h1>
          <p className="text-[12px] text-white/85">Bonuses, games & fast payouts. Licensed only.</p>
          <div className="flex flex-wrap gap-1.5">
            <Indicators compact />
          </div>
          <div className="flex gap-2 pt-0.5">
            <button type="button" onClick={onAdvertiserModalOpen} className="rounded-full bg-white/10 border border-white/25 px-2.5 py-1 text-[9px] font-semibold uppercase text-white">
              Disclosure
            </button>
            <button type="button" onClick={onTermsModalOpen} className="rounded-full bg-white/10 border border-white/20 px-2.5 py-1 text-[9px] font-semibold uppercase text-white">
              Rules
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
