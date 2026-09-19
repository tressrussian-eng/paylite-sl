import { Wallet } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Wallet className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            PayLite
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
          <a href="#offers" className="transition hover:text-foreground">
            Offers
          </a>
          <a href="#how" className="transition hover:text-foreground">
            How it works
          </a>
        </nav>

        <a
          href="#offers"
          className={buttonVariants({ className: "rounded-full px-5" })}
        >
          Get started
        </a>
      </div>
    </header>
  )
}
