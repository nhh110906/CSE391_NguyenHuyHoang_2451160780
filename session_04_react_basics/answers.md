# Session 4 — Answers (BTTH / Tier 0)

**Sinh viên:** Nguyễn Huy Hoang — CSE391

---

## Bài 0.1

### 1. File `.jsx` khác gì file `.js`?

- `.js`: chỉ chứa JavaScript thuần.
- `.jsx`: JavaScript + cú pháp JSX (HTML-like trong code). Vite/Babel biên dịch JSX thành JS trước khi chạy trên trình duyệt.

### 2. Tại sao phải `export default App`?

Mỗi file component thường export một component chính để file khác (`main.jsx`) có thể `import App from './App.jsx'` và render.

### 3. Thử xóa `export default` → chuyện gì xảy ra?

`main.jsx` không import được `App` → lỗi build/runtime (module không export giá trị mặc định).

---

## Ghi chú

Các tier còn lại (1–7) là bài thực hành code — xem từng thư mục project tương ứng và chạy `npm run dev`.
