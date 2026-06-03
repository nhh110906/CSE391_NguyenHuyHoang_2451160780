import { useState } from "react";

function InputEvents() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const charCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const emailValid = email.includes("@");

  return (
    <div style={{ padding: "20px" }}>
      <h3>Input Events</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập gì đó..."
        maxLength={100}
        style={{ padding: "8px", width: "100%", maxWidth: "320px" }}
      />
      <p>Ký tự: {charCount}/100 — Từ: {wordCount}</p>
      <p>Bạn đang nhập: {text}</p>
      {charCount > 80 && <p style={{ color: "red" }}>⚠️ Sắp hết ký tự!</p>}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        style={{ padding: "8px", width: "100%", maxWidth: "320px", marginTop: "8px" }}
      />
      {email && (
        <p style={{ color: emailValid ? "green" : "red" }}>{emailValid ? "Email hợp lệ" : "Cần có @"}</p>
      )}
      {text && (
        <p style={{ background: "#f0f0f0", padding: "8px", marginTop: "8px" }}>
          Preview: {text}
        </p>
      )}
    </div>
  );
}

export default InputEvents;
