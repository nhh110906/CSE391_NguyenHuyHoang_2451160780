import { useState } from "react";

function NumberState() {
  const [count, setCount] = useState(0);
  const countColor = count > 0 ? "green" : count < 0 ? "red" : "black";
  const countLabel = count > 0 ? "Số dương" : count < 0 ? "Số âm" : "Bằng 0";

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>
        Bộ đếm: <span style={{ color: countColor }}>{count}</span>
      </h3>
      <p>{countLabel}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Tăng (+1)
      </button>
      <button type="button" onClick={() => setCount(count + 5)} style={{ marginLeft: "8px" }}>
        Tăng 5
      </button>
      <button type="button" onClick={() => setCount(count - 1)} style={{ marginLeft: "8px" }}>
        Giảm (-1)
      </button>
      <button type="button" onClick={() => setCount(0)} style={{ marginLeft: "8px" }}>
        Reset
      </button>
      <button type="button" onClick={() => setCount(count * 2)} style={{ marginLeft: "8px" }}>
        Nhân đôi
      </button>
    </div>
  );
}

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

function MultipleStates() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ageNum = Number(age);
  const ageValid = age === "" || (ageNum > 0 && ageNum < 100);

  function handleSubmit() {
    if (name.trim() === "" || age === "" || !ageValid) {
      alert("Vui lòng nhập đầy đủ thông tin hợp lệ (tuổi 1–99)!");
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setName("");
    setAge("");
    setEmail("");
    setIsStudent(false);
    setSubmitted(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Form đăng ký</h3>
      {!submitted ? (
        <div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Tên: <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            {name.trim() && <p>Xin chào {name}!</p>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Tuổi:{" "}
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            {!ageValid && age !== "" && <span style={{ color: "red" }}> Tuổi phải từ 1–99</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Email: <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} />
              Là sinh viên
            </label>
          </div>
          <button type="button" onClick={handleSubmit}>
            Đăng ký
          </button>
        </div>
      ) : (
        <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px" }}>
          <h4>✅ Đăng ký thành công!</h4>
          <p>Tên: {name}</p>
          <p>Tuổi: {age}</p>
          <p>Email: {email || "—"}</p>
          <p>Sinh viên: {isStudent ? "Có" : "Không"}</p>
          <button type="button" onClick={handleReset}>
            Đăng ký lại
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <section className="tier-section">
        <h2>Bài 4.1 — NumberState</h2>
        <NumberState />
      </section>
      <section className="tier-section">
        <h2>Bài 4.2 — StringState</h2>
        <StringState />
      </section>
      <section className="tier-section">
        <h2>Bài 4.3 — BooleanState</h2>
        <BooleanState />
      </section>
      <section className="tier-section">
        <h2>Bài 4.4 — MultipleStates</h2>
        <MultipleStates />
      </section>
    </div>
  );
}
