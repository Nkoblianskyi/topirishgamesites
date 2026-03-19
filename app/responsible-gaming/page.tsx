import Link from "next/link"
import { ArrowLeft, Shield, AlertTriangle, Phone, Globe, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safer Play & Responsible Gaming",
  description:
    "Safer play and responsible gambling: limits, warning signs, self-help tools, and where to get free confidential support. 18+ Ireland.",
}

export default function ResponsibleGamingPage() {
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
        <div className="flex items-center justify-center gap-4 px-6 py-8 sm:py-10 bg-gradient-to-r from-irish-green/25 to-transparent border-b border-white/10">

          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Safer play</h1>
            <p className="text-white/70 text-sm sm:text-base max-w-xl">
            Top Irish Game Sites supports play that stays within your limits. Gambling should remain entertainment—here’s how we help and where to get support.
          </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8 text-white/70">
          <div className="rounded-xl border-l-4 border-amber-500/80 bg-amber-500/10 p-5">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
              <h2 className="text-lg font-bold text-white">Important</h2>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Gambling should stay fun. If it stops being enjoyable or starts to affect your life, it’s time to seek help. Support is free and confidential.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Responsible gambling</h2>
            <p className="leading-relaxed mb-4">
              Responsible gambling means enjoying gaming as entertainment while keeping control of your time and money. It involves understanding the risks, setting limits, and knowing when to stop.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Set time limits", text: "Decide how long you’ll play before you start and stick to it." },
                { title: "Set money limits", text: "Only gamble with money you can afford to lose. Never borrow to gamble." },
                { title: "Take breaks", text: "Step away regularly to keep perspective and control." },
                { title: "Don’t chase losses", text: "Accept losses as part of the cost of entertainment. Don’t try to win them back." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-4">
                  <h3 className="font-semibold text-gold-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Warning signs</h2>
            <p className="leading-relaxed mb-3">
              Watch for: spending more time or money than intended; feeling anxious or guilty about gambling; lying to others; borrowing to gamble; neglecting work or family; thinking about gambling constantly; needing to bet more for the same thrill; being unable to stop or cut down.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Self-help tools</h2>
            <p className="leading-relaxed mb-3">
              Reputable sites offer: deposit limits, loss limits, session time limits, reality checks, and self-exclusion. Use them to stay in control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Getting help</h2>
            <p className="leading-relaxed mb-4">
              If you or someone you know needs support, these organisations offer free, confidential help:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-gold-primary" />
                  <h3 className="font-semibold text-white">GambleAware</h3>
                </div>
                <p className="text-sm text-gray-300 mb-2">Information, advice and support for anyone affected by gambling.</p>
                <p className="text-xs text-gray-400">gambleaware.org · 0808 8020 133</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-gold-primary" />
                  <h3 className="font-semibold text-white">GamCare</h3>
                </div>
                <p className="text-sm text-gray-300 mb-2">Support and advice for anyone affected by problem gambling.</p>
                <p className="text-xs text-gray-400">gamcare.org.uk · 0808 8020 133</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-gold-primary" />
                  <h3 className="font-semibold text-white">Gamblers Anonymous</h3>
                </div>
                <p className="text-sm text-gray-300 mb-2">Peer support through shared experience.</p>
                <p className="text-xs text-gray-400">gamblersanonymous.org.uk</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-gold-primary" />
                  <h3 className="font-semibold text-white">Gordon Moody</h3>
                </div>
                <p className="text-sm text-gray-300 mb-2">Residential and ongoing support for gambling addiction.</p>
                <p className="text-xs text-gray-400">gordonmoody.org.uk · 01384 241292</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">What we expect from operators</h2>
            <p className="leading-relaxed mb-3">
              We favour brands that make harm reduction visible—not hidden in PDFs. That includes: clear responsible-gambling tools, policies for identifying problem gambling, easy access to support, strict age verification, and transparent terms.
            </p>
          </section>

          <div className="rounded-xl border border-white/10 bg-gold-primary/15 p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Need help now?</h3>
            <p className="text-gray-200 text-sm mb-2">National Gambling Helpline — free, confidential, 24/7</p>
            <p className="text-xl font-bold text-gold-primary">0808 8020 133</p>
          </div>
        </div>
      </div>
    </div>
  )
}
