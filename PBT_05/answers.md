# PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

# Câu A1 (5đ) — Viewport & Mobile-First

## 1. Thẻ `<meta viewport>` chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 2. Giải thích từng thuộc tính

### `width=device-width`
- Đặt chiều rộng của trang web bằng đúng chiều rộng màn hình thiết bị.
- Ví dụ:
  - iPhone có màn hình rộng 390px → website cũng được tính là 390px.

### `initial-scale=1.0`
- Thiết lập mức zoom ban đầu là 100%.
- Trang web sẽ không bị tự động zoom quá to hoặc quá nhỏ khi mở.

---

## 3. Nếu thiếu thẻ viewport thì chuyện gì xảy ra?

Nếu KHÔNG có thẻ viewport:

- iPhone và trình duyệt mobile sẽ giả lập website như màn hình desktop (~980px).
- Website sẽ bị thu nhỏ toàn bộ để nhét vừa màn hình điện thoại.
- Chữ rất nhỏ.
- Người dùng phải zoom mới đọc được.

Ví dụ:
- Một trang desktop rộng 980px trên điện thoại 390px sẽ bị co nhỏ lại.

---

## 4. Mobile-First vs Desktop-First

| Mobile-First | Desktop-First |
|---|---|
| Viết CSS cho mobile trước | Viết CSS cho desktop trước |
| Dùng `min-width` | Dùng `max-width` |
| Mở rộng dần cho màn hình lớn | Thu nhỏ dần cho màn hình nhỏ |
| Hiệu năng tốt hơn trên mobile | Dễ dư CSS |
| Được khuyên dùng hiện nay | Ít được khuyên hơn |

---

## 5. Ví dụ CSS Mobile-First (Breakpoint 768px)

```css
/* Mobile trước */
.container {
    width: 100%;
    background: lightblue;
}

/* Tablet/Desktop */
@media (min-width: 768px) {
    .container {
        width: 750px;
        background: lightgreen;
    }
}
```

### Ý nghĩa
- Mặc định áp dụng cho mobile.
- Khi màn hình >= 768px thì đổi giao diện.

---

## 6. Ví dụ CSS Desktop-First

```css
/* Desktop trước */
.container {
    width: 750px;
    background: lightgreen;
}

/* Mobile */
@media (max-width: 767px) {
    .container {
        width: 100%;
        background: lightblue;
    }
}
```

---

## 7. Tại sao Mobile-First được khuyên dùng?

### Vì:
- Người dùng mobile hiện nay nhiều hơn desktop.
- CSS nhẹ hơn cho điện thoại.
- Tối ưu hiệu năng.
- Responsive dễ mở rộng hơn.
- Phù hợp chuẩn hiện đại của Bootstrap và nhiều framework khác.

---

# Câu A2 (5đ) — Breakpoints

## Breakpoints chuẩn (Bootstrap)

| Breakpoint | Kích thước | Thiết bị đại diện | Ví dụ lưới sản phẩm |
|---|---|---|---|
| Extra Small | `<576px` | Điện thoại nhỏ | 1 cột |
| Small (sm) | `>=576px` | Điện thoại lớn | 2 cột |
| Medium (md) | `>=768px` | Tablet | 2–3 cột |
| Large (lg) | `>=992px` | Laptop | 3–4 cột |
| Extra Large (xl) | `>=1200px` | Desktop lớn | 4 cột |
| XXL | `>=1400px` | Màn hình cực lớn | 5–6 cột |

---

## Ví dụ Responsive Grid

### Mobile
```css
grid-template-columns: 1fr;
```

### Tablet
```css
grid-template-columns: repeat(2, 1fr);
```

### Desktop
```css
grid-template-columns: repeat(4, 1fr);
```

---

# Câu A3 (5đ) — Media Queries

## CSS đề bài

