import { useCallback, useMemo, useState } from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import { products } from '../data/products'
import { ProductRowMemo } from '../components/ProductRowMemo'
import type { Product } from '../types'

interface RowData {
  products: Product[]
}

function VirtualRow({ index, style, data }: ListChildComponentProps<RowData>) {
  const product = data.products[index]
  return (
    <div style={style}>
      <ProductRowMemo product={product} />
    </div>
  )
}

export default function ProductsPageAfter() {
  const [query, setQuery] = useState('')

  // AFTER #1: useMemo tránh lọc/sort lại danh sách nếu query không đổi.
  const filteredProducts = useMemo(
    () =>
      query
        ? products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()),
          )
        : products,
    [query],
  )

  // AFTER #2: useCallback giữ ổn định reference khi truyền callback xuống component con.
  const handleSearch = useCallback((value: string) => {
    setQuery(value)
  }, [])

  return (
    <section>
      <div className="panel">
        <h2>10.000 sản phẩm — AFTER</h2>
        <p className="success">
          Optimized: virtualization + React.memo + useMemo/useCallback.
        </p>
        <input
          className="search"
          value={query}
          onChange={(event) => handleSearch(event.target.value)}
          placeholder="Tìm sản phẩm..."
        />
        <p className="muted">
          Đang hiển thị {filteredProducts.length.toLocaleString('vi-VN')} sản phẩm.
          Chỉ các dòng trong viewport được mount.
        </p>
      </div>

      <div className="virtual-list">
        <FixedSizeList
          height={600}
          width="100%"
          itemCount={filteredProducts.length}
          itemSize={72}
          itemData={{ products: filteredProducts }}
          overscanCount={5}
        >
          {VirtualRow}
        </FixedSizeList>
      </div>
    </section>
  )
}
