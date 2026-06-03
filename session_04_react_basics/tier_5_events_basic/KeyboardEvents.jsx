import { useState } from "react";

export default function KeyboardEvents() {
  const [lastKey, setLastKey] = useState("");
  const [log, setLog] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [boxPos, setBoxPos] = useState({ x: 50, y: 50 });
  const [targetKey] = useState(() => ["a", "s", "d", "f"][Math.floor(Math.random() * 4)]);
  const [guessMsg, setGuessMsg] = useState(`Nhấn phím: ${targetKey.toUpperCase()}`);

  function handleKeyDown(event) {
    setLastKey(event.key);
    setLog((prev) => [...prev.slice(-4), event.key]);

    if (event.key === targetKey) {
      setGuessMsg("🎉 Đúng rồi!");
    }

    if (event.ctrlKey && event.key === "d") {
      event.preventDefault();
      document.body.style.background =
        document.body.style.background === "rgb(51, 51, 51)" ? "" : "#333";
    }

    const step = 10;
    if (event.key === "ArrowUp") setBoxPos((p) => ({ ...p, y: Math.max(0, p.y - step) }));
    if (event.key === "ArrowDown") setBoxPos((p) => ({ ...p, y: p.y + step }));
    if (event.key === "ArrowLeft") setBoxPos((p) => ({ ...p, x: Math.max(0, p.x - step) }));
    if (event.key === "ArrowRight") setBoxPos((p) => ({ ...p, x: p.x + step }));
  }

  function handleInputKeyDown(event) {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      alert("Bạn nhập: " + inputValue);
      setInputValue("");
    }
    if (event.key === "Escape") {
      setInputValue("");
    }
  }

  return (
    <div style={{ padding: "20px" }} onKeyDown={handleKeyDown} tabIndex={0}>
      <h3>Keyboard Events</h3>
      <p>
        Phím cuối: <strong>{lastKey || "—"}</strong>
      </p>
      <p>Log: {log.join(" → ") || "—"}</p>
      <p>{guessMsg}</p>
      <div
        style={{
          position: "relative",
          height: "100px",
          background: "#f0f0f0",
          margin: "12px 0",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: boxPos.x,
            top: boxPos.y,
            width: "24px",
            height: "24px",
            background: "#3498db",
          }}
        />
      </div>
      <p style={{ fontSize: "0.85rem" }}>Dùng ↑↓←→ di chuyển ô vuông; Ctrl+D đổi nền</p>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputKeyDown}
        placeholder="Enter gửi, Escape xóa"
        style={{ padding: "8px", width: "100%", maxWidth: "320px" }}
      />
    </div>
  );
}
