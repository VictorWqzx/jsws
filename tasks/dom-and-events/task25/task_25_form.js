/*
Условие:

Создайте HTML-форму:
Поле "Имя"
Поле "Email"
Текстовое поле "Сообщение"
Кнопка "Отправить"


Поведение:

При нажатии на кнопку "Отправить":
Проверяется, что все поля заполнены.
Если какое-то поле пустое — вывести alert или текстовое сообщение под формой с ошибкой.
Если все поля заполнены — вывести любое сообщение и очистить поля.

*/
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const feedbackMessage = document.getElementById('feedback-message');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();
        feedbackMessage.textContent = '';
        feedbackMessage.className = '';
        if (!nameValue || !emailValue || !messageValue) {
            feedbackMessage.textContent = 'Пожалуйста, заполните все поля.';
            feedbackMessage.classList.add('error');
        } else {
            feedbackMessage.textContent = 'Сообщение успешно отправлено!';
            feedbackMessage.classList.add('success');
            contactForm.reset();
            setTimeout(() => {
                feedbackMessage.textContent = '';
                feedbackMessage.className = '';
            }, 3000);
        }
    });
});
