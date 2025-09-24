/*
Условие:

Есть список блоков (например, карточки задач), каждый с двумя кнопками:
"Вверх"
"Вниз"


Поведение:

При нажатии "Вверх" текущий элемент перемещается выше в списке (если он не первый).
При нажатии "Вниз" — ниже (если не последний).


*/
document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const updateButtonStates = () => {
        const items = taskList.querySelectorAll('.task-item');
        items.forEach((item, index) => {
            const upButton = item.querySelector('.up-btn');
            const downButton = item.querySelector('.down-btn');
            upButton.disabled = (index === 0);
            downButton.disabled = (index === items.length - 1);
        });
    };
    taskList.addEventListener('click', (event) => {
        const target = event.target;
        const currentItem = target.closest('.task-item');
        if (!currentItem) {
            return;
        }
        if (target.classList.contains('up-btn')) {
            const previousItem = currentItem.previousElementSibling;
            if (previousItem) {
                taskList.insertBefore(currentItem, previousItem);
            }
        }
        if (target.classList.contains('down-btn')) {
            const nextItem = currentItem.nextElementSibling;
            if (nextItem) {
                taskList.insertBefore(currentItem, nextItem.nextElementSibling);
            }
        }
                updateButtonStates();
    });
    updateButtonStates();
});