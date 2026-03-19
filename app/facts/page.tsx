import Link from "next/link"
import { ArrowLeft, Lightbulb, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Key Facts",
  description:
    "Key facts about topirishgamesites.com: 18+ only, licensed operators, independent ranking, regular updates, and transparent methodology.",
}

const facts = [
  {
    title: "18+ only",
    description: "All content and listed operators are intended for adults in Ireland who are of legal age to gamble. We do not accept wagers or allow underage access.",
  },
  {
    title: "Licensed operators only",
    description: "We only include gaming sites that hold licences appropriate for Irish customers. This ensures regulatory oversight, fair games, and fund safety.",
  },
  {
    title: "Independent ranking",
    description: "Our order of merit is editorial. Commercial partnerships fund the site but do not allow brands to buy position. Scores reflect real criteria and can go down if standards slip.",
  },
  {
    title: "Regularly updated",
    description: "Ranks, bonuses, and key information are reviewed and updated on a regular basis. Always confirm current offers and terms on the operator’s own site before playing.",
  },
  {
    title: "Transparent methodology",
    description: "We score operators on licensing, game variety, bonus clarity, payout speed, support, and responsible-gambling tools. Full disclosure is available in our About and Advertiser Disclosure sections.",
  },
]

export default function FactsPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-4xl">
      <Link href="/">
        <Button
          variant="ghost"
          className="text-white/80 hover:bg-white/10 mb-6 border border-white/20 hover:border-white/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Home
        </Button>
      </Link>

      <div className="rounded-2xl border border-white/10 bg-[var(--surface-panel)] backdrop-blur-sm overflow-hidden shadow-xl">
        <div className="flex items-center gap-3 px-6 py-6 sm:py-8 bg-gradient-to-r from-gold-primary/15 to-transparent border-b border-white/10">
          <Lightbulb className="w-8 h-8 text-gold-primary shrink-0" aria-hidden />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Key Facts</h1>
            <p className="text-white/50 text-sm sm:text-base max-w-xl mt-1">What you need to know about topirishgamesites.com and how we work.</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          {facts.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-4 sm:p-5 flex gap-4 border-l-4 border-l-gold-primary/50 hover:border-white/20 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-primary/20 text-gold-primary border border-gold-primary/40">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-1">{item.title}</h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="px-6 py-4 bg-[var(--bg-elevated)] border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            For full terms, privacy, and cookies see the links in the footer. 18+ · Ireland.
          </p>
        </div>
      </div>
    </div>
  )
}
