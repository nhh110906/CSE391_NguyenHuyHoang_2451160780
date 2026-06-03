import { useState } from "react";

function ListBasics() {
  const [fruits] = useState(["Táo", "Chuối", "Cam", "Nho"]);
  const [students] = useState([
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 },
  ]);
  const avgAge = (students.reduce((s, st) => s + st.age, 0) / students.length).toFixed(1);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Danh sách trái cây</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h3>Sinh viên (tuổi ≥ 20 màu xanh)</h3>
      {students.map((student, index) => (
        <div
          key={student.id}
          style={{
            padding: "8px",
            margin: "5px 0",
            background: "#f9f9f9",
            color: student.age >= 20 ? "green" : undefined,
          }}
        >
          {index + 1}. {student.name} — {student.age} tuổi
        </div>
      ))}
      <p>Tuổi trung bình: {avgAge}</p>
    </div>
  );
}

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

function DeleteItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Minh" },
    { id: 2, name: "An" },
    { id: 3, name: "Linh" },
  ]);
  const [deletedMsg, setDeletedMsg] = useState("");
  const [undoItem, setUndoItem] = useState(null);

  function handleDelete(id) {
    const item = items.find((i) => i.id === id);
    if (!window.confirm(`Xóa ${item?.name}?`)) return;
    setItems(items.filter((i) => i.id !== id));
    setDeletedMsg(`Đã xóa ${item.name}`);
    setUndoItem(item);
    setTimeout(() => {
      setDeletedMsg("");
      setUndoItem(null);
    }, 5000);
  }

  function handleUndo() {
    if (undoItem) {
      setItems([...items, undoItem]);
      setUndoItem(null);
      setDeletedMsg("");
    }
  }

  function handleDeleteAll() {
    if (window.confirm("Xóa tất cả?")) setItems([]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Xóa sinh viên</h3>
      {deletedMsg && (
        <p>
          {deletedMsg}
          {undoItem && (
            <button type="button" onClick={handleUndo} style={{ marginLeft: "8px" }}>
              Hoàn tác
            </button>
          )}
        </p>
      )}
      {items.length > 0 && (
        <button type="button" onClick={handleDeleteAll} style={{ marginBottom: "10px", background: "#e74c3c", color: "#fff", border: "none", padding: "8px" }}>
          🗑 Xóa tất cả
        </button>
      )}
      {items.length === 0 ? (
        <p style={{ color: "#999" }}>Danh sách trống</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              margin: "5px 0",
              background: "#f9f9f9",
            }}
          >
            <span>{item.name}</span>
            <button type="button" onClick={() => handleDelete(item.id)} style={{ background: "#e74c3c", color: "#fff", border: "none", padding: "4px 8px" }}>
              Xóa
            </button>
          </div>
        ))
      )}
    </div>
  );
}

function UpdateItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [savedMsg, setSavedMsg] = useState("");

  function startEdit(item) {
    setEditingId(item.id);
    setEditName(item.name);
    setEditAge(String(item.age));
  }

  function saveEdit() {
    if (editName.trim() === "" || editAge === "") return;
    setItems(
      items.map((item) =>
        item.id === editingId ? { ...item, name: editName.trim(), age: parseInt(editAge, 10) } : item
      )
    );
    setEditingId(null);
    setSavedMsg("Đã lưu!");
    setTimeout(() => setSavedMsg(""), 2000);
  }

  function cancelEdit() {
    setEditingId(null);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") saveEdit();
    if (event.key === "Escape") cancelEdit();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Sửa thông tin</h3>
      {savedMsg && <p style={{ color: "green" }}>{savedMsg}</p>}
      {items.map((item) => (
        <div key={item.id} style={{ padding: "10px", margin: "5px 0", background: editingId === item.id ? "#fffde7" : "#f9f9f9" }}>
          {editingId === item.id ? (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <input value={editName} onChange={(e) => setEditName(e.target.value)} onKeyDown={handleKeyDown} autoFocus style={{ padding: "4px", border: "2px solid #3498db" }} />
              <input type="number" value={editAge} onChange={(e) => setEditAge(e.target.value)} onKeyDown={handleKeyDown} style={{ padding: "4px", width: "60px" }} />
              <button type="button" onClick={saveEdit} style={{ background: "#27ae60", color: "#fff", border: "none", padding: "4px 8px" }}>
                ✓ Lưu
              </button>
              <button type="button" onClick={cancelEdit} style={{ background: "#95a5a6", color: "#fff", border: "none", padding: "4px 8px" }}>
                ✕ Hủy
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                {item.name} — {item.age} tuổi
              </span>
              <button type="button" onClick={() => startEdit(item)} style={{ background: "#3498db", color: "#fff", border: "none", padding: "4px 8px" }}>
                ✏️ Sửa
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <section className="tier-section">
        <h2>Bài 6.1 — ListBasics</h2>
        <ListBasics />
      </section>
      <section className="tier-section">
        <h2>Bài 6.2 — CreateItem</h2>
        <CreateItem />
      </section>
      <section className="tier-section">
        <h2>Bài 6.3 — DeleteItem</h2>
        <DeleteItem />
      </section>
      <section className="tier-section">
        <h2>Bài 6.4 — UpdateItem</h2>
        <UpdateItem />
      </section>
    </div>
  );
}
