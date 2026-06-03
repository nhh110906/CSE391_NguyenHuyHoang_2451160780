function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Chào buổi sáng";
  if (hour < 18) return "Chào buổi chiều";
  return "Chào buổi tối";
}

function SimpleVariables() {
  const ten = "Nguyễn Huy Hoàng";
  const tuoi = 20;
  const queQuan = "Hà Nội";
  const canNang = 65;
  const chieuCao = 1.7;
  const bmi = (canNang / (chieuCao * chieuCao)).toFixed(1);
  const laSinhVien = true;
  const monHoc = ["HTML", "CSS", "JS", "React"];

  return (
    <div style={{ padding: "20px" }}>
      <h3>Biến trong JSX</h3>
      <p>
        {getGreeting()}, {ten}!
      </p>
      <p>Tuổi: {tuoi} — Quê quán: {queQuan}</p>
      <p>Năm sau: {tuoi + 1}</p>
      <p>Sinh viên: {laSinhVien ? "Có" : "Không"}</p>
      <p>
        BMI: {bmi} ({bmi < 18.5 ? "Gầy" : bmi < 25 ? "Bình thường" : "Thừa cân"})
      </p>
      <p>Môn học: {monHoc.join(", ")}</p>
    </div>
  );
}

export default SimpleVariables;