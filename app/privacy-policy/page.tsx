import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for topirishgamesites.com: what data we process, legal bases, your rights, and how to contact us.",
}

export default function PrivacyPolicyPage() {
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

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Privacy Policy</h1>
            <p className="text-white/50 text-sm mt-1">
            Last reviewed {new Date().toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8 text-white/70">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Who we are</h2>
            <p className="leading-relaxed">
              topirishgamesites.com publishes editorial comparisons of gaming sites aimed at users in Ireland. This policy explains what personal data we may process and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Data we may process</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Technical logs: IP address, browser type, approximate location, timestamps.</li>
              <li>Usage data: pages visited, approximate engagement, where analytics is enabled.</li>
              <li>Communications: if you contact us by email, we retain the correspondence as long as needed to respond.</li>
            </ul>
            <p className="text-sm text-gray-500 mt-2">
              We do not operate a casino; we do not hold your gaming history or payment details.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Legal bases (GDPR)</h2>
            <p className="leading-relaxed">
              Where EU/UK law applies, we rely on legitimate interest to operate and secure the site, and on consent where we ask for it (e.g. non-essential cookies). You may withdraw consent at any time via browser settings or our cookie controls.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Sharing</h2>
            <p className="leading-relaxed">
              Hosting providers, analytics vendors, and affiliate networks may process data on our behalf under contracts. We do not sell personal data. We respond to lawful requests from authorities when legally required.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Retention</h2>
            <p className="leading-relaxed">
              Server logs are rotated on a short cycle. Analytics data is kept in anonymised form. Email correspondence is deleted once the matter is resolved unless the law requires otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Security</h2>
            <p className="leading-relaxed">
              We use HTTPS, access controls on systems, and vendors with appropriate security practices. No system is completely secure; please report any suspected issues promptly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your rights</h2>
            <p className="leading-relaxed">
              You may request access, correction, deletion, restriction, or portability where applicable under data protection law.
            </p>
            <p className="text-sm mt-2">
              Supervisory authority: Irish residents may contact the Data Protection Commission (dataprotection.ie).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Children</h2>
            <p className="leading-relaxed">
              Our services are for adults 18+. We do not knowingly collect data from minors. If you believe a child has provided data, please contact us for removal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">International transfers</h2>
            <p className="leading-relaxed">
              Some service providers may be outside the EEA. Where so, we use approved transfer mechanisms (e.g. EU Standard Contractual Clauses) as updated under GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Changes</h2>
            <p className="leading-relaxed">
              We may update this policy and will post the revised version here with a new review date. Continued use after changes constitutes acceptance unless we need fresh consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
            <p className="leading-relaxed">
              For data-related enquiries contact the publisher at{" "}
              <a href="mailto:info@topirishgamesites.com" className="text-gold-primary font-medium hover:underline">
                info@topirishgamesites.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Cookies</h2>
            <p className="leading-relaxed">
              For details see our <Link href="/cookie-policy" className="text-gold-primary font-medium hover:underline">Cookie Policy</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
