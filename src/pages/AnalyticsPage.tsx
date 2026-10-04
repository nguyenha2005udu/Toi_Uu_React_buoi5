export default function AnalyticsPage() {
  return (
    <section className="panel analytics">
      <h2>📊 Analytics — Lazy loaded</h2>
      <p>
        Trang này được tách thành một JavaScript chunk riêng và chỉ tải
        khi người dùng mở route /analytics.
      </p>
      <div className="analytics-grid">
        <div><strong>10,000</strong><span>Products</span></div>
        <div><strong>8</strong><span>Categories</span></div>
        <div><strong>React</strong><span>Technology</span></div>
      </div>
    </section>
  )
}
