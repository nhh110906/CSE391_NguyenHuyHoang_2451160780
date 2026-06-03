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

export default AndDemo;