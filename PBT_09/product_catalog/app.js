const products = [
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000,
        category: "phone",
        image: "https://placehold.co/200",
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Samsung S25",
        price: 23990000,
        category: "phone",
        image: "https://placehold.co/200",
        rating: 4.6,
        inStock: true
    },
    {
        id: 3,
        name: "Xiaomi 15",
        price: 15990000,
        category: "phone",
        image: "https://placehold.co/200",
        rating: 4.3,
        inStock: true
    },
    {
        id: 4,
        name: "MacBook Air M4",
        price: 31990000,
        category: "laptop",
        image: "https://placehold.co/200",
        rating: 4.9,
        inStock: true
    },
    {
        id: 5,
        name: "Dell XPS 15",
        price: 28990000,
        category: "laptop",
        image: "https://placehold.co/200",
        rating: 4.8,
        inStock: true
    },
    {
        id: 6,
        name: "Lenovo LOQ",
        price: 21990000,
        category: "laptop",
        image: "https://placehold.co/200",
        rating: 4.4,
        inStock: true
    },
    {
        id: 7,
        name: "iPad Pro",
        price: 22990000,
        category: "tablet",
        image: "https://placehold.co/200",
        rating: 4.7,
        inStock: true
    },
    {
        id: 8,
        name: "Galaxy Tab S10",
        price: 18990000,
        category: "tablet",
        image: "https://placehold.co/200",
        rating: 4.5,
        inStock: true
    },
    {
        id: 9,
        name: "Xiaomi Pad 7",
        price: 9990000,
        category: "tablet",
        image: "https://placehold.co/200",
        rating: 4.2,
        inStock: true
    },
    {
        id: 10,
        name: "AirPods Pro",
        price: 5990000,
        category: "accessory",
        image: "https://placehold.co/200",
        rating: 4.8,
        inStock: true
    },
    {
        id: 11,
        name: "Logitech MX Master",
        price: 2490000,
        category: "accessory",
        image: "https://placehold.co/200",
        rating: 4.7,
        inStock: true
    },
    {
        id: 12,
        name: "Mechanical Keyboard",
        price: 1990000,
        category: "accessory",
        image: "https://placehold.co/200",
        rating: 4.4,
        inStock: true
    }
];

const productContainer =
document.getElementById("productContainer");

const searchInput =
document.getElementById("searchInput");

const sortSelect =
document.getElementById("sortSelect");

const cartBadge =
document.getElementById("cartBadge");

const modalContainer =
document.getElementById("modalContainer");

const categoryButtons =
document.querySelectorAll(".category-btn");

const themeToggle =
document.getElementById("themeToggle");

let currentCategory = "all";
let cartCount = 0;

function formatPrice(price) {
    return price.toLocaleString("vi-VN") + " đ";
}

function renderProducts() {

    productContainer.innerHTML = "";

    let filtered = [...products];

    const keyword =
    searchInput.value.toLowerCase();

    filtered = filtered.filter(product =>
        product.name
        .toLowerCase()
        .includes(keyword)
    );

    if (currentCategory !== "all") {

        filtered = filtered.filter(product =>
            product.category === currentCategory
        );
    }

    const sortType = sortSelect.value;

    if (sortType === "priceAsc") {
        filtered.sort(
            (a,b) => a.price - b.price
        );
    }

    if (sortType === "priceDesc") {
        filtered.sort(
            (a,b) => b.price - a.price
        );
    }

    if (sortType === "nameAsc") {
        filtered.sort(
            (a,b) => a.name.localeCompare(b.name)
        );
    }

    if (sortType === "ratingDesc") {
        filtered.sort(
            (a,b) => b.rating - a.rating
        );
    }

    filtered.forEach(product => {

        const card =
        document.createElement("div");

        card.className = "product-card";
        card.dataset.id = product.id;

        const img =
        document.createElement("img");

        img.src = product.image;

        const info =
        document.createElement("div");

        info.className = "product-info";

        const title =
        document.createElement("h3");

        title.textContent = product.name;

        const price =
        document.createElement("p");

        price.textContent =
        formatPrice(product.price);

        const rating =
        document.createElement("p");

        rating.textContent =
        "⭐ " + product.rating;

        const button =
        document.createElement("button");

        button.className = "add-cart";
        button.textContent =
        "Thêm giỏ";

        button.dataset.id = product.id;

        info.appendChild(title);
        info.appendChild(price);
        info.appendChild(rating);
        info.appendChild(button);

        card.appendChild(img);
        card.appendChild(info);

        productContainer.appendChild(card);
    });
}

function showModal(product) {

    modalContainer.innerHTML = "";

    const overlay =
    document.createElement("div");

    overlay.className =
    "modal-overlay";

    const modal =
    document.createElement("div");

    modal.className = "modal";

    modal.innerHTML = `
        <img src="${product.image}">
        <h2>${product.name}</h2>
        <p>Giá:
        ${formatPrice(product.price)}</p>

        <p>Danh mục:
        ${product.category}</p>

        <p>Đánh giá:
        ${product.rating}</p>

        <p>
        ${product.inStock ?
        "Còn hàng" :
        "Hết hàng"}
        </p>

        <button class="close-btn">
            Đóng
        </button>
    `;

    overlay.appendChild(modal);

    modalContainer.appendChild(
        overlay
    );
}

searchInput.addEventListener(
    "input",
    renderProducts
);

sortSelect.addEventListener(
    "change",
    renderProducts
);

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            categoryButtons.forEach(btn =>
                btn.classList.remove(
                    "active"
                )
            );

            this.classList.add(
                "active"
            );

            currentCategory =
            this.dataset.category;

            renderProducts();
        }
    );
});

productContainer.addEventListener(
    "click",
    function(event) {

        const addBtn =
        event.target.closest(
            ".add-cart"
        );

        if (addBtn) {

            cartCount++;

            cartBadge.textContent =
            cartCount;

            event.stopPropagation();

            return;
        }

        const card =
        event.target.closest(
            ".product-card"
        );

        if (!card) {
            return;
        }

        const id =
        Number(card.dataset.id);

        const product =
        products.find(
            p => p.id === id
        );

        showModal(product);
    }
);

modalContainer.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "modal-overlay"
            )
            ||
            event.target.classList.contains(
                "close-btn"
            )
        ) {

            modalContainer.innerHTML = "";
        }
    }
);

themeToggle.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "dark-mode"
        );

        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            themeToggle.textContent =
            "☀️ Light Mode";
        }
        else {

            themeToggle.textContent =
            "🌙 Dark Mode";
        }
    }
);

renderProducts();