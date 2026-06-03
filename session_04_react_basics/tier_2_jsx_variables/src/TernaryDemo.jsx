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

export default TernaryDemo;