export type CategoryId =
  | "iphone"
  | "samsung"
  | "tecno"
  | "infinix"
  | "motorcycle"

export type Category = {
  id: CategoryId
  label: string
  tagline: string
}

export type Offer = {
  id: string
  category: CategoryId
  name: string
  image: string
  deposit: number
  daily: number
  months: number
  /** true when pricing was not supplied by the client and uses a sensible default */
  estimated?: boolean
}

export const categories: Category[] = [
  { id: "iphone", label: "iPhone", tagline: "Apple flagships" },
  { id: "samsung", label: "Samsung", tagline: "Galaxy Ultra series" },
  { id: "tecno", label: "Tecno", tagline: "Camon & Spark" },
  { id: "infinix", label: "Infinix", tagline: "Hot Pro Plus" },
  { id: "motorcycle", label: "Motorcycle", tagline: "Boxer & TVS" },
]

export const offers: Offer[] = [
  // iPhone
  {
    id: "iphone-12",
    category: "iphone",
    name: "iPhone 12",
    image: "/products/iphone-12.png",
    deposit: 50000,
    daily: 960,
    months: 12,
  },
  {
    id: "iphone-12-pro-max",
    category: "iphone",
    name: "iPhone 12 Pro Max",
    image: "/products/iphone-12-pro-max.png",
    deposit: 66000,
    daily: 1030,
    months: 12,
  },
  {
    id: "iphone-13",
    category: "iphone",
    name: "iPhone 13",
    image: "/products/iphone-13.png",
    deposit: 60000,
    daily: 1150,
    months: 12,
  },
  {
    id: "iphone-13-pro-max",
    category: "iphone",
    name: "iPhone 13 Pro Max",
    image: "/products/iphone-13-pro-max.png",
    deposit: 72000,
    daily: 1200,
    months: 12,
  },
  {
    id: "iphone-14-pro-max",
    category: "iphone",
    name: "iPhone 14 Pro Max",
    image: "/products/iphone-14-pro-max.png",
    deposit: 81000,
    daily: 1400,
    months: 12,
  },
  // Samsung
  {
    id: "galaxy-s23-ultra",
    category: "samsung",
    name: "Samsung Galaxy S23 Ultra",
    image: "/products/galaxy-s23-ultra.png",
    deposit: 66000,
    daily: 1100,
    months: 12,
  },
  {
    id: "galaxy-s24-ultra",
    category: "samsung",
    name: "Samsung Galaxy S24 Ultra",
    image: "/products/galaxy-s24-ultra.png",
    deposit: 73000,
    daily: 1200,
    months: 12,
  },
  {
    id: "galaxy-s25-ultra",
    category: "samsung",
    name: "Samsung Galaxy S25 Ultra",
    image: "/products/galaxy-s25-ultra.png",
    deposit: 96000,
    daily: 1480,
    months: 12,
  },
  // Tecno
  {
    id: "tecno-camon-40",
    category: "tecno",
    name: "Tecno Camon 40",
    image: "/products/tecno-camon-40.png",
    deposit: 51000,
    daily: 960,
    months: 12,
  },
  {
    id: "tecno-camon-50",
    category: "tecno",
    name: "Tecno Camon 50",
    image: "/products/tecno-camon-50.png",
    deposit: 67000,
    daily: 1100,
    months: 12,
  },
  {
    id: "tecno-spark-40",
    category: "tecno",
    name: "Tecno Spark 40",
    image: "/products/tecno-spark-40.png",
    deposit: 51000,
    daily: 960,
    months: 12,
  },
  {
    id: "tecno-spark-50",
    category: "tecno",
    name: "Tecno Spark 50",
    image: "/products/tecno-spark-50.png",
    deposit: 50000,
    daily: 1050,
    months: 12,
  },
  // Infinix
  {
    id: "infinix-hot-60-pro-plus",
    category: "infinix",
    name: "Infinix Hot 60 Pro Plus",
    image: "/products/infinix-hot-60-pro-plus.png",
    deposit: 60000,
    daily: 1100,
    months: 12,
  },
  {
    id: "infinix-hot-70-pro-plus",
    category: "infinix",
    name: "Infinix Hot 70 Pro Plus",
    image: "/products/infinix-hot-70-pro-plus.png",
    deposit: 80000,
    daily: 1250,
    months: 12,
  },
  // Motorcycles (pricing estimated — adjust as needed)
  {
    id: "boxer-125cc",
    category: "motorcycle",
    name: "Boxer 125cc",
    image: "/products/boxer-125cc.png",
    deposit: 130000,
    daily: 4450,
    months: 12,
    estimated: true,
  },
  {
    id: "boxer-150cc",
    category: "motorcycle",
    name: "Boxer 150cc",
    image: "/products/boxer-150cc.png",
    deposit: 140000,
    daily: 5500,
    months: 12,
    estimated: true,
  },
  {
    id: "tvs-125cc",
    category: "motorcycle",
    name: "TVS 125cc",
    image: "/products/tvs-125cc.png",
    deposit: 135000,
    daily: 4450,
    months: 12,
    estimated: true,
  },
  {
    id: "tvs-150cc",
    category: "motorcycle",
    name: "TVS 150cc",
    image: "/products/tvs-150cc.png",
    deposit: 140000,
    daily: 5500,
    months: 12,
    estimated: true,
  },
]

export function totalPrice(offer: Offer): number {
  return offer.deposit + offer.daily * offer.months * 30
}
