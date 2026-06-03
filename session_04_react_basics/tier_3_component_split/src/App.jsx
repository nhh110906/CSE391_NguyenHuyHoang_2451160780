import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function Greeting({ name, age }) {
  return (
    <div className="card">
      <h3>Xin chào {name}!</h3>
      <p>Tuổi: {age}</p>
    </div>
  );
}

function UserCard({ name, email, avatar }) {
  return (
    <div className="card" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <img src={avatar} alt={name} width={64} height={64} style={{ borderRadius: "50%" }} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

function PriceTag({ originalPrice, salePrice }) {
  const onSale = salePrice < originalPrice;
  return (
    <p>
      {onSale ? (
        <>
          <s>{originalPrice.toLocaleString("vi-VN")}đ</s>{" "}
          <strong style={{ color: "#e74c3c" }}>{salePrice.toLocaleString("vi-VN")}đ</strong>
        </>
      ) : (
        <strong>{originalPrice.toLocaleString("vi-VN")}đ</strong>
      )}
    </p>
  );
}

export default function App() {
  const products = [
    { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://via.placeholder.com/200" },
  ];

  return (
    <div>
      <section className="tier-section">
        <h2>Bài 3.1–3.2 — Shop (Header, ProductCard, Footer)</h2>
        <Header />
        <main style={{ padding: "1rem" }}>
          <h2 style={{ textAlign: "center" }}>Cửa hàng điện thoại</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </main>
        <Footer />
      </section>
      <section className="tier-section">
        <h2>Bài 3.3 — Props</h2>
        <Greeting name="Minh" age={20} />
        <Greeting name="An" age={21} />
        <Greeting name="Linh" age={19} />
        <UserCard name="Hoàng" email="hoang@example.com" avatar="https://via.placeholder.com/64" />
        <UserCard name="An" email="an@example.com" avatar="https://via.placeholder.com/64/3498db" />
        <UserCard name="Linh" email="linh@example.com" avatar="https://via.placeholder.com/64/e74c3c" />
        <div className="card product">
          <h3>iPhone 15</h3>
          <PriceTag originalPrice={25000000} salePrice={22000000} />
        </div>
      </section>
    </div>
  );
}
