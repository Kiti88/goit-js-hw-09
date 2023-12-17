// Отримання елементів форми
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Перевірка та встановлення значень з локального сховища
const feedbackState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
if (feedbackState.email) {
  emailInput.value = feedbackState.email;
}
if (feedbackState.message) {
  messageInput.value = feedbackState.message;
}

// Прослуховування подій input для збереження в локальне сховище
form.addEventListener('input', function () {
  const currentState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
});

// Прослуховування події submit для очищення сховища та виведення даних у консоль
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const currentState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  // Очищення сховища
  localStorage.removeItem('feedback-form-state');

  // Очищення полів форми
  emailInput.value = '';
  messageInput.value = '';

  // Виведення даних у консоль
  console.log('Feedback Form Data:', currentState);
});