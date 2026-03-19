export interface CasinoSite {
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
  reviews: number
  welcomeOffer?: string
  terms?: string
}

export interface Banner {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
}

export interface HorizontalBanner {
  id: number
  name: string
  logo: string
  bonus: string
  welcomeOffer: string
  link: string
  backgroundImage: string
}
