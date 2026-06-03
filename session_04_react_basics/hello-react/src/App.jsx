function StudentCard() {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/120" alt="Avatar" />
      <h2>Nguyễn Huy Hoàng</h2>
      <p>Sinh viên năm 3</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="email@example.com" />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="card profile">
      <h1>Hồ sơ cá nhân</h1>
      <img src="https://via.placeholder.com/150" alt="Ảnh đại diện" />
      <table>
        <tbody>
          <tr>
            <td>Họ tên:</td>
            <td>Nguyễn Huy Hoàng</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>hoang@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="card product">
      <h2>iPhone 15</h2>
      <p className="price">25.000.000đ</p>
      <ul>
        <li>Màn hình: 6.1 inch</li>
        <li>Camera: 48MP</li>
        <li>Pin: 3349 mAh</li>
      </ul>
      <button type="button">Mua ngay</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <section className="tier-section">
        <h2>Bài 0.1 — App cơ bản</h2>
        <div>
          <h1>Nguyễn Huy Hoàng</h1>
          <p>Hôm nay là ngày đẹp trời</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </section>
      <section className="tier-section">
        <h2>Bài 0.2 — StudentCard</h2>
        <StudentCard />
      </section>
      <section className="tier-section">
        <h2>Thử thách — UserProfile</h2>
        <UserProfile />
      </section>
      <section className="tier-section">
        <h2>Thử thách — ProductInfo</h2>
        <ProductInfo />
      </section>
    </div>
  );
}
