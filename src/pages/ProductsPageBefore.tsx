import { useMemo, useState } from 'react'
import { products } from '../data/products'
import { ProductRow } from '../components/ProductRow'

export default function ProductsPageBefore() {
  const [query, setQuery] = useState('')

  // BEFORE: render toàn bộ 10.000 dòng bằng .map()
  // Đây là baseline có chủ đích để Lighthouse/Profiler thấy vấn đề.
  const visibleProducts = useMemo(
    () =>
      query
        ? products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()),
          )
        : products,
    [query],
  )

  return (
    <section>
      <div className="panel">
        <h2>10.000 sản phẩm — BEFORE</h2>
        <p className="warning">
          Baseline: toàn bộ 10.000 DOM rows được tạo cùng lúc.
        </p>
        <input
          className="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm sản phẩm..."
        />
        <p className="muted">
          Đang hiển thị {visibleProducts.length.toLocaleString('vi-VN')} sản phẩm
        </p>
      </div>

      <div className="product-list">
        {visibleProducts.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
