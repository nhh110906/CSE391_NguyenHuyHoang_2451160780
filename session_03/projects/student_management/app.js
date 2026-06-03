const STORAGE_KEY = 'qlsv';
let students = [];
let editingId = null;
let msgTimer = null;

const $ = (id) => document.getElementById(id);
const el = {
  btnOpenForm: $('btnOpenForm'),
  btnCancel: $('btnCancel'),
  modalOverlay: $('modalOverlay'),
  modalTitle: $('modalTitle'),
  form: $('studentForm'),
  maSV: $('inputMaSV'),
  hoTen: $('inputHoTen'),
  ngaySinh: $('inputNgaySinh'),
  lopHoc: $('inputLopHoc'),
  diemTB: $('inputDiemTB'),
  email: $('inputEmail'),
  errMaSV: $('errMaSV'),
  errHoTen: $('errHoTen'),
  errNgaySinh: $('errNgaySinh'),
  errLopHoc: $('errLopHoc'),
  errDiemTB: $('errDiemTB'),
  errEmail: $('errEmail'),
  tbody: $('studentTableBody'),
  statTotal: $('statTotal'),
  statAverage: $('statAverage'),
  messageArea: $('messageArea'),
};

function load() {
  students = [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) {
    return;
  }
  try {
    const data = JSON.parse(raw);
    if (Array.isArray(data)) {
      students = data;
    }
  } catch (e) {
    students = [];
  }
}

function save() {
  const text = JSON.stringify(students);
  localStorage.setItem(STORAGE_KEY, text);
}

function showMessage(text, err) {
  if (msgTimer) clearTimeout(msgTimer);
  el.messageArea.textContent = text;
  el.messageArea.className = err
    ? 'mb-4 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-800'
    : 'mb-4 rounded border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900';
  el.messageArea.classList.remove('hidden');
  msgTimer = setTimeout(() => el.messageArea.classList.add('hidden'), 4000);
}

function render() {
  el.tbody.innerHTML =
    students.length === 0
      ? '<tr><td colspan="7" class="border px-3 py-4 text-center text-gray-600">Chưa có sinh viên nào</td></tr>'
      : students
          .map(
            (s) =>
              `<tr><td class="border px-3 py-2 font-medium">${s.maSV}</td><td class="border px-3 py-2">${s.hoTen}</td><td class="border px-3 py-2">${s.ngaySinh}</td><td class="border px-3 py-2">${s.lopHoc}</td><td class="border px-3 py-2">${s.diemTB ?? ''}</td><td class="border px-3 py-2 max-w-xs truncate">${s.email || ''}</td><td class="border px-3 py-2 text-right"><button type="button" class="btn-edit-row mr-2 rounded border border-amber-300 bg-amber-100 px-2 py-1 text-xs text-amber-900" data-id="${s.maSV}">Sửa</button><button type="button" class="btn-delete-row rounded border border-red-300 bg-red-100 px-2 py-1 text-xs text-red-800" data-id="${s.maSV}">Xóa</button></td></tr>`
          )
          .join('');
  el.statTotal.textContent = String(students.length);
  el.statAverage.textContent =
    students.length === 0
      ? '—'
      : (students.reduce((a, s) => a + Number(s.diemTB || 0), 0) / students.length).toFixed(1);
}

const fieldMap = {
  maSV: { input: 'maSV', err: 'errMaSV' },
  hoTen: { input: 'hoTen', err: 'errHoTen' },
  ngaySinh: { input: 'ngaySinh', err: 'errNgaySinh' },
  lopHoc: { input: 'lopHoc', err: 'errLopHoc' },
  diemTB: { input: 'diemTB', err: 'errDiemTB' },
  email: { input: 'email', err: 'errEmail' },
};

function setFieldError(name, msg) {
  const f = fieldMap[name];
  const input = el[f.input];
  const errEl = el[f.err];
  if (msg) {
    errEl.textContent = msg;
    errEl.classList.remove('hidden');
    input.classList.add('border-red-500');
  } else {
    errEl.textContent = '';
    errEl.classList.add('hidden');
    input.classList.remove('border-red-500');
  }
}

function clearFieldErrors() {
  Object.keys(fieldMap).forEach((name) => setFieldError(name, ''));
}

function getFormValues() {
  return {
    maSV: el.maSV.value.trim(),
    hoTen: el.hoTen.value.trim(),
    ngaySinh: el.ngaySinh.value.trim(),
    lopHoc: el.lopHoc.value.trim(),
    diemTB: el.diemTB.value.trim(),
    email: el.email.value.trim(),
  };
}

