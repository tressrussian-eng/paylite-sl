import { CalendarDays, ShieldCheck, Smartphone, Wallet } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-primary">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Small deposit. Easy daily payments.
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl">
            Own the phone or bike you want, one day at a time.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground text-pretty">
            Make a small deposit today and pay the rest in affordable daily
            installments. Choose from iPhone, Samsung, Tecno, Infinix and
            motorcycles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#offers"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full px-7",
              })}
            >
              Browse offers
            </a>
            <a
              href="#how"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "rounded-full px-7",
              })}
            >
              How it works
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            <Stat value="150+" label="Devices & bikes" />
            <Stat value="35000 RWF" label="Deposits from" />
            <Stat value="800 RWF" label="Daily from" />
          </dl>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <FloatCard
              icon={<Smartphone className="h-5 w-5" aria-hidden />}
              title="Latest devices"
              body="iPhone, Galaxy Ultra, Tecno & Infinix in stock."
            />
            <FloatCard
              icon={<CalendarDays className="h-5 w-5" aria-hidden />}
              title="Daily plans"
              body="Repay a little every day over 12–18 months."
              className="mt-8"
            />
            <FloatCard
              icon={<ShieldCheck className="h-5 w-5" aria-hidden />}
              title="No hidden fees"
              body="Clear deposit and daily amount up front."
            />
            <FloatCard
              icon={<Wallet className="h-5 w-5" aria-hidden />}
              title="Own it fully"
              body="Finish your plan and the item is 100% yours."
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dd className="font-display text-2xl font-bold text-foreground">
        {value}
      </dd>
      <dt className="text-sm text-muted-foreground">{label}</dt>
    </div>
  )
}

function FloatCard({
  icon,
  title,
  body,
  className = "",
}: {
  icon: React.ReactNode
  title: string
  body: string
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-5 shadow-sm ${className}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <h3 className="mt-3 font-display font-semibold text-card-foreground">
        {title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground text-pretty">{body}</p>
    </div>
  )
}
