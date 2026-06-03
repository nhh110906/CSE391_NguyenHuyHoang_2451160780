const STORAGE_KEY = 'qlcv';
let tasks = [];
let editingId = null;
let msgTimer = null;

const $ = (id) => document.getElementById(id);
const el = {
  btnOpenForm: $('btnOpenForm'),
  btnCancel: $('btnCancel'),
  modalOverlay: $('modalOverlay'),
  modalTitle: $('modalTitle'),
  form: $('taskForm'),
  title: $('inputTitle'),
  description: $('inputDesc'),
  dueDate: $('inputDue'),
  priority: $('inputPriority'),
  errTitle: $('errTitle'),
  errDesc: $('errDesc'),
  errDue: $('errDue'),
  errPriority: $('errPriority'),
  tbody: $('taskTableBody'),
  statTotal: $('statTotal'),
  statDone: $('statDone'),
  statPending: $('statPending'),
  messageArea: $('messageArea'),
};

function load() {
  tasks = [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) return;
  try {
    const data = JSON.parse(raw);
    if (Array.isArray(data)) tasks = data;
  } catch (e) {
    tasks = [];
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
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
  const done = tasks.filter((t) => t.completed).length;
  el.tbody.innerHTML =
    tasks.length === 0
      ? '<tr><td colspan="6" class="border px-3 py-4 text-center text-gray-600">Chưa có công việc nào</td></tr>'
      : tasks
          .map((t) => {
            const rowClass = t.completed ? 'bg-gray-50 text-gray-500' : '';
            const titleClass = t.completed ? 'line-through' : 'font-medium';
            return `<tr class="${rowClass}"><td class="border px-3 py-2 ${titleClass}">${t.title}</td><td class="border px-3 py-2 max-w-xs truncate">${t.description || ''}</td><td class="border px-3 py-2">${t.dueDate}</td><td class="border px-3 py-2">${t.priority}</td><td class="border px-3 py-2 text-center"><input type="checkbox" class="task-done-cb h-4 w-4" data-id="${t.id}" ${t.completed ? 'checked' : ''}></td><td class="border px-3 py-2 text-right"><button type="button" class="btn-edit-row mr-2 rounded border border-amber-300 bg-amber-100 px-2 py-1 text-xs text-amber-900" data-id="${t.id}">Sửa</button><button type="button" class="btn-delete-row rounded border border-red-300 bg-red-100 px-2 py-1 text-xs text-red-800" data-id="${t.id}">Xóa</button></td></tr>`;
          })
          .join('');
  el.statTotal.textContent = String(tasks.length);
  el.statDone.textContent = String(done);
  el.statPending.textContent = String(tasks.length - done);
}

const fieldMap = {
  title: { input: 'title', err: 'errTitle' },
  description: { input: 'description', err: 'errDesc' },
  dueDate: { input: 'dueDate', err: 'errDue' },
  priority: { input: 'priority', err: 'errPriority' },
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
    title: el.title.value.trim(),
    description: el.description.value.trim(),
    dueDate: el.dueDate.value.trim(),
    priority: el.priority.value.trim(),
  };
}

function validateForm(v) {
  clearFieldErrors();
  let valid = true;

  if (!v.title) {
    setFieldError('title', 'Tiêu đề không được để trống.');
    valid = false;
  } else if (v.title.length < 3) {
    setFieldError('title', 'Tiêu đề phải có ít nhất 3 ký tự.');
    valid = false;
  } else if (v.title.length > 100) {
    setFieldError('title', 'Tiêu đề không được quá 100 ký tự.');
    valid = false;
  }

  if (v.description && v.description.length > 200) {
    setFieldError('description', 'Mô tả không được quá 200 ký tự.');
    valid = false;
  }

  if (!v.dueDate) {
    setFieldError('dueDate', 'Hạn hoàn thành không được để trống.');
    valid = false;
  } else {
    const due = new Date(v.dueDate);
    if (Number.isNaN(due.getTime())) {
      setFieldError('dueDate', 'Hạn hoàn thành không hợp lệ.');
      valid = false;
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (due < today) {
        setFieldError('dueDate', 'Hạn không được là ngày trong quá khứ.');
        valid = false;
      }
    }
  }

  if (!v.priority) {
    setFieldError('priority', 'Vui lòng chọn mức ưu tiên.');
    valid = false;
  } else if (!['Thấp', 'Trung bình', 'Cao'].includes(v.priority)) {
    setFieldError('priority', 'Mức ưu tiên không hợp lệ.');
    valid = false;
  }

  return valid;
}

function openAdd() {
  editingId = null;
  el.form.reset();
  clearFieldErrors();
  el.modalTitle.textContent = 'Thêm công việc';
  el.modalOverlay.classList.remove('hidden');
  el.title.focus();
}

function openEdit(id) {
  const t = tasks.find((x) => x.id === id);
  if (!t) return showMessage('Không tìm thấy công việc.', true);
  editingId = id;
  clearFieldErrors();
  el.modalTitle.textContent = 'Sửa công việc';
  el.title.value = t.title;
  el.description.value = t.description || '';
  el.dueDate.value = t.dueDate;
  el.priority.value = t.priority;
  el.modalOverlay.classList.remove('hidden');
}

function closeModal() {
  el.modalOverlay.classList.add('hidden');
  editingId = null;
  el.form.reset();
  clearFieldErrors();
}

function onSubmit(e) {
  e.preventDefault();
  const v = getFormValues();
  if (!validateForm(v)) {
    showMessage('Vui lòng sửa các lỗi trong form.', true);
    return;
  }

  if (editingId) {
    const i = tasks.findIndex((x) => x.id === editingId);
    if (i < 0) return showMessage('Không tìm thấy bản ghi để cập nhật.', true);
    tasks[i] = { ...tasks[i], ...v };
    showMessage('Đã cập nhật công việc.');
  } else {
    tasks.push({
      id: String(Date.now()),
      ...v,
      completed: false,
    });
    showMessage('Đã thêm công việc.');
  }
  save();
  render();
  closeModal();
}

function onTableClick(e) {
  const del = e.target.closest('.btn-delete-row');
  if (del) {
    const id = del.dataset.id;
    if (!id || !confirm('Bạn có chắc muốn xóa công việc này?')) return;
    tasks = tasks.filter((x) => x.id !== id);
    save();
    render();
    showMessage('Đã xóa công việc.');
    return;
  }
  const ed = e.target.closest('.btn-edit-row');
  if (ed?.dataset.id) openEdit(ed.dataset.id);
}

function onTableChange(e) {
  if (!e.target.classList.contains('task-done-cb')) return;
  const id = e.target.dataset.id;
  const t = tasks.find((x) => x.id === id);
  if (!t) return;
  t.completed = e.target.checked;
  save();
  render();
  showMessage(t.completed ? 'Đã đánh dấu hoàn thành.' : 'Đã đánh dấu chưa hoàn thành.');
}

load();
render();
el.btnOpenForm.addEventListener('click', openAdd);
el.btnCancel.addEventListener('click', closeModal);
el.form.addEventListener('submit', onSubmit);
el.form.addEventListener('input', () => validateForm(getFormValues()));
el.form.addEventListener('change', () => validateForm(getFormValues()));
el.tbody.addEventListener('click', onTableClick);
el.tbody.addEventListener('change', onTableChange);
el.modalOverlay.addEventListener('click', (e) => {
  if (e.target === el.modalOverlay) closeModal();
});
