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

export default LifecycleDemo;