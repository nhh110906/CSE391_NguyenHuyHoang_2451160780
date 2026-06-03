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

export default NumberState;