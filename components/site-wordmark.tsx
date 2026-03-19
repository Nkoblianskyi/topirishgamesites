import { cn } from "@/lib/utils"

type WordmarkVariant = "header-compact" | "header-hero" | "footer"

export function SiteWordmark({ variant, className }: { variant: WordmarkVariant; className?: string }) {
  const name = (
    <>
      <span className="text-gold-primary font-extrabold">Top Irish</span>
      <span className="text-white font-bold">&nbsp;Game Sites</span>
    </>
  )

  return (
    <span
      className={cn(
        "font-hero-display tracking-tight text-white",
        variant === "header-compact" && "text-base sm:text-lg",
        variant === "header-hero" && "text-xl sm:text-2xl",
        variant === "footer" && "text-xl sm:text-2xl",
        className,
      )}
    >
      {name}
    </span>
  )
}
