// Random số từ 1 -> 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Số lần đoán
let attempts = 0;

// Giới hạn lượt
let maxAttempts = 7;

// Lưu các số đã đoán
let guessedNumbers = [];

// Game loop
while (attempts < maxAttempts) {

    let input = prompt(
        "Nhập số từ 1 đến 100\n" +
        "Bạn còn " + (maxAttempts - attempts) + " lượt"
    );

    // Nếu bấm Cancel
    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }

    let guess = Number(input);

    // Validate input
    if (
        input.trim() === "" ||
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số từ 1 đến 100!");
        continue;
    }

    // Kiểm tra nhập trùng
    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    // Lưu số đã đoán
    guessedNumbers.push(guess);

    // Tăng số lần đoán
    attempts++;

    // So sánh
    if (guess === randomNumber) {
        alert("Đúng rồi! Bạn đoán đúng sau " + attempts + " lần!");
        break;
    }
    else if (guess < randomNumber) {
        alert("Cao hơn!");
    }
    else {
        alert("Thấp hơn!");
    }

    // Hết lượt
    if (attempts === maxAttempts) {
        alert(
            "Bạn đã thua!\n" +
            "Đáp án là: " + randomNumber
        );
    }
}