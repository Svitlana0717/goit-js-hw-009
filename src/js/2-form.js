const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 1. Створюємо об'єкт з початковими значеннями
let formData = {
  email: '',
  message: '',
};

// 2. При завантаженні сторінки — перевіряємо localStorage
loadFormData();

// 3. Відстежуємо події input
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4. Відправлення форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Перевірка на заповнення полів
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  // Виводимо дані у консоль
  console.log(formData);

  // Очищаємо все
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});

// 5. Функція для заповнення форми з localStorage
function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
}
