import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import PropsDemo from "./PropsDemo";

function App() {
  const products = [
    { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://via.placeholder.com/200" },
  ];

  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1 style={{ textAlign: "center" }}>Cửa hàng điện thoại</h1>
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
      <hr />
      <PropsDemo />
    </div>
  );
}

export default App;
