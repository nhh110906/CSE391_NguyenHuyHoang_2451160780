# PHẦN A — LỜI GIẢI ĐỌC HIỂU JAVASCRIPT

---

# Câu A1 (5đ) — Function Declaration vs Expression vs Arrow

## 1. Function Declaration

```js
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
}
```

---

## 2. Function Expression

```js
const tinhThueBaoHiem = function (luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```

---

## 3. Arrow Function

```js
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```

---

## Khác nhau về Hoisting

### Function Declaration

```js
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output:

```js
Hello
```

Vì toàn bộ hàm được hoisting lên đầu phạm vi.

---

### Function Expression

```js
sayHello();

const sayHello = function () {
    console.log("Hello");
};
```

Output:

```js
ReferenceError
```

Biến `sayHello` được hoisting nhưng nằm trong Temporal Dead Zone cho tới khi được gán giá trị.

---

### Arrow Function

```js
sayHello();

const sayHello = () => {
    console.log("Hello");
};
```

Output:

```js
ReferenceError
```

Tương tự Function Expression.

---

## Kết luận

| Kiểu hàm | Gọi trước khai báo được không? |
|-----------|-------------------------------|
| Function Declaration | Có |
| Function Expression | Không |
| Arrow Function | Không |

---

# Câu A2 (5đ) — Scope & Closure

## Đoạn 1

```js
function counter() {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const c = counter();

console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.getCount());
```

### Output

```js
1
2
3
2
2
```

---

### Giải thích

Ban đầu:

```js
count = 0
```

Lần 1:

```js
++count => 1
```

Lần 2:

```js
++count => 2
```

Lần 3:

```js
++count => 3
```

Sau đó:

```js
--count => 2
```

Cuối cùng:

```js
getCount() => 2
```

Closure giúp các hàm bên trong vẫn giữ được quyền truy cập vào biến `count` ngay cả khi hàm `counter()` đã chạy xong.

---

## Đoạn 2

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
```

### Output

Sau khoảng 100ms:

```js
var: 3
var: 3
var: 3
```

Sau khoảng 200ms:

```js
let: 0
let: 1
let: 2
```

---

### Giải thích

#### Trường hợp var

`var` chỉ có một biến `i` dùng chung.

Sau khi vòng lặp kết thúc:

```js
i = 3
```

Ba callback đều đọc cùng biến này.

Nên:

```js
3
3
3
```

---

#### Trường hợp let

Mỗi lần lặp tạo một biến mới:

```js
j = 0
j = 1
j = 2
```

Mỗi callback giữ một bản sao riêng.

Nên:

```js
0
1
2
```

---

# Câu A3 (5đ) — Array Methods

```js
const nums = [1,2,3,4,5,6,7,8,9,10];
```

---

## 1. Lấy các số chẵn

```js
nums.filter(n => n % 2 === 0);
```

Kết quả:

```js
[2,4,6,8,10]
```

---

## 2. Nhân mỗi số với 3

```js
nums.map(n => n * 3);
```

Kết quả:

```js
[3,6,9,12,15,18,21,24,27,30]
```

---

## 3. Tính tổng tất cả

```js
nums.reduce((sum, n) => sum + n, 0);
```

Kết quả:

```js
55
```

---

## 4. Tìm số đầu tiên lớn hơn 7

```js
nums.find(n => n > 7);
```

Kết quả:

```js
8
```

---

## 5. Kiểm tra có số > 10 không

```js
nums.some(n => n > 10);
```

Kết quả:

```js
false
```

---

## 6. Kiểm tra tất cả đều > 0

```js
nums.every(n => n > 0);
```

Kết quả:

```js
true
```

---

## 7. Tạo mảng mô tả chẵn/lẻ

```js
nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
```

Kết quả:

```js
[
 "Số 1 là lẻ",
 "Số 2 là chẵn",
 ...
]
```

---

## 8. Đảo ngược mảng (không mutate)

```js
[...nums].reverse();
```

Kết quả:

```js
[10,9,8,7,6,5,4,3,2,1]
```

---

# Câu A4 (5đ) — Object Destructuring & Spread

```js
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: {
        ram: 8,
        storage: 256,
        color: "Titan"
    }
};
```

---

## Destructuring

```js
const {
    name,
    price,
    specs: { ram, color }
} = product;
```

---

### Output 1

```js
console.log(name, price, ram, color);
```

Kết quả:

```js
iPhone 16 25990000 8 Titan
```

---

### Output 2

```js
console.log(specs);
```

Kết quả:

```js
ReferenceError
```

---

### Vì sao?

Do destructuring:

```js
specs: { ram, color }
```

chỉ tạo ra biến:

```js
ram
color
```

Không tạo biến:

```js
specs
```

---

## Spread