function validateForm(v) {
  clearFieldErrors();
  let valid = true;

  if (!v.maSV) {
    setFieldError('maSV', 'Mã sinh viên không được để trống.');
    valid = false;
  } else if (!/^[A-Za-z0-9]{3,10}$/.test(v.maSV)) {
    setFieldError('maSV', 'Mã SV gồm 3-10 ký tự chữ hoặc số.');
    valid = false;
  } else if (!editingId && students.some((x) => x.maSV === v.maSV)) {
    setFieldError('maSV', 'Mã sinh viên đã tồn tại.');
    valid = false;
  }

  if (!v.hoTen) {
    setFieldError('hoTen', 'Họ và tên không được để trống.');
    valid = false;
  } else if (v.hoTen.length < 2) {
    setFieldError('hoTen', 'Họ và tên phải có ít nhất 2 ký tự.');
    valid = false;
  }

  if (!v.ngaySinh) {
    setFieldError('ngaySinh', 'Ngày sinh không được để trống.');
    valid = false;
  } else {
    const birth = new Date(v.ngaySinh);
    if (Number.isNaN(birth.getTime())) {
      setFieldError('ngaySinh', 'Ngày sinh không hợp lệ.');
      valid = false;
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (birth >= today) {
        setFieldError('ngaySinh', 'Ngày sinh phải trước ngày hiện tại.');
        valid = false;
      }
    }
  }

  if (!v.lopHoc) {
    setFieldError('lopHoc', 'Vui lòng chọn lớp học.');
    valid = false;
  }

  if (!v.diemTB) {
    setFieldError('diemTB', 'Điểm trung bình không được để trống.');
    valid = false;
  } else {
    const d = Number(v.diemTB);
    if (Number.isNaN(d)) {
      setFieldError('diemTB', 'Điểm trung bình phải là số.');
      valid = false;
    } else if (d < 0 || d > 10) {
      setFieldError('diemTB', 'Điểm trung bình trong khoảng 0-10.');
      valid = false;
    }
  }

  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
    setFieldError('email', 'Email không đúng định dạng.');
    valid = false;
  }

  return valid;
}

function openAdd() {
  editingId = null;
  el.form.reset();
  clearFieldErrors();
  el.modalTitle.textContent = 'Thêm sinh viên';
  el.maSV.disabled = false;
  el.modalOverlay.classList.remove('hidden');
  el.maSV.focus();
}

function openEdit(maSV) {
  const s = students.find((x) => x.maSV === maSV);
  if (!s) return showMessage('Không tìm thấy sinh viên.', true);
  editingId = maSV;
  clearFieldErrors();
  el.modalTitle.textContent = 'Sửa sinh viên';
  el.maSV.value = s.maSV;
  el.hoTen.value = s.hoTen;
  el.ngaySinh.value = s.ngaySinh;
  el.lopHoc.value = s.lopHoc;
  el.diemTB.value = s.diemTB ?? '';
  el.email.value = s.email || '';
  el.maSV.disabled = true;
  el.modalOverlay.classList.remove('hidden');
}

function closeModal() {
  el.modalOverlay.classList.add('hidden');
  editingId = null;
  el.form.reset();
  el.maSV.disabled = false;
  clearFieldErrors();
}

function onSubmit(e) {
  e.preventDefault();
  const v = getFormValues();
  if (!validateForm(v)) {
    showMessage('Vui lòng sửa các lỗi trong form.', true);
    return;
  }
  const row = { ...v, diemTB: Number(v.diemTB) };
  if (editingId) {
    const i = students.findIndex((x) => x.maSV === editingId);
    if (i < 0) return showMessage('Không tìm thấy bản ghi để cập nhật.', true);
    students[i] = row;
    showMessage('Đã cập nhật sinh viên.');
  } else {
    students.push(row);
    showMessage('Đã thêm sinh viên.');
  }
  save();
  render();
  closeModal();
}

const inputToField = {
  inputMaSV: 'maSV',
  inputHoTen: 'hoTen',
  inputNgaySinh: 'ngaySinh',
  inputLopHoc: 'lopHoc',
  inputDiemTB: 'diemTB',
  inputEmail: 'email',
};

function onFieldInput(e) {
  if (!inputToField[e.target.id]) return;
  validateForm(getFormValues());
}

function onTableClick(e) {
  const del = e.target.closest('.btn-delete-row');
  if (del) {
    const id = del.dataset.id;
    if (!id || !confirm('Bạn có chắc muốn xóa sinh viên này?')) return;
    students = students.filter((x) => x.maSV !== id);
    save();
    render();
    showMessage('Đã xóa sinh viên.');
    return;
  }
  const ed = e.target.closest('.btn-edit-row');
  if (ed?.dataset.id) openEdit(ed.dataset.id);
}

load();
render();
el.btnOpenForm.addEventListener('click', openAdd);
el.btnCancel.addEventListener('click', closeModal);
el.form.addEventListener('submit', onSubmit);
el.form.addEventListener('input', onFieldInput);
el.form.addEventListener('change', onFieldInput);
el.tbody.addEventListener('click', onTableClick);
el.modalOverlay.addEventListener('click', (e) => {
  if (e.target === el.modalOverlay) closeModal();
});
