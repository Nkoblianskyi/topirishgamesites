"use client"

import { X, Megaphone } from "lucide-react"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="adv-disclosure-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-[var(--bg-card)] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-irish-green/30 overflow-hidden sm:mb-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0">
          <div className="w-1.5 bg-gold-primary" aria-hidden />
          <div className="flex-1 bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-card)] px-4 pt-5 pb-4 sm:px-6 relative">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-dark)] border border-irish-green/50 text-gray-200 hover:bg-irish-green/20 transition-colors shadow-sm"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-3 pr-12">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-primary text-black shadow-md">
                <Megaphone className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <h2 id="adv-disclosure-title" className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Advertiser disclosure
                </h2>
                <p className="text-xs text-gold-primary font-semibold mt-0.5 uppercase tracking-wider">How we’re funded</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5 space-y-5 text-gray-300">
          <section className="rounded-2xl border border-irish-green/30 bg-black/80 p-4">
            <h3 className="text-sm font-bold text-white mb-2">Commercial links</h3>
            <p className="text-sm leading-relaxed">
              topirishgamesites.com may receive payment when you use outbound links to gaming sites. That income
              supports hosting and editorial work.
            </p>
          </section>
          <section>
            <h3 className="text-sm font-bold text-white mb-2">Editorial independence</h3>
            <p className="text-sm leading-relaxed mb-2">Fees do not buy placement. We order and score brands by:</p>
            <ul className="text-sm space-y-1.5 list-none">
              {[
                "Licence fit for Irish customers",
                "Game variety & bonus clarity",
                "Payout speed and support",
                "App stability and UX",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold-primary font-bold">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-irish-green/30 bg-irish-green/10 p-4">
            <h3 className="text-sm font-bold text-white mb-2">Your check</h3>
            <p className="text-sm leading-relaxed">
              Confirm every offer on the operator’s site. Stake only what you can afford to lose.
            </p>
          </section>
        </div>

        <div className="shrink-0 border-t border-irish-green/30 bg-black text-white px-4 py-3 sm:px-6 sm:rounded-b-3xl">
          <p className="text-center text-xs sm:text-sm font-semibold text-irish-green-light">18+ · IE audience · Play in control</p>
        </div>
      </div>
    </div>
  )
}
