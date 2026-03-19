import Link from "next/link"
import { ArrowLeft, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Website terms of use for topirishgamesites.com. Agreement, age restriction, accuracy, external links, and governing law.",
}

export default function TermsPage() {
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
          <div className="h-10 w-1 rounded-full bg-gold-primary" aria-hidden />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Website Terms of Use</h1>
            <p className="text-white/50 text-sm mt-1">
            Last updated {new Date().toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8 text-white/70">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. Agreement</h2>
            <p className="leading-relaxed">
              By accessing topirishgamesites.com you accept these terms. If you do not agree, please stop using the site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. Nature of the service</h2>
            <p className="leading-relaxed">
              We publish information and editorial opinions about third-party gaming brands. We are not an operator and do not hold customer funds or accept wagers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Age</h2>
            <p className="leading-relaxed">
              You must be 18 or older. Content is intended for adults in Ireland who may legally view gambling-related information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Accuracy</h2>
            <p className="leading-relaxed">
              Bonuses, offers, and rules change without notice. Our content may lag behind changes. Always confirm current terms on the operator’s official site before depositing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">5. External sites</h2>
            <p className="leading-relaxed">
              Links take you to third-party sites. Each has its own terms, privacy policy, and licence. We are not responsible for their content or conduct.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">6. Responsible gambling</h2>
            <p className="leading-relaxed">
              Use limits, take breaks, and never borrow to gamble. For support see GambleAware, GamCare, Gambling Therapy and other organisations linked in our footer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">7. Intellectual property</h2>
            <p className="leading-relaxed">
              Layout, text, and graphics created by topirishgamesites.com remain our copyright. Third-party logos belong to their owners and are used for identification only.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">8. Limitation of liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by Irish law, we exclude liability for loss arising from reliance on this site. Where local law does not allow certain exclusions, those limits apply only as required.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">9. Privacy</h2>
            <p className="leading-relaxed">
              See our <Link href="/privacy-policy" className="text-gold-primary font-medium hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">10. Changes</h2>
            <p className="leading-relaxed">
              We may update these terms at any time. Continued use after changes are posted constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">11. Governing law</h2>
            <p className="leading-relaxed">
              Irish law governs these terms. The courts of Ireland have non-exclusive jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
