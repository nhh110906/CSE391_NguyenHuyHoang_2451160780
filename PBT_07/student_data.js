// student_data.js

const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// Biến thống kê
let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

// Tổng điểm từng môn
let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

// Tổng TB theo giới tính
let maleTotal = 0;
let femaleTotal = 0;

let maleCount = 0;
let femaleCount = 0;

// Sinh viên cao nhất và thấp nhất
let maxStudent = null;
let minStudent = null;

console.log("| STT | Tên     | TB   | Xếp loại   |");
console.log("|-----|---------|------|-------------|");

for (let i = 0; i < students.length; i++) {

    let student = students[i];

    // Tính điểm trung bình
    let avg =
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3;

    // Làm tròn 1 chữ số thập phân
    avg = Number(avg.toFixed(1));

    // Xếp loại
    let rank = "";

    if (avg >= 8.0) {
        rank = "Giỏi";
        gioi++;
    }
    else if (avg >= 6.5) {
        rank = "Khá";
        kha++;
    }
    else if (avg >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    }
    else {
        rank = "Yếu";
        yeu++;
    }

    // In bảng
    console.log(
        "| " + (i + 1) +
        " | " + student.name +
        " | " + avg +
        " | " + rank + " |"
    );

    // Cộng điểm môn học
    totalMath += student.math;
    totalPhysics += student.physics;
    totalCS += student.cs;

    // Tìm cao nhất
    if (maxStudent === null || avg > maxStudent.avg) {
        maxStudent = {
            name: student.name,
            avg: avg
        };
    }

    // Tìm thấp nhất
    if (minStudent === null || avg < minStudent.avg) {
        minStudent = {
            name: student.name,
            avg: avg
        };
    }

    // Bonus: TB theo giới tính
    if (student.gender === "M") {
        maleTotal += avg;
        maleCount++;
    }
    else if (student.gender === "F") {
        femaleTotal += avg;
        femaleCount++;
    }
}

// Điểm TB từng môn
let avgMath = (totalMath / students.length).toFixed(1);
let avgPhysics = (totalPhysics / students.length).toFixed(1);
let avgCS = (totalCS / students.length).toFixed(1);

// TB theo giới tính
let maleAvg = (maleTotal / maleCount).toFixed(1);
let femaleAvg = (femaleTotal / femaleCount).toFixed(1);

// Kết quả thống kê
console.log("\n--- THỐNG KÊ ---");

console.log("Số SV Giỏi:", gioi);
console.log("Số SV Khá:", kha);
console.log("Số SV Trung bình:", trungBinh);
console.log("Số SV Yếu:", yeu);

console.log("\nSV điểm cao nhất:");
console.log(maxStudent.name + " - " + maxStudent.avg);

console.log("\nSV điểm thấp nhất:");
console.log(minStudent.name + " - " + minStudent.avg);

console.log("\nTB toàn lớp từng môn:");
console.log("Math:", avgMath);
console.log("Physics:", avgPhysics);
console.log("CS:", avgCS);

console.log("\nTB theo giới tính:");
console.log("Nam:", maleAvg);
console.log("Nữ:", femaleAvg);