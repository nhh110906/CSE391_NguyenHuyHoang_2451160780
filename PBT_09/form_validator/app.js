const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

const nameStatus = document.getElementById("nameStatus");
const emailError = document.getElementById("emailError");
const confirmError = document.getElementById("confirmError");
const phoneError = document.getElementById("phoneError");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("registerForm");

let validName = false;
let validEmail = false;
let validPassword = false;
let validConfirm = false;
let validPhone = false;

function updateSubmitButton() {
    submitBtn.disabled = !(
        validName &&
        validEmail &&
        validPassword &&
        validConfirm &&
        validPhone
    );
}

nameInput.addEventListener("input", () => {
    const value = nameInput.value.trim();

    if (value.length >= 2 && value.length <= 50) {
        nameStatus.textContent = "✅";
        validName = true;
    } else {
        nameStatus.textContent = "❌";
        validName = false;
    }

    updateSubmitButton();
});

emailInput.addEventListener("input", () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email không được để trống";
        validEmail = false;
    }
    else if (!regex.test(emailInput.value)) {
        emailError.textContent = "Email không đúng định dạng";
        validEmail = false;
    }
    else {
        emailError.textContent = "";
        validEmail = true;
    }

    updateSubmitButton();
});

passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;

    let strength = 0;

    if (value.length >= 8)
        strength++;

    if (/[a-zA-Z]/.test(value) && /\d/.test(value))
        strength++;

    if (
        /[a-z]/.test(value) &&
        /[A-Z]/.test(value) &&
        /\d/.test(value) &&
        /[^A-Za-z0-9]/.test(value)
    )
        strength++;

    if (strength === 1) {
        strengthText.textContent = "Yếu";
        strengthBar.style.width = "33%";
        strengthBar.style.background = "red";
        validPassword = false;
    }
    else if (strength === 2) {
        strengthText.textContent = "Trung bình";
        strengthBar.style.width = "66%";
        strengthBar.style.background = "orange";
        validPassword = true;
    }
    else if (strength === 3) {
        strengthText.textContent = "Mạnh";
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
        validPassword = true;
    }
    else {
        strengthText.textContent = "";
        strengthBar.style.width = "0%";
        validPassword = false;
    }

    checkConfirm();
    updateSubmitButton();
});

function checkConfirm() {
    if (confirmInput.value === "") {
        confirmError.textContent = "";
        validConfirm = false;
    }
    else if (confirmInput.value === passwordInput.value) {
        confirmError.textContent = "Mật khẩu khớp";
        confirmError.style.color = "green";
        validConfirm = true;
    }
    else {
        confirmError.textContent = "Mật khẩu không khớp";
        confirmError.style.color = "red";
        validConfirm = false;
    }
}

confirmInput.addEventListener("input", () => {
    checkConfirm();
    updateSubmitButton();
});

phoneInput.addEventListener("input", () => {
    let digits = phoneInput.value.replace(/\D/g, "");

    if (digits.length > 10)
        digits = digits.slice(0, 10);

    let formatted = digits;

    if (digits.length > 4) {
        formatted =
            digits.slice(0, 4) +
            "-" +
            digits.slice(4);
    }

    if (digits.length > 7) {
        formatted =
            digits.slice(0, 4) +
            "-" +
            digits.slice(4, 7) +
            "-" +
            digits.slice(7);
    }

    phoneInput.value = formatted;

    if (digits.length === 10) {
        phoneError.textContent = "";
        validPhone = true;
    } else {
        phoneError.textContent =
            "Số điện thoại phải gồm 10 chữ số";
        validPhone = false;
    }

    updateSubmitButton();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("userInfo").innerHTML = `
        <strong>Họ tên:</strong> ${nameInput.value}<br>
        <strong>Email:</strong> ${emailInput.value}<br>
        <strong>SĐT:</strong> ${phoneInput.value}
    `;

    document.getElementById("modal").style.display = "block";
});

function closeModal() {
    document.getElementById("modal").style.display = "none";
}