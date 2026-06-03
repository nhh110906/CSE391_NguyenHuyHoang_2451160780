## Bài 0.1:

1. File `.jsx` khác gì file `.js`?

- File `.js`: chỉ chứa JavaScript thông thường
- File `.jsx`: JavaScript cho phép viết JSX (giao diện giống HTML). Vite/Babel dịch JSX thành JS thuần trước khi chạy trên trình duyệt

2. Tại sao phải `export default App`?

Trong React, mỗi component thường nằm trong một file riêng. `export default` chỉ định component chính của file để `main.jsx` có thể `import App from './App.jsx'` và render.

3. Thử xóa `export default` → Chuyện gì xảy ra?

`main.jsx` không import được `App` → lỗi build (module không có export mặc định). Component vẫn tồn tại trong file nhưng các file khác không dùng được.
