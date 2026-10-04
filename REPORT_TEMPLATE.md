# BÁO CÁO BÀI TẬP TUẦN 5 — TỐI ƯU HIỆU NĂNG REACT

## 1. Mục tiêu
Xây dựng trang quản lý/hiển thị 10.000 sản phẩm và đánh giá hiệu năng trước/sau tối ưu bằng Lighthouse.

Theo nội dung Buổi 5, nguyên tắc quan trọng là “Đo trước, tối ưu sau”; không thêm memoization một cách cảm tính.

## 2. Vấn đề ban đầu
Bản BEFORE render toàn bộ 10.000 sản phẩm bằng `.map()`. Điều này tạo số lượng DOM node rất lớn ngay lần tải/render đầu tiên, làm tăng thời gian render và chi phí layout/paint.

Ngoài ra, Analytics page được import theo cách không tối ưu trong baseline, làm bundle ban đầu chứa thêm code không cần thiết.

## 3. Kết quả Lighthouse — BEFORE
> Dán ảnh Lighthouse BEFORE vào đây.

| Chỉ số | BEFORE |
|---|---:|
| Performance score | **[điền]** |
| FCP | **[điền]** |
| LCP | **[điền]** |
| TBT | **[điền]** |
| CLS | **[điền]** |

## 4. Giải pháp

### 4.1 Virtualization
Sử dụng `react-window` và `FixedSizeList`.

Trước:
```tsx
products.map(...)
```
→ 10.000 dòng tồn tại trong DOM.

Sau:
```tsx
<FixedSizeList
  itemCount={filteredProducts.length}
  itemSize={72}
  height={600}
>
```
→ chỉ render các dòng trong viewport và một vùng đệm nhỏ.

### 4.2 Memoization
Sử dụng:
- `React.memo` cho `ProductRowMemo`.
- `useMemo` cho kết quả lọc danh sách.
- `useCallback` để giữ ổn định callback.

Mục tiêu là hạn chế render/tính toán lại khi dữ liệu liên quan không thay đổi.

### 4.3 Code-splitting
Dùng:
```tsx
lazy(() => import('./pages/AnalyticsPage'))
```
và:
```tsx
<Suspense fallback={...}>
```

Analytics page không nằm trong code cần tải/render ngay khi người dùng mở trang Products.

## 5. Kết quả Lighthouse — AFTER
> Dán ảnh Lighthouse AFTER vào đây.

| Chỉ số | BEFORE | AFTER | Cải thiện |
|---|---:|---:|---:|
| Performance score | [ ] | [ ] | [ ] |
| FCP | [ ] | [ ] | [ ] |
| LCP | [ ] | [ ] | [ ] |
| TBT | [ ] | [ ] | [ ] |
| CLS | [ ] | [ ] | [ ] |

Công thức:
- Cải thiện thời gian = `(BEFORE - AFTER) / BEFORE × 100%`
- Cải thiện score = `AFTER - BEFORE` điểm.

## 6. So sánh
Sau khi áp dụng virtualization, số DOM node đồng thời tồn tại giảm mạnh so với việc render toàn bộ 10.000 dòng. Đây là tối ưu phù hợp nhất với vấn đề danh sách lớn.

Memoization giúp hạn chế các phép tính/filter và render lại không cần thiết. Code-splitting giúp giảm lượng JavaScript cần tải cho trang Products ban đầu vì Analytics được tải khi cần.

## 7. Kết luận
Không nên áp dụng `React.memo`, `useMemo` hoặc `useCallback` một cách đại trà. Các kỹ thuật phải gắn với vấn đề được đo và phát hiện. Trong bài này, virtualization xử lý vấn đề DOM quá lớn; memoization xử lý việc tính toán/render lại; code-splitting xử lý code không cần thiết ở lần tải đầu.

## 8. Minh chứng nên nộp
- Ảnh Lighthouse BEFORE.
- Ảnh Lighthouse AFTER.
- Bảng số liệu BEFORE/AFTER.
- Ảnh Chrome DevTools Network cho chunk Analytics (AFTER).
- Ảnh DevTools Elements/Performance hoặc React Profiler nếu giảng viên yêu cầu.
