function ListRendering() {
  const fruits = ["Táo", "Chuối", "Cam", "Nho"];
  const students = [
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 },
  ];
  const products = [
    { id: 1, name: "Laptop", price: 25000000 },
    { id: 2, name: "Chuột", price: 500000 },
    { id: 3, name: "Bàn phím", price: 1200000 },
    { id: 4, name: "Màn hình", price: 4500000 },
    { id: 5, name: "Tai nghe", price: 800000 },
  ];
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Danh sách trái cây</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h3>Sinh viên</h3>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} style={{ color: student.age >= 20 ? "green" : undefined }}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Sản phẩm (giá &gt; 1 triệu màu đỏ)</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ color: product.price > 1000000 ? "red" : undefined }}>
            {product.name}: {product.price.toLocaleString("vi-VN")}đ
          </li>
        ))}
      </ul>
      <p>
        <strong>Tổng giá:</strong> {totalPrice.toLocaleString("vi-VN")}đ
      </p>
    </div>
  );
}

export default ListRendering;