```css
.container { width: 100%; padding: 10px; }

@media (min-width: 576px) {
    .container { width: 540px; }
}

@media (min-width: 768px) {
    .container { width: 720px; }
}

@media (min-width: 992px) {
    .container { width: 960px; }
}

@media (min-width: 1200px) {
    .container { width: 1140px; }
}
```

---

## Bảng kết quả

| Chiều rộng màn hình | `.container width` |
|---|---|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

---

## Giải thích

### 375px
- Chưa đạt `576px`
- Dùng:
```css
width: 100%;
```

### 600px
- Đạt `576px`
- Width = `540px`

### 800px
- Đạt `768px`
- Width = `720px`

### 1000px
- Đạt `992px`
- Width = `960px`

### 1400px
- Đạt `1200px`
- Width = `1140px`

---

# Câu A4 (5đ) — SCSS Basics

## 1. Variables (Biến)

### Dùng để:
- Lưu màu sắc
- Font
- Kích thước
- Giá trị dùng nhiều lần

### Ví dụ

```scss
$primary-color: blue;
$padding-size: 20px;

.button {
    background: $primary-color;
    padding: $padding-size;
}
```

### Lợi ích
- Dễ sửa toàn bộ giao diện.
- Chỉ cần đổi 1 chỗ.

---

## 2. Nesting (CSS lồng nhau)

### Ví dụ

```scss
.navbar {
    background: black;

    ul {
        list-style: none;

        li {
            display: inline-block;

            a {
                color: white;
            }
        }
    }
}
```

### Sau khi compile thành CSS

```css
.navbar {
    background: black;
}

.navbar ul {
    list-style: none;
}

.navbar ul li {
    display: inline-block;
}

.navbar ul li a {
    color: white;
}
```

### Lợi ích
- Code gọn hơn.
- Dễ đọc hơn.
- Giống cấu trúc HTML.

---

## 3. Mixins (`@mixin`, `@include`)

### Dùng để:
Tái sử dụng nhiều đoạn CSS.

### Ví dụ

```scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include flex-center;
    height: 200px;
}
```

### CSS tạo ra

```css
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}
```

### Lợi ích
- Tránh lặp code.
- Viết nhanh hơn.

---

## 4. `@extend` / Inheritance

### Dùng để:
Kế thừa CSS từ class khác.

### Ví dụ

```scss
.button {
    padding: 10px;
    border-radius: 5px;
}

.success-button {
    @extend .button;
    background: green;
}
```

### CSS sau compile

```css
.button, .success-button {
    padding: 10px;
    border-radius: 5px;
}

.success-button {
    background: green;
}
```

### Lợi ích
- Tái sử dụng style.
- Giảm lặp CSS.

---

# 5. Tại sao trình duyệt KHÔNG đọc được `.scss`?

Vì:
- `.scss` không phải CSS chuẩn.
- Nó là ngôn ngữ mở rộng của CSS.
- Trình duyệt chỉ hiểu `.css`.

---

# 6. Cần bước gì để chuyển SCSS → CSS?

Cần dùng trình biên dịch (SCSS Compiler).

Ví dụ:
- Sass CLI
- Live Sass Compiler (VS Code)
- Webpack
- Vite

---

## Ví dụ compile bằng Sass

```bash
sass style.scss style.css
```

### Kết quả
- File `style.scss`
→ được chuyển thành
- File `style.css`

Trình duyệt sẽ đọc file `.css`.  




# PHẦN C — PHÂN TÍCH (20 điểm)

# Câu C1 (10đ) — Phân tích trang web thực

## Website được chọn: YouTube

Website: https://www.youtube.com

---

# 1. Mobile (375px)

## Wireframe bố cục

```text
┌─────────────────────┐
│ ☰  YouTube   🔍 👤 │
├─────────────────────┤
│     Video 1         │
├─────────────────────┤
│     Video 2         │
├─────────────────────┤
│     Video 3         │
├─────────────────────┤
│ Home Shorts Sub ... │
└─────────────────────┘
```

