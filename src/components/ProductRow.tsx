import type { ProductRowProps } from '../types'

export function ProductRow({ product }: ProductRowProps) {
  return (
    <div className="product-row">
      <div className="product-id">#{product.id}</div>
      <div className="product-info">
        <strong>{product.name}</strong>
        <span>{product.category}</span>
      </div>
      <div className="product-rating">⭐ {product.rating}</div>
      <div className="product-price">
        {product.price.toLocaleString('vi-VN')} ₫
      </div>
    </div>
  )
}
