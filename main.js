const inputForm = document.querySelector('#addInput');
const todoItems = document.querySelector('.todo-items');
const addButton = document.querySelector('#addBtn');

inputForm.addEventListener('keydown', addTask);
addButton.addEventListener('click', addTaskFromButton);

const initTodoList = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let taskValue = JSON.parse(localStorage.getItem(key));

        const newTodo = document.createElement('div');
        newTodo.classList.add('todo-item');

        newTodo.innerHTML = `
            
            <div class="item-content">
                <button class="btn_completed"></button>
                <span class="task">${
                    taskValue == 0 ? (taskValue = null) : taskValue
                }</span>
            </div>

            <img class="btn_delete" src="./img/trash-2.svg" alt="delete task" />
            
        `;

        todoItems.appendChild(newTodo);
        inputForm.value = '';

        // Adding eventListener to new task
        newTodo
            .querySelector('.btn_completed')
            .addEventListener('click', toggleTaskCompleted);

        newTodo
            .querySelector('.btn_delete')
            .addEventListener('click', deleteTask);
    }
};

function addTask(event) {
    if (event.key === 'Enter') {
        const inputValue = inputForm.value;
        const newTodo = document.createElement('div');
        newTodo.classList.add('todo-item');

        newTodo.innerHTML = `
            
            <div class="item-content">
                <button class="btn_completed"></button>
                <span class="task">${inputValue}</span>
            </div>

            <img class="btn_delete" src="./img/trash-2.svg" alt="delete task" />
            
        `;

        todoItems.appendChild(newTodo);
        inputForm.value = '';

        // Adding eventListener to new task
        newTodo
            .querySelector('.btn_completed')
            .addEventListener('click', toggleTaskCompleted);

        newTodo
            .querySelector('.btn_delete')
            .addEventListener('click', deleteTask);

        localStorage.setItem(inputValue, JSON.stringify(inputValue));
    }
}

function addTaskFromButton() {
    const inputValue = inputForm.value;
    const newTodo = document.createElement('div');
    newTodo.classList.add('todo-item');

    newTodo.innerHTML = `
            
            <div class="item-content">
                <button class="btn_completed"></button>
                <span class="task">${inputValue}</span>
            </div>
            
            <img class="btn_delete" src="./img/trash-2.svg" alt="delete task" />
            
        `;

    todoItems.appendChild(newTodo);
    inputForm.value = '';

    // Adding eventListener to new task
    newTodo
        .querySelector('.btn_completed')
        .addEventListener('click', toggleTaskCompleted);

    newTodo.querySelector('.btn_delete').addEventListener('click', deleteTask);

    localStorage.setItem(inputValue, JSON.stringify(inputValue));
}

function toggleTaskCompleted(event) {
    const checkButton = event.target;
    const task = checkButton.nextElementSibling;

    checkButton.classList.toggle('checked');
    task.classList.toggle('task_done');
}

function deleteTask(event) {
    const deleteButton = event.target;
    const taskKey = deleteButton.parentNode.querySelector('.task').innerHTML;

    // Remove TASK from the list and localStorage
    deleteButton.parentNode.remove();
    localStorage.removeItem(taskKey);
}

// Check the local storage and call the data.
window.onload = initTodoList;
