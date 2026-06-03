// restaurant_bill.js

// Danh sách món ăn
const foods = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 },
    { name: "Nem rán", price: 120000, quantity: 2 }
];

// Có tip hay không
const hasTip = true;

// Ngày hiện tại
const currentDay = "Wednesday";

// ===========================
// Hàm format tiền
// ===========================

function formatMoney(number) {
    return number.toLocaleString("vi-VN") + "đ";
}

// ===========================
// Tính tổng tiền món ăn
// ===========================

let subtotal = 0;

for (let i = 0; i < foods.length; i++) {
    subtotal += foods[i].price * foods[i].quantity;
}

// ===========================
// Tính giảm giá
// ===========================

let discountPercent = 0;

// Giảm theo tổng hóa đơn
if (subtotal > 1000000) {
    discountPercent += 15;
}
else if (subtotal > 500000) {
    discountPercent += 10;
}

// Giảm thêm thứ 4
if (currentDay === "Wednesday") {
    discountPercent += 5;
}

// Tiền giảm
let discountAmount = subtotal * discountPercent / 100;

// Sau giảm giá
let afterDiscount = subtotal - discountAmount;

// VAT 8%
let vat = afterDiscount * 0.08;

// Tip 5%
let tip = 0;

if (hasTip) {
    tip = afterDiscount * 0.05;
}

// Thành tiền cuối
let finalTotal = afterDiscount + vat + tip;

// ===========================
// In hóa đơn
// ===========================

console.log("╔══════════════════════════════════════════════╗");
console.log("║              HÓA ĐƠN NHÀ HÀNG               ║");
console.log("╠══════════════════════════════════════════════╣");

// In danh sách món
for (let i = 0; i < foods.length; i++) {

    let item = foods[i];

    let itemTotal = item.price * item.quantity;

    console.log(
        "║ " +
        (i + 1) + ". " +
        item.name.padEnd(12, " ") +
        " x" + item.quantity +
        "  @" + (item.price / 1000) + "k" +
        "  = " + (itemTotal / 1000) + "k"
        .padEnd(14, " ") +
        "║"
    );
}

console.log("╠══════════════════════════════════════════════╣");

console.log(
    "║ Tổng cộng:          " +
    formatMoney(subtotal).padStart(20, " ") +
    " ║"
);

console.log(
    "║ Giảm giá (" + discountPercent + "%):" +
    formatMoney(discountAmount).padStart(20, " ") +
    " ║"
);

console.log(
    "║ VAT (8%):" +
    formatMoney(vat).padStart(29, " ") +
    " ║"
);

console.log(
    "║ Tip (5%):" +
    formatMoney(tip).padStart(29, " ") +
    " ║"
);

console.log("╠══════════════════════════════════════════════╣");

console.log(
    "║ THANH TOÁN:        " +
    formatMoney(finalTotal).padStart(20, " ") +
    " ║"
);

console.log("╚══════════════════════════════════════════════╝");