```js
const updated = {
    ...product,
    price: 23990000,
    sale: true
};
```

---

### Output

```js
console.log(updated.price);
```

```js
23990000
```

---

```js
console.log(updated.sale);
```

```js
true
```

---

```js
console.log(product.price);
```

```js
25990000
```

---

### Giải thích

Spread tạo object mới nên việc sửa:

```js
updated.price
```

không làm thay đổi:

```js
product.price
```

---

## Spread Gotcha

```js
const copy = { ...product };

copy.specs.ram = 16;

console.log(product.specs.ram);
```

### Output

```js
16
```

---

### Tại sao?

Spread chỉ copy tầng đầu (shallow copy).

Bộ nhớ:

```txt
product
  └── specs ----+
                |
copy            |
  └── specs ----+
```

Hai object cùng trỏ tới một object `specs`.

Khi sửa:

```js
copy.specs.ram = 16;
```

thì:

```js
product.specs.ram
```

cũng đổi thành:

```js
16
```

---

## Kết luận

Spread Object:

- Copy tầng đầu.
- Không copy sâu (deep copy).
- Object lồng bên trong vẫn dùng chung tham chiếu.    



# PHẦN C — SUY LUẬN

---

# Câu C1 (10đ) — Refactor Code

## Lời giải

```js
const processOrders = orders =>
    orders
        .filter(({ status, total }) => status === "completed" && total > 100000)
        .map(({ id, customer, total }) => ({
            id,
            customer,
            total,
            discount: total * 0.1,
            finalTotal: total * 0.9
        }))
        .sort((a, b) => b.finalTotal - a.finalTotal);
```

## Giải thích

### filter()
Chỉ lấy các đơn hàng:

- `status === "completed"`
- `total > 100000`

```js
.filter(({ status, total }) =>
    status === "completed" && total > 100000
)
```

---

### map()
Tạo object mới cho mỗi đơn hàng.

```js
.map(({ id, customer, total }) => ({
    id,
    customer,
    total,
    discount: total * 0.1,
    finalTotal: total * 0.9
}))
```

Sử dụng:

- Arrow Function
- Object Literal
- Destructuring

---

### sort()

Sắp xếp giảm dần theo `finalTotal`.

```js
.sort((a, b) => b.finalTotal - a.finalTotal)
```

---

# Ví dụ

```js
const orders = [
    {
        id: 1,
        customer: "An",
        total: 200000,
        status: "completed"
    },
    {
        id: 2,
        customer: "Bình",
        total: 90000,
        status: "completed"
    },
    {
        id: 3,
        customer: "Cường",
        total: 500000,
        status: "completed"
    }
];

console.log(processOrders(orders));
```

### Output

```js
[
  {
    id: 3,
    customer: 'Cường',
    total: 500000,
    discount: 50000,
    finalTotal: 450000
  },
  {
    id: 1,
    customer: 'An',
    total: 200000,
    discount: 20000,
    finalTotal: 180000
  }
]
```

---

# Câu C2 (10đ) — Thiết kế API miniArray

## Lời giải

```js
const miniArray = {
    map(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }

        return result;
    },

    filter(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }

        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;

        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }

        return accumulator;
    }
};
```

---

## Test

```js
console.log(
    miniArray.map([1, 2, 3], x => x * 2)
);
// [2,4,6]

console.log(
    miniArray.filter([1, 2, 3, 4], x => x > 2)
);
// [3,4]

console.log(
    miniArray.reduce(
        [1, 2, 3, 4],
        (a, b) => a + b,
        0
    )
);
// 10
```

---

## Giải thích

### map()

Duyệt từng phần tử:

```js
fn(arr[i], i, arr)
```

Kết quả được đưa vào mảng mới.

Ví dụ:

```js
miniArray.map([1,2,3], x => x * 2);
```

→

```js
[2,4,6]
```

---

### filter()

Chỉ thêm phần tử nếu callback trả về `true`.

```js
if (fn(arr[i], i, arr))
```

Ví dụ:

```js
miniArray.filter(
    [1,2,3,4],
    x => x > 2
);
```

→

```js
[3,4]
```

---

### reduce()

Biến `accumulator` lưu kết quả tích lũy.

```js
accumulator = fn(
    accumulator,
    arr[i],
    i,
    arr
);
```

Ví dụ:

```js
miniArray.reduce(
    [1,2,3,4],
    (a,b) => a + b,
    0
);
```

Quá trình:

```js
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

Kết quả:

```js
10
```

---

# Tổng kết

Các kiến thức sử dụng:

- Arrow Function
- Destructuring
- Object Literal
- filter()
- map()
- sort()
- Vòng lặp for
- Callback Function
- Higher-Order Function
- Tự cài đặt map/filter/reduce