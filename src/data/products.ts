import type { Product } from '../types'

const categories = [
  'Laptop',
  'Điện thoại',
  'Tai nghe',
  'Màn hình',
  'Bàn phím',
  'Chuột',
  'Tablet',
  'Phụ kiện',
]

export const products: Product[] = Array.from(
  { length: 10_000 },
  (_, index) => ({
    id: index + 1,
    name: `Sản phẩm công nghệ ${String(index + 1).padStart(5, '0')}`,
    category: categories[index % categories.length],
    price: 199 + ((index * 37) % 1801),
    rating: Number((3.5 + ((index * 13) % 15) / 10).toFixed(1)),
  }),
)
