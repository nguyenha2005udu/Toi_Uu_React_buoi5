import { lazy, Suspense } from 'react'

const optimized = import.meta.env.VITE_OPTIMIZED === 'true'

// Code-splitting: bản optimized tải page bằng dynamic import.
// Bản before import trực tiếp để tạo baseline bundle lớn hơn.
const ProductsPage = optimized
  ? lazy(() => import('./pages/ProductsPageAfter'))
  : lazy(() => import('./pages/ProductsPageBefore'))

const AnalyticsPage = optimized
  ? lazy(() => import('./pages/AnalyticsPage'))
  : undefined

export default function App() {
  const showAnalytics = window.location.pathname === '/analytics'

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1>⚡ React Performance Lab</h1>
          <p>10.000 sản phẩm — đo trước, tối ưu sau</p>
        </div>
        <nav>
          <a href="/">Products</a>
          <a href="/analytics">Analytics</a>
        </nav>
      </header>

      <main>
        <div className="badge">
          {optimized ? 'AFTER — OPTIMIZED' : 'BEFORE — BASELINE'}
        </div>

        <Suspense fallback={<div className="panel loading">Đang tải module...</div>}>
          {showAnalytics && AnalyticsPage ? (
            <AnalyticsPage />
          ) : (
            <ProductsPage />
          )}
        </Suspense>
      </main>
    </div>
  )
}
