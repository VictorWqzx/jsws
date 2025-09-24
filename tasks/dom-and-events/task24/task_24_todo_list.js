/*
Условие:

Реализуйте интерфейс:
Список дел
Кнопка "Добавить задачу"
Кнопка "Удалить" около каждой задачи


Поведение:

При нажатии на "Добавить" в список добавляется новая задача с текстом вида: Задача #N (номер по счёту).
При нажатии на "Удалить" — удаляется выбранная задача из списка.
Если список пустой, то выводить соответствующее сообщение.

 *
 */
 document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('task-list');
    const emptyListMessage = document.getElementById('empty-list-message');
    let taskCounter = 1;
    const updateEmptyMessageVisibility = () => {
        if (taskList.children.length === 0) {
            emptyListMessage.classList.remove('hidden');
        } else {
            emptyListMessage.classList.add('hidden');
        }
    };
    const addTask = () => {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        const taskText = document.createElement('span');
        taskText.textContent = `Задача #${taskCounter}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
            updateEmptyMessageVisibility();
        });
        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
        taskCounter++;
        updateEmptyMessageVisibility();
    };
    addTaskBtn.addEventListener('click', addTask);
    updateEmptyMessageVisibility();
});

