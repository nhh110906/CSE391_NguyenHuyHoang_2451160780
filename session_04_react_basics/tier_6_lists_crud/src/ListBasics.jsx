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

export default ListBasics;