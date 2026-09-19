const steps = [
  {
    title: "Pick your item",
    body: "Choose a phone or motorcycle from the offers and check the deposit and daily amount.",
  },
  {
    title: "Pay the deposit",
    body: "Make the small one-time deposit to reserve your item and start your plan.",
  },
  {
    title: "Pay daily",
    body: "Repay a fixed small amount each day over your chosen 12–18 month term.",
  },
  {
    title: "Own it fully",
    body: "Once your plan is complete, the item is 100% yours with nothing left to pay.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="font-medium text-primary">How it works</p>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Four simple steps to own it
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
