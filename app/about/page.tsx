import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Top Irish Game Sites: who we are, our editorial methodology, and how we rank licensed gaming operators for Irish players.",
}

export default function AboutPage() {
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
        <div className="flex items-center gap-3 px-6 py-6 sm:py-8 bg-gradient-to-r from-irish-green/20 to-transparent border-b border-white/10">
          <div className="h-10 w-1 rounded-full bg-irish-green" aria-hidden />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">About Top Irish Game Sites</h1>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mt-1">
              Independent comparison site for Irish players. Clear rankings and information so you can choose licensed operators with confidence.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 space-y-8 text-white/70">
          <section className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-5 sm:p-6 border-l-4 border-l-irish-green/60">
            <h2 className="text-lg font-bold text-irish-green-light mb-3">Impressum — Publisher</h2>
            <address className="not-italic text-white/70 space-y-1 text-sm">
              <p className="font-semibold text-white text-base">Sigmastart04 GmbH</p>
              <p>Zehmeplatz 14</p>
              <p>15230 Frankfurt (Oder)</p>
              <p>Germany</p>
            </address>
            <p className="text-sm text-white/50 mt-4 leading-relaxed">
              This website is operated by Sigmastart04 GmbH. We publish informational and comparative content about gaming sites; we do not accept wagers or hold player funds.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-5 sm:p-6 border-l-4 border-l-gold-primary/50">
            <h2 className="text-xl font-bold text-white mb-3">Why we exist</h2>
            <p className="leading-relaxed">
              The market is crowded and every brand promotes the largest welcome bonus. Top Irish Game Sites exists to cut through the noise: one ranking table, consistent scoring, and clear notes so you can compare operators before you sign up.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-5 sm:p-6 border-l-4 border-l-irish-green/60">
            <h2 className="text-xl font-bold text-white mb-3">Editorial methodology</h2>
            <p className="leading-relaxed mb-4">
              Our rankings combine game variety, bonus clarity, payout experience, and how fairly promotions are presented. Commercial partnerships help fund the site but do not allow a brand to buy the top position—if payouts slow or terms become unfair, the score is adjusted.
            </p>
            <div className="rounded-lg border border-white/10 bg-[var(--bg-elevated)] p-5 sm:p-6">
              <ul className="space-y-2 text-sm text-white/70">
                <li><strong className="text-irish-green-light">Licensing:</strong> Only operators appropriate for Irish customers.</li>
                <li><strong className="text-irish-green-light">Safety:</strong> Deposit limits, reality checks, self-exclusion visibility.</li>
                <li><strong className="text-irish-green-light">Product:</strong> Slots, live casino, table games, mobile experience.</li>
                <li><strong className="text-irish-green-light">Payments:</strong> Common Irish payment methods and withdrawal speed.</li>
                <li><strong className="text-irish-green-light">Support:</strong> Accessible help when you need it.</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-5 sm:p-6 border-l-4 border-l-gold-primary/50">
            <h2 className="text-xl font-bold text-white mb-3">How we work</h2>
            <p className="leading-relaxed">
              Editors open real accounts where possible, complete verification, and test withdrawal times. We also monitor forums and regulator updates. When an operator changes a headline offer, we aim to reflect that promptly.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-5 sm:p-6 border-l-4 border-l-irish-green/60">
            <h2 className="text-xl font-bold text-white mb-3">Transparency & funding</h2>
            <p className="leading-relaxed">
              Outbound links may carry affiliate tags. That does not change our order of merit. Full commercial disclosure is available via the “Advertiser Disclosure” link on the homepage.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-5 sm:p-6 border-l-4 border-l-gold-primary/50">
            <h2 className="text-xl font-bold text-white mb-3">Responsible gambling</h2>
            <p className="leading-relaxed">
              Gambling should be entertainment with a clear limit. If you are playing to escape stress or chasing losses, step away and use the organisations linked in our footer—they offer free, confidential support.
            </p>
          </section>

          <div className="rounded-xl border-l-4 border-gold-primary bg-gold-primary/15 border border-white/10 p-5 text-white/90">
            <p className="font-semibold mb-2 text-white">18+ only</p>
            <p className="text-sm text-white/80">
              topirishgamesites.com does not accept wagers. All play takes place on licensed third-party sites under their terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
