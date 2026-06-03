import { useState } from "react";

function BooleanState() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [lightOn, setLightOn] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const themeStyle = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
    padding: "20px",
    minHeight: "120px",
  };

  return (
    <div style={themeStyle}>
      <h3>Toggle Demo</h3>
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Ẩn nội dung" : "Hiện nội dung"}
      </button>
      {isVisible && (
        <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ddd" }}>
          <p>Nội dung có thể ẩn/hiện!</p>
        </div>
      )}
      <hr />
      <button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <button type="button" onClick={() => setIsLiked(!isLiked)} style={{ marginLeft: "8px" }}>
        {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
      </button>
      <button type="button" onClick={() => setLightOn(!lightOn)} style={{ marginLeft: "8px" }}>
        {lightOn ? "💡 Bật" : "💡 Tắt"}
      </button>
      <div style={{ marginTop: "12px" }}>
        <button type="button" onClick={() => setAccordionOpen(!accordionOpen)}>
          {accordionOpen ? "▼" : "▶"} Accordion
        </button>
        {accordionOpen && <p style={{ marginTop: "8px" }}>Nội dung accordion mở rộng.</p>}
      </div>
    </div>
  );
}

export default BooleanState;