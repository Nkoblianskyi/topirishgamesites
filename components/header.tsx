"use client"

import Link from "next/link"
import Image from "next/image"
import { SiteWordmark } from "@/components/site-wordmark"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/responsible-gaming", label: "Safer Play" },
  { href: "/facts", label: "Facts" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookies" },
  { href: "/privacy-policy", label: "Privacy" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--bg-card)]/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto max-w-5xl xl:max-w-6xl px-3 sm:px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90 min-w-0"
          >
            <Image
              src="/favicon.ico"
              alt=""
              width={32}
              height={32}
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain shrink-0"
            />
            <SiteWordmark variant="header-compact" className="md:hidden truncate" />
            <SiteWordmark variant="header-hero" className="hidden md:inline" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-xs xl:text-sm font-medium text-white/70 hover:text-irish-green-light hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {mobileMenuOpen && (
          <nav
            className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-0.5"
            aria-label="Mobile navigation"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:text-irish-green-light hover:bg-white/10 rounded-lg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
