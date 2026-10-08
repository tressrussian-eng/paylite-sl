"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { CalendarDays, CheckCircle2, ShieldCheck, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Offer, totalPrice } from "@/lib/products"

const LOGIN_URL = "https://mtnfast.vercel.app/"

export function OfferCard({ offer }: { offer: Offer }) {
  const [open, setOpen] = useState(false)
  const days = offer.months * 30

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={offer.image || "/placeholder.svg"}
            alt={offer.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            {offer.months} months
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5">
          <h3 className="font-display text-lg font-semibold leading-tight text-card-foreground text-balance">
            {offer.name}
          </h3>

          <dl className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-secondary p-3">
              <dt className="text-xs font-medium text-muted-foreground">
                Deposit
              </dt>
              <dd className="mt-0.5 font-display text-small-small font-bold text-secondary-foreground">
                {offer.deposit} SZL
              </dd>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <dt className="text-xs font-medium text-muted-foreground">
                Per day
              </dt>
              <dd className="mt-0.5 font-display text-small font-bold text-primary">
                {offer.daily.toFixed(2)} SZL
              </dd>
            </div>
          </dl>

          <p className="text-sm text-muted-foreground">
            Pay{" "}
            <span className="text-small text-foreground">{offer.deposit} SZL</span>{" "}
            today, then{" "}
            <span className="font-medium text-foreground">
              {offer.daily.toFixed(2)} SZL/day 
            </span>{" "}
            for {days.toLocaleString()} days.
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
            <div>
              <p className="text-xs text-muted-foreground">Total to own</p>
              <p className="font-display text-base font-semibold text-foreground">
                {totalPrice(offer).toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
                {offer.estimated ? "*" : ""}
              </p>
              SZL
            </div>
            <Button
              size="sm"
              className="rounded-full px-5"
              onClick={() => setOpen(true)}
            >
              Apply
            </Button>
          </div>
        </div>
      </article>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Apply for ${offer.name}`}
          className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 grid size-8 place-items-center rounded-full bg-background/80 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>

            <div className="flex gap-4 border-b border-border p-5">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-lg font-semibold text-card-foreground text-balance">
                  {offer.name}
                </h2>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="size-3.5" />
                  {offer.months} month plan
                </p>
                <p className="mt-2 font-display text-sm font-semibold text-foreground">
                  {totalPrice(offer).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                  {offer.estimated ? "*" : ""}{" "} SZL 
                  <span className="font-normal text-muted-foreground">
                    total
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-3 p-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-secondary p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Deposit today
                  </p>
                  <p className="mt-0.5 font-display text-xl font-bold text-secondary-foreground">
                    {offer.deposit} SZL
                  </p>
                </div>
                <div className="rounded-xl bg-primary/10 p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Daily payment
                  </p>
                  <p className="mt-0.5 font-display text-xl font-bold text-primary">
                    {offer.daily.toFixed(2)} SZL
                  </p>
                </div>
              </div>

              <ul className="space-y-2 rounded-xl bg-secondary/60 p-4 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Payment period</span>
                  <span className="font-medium text-foreground">
                    {days.toLocaleString()} days
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">
                    Total daily payments
                  </span>
                  <span className="font-medium text-foreground">
                    {(offer.daily * days).toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })} SZL
                  </span>
                </li>
              </ul>

              <a
                href={LOGIN_URL}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ShieldCheck className="size-4" />
                Continue with MOMO to check Eligibility
              </a>

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                <CheckCircle2 className="size-3.5 text-primary" />
                Check if you qualify — no impact to sign up.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
