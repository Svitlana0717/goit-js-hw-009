const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// 1. Завантаження даних з localStorage при старті
loadFormData();

// 2. Слухач події input
form.addEventListener('input', event => {
  const { name, value } = event.target;
  
  // Оновлюємо тільки поля email або message
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// 3. Відправлення форми
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log({ email, message });

  // Очищення
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
});

// 4. Функція для завантаження збережених даних
function loadFormData() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;

    const parsedData = JSON.parse(savedData);

    if (parsedData.email) {
      form.elements.email.value = parsedData.email;
      formData.email = parsedData.email;
    }

    if (parsedData.message) {
      form.elements.message.value = parsedData.message;
      formData.message = parsedData.message;
    }
  } catch (error) {
    console.error('Error loading form data:', error);
  }
}
