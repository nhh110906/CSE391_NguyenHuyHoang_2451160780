import { useState } from "react";

function StringState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailValid = email.includes("@");

  return (
    <div style={{ padding: "20px" }}>
      <h3>Nhập thông tin</h3>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Tên:{" "}
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập tên..." />
        </label>
        <span style={{ marginLeft: "8px", fontSize: "0.85rem" }}>{name.length}/100</span>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Email:{" "}
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email..." />
        </label>
        {email && <span style={{ marginLeft: "8px", color: emailValid ? "green" : "red" }}>{emailValid ? "Email hợp lệ" : "Email chưa hợp lệ"}</span>}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Mật khẩu:{" "}
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ marginLeft: "8px" }}>
          {showPassword ? "Ẩn" : "Hiện"}
        </button>
      </div>
      <p>Tên: {name || "(chưa nhập)"}</p>
      <p>Email: {email || "(chưa nhập)"}</p>
      {name && (
        <p style={{ background: "#f0f0f0", padding: "10px" }}>
          Xin chào <strong>{name}</strong>! Email: {email || "—"}
        </p>
      )}
    </div>
  );
}

export default StringState;