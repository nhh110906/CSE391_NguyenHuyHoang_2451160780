# Phần A: Kiểm tra đọc hiểu
### Câu A1:
1. type="email" → Ô nhập text dạng email, tự kiểm tra có ký tự @ và định dạng email hợp lệ → Dùng cho đăng ký tài khoản, nhập email nhận đơn hàng

2. type="password" → Ô nhập mật khẩu, ký tự bị ẩn (••••) → Dùng cho đăng nhập, tạo tài khoản

3. type="text" → Ô nhập văn bản bình thường, không validation đặc biệt → Dùng cho tên khách hàng, địa chỉ nhận hàng

4. type="number" → Ô nhập số, có thể giới hạn min/max → Dùng cho số lượng sản phẩm trong giỏ hàng

5. type="tel" → Ô nhập số điện thoại, không bắt buộc format nhưng hỗ trợ mobile keypad → Dùng cho nhập số liên hệ giao hàng

6. type="date" → Ô chọn ngày dạng calendar → Dùng cho chọn ngày giao hàng hoặc đặt lịch giao

7. type="checkbox" → Ô chọn dạng tick (có/không), không validation bắt buộc → Dùng cho chọn đồng ý điều khoản hoặc chọn nhiều sản phẩm phụ

8. type="radio" → Ô chọn một trong nhiều lựa chọn → Dùng cho chọn phương thức thanh toán (COD, thẻ, ví điện tử)

9. type="file" → Cho phép upload file từ máy tính → Dùng cho upload ảnh sản phẩm hoặc ảnh xác nhận thanh toán

10. type="search" → Ô nhập tìm kiếm, có thể có nút xóa nhanh → Dùng cho thanh tìm kiếm sản phẩm trên trang E-Commerce

### Câu A2:
```
<!-- Trường hợp 1 -->
<input type="text" required value="">   <!-- User để trống -->
```
Trường hợp này sẽ không submit được vì required bắt buộc phải nhập ô dữ liệu. Ô trống nên trình duyệt chặn submit và báo “Please fill out this field”.  
![TH1](./screenshots/inputTH1.png)

```
<!-- Trường hợp 2 -->
<input type="email" value="abc">        <!-- User gõ "abc" -->
```
Trường hợp này không submit được vì type là email nên phải có định dạng của email
![TH2](./screenshots/inputTH2.png)
```
<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->
```
Không submit được vì giá trị nhập vào là 15 lớn hơn max=10
![TH3](./screenshots/inputTH3.png)
```
<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->
```
Không submit được vì pattern yêu cầu nhập đủ 10 kí tự và kí tự là số từ 0->9  
![TH4](./screenshots/inputTH4.png)
```
<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">  <!-- User gõ "123" -->

```
Không submit được vì yêu cầu tối thiểu 8 kí tự
![TH5](./screenshots/inputTH5.png)