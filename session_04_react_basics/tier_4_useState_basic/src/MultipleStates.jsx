import { useState } from "react";

function MultipleStates() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ageNum = Number(age);
  const ageValid = age === "" || (ageNum > 0 && ageNum < 100);

  function handleSubmit() {
    if (name.trim() === "" || age === "" || !ageValid) {
      alert("Vui lòng nhập đầy đủ thông tin hợp lệ (tuổi 1–99)!");
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setName("");
    setAge("");
    setEmail("");
    setIsStudent(false);
    setSubmitted(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Form đăng ký</h3>
      {!submitted ? (
        <div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Tên: <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            {name.trim() && <p>Xin chào {name}!</p>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Tuổi:{" "}
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            {!ageValid && age !== "" && <span style={{ color: "red" }}> Tuổi phải từ 1–99</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Email: <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} />
              Là sinh viên
            </label>
          </div>
          <button type="button" onClick={handleSubmit}>
            Đăng ký
          </button>
        </div>
      ) : (
        <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px" }}>
          <h4>✅ Đăng ký thành công!</h4>
          <p>Tên: {name}</p>
          <p>Tuổi: {age}</p>
          <p>Email: {email || "—"}</p>
          <p>Sinh viên: {isStudent ? "Có" : "Không"}</p>
          <button type="button" onClick={handleReset}>
            Đăng ký lại
          </button>
        </div>
      )}
    </div>
  );
}

export default MultipleStates;