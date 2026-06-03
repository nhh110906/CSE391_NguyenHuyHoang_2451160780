function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Chào buổi sáng";
  if (hour < 18) return "Chào buổi chiều";
  return "Chào buổi tối";
}

function SimpleVariables() {
  const ten = "Nguyễn Huy Hoàng";
  const tuoi = 20;
  const queQuan = "Hà Nội";
  const canNang = 65;
  const chieuCao = 1.7;
  const bmi = (canNang / (chieuCao * chieuCao)).toFixed(1);
  const laSinhVien = true;
  const monHoc = ["HTML", "CSS", "JS", "React"];

  return (
    <div style={{ padding: "20px" }}>
      <h3>Biến trong JSX</h3>
      <p>
        {getGreeting()}, {ten}!
      </p>
      <p>Tuổi: {tuoi} — Quê quán: {queQuan}</p>
      <p>Năm sau: {tuoi + 1}</p>
      <p>Sinh viên: {laSinhVien ? "Có" : "Không"}</p>
      <p>
        BMI: {bmi} ({bmi < 18.5 ? "Gầy" : bmi < 25 ? "Bình thường" : "Thừa cân"})
      </p>
      <p>Môn học: {monHoc.join(", ")}</p>
    </div>
  );
}

function TernaryDemo() {
  const isLoggedIn = true;
  const isOnline = true;
  const score = 85;
  const stock = 0;

  return (
    <div style={{ padding: "20px" }}>
      <h3>Conditional (ternary)</h3>
      <p>
        {isOnline ? "🟢 Online" : "🔴 Offline"} —{" "}
        {isLoggedIn ? "Chào mừng bạn!" : "Vui lòng đăng nhập"}
      </p>
      <p>Kết quả: {score >= 5 ? "Đậu" : "Rớt"}</p>
      <p>
        Xếp loại:{" "}
        {score >= 9
          ? "Xuất sắc"
          : score >= 8
            ? "Giỏi"
            : score >= 7
              ? "Khá"
              : score >= 5
                ? "Trung bình"
                : "Yếu"}
      </p>
      {stock === 0 && <p style={{ color: "red" }}>Hết hàng</p>}
    </div>
  );
}

function AndDemo() {
  const hasNotification = true;
  const notificationCount = 5;
  const isLoggedIn = true;

  return (
    <div style={{ padding: "20px" }}>
      <h3>Conditional (&&)</h3>
      {hasNotification && (
        <div style={{ background: "#fff3cd", padding: "10px" }}>
          Bạn có {notificationCount} thông báo mới!
        </div>
      )}
      {isLoggedIn && (
        <nav style={{ marginTop: "10px", display: "flex", gap: "1rem" }}>
          <a href="#home">Trang chủ</a>
          <a href="#profile">Hồ sơ</a>
          <a href="#settings">Cài đặt</a>
        </nav>
      )}
      {!hasNotification && <p>Không có thông báo</p>}
    </div>
  );
}

function ListRendering() {
  const fruits = ["Táo", "Chuối", "Cam", "Nho"];
  const students = [
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 },
  ];
  const products = [
    { id: 1, name: "Laptop", price: 25000000 },
    { id: 2, name: "Chuột", price: 500000 },
    { id: 3, name: "Bàn phím", price: 1200000 },
    { id: 4, name: "Màn hình", price: 4500000 },
    { id: 5, name: "Tai nghe", price: 800000 },
  ];
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Danh sách trái cây</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h3>Sinh viên</h3>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} style={{ color: student.age >= 20 ? "green" : undefined }}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Sản phẩm (giá &gt; 1 triệu màu đỏ)</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ color: product.price > 1000000 ? "red" : undefined }}>
            {product.name}: {product.price.toLocaleString("vi-VN")}đ
          </li>
        ))}
      </ul>
      <p>
        <strong>Tổng giá:</strong> {totalPrice.toLocaleString("vi-VN")}đ
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <section className="tier-section">
        <h2>Bài 2.1 — SimpleVariables</h2>
        <SimpleVariables />
      </section>
      <section className="tier-section">
        <h2>Bài 2.2 — TernaryDemo & AndDemo</h2>
        <TernaryDemo />
        <AndDemo />
      </section>
      <section className="tier-section">
        <h2>Bài 2.3 — ListRendering</h2>
        <ListRendering />
      </section>
    </div>
  );
}
