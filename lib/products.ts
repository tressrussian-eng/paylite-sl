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
    deposit: 35,
    daily: 0.65,
    months: 12,
  },
  {
    id: "iphone-12-pro-max",
    category: "iphone",
    name: "iPhone 12 Pro Max",
    image: "/products/iphone-12-pro-max.png",
    deposit: 45,
    daily: 0.7,
    months: 12,
  },
  {
    id: "iphone-13",
    category: "iphone",
    name: "iPhone 13",
    image: "/products/iphone-13.png",
    deposit: 40,
    daily: 0.75,
    months: 12,
  },
  {
    id: "iphone-13-pro-max",
    category: "iphone",
    name: "iPhone 13 Pro Max",
    image: "/products/iphone-13-pro-max.png",
    deposit: 50,
    daily: 0.8,
    months: 12,
  },
  {
    id: "iphone-14-pro-max",
    category: "iphone",
    name: "iPhone 14 Pro Max",
    image: "/products/iphone-14-pro-max.png",
    deposit: 55,
    daily: 0.95,
    months: 12,
  },
  // Samsung
  {
    id: "galaxy-s23-ultra",
    category: "samsung",
    name: "Samsung Galaxy S23 Ultra",
    image: "/products/galaxy-s23-ultra.png",
    deposit: 45,
    daily: 0.75,
    months: 12,
  },
  {
    id: "galaxy-s24-ultra",
    category: "samsung",
    name: "Samsung Galaxy S24 Ultra",
    image: "/products/galaxy-s24-ultra.png",
    deposit: 50,
    daily: 0.85,
    months: 12,
  },
  {
    id: "galaxy-s25-ultra",
    category: "samsung",
    name: "Samsung Galaxy S25 Ultra",
    image: "/products/galaxy-s25-ultra.png",
    deposit: 65,
    daily: 1.0,
    months: 12,
  },
  // Tecno
  {
    id: "tecno-camon-40",
    category: "tecno",
    name: "Tecno Camon 40",
    image: "/products/tecno-camon-40.png",
    deposit: 35,
    daily: 0.65,
    months: 12,
  },
  {
    id: "tecno-camon-50",
    category: "tecno",
    name: "Tecno Camon 50",
    image: "/products/tecno-camon-50.png",
    deposit: 45,
    daily: 0.75,
    months: 12,
  },
  {
    id: "tecno-spark-40",
    category: "tecno",
    name: "Tecno Spark 40",
    image: "/products/tecno-spark-40.png",
    deposit: 35,
    daily: 0.65,
    months: 12,
  },
  {
    id: "tecno-spark-50",
    category: "tecno",
    name: "Tecno Spark 50",
    image: "/products/tecno-spark-50.png",
    deposit: 45,
    daily: 0.75,
    months: 12,
  },
  // Infinix
  {
    id: "infinix-hot-60-pro-plus",
    category: "infinix",
    name: "Infinix Hot 60 Pro Plus",
    image: "/products/infinix-hot-60-pro-plus.png",
    deposit: 45,
    daily: 0.75,
    months: 12,
  },
  {
    id: "infinix-hot-70-pro-plus",
    category: "infinix",
    name: "Infinix Hot 70 Pro Plus",
    image: "/products/infinix-hot-70-pro-plus.png",
    deposit: 55,
    daily: 0.85,
    months: 12,
  },
  // Motorcycles (pricing estimated — adjust as needed)
  {
    id: "boxer-125cc",
    category: "motorcycle",
    name: "Boxer 125cc",
    image: "/products/boxer-125cc.png",
    deposit: 60,
    daily: 1.2,
    months: 18,
    estimated: true,
  },
  {
    id: "boxer-150cc",
    category: "motorcycle",
    name: "Boxer 150cc",
    image: "/products/boxer-150cc.png",
    deposit: 70,
    daily: 1.35,
    months: 18,
    estimated: true,
  },
  {
    id: "tvs-125cc",
    category: "motorcycle",
    name: "TVS 125cc",
    image: "/products/tvs-125cc.png",
    deposit: 60,
    daily: 1.25,
    months: 18,
    estimated: true,
  },
  {
    id: "tvs-150cc",
    category: "motorcycle",
    name: "TVS 150cc",
    image: "/products/tvs-150cc.png",
    deposit: 70,
    daily: 1.4,
    months: 18,
    estimated: true,
  },
]

export function totalPrice(offer: Offer): number {
  return offer.deposit + offer.daily * offer.months * 30
}
