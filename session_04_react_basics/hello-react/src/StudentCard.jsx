function StudentCard() {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/120" alt="Avatar" />
      <h2>Nguyễn Huy Hoàng</h2>
      <p>Sinh viên năm 3</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="email@example.com" />
    </div>
  );
}

export default StudentCard;
