import { useState } from "react";

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12"];

function ClickEvents() {
  const [message, setMessage] = useState("Chưa click");
  const [clickCount, setClickCount] = useState(0);
  const [likes, setLikes] = useState(0);
  const [boxColor, setBoxColor] = useState("#ecf0f1");

  function handleClick() {
    setMessage("Đã click lúc " + new Date().toLocaleTimeString());
    setClickCount(clickCount + 1);
  }

  function handleReset() {
    setMessage("Đã reset!");
    setClickCount(0);
  }

  function randomColor() {
    setBoxColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Click Events</h3>
      <p>{message}</p>
      <p>Số lần click: {clickCount}</p>
      <button type="button" onClick={handleClick}>
        Click me!
      </button>
      <button type="button" onClick={handleReset} style={{ marginLeft: "8px" }}>
        Reset
      </button>
      <button type="button" onClick={() => setLikes(likes + 1)} style={{ marginLeft: "8px" }}>
        {likes > 0 ? "❤️" : "🤍"} Like ({likes})
      </button>
      <div
        style={{
          marginTop: "12px",
          width: "120px",
          height: "60px",
          background: boxColor,
          borderRadius: "8px",
        }}
      />
      <button type="button" onClick={randomColor} style={{ display: "block", marginTop: "8px" }}>
        Đổi màu ngẫu nhiên
      </button>
    </div>
  );
}

export default ClickEvents;
