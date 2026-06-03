import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  function addTodo() {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") addTodo();
  }

  function toggleTodo(id) {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.done).length;
  const completedCount = todos.filter((todo) => todo.done).length;

  const placeholder =
    filter === "active"
      ? "Thêm việc chưa xong..."
      : filter === "completed"
        ? "Thêm việc đã hoàn thành..."
        : "Nhập công việc...";

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>📋 Todo List</h1>
      <p style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
        Tổng: {todos.length} công việc
      </p>

      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "4px 0 0 4px",
          }}
        />
        <button
          type="button"
          onClick={addTodo}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
          }}
        >
          Thêm
        </button>
      </div>

      <TodoFilter filter={filter} setFilter={setFilter} />

      {filteredTodos.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
          {todos.length === 0 ? "📝 Chưa có công việc nào" : "Không có công việc phù hợp"}
        </div>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))
      )}

      {todos.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "15px",
            padding: "10px",
            background: "#f9f9f9",
            borderRadius: "4px",
          }}
        >
          <span>{activeCount} việc chưa hoàn thành</span>
          {completedCount > 0 && <span style={{ color: "#666" }}>{completedCount} việc đã xong</span>}
        </div>
      )}
    </div>
  );
}
