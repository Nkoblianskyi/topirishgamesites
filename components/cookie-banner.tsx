"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-gold-primary/30 bg-[var(--bg-card)]/95 shadow-2xl shadow-black/40 backdrop-blur-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:px-5 sm:py-4">
          <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-primary/20 border border-gold-primary/40">
              <Cookie className="w-5 h-5 text-gold-primary" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-white/90 leading-snug">
                We use essential cookies to run the site and, if you allow, analytics to improve your experience.{" "}
                <Link href="/cookie-policy" className="text-gold-primary font-semibold hover:text-gold-hover underline underline-offset-2">
                  Cookie policy
                </Link>
              </p>
              <p className="text-xs text-white/50 mt-1">Declining limits non-essential scripts only.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <button
              type="button"
              onClick={handleDecline}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-white/30 text-white/90 hover:bg-white/10 transition-colors"
            >
              Essential only
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-gold-primary text-black hover:bg-gold-hover transition-colors shadow-lg shadow-gold-primary/25"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
