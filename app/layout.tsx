import type React from "react"
import type { Metadata } from "next"
import { Lato, Outfit } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const mulish = Lato({ subsets: ["latin"], weight: ["400", "700"] })
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-hero-display",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://topirishgamesites.com"),
  title: {
    default: "Top Irish Game Sites — Trusted Irish Casino & Gaming Reviews",
    template: "%s | Top Irish Game Sites",
  },
  description:
    "topirishgamesites.com provides independent reviews and rankings of licensed gaming sites for Ireland: bonuses, game variety, payouts, and responsible operators in one place.",
  keywords: [
    "Irish casino",
    "Ireland gaming sites",
    "top Irish casinos",
    "casino reviews Ireland",
    "licensed casinos Ireland",
    "Irish online casino",
  ],
  openGraph: {
    siteName: "Top Irish Game Sites",
    url: "https://topirishgamesites.com",
    title: "Top Irish Game Sites — Trusted Irish Casino & Gaming Reviews",
    description:
      "Independent reviews and rankings of licensed gaming sites for Ireland: bonuses, games, payouts and responsible operators.",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Irish Game Sites — Trusted Irish Casino & Gaming Reviews",
    description:
      "Independent reviews and rankings of licensed gaming sites for Ireland. Bonuses, games, payouts in one place.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={mulish.className}>
        <div className="min-h-screen relative">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
