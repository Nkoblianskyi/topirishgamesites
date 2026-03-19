import Link from "next/link"
import Image from "next/image"
import { SiteWordmark } from "@/components/site-wordmark"

const nav = [
  { href: "/about", label: "About Us" },
  { href: "/responsible-gaming", label: "Safer Play" },
  { href: "/facts", label: "Facts" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
]

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[var(--bg-card)]/90 text-white">
      <div className="container mx-auto max-w-5xl xl:max-w-6xl px-4 py-10 sm:py-12">
        {/* Brand block */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10">
          <Image
            src="/favicon.ico"
            alt=""
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <div className="text-center sm:text-left">
            <SiteWordmark variant="footer" />
            <p className="text-sm text-gray-400 mt-1">Independent reviews for Irish players · 18+</p>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 mb-10 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/50 hover:text-irish-green-light transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Publisher */}
        <div className="max-w-xl mx-auto sm:mx-0 text-center sm:text-left mb-10 p-4 sm:p-5 rounded-xl bg-[var(--bg-elevated)] border border-white/10">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-irish-green-light mb-2">Publisher</p>
          <p className="font-semibold text-white">Sigmastart04 GmbH</p>
          <p className="text-sm text-white/50 mt-0.5">Zehmeplatz 14, 15230 Frankfurt (Oder), Germany</p>
          <p className="text-xs text-white/40 mt-3">
            Editorial comparisons only. We do not accept wagers. Gambling via licensed operators. 18+.
          </p>
        </div>

        {/* Support organisations */}
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-irish-green-light mb-4 text-center sm:text-left">Responsible gaming support</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <Link href="https://problemgambling.ie/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-white/90 px-2 py-1.5 text-slate-800 hover:bg-white transition-colors">
              <img src="/ProblemGambling-w.png" alt="Problem Gambling Ireland" className="h-7 rounded" />
            </Link>
            <Link href="https://gambleaware.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-white/90 px-2 py-1.5 hover:bg-white transition-colors">
              <img src="/gamble.webp" alt="GambleAware" className="h-7 rounded" />
            </Link>
            <Link href="https://gamblingtherapy.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-white/90 px-2 py-1.5 hover:bg-white transition-colors">
              <img src="/gordon.png" alt="Gambling Therapy" className="h-7 rounded" />
            </Link>
            <Link href="https://gamblingcare.ie/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-black/80 px-2 py-1.5 hover:bg-black transition-colors">
              <img src="/GamblingCare-w.png" alt="GamblingCare" className="h-7 rounded" />
            </Link>
            <Link href="https://gamblersanonymous.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-white/90 px-2 py-1.5 hover:bg-white transition-colors">
              <img src="/anonymos.avif" alt="Gamblers Anonymous" className="h-7 rounded" />
            </Link>
            <Link href="https://gamcare.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-white/90 px-2 py-1.5 hover:bg-white transition-colors">
              <img src="/gamecare.svg" alt="GamCare" className="h-7 rounded" />
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} topirishgamesites.com · 18+ · Ireland</p>
        </div>
      </div>
    </footer>
  )
}
