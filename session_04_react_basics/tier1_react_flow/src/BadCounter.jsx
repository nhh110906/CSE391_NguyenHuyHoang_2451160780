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

export default BadCounter;