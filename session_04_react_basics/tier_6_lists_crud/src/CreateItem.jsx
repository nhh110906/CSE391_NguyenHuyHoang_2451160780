import { useState } from "react";

function CreateItem() {
  const [items, setItems] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
  ]);
  const [newName, setNewName] = useState("");
  const [message, setMessage] = useState("");

  function handleAdd() {
    if (newName.trim() === "") return;
    setItems([...items, { id: Date.now(), name: newName.trim() }]);
    setNewName("");
    setMessage("Đã thêm thành công!");
    setTimeout(() => setMessage(""), 2000);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") handleAdd();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Thêm môn học</h3>
      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nhập tên môn học..."
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button type="button" onClick={handleAdd}>
        ➕ Thêm
      </button>
      {message && <p style={{ color: "green" }}>{message}</p>}
      <h4>Danh sách ({items.length} môn):</h4>
      {items.map((item) => (
        <div key={item.id} style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default CreateItem;