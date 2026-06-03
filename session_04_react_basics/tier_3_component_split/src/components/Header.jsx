function Header() {
  return (
    <header style={{ padding: "1rem", background: "#2c3e50", color: "#fff" }}>
      <h1 style={{ margin: 0, fontSize: "1.25rem" }}>Portfolio Shop</h1>
      <nav style={{ marginTop: "0.5rem", display: "flex", gap: "1rem" }}>
        <a href="/" style={{ color: "#ecf0f1" }}>
          Trang chủ
        </a>
        <a href="/about" style={{ color: "#ecf0f1" }}>
          Giới thiệu
        </a>
        <a href="/contact" style={{ color: "#ecf0f1" }}>
          Liên hệ
        </a>
      </nav>
    </header>
  );
}

export default Header;
