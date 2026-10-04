export interface Product {
  id: number
  name: string
  category: string
  price: number
  rating: number
}

export interface ProductRowProps {
  product: Product
}