## Phân tích

### Navigation thay đổi thế nào?
- Menu sidebar bị ẩn
- Xuất hiện icon Hamburger ☰
- Search bar bị thu nhỏ thành icon kính lúp
- Chỉ giữ các icon quan trọng

### Lưới content thay đổi mấy cột?
- 1 cột video

### Elements nào bị ẩn trên mobile?
- Sidebar đầy đủ
- Một số nút chức năng phụ
- Danh mục mở rộng bên trái

### Font size có thay đổi không?
- Có
- Font nhỏ hơn desktop để tiết kiệm không gian

---

# 2. Tablet (768px)

## Wireframe bố cục

```text
┌──────────────────────────────────┐
│ ☰ YouTube     Search        👤  │
├──────────┬───────────────────────┤
│ Sidebar  │ Video 1   Video 2    │
│ nhỏ      ├───────────────────────┤
│          │ Video 3   Video 4    │
└──────────┴───────────────────────┘
```

## Phân tích

### Navigation thay đổi thế nào?
- Sidebar thu gọn thành icon
- Search bar dài hơn
- Vẫn giữ hamburger menu

### Lưới content thay đổi mấy cột?
- 2 cột video

### Elements nào bị ẩn?
- Một số text trong sidebar
- Chỉ hiện icon menu

### Font size có thay đổi không?
- Có tăng nhẹ so với mobile

---

# 3. Desktop (1440px)

## Wireframe bố cục

```text
┌────────────────────────────────────────────────────┐
│ ☰ YouTube      Search Bar                Icons 👤 │
├──────────────┬─────────────────────────────────────┤
│ Sidebar      │ Video1  Video2  Video3             │
│ đầy đủ       ├─────────────────────────────────────┤
│ Home         │ Video4  Video5  Video6             │
│ Shorts       ├─────────────────────────────────────┤
│ Subscribe    │ Video7  Video8  Video9             │
└──────────────┴─────────────────────────────────────┘
```

## Phân tích

### Navigation thay đổi thế nào?
- Sidebar hiển thị đầy đủ
- Search bar mở rộng
- Có thêm nhiều icon chức năng

### Lưới content thay đổi mấy cột?
- 3–5 cột tùy độ rộng màn hình

### Elements nào bị ẩn?
- Hầu như không ẩn nhiều thành phần

### Font size có thay đổi không?
- Font lớn hơn mobile
- Khoảng cách thoáng hơn

---

# 4. Media Queries tìm được trong DevTools

## Media Query 1

```css
@media (max-width: 656px) {
    #guide {
        display: none;
    }
}
```

### Ý nghĩa
- Khi màn hình nhỏ hơn 656px:
- Sidebar sẽ bị ẩn

---

## Media Query 2

