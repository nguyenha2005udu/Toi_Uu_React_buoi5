# LTWNC - Bài tập tuần 5 - Tối ưu React

## Đề bài
Xây dựng trang React cần tối ưu với danh sách 10.000 sản phẩm; đo Lighthouse trước/sau; áp dụng ít nhất 2 kỹ thuật tối ưu; viết báo cáo.

## Kỹ thuật đã cài trong project
1. Virtualization với `react-window`: bản AFTER chỉ mount các dòng trong viewport.
2. Memoization:
   - `React.memo(ProductRowMemo)`
   - `useMemo` cho kết quả filter 10.000 sản phẩm.
   - `useCallback` cho handler.
3. Code-splitting với `React.lazy` + `Suspense`: page Analytics được tải thành chunk riêng.
4. Có sẵn 2 chế độ BEFORE/AFTER để bạn build và đo riêng.

## Cài đặt
```bash
npm install
```

## Chạy BEFORE
```bash
npm run dev:before
```
Mở http://localhost:5173/

## Chạy AFTER
```bash
npm run dev:after
```
Mở http://localhost:5173/

## Build production để đo Lighthouse
BEFORE:
```bash
npm run build:before
npm run preview
```

AFTER:
```bash
npm run build:after
npm run preview
```

Khuyến nghị dùng Chrome Incognito, DevTools > Lighthouse > Performance > Analyze page load.
Giữ nguyên điều kiện đo giữa hai lần: cùng máy, cùng Chrome, cùng URL, không mở tab nặng, và nên chạy 3 lần rồi lấy kết quả đại diện/median.

## Quan trọng
Không điền số Lighthouse giả. Các giá trị FCP/LCP/TBT/CLS trong báo cáo phải lấy từ chính Chrome Lighthouse trên máy của bạn.

## Báo cáo
Xem `REPORT_TEMPLATE.md`.
