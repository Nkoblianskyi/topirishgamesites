import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How topirishgamesites.com uses cookies: necessary, analytics, functional, and third-party cookies. Your controls and contact.",
}

export default function CookiePolicyPage() {
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
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Cookie Policy</h1>
            <p className="text-white/50 text-sm mt-1">
            Effective {new Date().toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8 text-white/70">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. What is a cookie?</h2>
            <p className="leading-relaxed">
              A cookie is a small text file stored on your device when you visit a page. It can remember preferences, keep a session active, or help us understand aggregate traffic. We use cookies in a transparent way and only where necessary.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. How we use cookies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Strictly necessary:</strong> to remember your cookie consent choice and for basic security.</li>
              <li><strong>Analytics (if you consent):</strong> anonymous counts of pages viewed so we can improve the site.</li>
              <li><strong>Functional:</strong> to store UI choices such as dismissed pop-ups where we use them.</li>
              <li><strong>Third-party / affiliate:</strong> when you click through to a gaming site, their or their network’s cookies may be set—we do not control those.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Session vs persistent</h2>
            <p className="leading-relaxed">
              Session cookies are deleted when you close the browser. Persistent cookies remain until they expire or you delete them; we keep lifetimes as short as needed for each purpose.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Third parties</h2>
            <p className="leading-relaxed">
              Embedded content or analytics scripts may set cookies under their own policies. Check those providers’ documentation for full details.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">5. Your controls</h2>
            <p className="leading-relaxed">
              You can block, delete, or limit cookies in your browser settings, or use private browsing. Blocking all cookies may affect how our site works (for example the consent banner may show again each visit).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">6. Updates</h2>
            <p className="leading-relaxed">
              We may update this policy when our use of cookies changes. The date at the top reflects the latest version; significant changes may be highlighted on the site for a short period.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">7. Contact</h2>
            <p className="leading-relaxed">
              For questions about this policy, contact us at{" "}
              <a href="mailto:info@topirishgamesites.com" className="text-gold-primary font-medium hover:underline">
                info@topirishgamesites.com
              </a>. See also our <Link href="/privacy-policy" className="text-gold-primary font-medium hover:underline">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
