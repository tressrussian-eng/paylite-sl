import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { OffersSection } from "@/components/offers-section"
import { HowItWorks } from "@/components/how-it-works"

export default function HomePage() {
  return (
    <div id="top" className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <OffersSection />
        <HowItWorks />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
          <p className="font-display font-semibold text-foreground">PayLite</p>
          <p>Own devices and motorcycles with a small deposit and daily payments.</p>
        </div>
      </footer>
    </div>
  )
}
