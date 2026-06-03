import { useState } from "react";

function LifecycleDemo() {
  console.log("1️⃣ Component được gọi!");

  return (
    <div style={{ padding: "20px", border: "2px solid #3498db" }}>
      <h3>Lifecycle Demo</h3>
      <p>Mở Console (F12) để xem log</p>
      <p>Component này chỉ render MỘT lần khi mount (trừ khi parent re-render)</p>
    </div>
  );
}

function BadCounter() {
  // Cố ý dùng biến thường (Tier 1 demo) — không cập nhật UI
  let count = 0;

  function handleClick() {
    /* eslint-disable react-hooks/immutability -- demo biến thường không trigger re-render */
    count += 1;
    console.log("Count:", count);
  }

  return (
    <div style={{ padding: "20px", background: "#fff5f5" }}>
      <h3>❌ Counter &quot;tệ&quot; (biến thường)</h3>
      <p>Bộ đếm: {count}</p>
      <button type="button" onClick={handleClick}>
        Tăng (+1)
      </button>
      <p style={{ color: "red" }}>Console tăng, UI không đổi!</p>
    </div>
  );
}

function GoodCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div style={{ padding: "20px", background: "#f0fff0" }}>
      <h3>✅ Counter &quot;tốt&quot; (useState)</h3>
      <p>Bộ đếm: {count}</p>
      <button type="button" onClick={handleClick}>
        Tăng (+1)
      </button>
    </div>
  );
}

function FlowDemo() {
  console.log("🔄 Component render!");

  const [step, setStep] = useState(1);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Luồng hoạt động</h3>
      <p>Bước hiện tại: {step}</p>
      <button type="button" onClick={() => setStep(step + 1)}>
        Bước tiếp theo →
      </button>
      <button type="button" onClick={() => setStep(1)} style={{ marginLeft: "8px" }}>
        Quay lại đầu
      </button>
      <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}>
        {step === 1 && <p>👋 Bước 1: Xin chào!</p>}
        {step === 2 && <p>📖 Bước 2: Đang học React</p>}
        {step === 3 && <p>🎯 Bước 3: Hiểu useState</p>}
        {step === 4 && <p>🎉 Bước 4: Hoàn thành!</p>}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <section className="tier-section">
        <h2>Bài 1.1 — LifecycleDemo</h2>
        <LifecycleDemo />
      </section>
      <section className="tier-section">
        <h2>Bài 1.2 — Biến thường vs useState</h2>
        <BadCounter />
        <GoodCounter />
      </section>
      <section className="tier-section">
        <h2>Bài 1.3 — FlowDemo</h2>
        <FlowDemo />
      </section>
    </div>
  );
}
