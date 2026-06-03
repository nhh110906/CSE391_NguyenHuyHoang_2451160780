import { useState } from "react";

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

export default GoodCounter;