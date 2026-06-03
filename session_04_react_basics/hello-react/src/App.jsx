import StudentCard from "./StudentCard";
import UserProfile from "./UserProfile";
import ProductInfo from "./ProductInfo";

function App() {
  return (
    <div>
      <h1>Nguyễn Huy Hoàng</h1>
      <p>Hôm nay là ngày đẹp trời</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <hr />
      <StudentCard />
      <hr />
      <UserProfile />
      <hr />
      <ProductInfo />
    </div>
  );
}

export default App;
