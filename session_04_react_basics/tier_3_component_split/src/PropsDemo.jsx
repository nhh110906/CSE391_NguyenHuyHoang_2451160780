import Greeting from "./Greeting";
import UserCard from "./UserCard";
import PriceTag from "./PriceTag";

function PropsDemo() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Props demo</h2>
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
    </div>
  );
}

export default PropsDemo;
