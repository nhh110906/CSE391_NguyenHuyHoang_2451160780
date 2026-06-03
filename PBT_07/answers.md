# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1 (5đ) — var / let / const

### Đoạn 1
```js
console.log(x);
var x = 5;
```

### Dự đoán output
```js
undefined
```

### Giải thích
- `var` được hoisting (đưa lên đầu phạm vi).
- Biến được khai báo trước nhưng chưa gán giá trị nên có giá trị `undefined`.

---

### Đoạn 2
```js
console.log(y);
let y = 10;
```

### Dự đoán output
```js
ReferenceError
```

### Giải thích
- `let` cũng được hoisting nhưng nằm trong Temporal Dead Zone (TDZ).
- Không được truy cập trước khi khai báo.

---

### Đoạn 3
```js
const z = 15;
z = 20;
console.log(z);
```

### Dự đoán output
```js
TypeError
```

### Giải thích
- `const` không cho phép gán lại giá trị.

---

### Đoạn 4
```js
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

### Dự đoán output
```js
[1, 2, 3, 4]
```

### Giải thích
- `const` không cho đổi tham chiếu.
- Nhưng vẫn có thể thay đổi nội dung bên trong mảng/object.

---

### Đoạn 5
```js
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
```

### Dự đoán output
```js
Trong block: 2
Ngoài block: 1
```

### Giải thích
- `let` có phạm vi block.
- Biến `a` trong block là biến khác với `a` bên ngoài.

---

# Câu A2 (5đ) — Data Types & Coercion

```js
console.log(typeof null);        // "object"
console.log(typeof undefined);   // "undefined"
console.log(typeof NaN);         // "number"
console.log("5" + 3);            // "53"
console.log("5" - 3);            // 2
console.log("5" * "3");          // 15
console.log(true + true);        // 2
console.log([] + []);            // ""
console.log([] + {});            // "[object Object]"
console.log({} + []);            // 0
```

## Giải thích

### Vì sao `"5" + 3` khác `"5" - 3`?

#### `"5" + 3`
- Toán tử `+` ưu tiên nối chuỗi nếu có chuỗi.
- `3` được ép sang `"3"`.

Kết quả:
```js
"53"
```

#### `"5" - 3`
- Toán tử `-` chỉ dùng cho số.
- JavaScript ép `"5"` thành số `5`.

Kết quả:
```js
2
```

---

# Câu A3 (5đ) — So sánh == vs ===

```js
console.log(5 == "5");              // true
console.log(5 === "5");             // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false
console.log(NaN == NaN);            // false
console.log(0 == false);            // true
console.log(0 === false);           // false
console.log("" == false);           // true
```

## Giải thích

### `==`
- So sánh lỏng.
- Có ép kiểu dữ liệu.

### `===`
- So sánh nghiêm ngặt.
- Không ép kiểu.
- So sánh cả giá trị và kiểu dữ liệu.

## Nên dùng cái nào?
Nên dùng:
```js
===
```

### Vì sao?
- Tránh lỗi do ép kiểu tự động.
- Code dễ hiểu hơn.
- An toàn hơn.

---

# Câu A4 (5đ) — Truthy & Falsy

## Tất cả giá trị Falsy trong JavaScript

```js
false
0
-0
0n
""
null
undefined
NaN
```

---

## Dự đoán kết quả

```js
if ("0") console.log("A");
```
→ In `"A"`

---

```js
if ("") console.log("B");
```
→ Không in

---

```js
if ([]) console.log("C");
```
→ In `"C"`

---

```js
if ({}) console.log("D");
```
→ In `"D"`

---

```js
if (null) console.log("E");
```
→ Không in

---

```js
if (0) console.log("F");
```
→ Không in

---

```js
if (-1) console.log("G");
```
→ In `"G"`

---

```js
if (" ") console.log("H");
```
→ In `"H"`

### Giải thích
- `" "` chứa dấu cách nên không phải chuỗi rỗng.
- Vì vậy nó là truthy.

---

# Câu A5 (5đ) — Template Literals

## Cách 1

### Code cũ
```js
var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";
```

### Viết lại
```js
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

---

## Cách 2

### Code cũ
```js
var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;
```

### Viết lại
```js
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

---

## Cách 3

### Code cũ
```js
var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";
```

### Viết lại
```js
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```  

# Phần C

# Câu C1 — Debug JavaScript

## Code gốc

```js
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ"
    }
    
    var giamGia = giaBan * phanTramGiam / 100
    let giaSauGiam = giaBan - giamGia
    
    if (giaSauGiam = 0) {
        console.log("Sản phẩm miễn phí!")
    }
    
    return giaSauGiam
}

// Test
const gia = tinhGiaGiamGia("100000", 20)
console.log("Giá sau giảm: " + gia + "đ")

const gia2 = tinhGiaGiamGia(50000, 110)
console.log("Giá: " + gia2)

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
```

## Các lỗi và cách sửa

| # | Lỗi | Giải thích | Sửa |
|---|-----|------------|-----|
| 1 | `if (giaSauGiam = 0)` | Dùng `=` (gán) thay vì so sánh | `if (giaSauGiam === 0)` |
| 2 | `tinhGiaGiamGia("100000", 20)` | `giaBan` là string | `tinhGiaGiamGia(100000, 20)` |
| 3 | `var giamGia` | `var` function-scope | `let giamGia` |
| 4 | Không kiểm tra `giaBan` | Giá âm / không phải số | Thêm `typeof` và `giaBan < 0` |
| 5 | `for (var i)` + `setTimeout` | In 5 lần `Item 5` | `for (let i = 0; ...)` |
| 6 | Thiếu `;` | Khó bảo trì | Thêm `;` |

### Code đã sửa (tóm tắt)

```js
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    if (typeof giaBan !== "number" || giaBan < 0) {
        return "Giá bán không hợp lệ";
    }
    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }
    let giamGia = giaBan * phanTramGiam / 100;
    let giaSauGiam = giaBan - giamGia;
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    return giaSauGiam;
}

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("Item " + i);
    }, 1000);
}
```

## Câu C2

File `restaurant_bill.js` — minh chứng: `screenshots/C2.png`.

---

## Phần D — Video OBS

máy em lỗi obs không quay được ạ, mong thầy thông cảm!

---

## Minh chứng chạy code

| Bài | File | Ảnh |
|-----|------|-----|
| B1 | `calculator.js` | `screenshots/B1.png` |
| B2 | `student_data.js` | `screenshots/B2.png` |
| B3 | `guess_number.html` | `screenshots/B3_v1.png`, `B3_v2.png` |
| B4 | `fizzbuzz.js` | `screenshots/B4.png` |
| C2 | `restaurant_bill.js` | `screenshots/C2.png` |