```css
@media (min-width: 1000px) {
    .video-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

### Ý nghĩa
- Desktop sẽ hiển thị nhiều cột video hơn

---

# Nhận xét chung

YouTube sử dụng:
- Responsive Grid
- Flexbox
- Media Queries
- Sidebar adaptive
- Mobile-first responsive design

---

# Câu C2 (10đ) — Thiết kế Responsive Strategy

# 1. Wireframe Mobile

## Đặc điểm
- Hero image full width
- Grid món ăn: 1 cột
- Form đặt bàn đặt phía dưới gallery
- Google Maps đặt dưới form
- Ẩn bớt text mô tả dài để tiết kiệm không gian

```text
┌─────────────────────┐
│ LOGO      ☎ Hotline │
├─────────────────────┤
│                     │
│     HERO IMAGE      │
│                     │
├─────────────────────┤
│ Ảnh món ăn 1        │
├─────────────────────┤
│ Ảnh món ăn 2        │
├─────────────────────┤
│ Ảnh món ăn 3        │
├─────────────────────┤
│ Ảnh món ăn 4        │
├─────────────────────┤
│ Ảnh món ăn 5        │
├─────────────────────┤
│ Ảnh món ăn 6        │
├─────────────────────┤
│     FORM ĐẶT BÀN    │
│ [Ngày]              │
│ [Giờ]               │
│ [Số người]          │
│ [Ghi chú]           │
│ [Đặt bàn]           │
├─────────────────────┤
│    GOOGLE MAPS      │
├─────────────────────┤
│       FOOTER        │
└─────────────────────┘
```

---

# 2. Wireframe Tablet

## Đặc điểm
- Grid món ăn: 2 cột
- Form và Google Maps xếp dọc
- Hero image vẫn full width
- Header có khoảng cách rộng hơn

```text
┌──────────────────────────────────┐
│ LOGO                 ☎ Hotline   │
├──────────────────────────────────┤
│                                  │
│            HERO IMAGE            │
│                                  │
├──────────────────────────────────┤
│ Ảnh 1            │ Ảnh 2         │
├──────────────────┼────────────────┤
│ Ảnh 3            │ Ảnh 4         │
├──────────────────┼────────────────┤
│ Ảnh 5            │ Ảnh 6         │
├──────────────────────────────────┤
│         FORM ĐẶT BÀN             │
├──────────────────────────────────┤
│          GOOGLE MAPS             │
├──────────────────────────────────┤
│             FOOTER               │
└──────────────────────────────────┘
```

---

# 3. Wireframe Desktop

## Đặc điểm
- Layout chia 2 cột chính
- Grid món ăn: 3 cột
- Form đặt bàn và Maps đặt cạnh nhau
- Có thể thêm sidebar thông tin khuyến mãi / giờ mở cửa

```text
┌────────────────────────────────────────────────────┐
│ LOGO                             ☎ Hotline         │
├────────────────────────────────────────────────────┤
│                                                    │
│                    HERO IMAGE                      │
│                                                    │
├────────────────────────────────────────────────────┤
│ Ảnh 1        │ Ảnh 2        │ Ảnh 3               │
├──────────────┼──────────────┼──────────────────────┤
│ Ảnh 4        │ Ảnh 5        │ Ảnh 6               │
├────────────────────────────────────────────────────┤
│                                                    │
│ FORM ĐẶT BÀN        │        GOOGLE MAPS          │
│                     │                              │
├────────────────────────────────────────────────────┤
│ Sidebar: Khuyến mãi / Giờ mở cửa (optional)       │
├────────────────────────────────────────────────────┤
│                     FOOTER                         │
└────────────────────────────────────────────────────┘
```

---

# 4. CSS Skeleton (Mobile-First)

## HTML Structure

```html
<div class="container">

    <header class="header">
        Header
    </header>

    <section class="hero">
        Hero
    </section>

    <section class="gallery">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </section>

    <div class="booking-map">

        <section class="booking">
            Form đặt bàn
        </section>

        <section class="map">
            Google Maps
        </section>

    </div>

    <footer class="footer">
        Footer
    </footer>

</div>
```

---

## CSS Layout Skeleton

```css
/* RESET */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* MOBILE FIRST */

.container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
}

.header,
.hero,
.booking,
.map,
.footer {
    padding: 20px;
    border: 1px solid black;
}

/* GALLERY */

.gallery {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

.item {
    height: 150px;
    border: 1px solid black;
}

/* TABLET */

@media (min-width: 768px) {

    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }

}

/* DESKTOP */

@media (min-width: 1024px) {

    .gallery {
        grid-template-columns: repeat(3, 1fr);
    }

    .booking-map {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

}
```

---

# 5. Giải thích Responsive Strategy

## Mobile
 Ưu tiên cuộn dọc
 Grid 1 cột
 Form đặt dưới gallery

## Tablet
 Gallery 2 cột
 Maps dưới form 

## Desktop
 Gallery 3 cột
 Form và Maps nằm cạnh nhau
 Có thể thêm sidebar
  


