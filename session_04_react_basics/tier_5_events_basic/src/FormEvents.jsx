import { useState } from "react";

function FormEvents() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    const next = { ...formData, [name]: value };
    setFormData(next);
    const nextErrors = { ...errors };
    if (name === "email") {
      nextErrors.email = value && !value.includes("@") ? "Email phải có @" : "";
    }
    if (name === "confirmPassword") {
      nextErrors.confirmPassword =
        value && value !== next.password ? "Mật khẩu không khớp" : "";
    }
    setErrors(nextErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Bắt buộc";
    if (!formData.email.includes("@")) newErrors.email = "Email phải có @";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không khớp";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setFormData({ name: "", email: "", password: "", confirmPassword: "", message: "" });
    setSubmitted(false);
    setErrors({});
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Form Events</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Tên: <input name="name" value={formData.name} onChange={handleChange} required />
            </label>
            {errors.name && <span style={{ color: "red" }}> {errors.name}</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Email: <input name="email" type="email" value={formData.email} onChange={handleChange} required />
            </label>
            {errors.email && <span style={{ color: "red" }}> {errors.email}</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Mật khẩu: <input name="password" type="password" value={formData.password} onChange={handleChange} />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Xác nhận:{" "}
              <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
            </label>
            {errors.confirmPassword && <span style={{ color: "red" }}> {errors.confirmPassword}</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Tin nhắn:{" "}
              <textarea name="message" value={formData.message} onChange={handleChange} rows={3} style={{ width: "100%" }} />
            </label>
          </div>
          <button type="submit">Gửi</button>
          <button type="button" onClick={handleReset} style={{ marginLeft: "8px" }}>
            Xóa
          </button>
        </form>
      ) : (
        <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px" }}>
          <h4>✅ Đã gửi!</h4>
          <p>Tên: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Tin nhắn: {formData.message}</p>
          <button type="button" onClick={handleReset}>
            Gửi lại
          </button>
        </div>
      )}
    </div>
  );
}

export default FormEvents;
