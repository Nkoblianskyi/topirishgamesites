"use client"

import Link from "next/link"
import { Shield, Lightbulb, HelpCircle, ArrowRight } from "lucide-react"

const facts = [
  { label: "18+ only", desc: "Adults in Ireland." },
  { label: "Licensed only", desc: "Ireland-facing brands." },
  { label: "Independent", desc: "Ranking not for sale." },
  { label: "Updated", desc: "Ranks checked regularly." },
]

const infoBlocks = [
  { title: "What we rate", body: "Game variety, bonus fairness, payout speed, support. Commercial links don’t change the order—you see the same comparison." },
  { title: "Choose what fits", body: "Use scores as a start. Read each operator’s terms before you deposit; their site is the source of truth." },
  { title: "Bonuses in plain language", body: "We summarise offers; wagering and rules vary. Always check the brand’s site before claiming." },
  { title: "Licensed & regulated", body: "We only list operators with licences suitable for Ireland—oversight, fair games, and someone to turn to." },
]

export function InfoSections() {
  return (
    <div className="mt-14 sm:mt-20">
      {/* ——— 1. Key facts — horizontal strip, no card ——— */}
      <section className="mb-12 sm:mb-16" aria-labelledby="facts-heading">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-gold-primary shrink-0" aria-hidden />
          <h2 id="facts-heading" className="text-sm font-bold uppercase tracking-widest text-gold-primary">Key facts</h2>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-6">
          {facts.map((item) => (
            <div key={item.label} className="flex items-baseline gap-2">
              <span className="text-white font-semibold text-sm sm:text-base">{item.label}</span>
              <span className="text-white/40 text-xs sm:text-sm">— {item.desc}</span>
            </div>
          ))}
        </div>
        <Link href="/facts" className="inline-flex items-center gap-1.5 mt-4 text-gold-primary text-sm font-semibold hover:text-gold-hover transition-colors">
          Full facts <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

      {/* ——— 2. Safer play — full-width band, no box ——— */}
      <section className="mb-12 sm:mb-16 py-8 sm:py-10 px-4 sm:px-6 rounded-2xl bg-irish-green/15 border border-irish-green/30" aria-labelledby="safe-heading">
        <div className="max-w-2xl mx-auto text-center">
          <Shield className="w-10 h-10 text-irish-green-light mx-auto mb-3" aria-hidden />
          <h2 id="safe-heading" className="text-lg sm:text-xl font-bold text-white mb-2">Safer play</h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5">
            Stay in control: set limits, don’t chase losses, get help if it stops feeling optional. We only list brands that take player safety seriously.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="px-3 py-1.5 rounded-full bg-irish-green/30 text-irish-green-light text-xs font-semibold">Set limits</span>
            <span className="px-3 py-1.5 rounded-full bg-irish-green/30 text-irish-green-light text-xs font-semibold">Don’t chase</span>
            <span className="px-3 py-1.5 rounded-full bg-irish-green/30 text-irish-green-light text-xs font-semibold">Get help</span>
          </div>
          <Link
            href="/responsible-gaming"
            className="inline-flex items-center gap-2 rounded-full bg-irish-green hover:bg-irish-green-light text-white font-bold px-5 py-2.5 text-sm transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Safer play & support
          </Link>
        </div>
      </section>

      {/* ——— 3. About us — pull-quote style, one accent line ——— */}
      <section className="mb-12 sm:mb-16" aria-labelledby="about-heading">
        <div className="pl-4 sm:pl-5 border-l-4 border-gold-primary">
          <h2 id="about-heading" className="text-lg sm:text-xl font-bold text-white mb-2">About us</h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            topirishgamesites.com is an independent comparison site for players in Ireland. We don’t accept wagers or hold funds. We provide clear rankings so you can choose licensed operators with confidence.
          </p>
          <Link href="/about" className="inline-flex items-center gap-1.5 mt-4 text-gold-primary font-semibold text-sm hover:text-gold-hover transition-colors">
            Full about page <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ——— 4. Information for players — editorial list, no card stack ——— */}
      <section className="mb-8" aria-labelledby="info-heading">
        <h2 id="info-heading" className="text-sm font-bold uppercase tracking-widest text-gold-primary mb-6">Information for players</h2>
        <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
          Choosing a site isn’t just about the biggest bonus. It’s about games, payouts, and a platform that fits how you play. We rank operators that work well for Irish players.
        </p>
        <ul className="space-y-6 sm:space-y-8 max-w-3xl">
          {infoBlocks.map((block, index) => (
            <li key={block.title} className="flex gap-4 sm:gap-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-primary/20 text-gold-primary text-sm font-black border border-gold-primary/50">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">{block.title}</h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">{block.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 pt-6 border-t border-white/10 text-white/40 text-xs uppercase tracking-wide max-w-3xl">
          Content © topirishgamesites.com · 18+ · Ireland · See each operator for full terms.
        </p>
      </section>
    </div>
  )
}
