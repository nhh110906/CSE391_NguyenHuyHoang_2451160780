import { useState } from "react";

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

export default DeleteItem;