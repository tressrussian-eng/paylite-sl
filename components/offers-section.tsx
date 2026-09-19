"use client"

import { useMemo, useState } from "react"
import { ChevronDown } from "lucide-react"
import { OfferCard } from "@/components/offer-card"
import { categories, offers, type CategoryId } from "@/lib/products"

type Filter = CategoryId | "all"

const filterOptions: { value: Filter; label: string }[] = [
  { value: "all", label: "All offers" },
  ...categories.map((c) => ({ value: c.id as Filter, label: c.label })),
]

export function OffersSection() {
  const [selected, setSelected] = useState<Filter>("all")

  const visible = useMemo(
    () =>
      selected === "all"
        ? offers
        : offers.filter((o) => o.category === selected),
    [selected],
  )

  const hasEstimated = visible.some((o) => o.estimated)

  return (
    <section id="offers" className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="font-medium text-primary">Choose a brand</p>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Browse available offers
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            Select a category to see the devices and motorcycles you can take
            home today with a small deposit and easy daily payments.
          </p>
        </div>

        {/* Category select */}
        <div className="relative w-full sm:w-64">
          <label htmlFor="category" className="sr-only">
            Select a category
          </label>
          <select
            id="category"
            value={selected}
            onChange={(e) => setSelected(e.target.value as Filter)}
            className="w-full appearance-none rounded-full border border-border bg-card px-5 py-3 pr-11 font-medium text-foreground shadow-sm outline-none ring-primary/40 transition focus:ring-2"
          >
            {filterOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          />
        </div>
      </div>

      {/* Quick category pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        <CategoryPill
          active={selected === "all"}
          onClick={() => setSelected("all")}
          label="All"
        />
        {categories.map((c) => (
          <CategoryPill
            key={c.id}
            active={selected === c.id}
            onClick={() => setSelected(c.id)}
            label={c.label}
          />
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>

      {hasEstimated && (
        <p className="mt-8 text-sm text-muted-foreground">
          * Motorcycle pricing is estimated. Share your preferred deposit, daily
          amount, and term and we&apos;ll update these offers.
        </p>
      )}
    </section>
  )
}

function CategoryPill({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          : "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
      }
    >
      {label}
    </button>
  )
}
