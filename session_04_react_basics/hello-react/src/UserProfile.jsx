function UserProfile() {
  return (
    <div className="card profile">
      <h1>Hồ sơ cá nhân</h1>
      <img src="https://via.placeholder.com/150" alt="Ảnh đại diện" />
      <table>
        <tbody>
          <tr>
            <td>Họ tên:</td>
            <td>Nguyễn Huy Hoàng</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>hoang@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserProfile;
