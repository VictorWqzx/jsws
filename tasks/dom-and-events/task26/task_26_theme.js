/*
Условие:

Создайте кнопку "Сменить тему":
При нажатии изменяется тема сайта:
Добавляется класс dark к <body> (или убирается — в зависимости от текущей темы).
Сохраняется текущая тема в localStorage (theme: 'light' | 'dark').
При загрузке страницы проверяется сохраненная тема и применяется нужный класс.


Поведение:

Кнопка может менять текст: "Тёмная тема" / "Светлая тема"
Фон и текст сайта должны менять стили в зависимости от класса (можно добавить простые CSS-стили для светлой и тёмной темы)

*/
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.checked = true;
    }
    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
});
