import type { CasinoSite } from "../types"

const defaultTerms = "18+ | New customers | Min deposit apply | T&Cs on operator site | BeGambleAware.org"

// Order = ranking. Links = bare domain only.
const rawSites: Omit<CasinoSite, "score">[] = [
  {
    id: "midnite",
    name: "Midnite Casino",
    logo: "/midnite.webp",
    bonus: "100% up to €50 + 50 Free Spins",
    welcomeOffer: "Up to €50 + 50 Spins",
    terms: defaultTerms,
    features: ["Slots", "Modern Interface", "Fast Withdrawals"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com",
    reviews: 8571,
  },
  {
    id: "ladbrokes",
    name: "Ladbrokes Casino",
    logo: "/ladbrokes.webp",
    bonus: "50 Free Spins no deposit",
    welcomeOffer: "50 Free Spins",
    terms: defaultTerms,
    features: ["Live Casino", "Slots", "Bingo"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://casino.ladbrokes.com",
    reviews: 9307,
  },
  {
    id: "mrplay",
    name: "Mr.Play Casino",
    logo: "/mr-play2.png",
    bonus: "100% up to €200 + 50 Free Spins",
    welcomeOffer: "Up to €200 + 50 Spins",
    terms: defaultTerms,
    features: ["Casino & Live", "Irish Market", "Simple UX"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://ie.mrplay.com",
    reviews: 9274,
  },
  {
    id: "boylesports",
    name: "BoyleSports Casino",
    logo: "/boylesports.webp",
    bonus: "100% up to €100 + 100 Free Spins",
    welcomeOffer: "Up to €100 + 100 Spins",
    terms: defaultTerms,
    features: ["Irish Owned", "Slots", "Live Dealer"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.boylesports.com",
    reviews: 9017,
  },
  {
    id: "livescorebet",
    name: "LiveScoreBet Casino",
    logo: "/livescorebet.png",
    bonus: "100% up to €50 + 50 Free Spins",
    welcomeOffer: "Up to €50 + 50 Spins",
    terms: defaultTerms,
    features: ["Slots", "Live Casino", "Casino Games"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.livescorebet.com",
    reviews: 9058,
  },
  {
    id: "betfred",
    name: "BetFred Casino",
    logo: "/betfred.webp",
    bonus: "100% up to €50 + 50 Free Spins",
    welcomeOffer: "Up to €50 + 50 Spins",
    terms: defaultTerms,
    features: ["Fast Payouts", "Slots", "Live Casino"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.betfred.com",
    reviews: 9290,
  },
  {
    id: "novibet",
    name: "Novibet Casino",
    logo: "/novibet.webp",
    bonus: "100% up to €100 + 100 Free Spins",
    welcomeOffer: "Up to €100 + 100 Spins",
    terms: defaultTerms,
    features: ["Live Casino", "Slots", "Table Games"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Skrill"],
    link: "https://www.novibet.ie",
    reviews: 8357,
  },
  {
    id: "spreadex",
    name: "Spreadex Casino",
    logo: "/spreadex.webp",
    bonus: "100% up to €100",
    welcomeOffer: "Up to €100",
    terms: defaultTerms,
    features: ["Live Casino", "Slots", "Table Games"],
    paymentMethods: ["Visa/Mastercard", "Bank Transfer"],
    link: "https://www.spreadex.com",
    reviews: 9209,
  },
  {
    id: "betiton",
    name: "Betiton Casino",
    logo: "/betiton.png",
    bonus: "100% up to €200 + 200 Free Spins",
    welcomeOffer: "Up to €200 + 200 Spins",
    terms: defaultTerms,
    features: ["Irish Focus", "Slots", "Mobile App"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betiton.com",
    reviews: 8572,
  },
  {
    id: "betvictor",
    name: "BetVictor Casino",
    logo: "/betvictor.webp",
    bonus: "100% up to €50 + 50 Free Spins",
    welcomeOffer: "Up to €50 + 50 Spins",
    terms: defaultTerms,
    features: ["Slots", "Live Casino", "Table Games"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com",
    reviews: 8849,
  },
]

// Shuffle: new random order (BetFred, Mr.Play, Betiton, Midnite, BoyleSports, Spreadex, Ladbrokes, LiveScoreBet, BetVictor, Novibet)
const orderIndices = [5, 2, 8, 0, 3, 7, 1, 4, 9, 6] // indices into rawSites for new ranking
const shuffledSites = orderIndices.map((i) => rawSites[i])

// Score by position in ranking: 1st = 9.8, 2nd = 9.7, ... 10th = 8.9
export const casinoSites: CasinoSite[] = shuffledSites.map((site, index) => ({
  ...site,
  score: Math.round((9.8 - index * 0.1) * 10) / 10,
}))

/** @deprecated Use casinoSites */
export const bettingSites = casinoSites
