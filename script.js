const tasks = [];
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function renderTasks() {
    taskList.innerHTML = "";
    for (const task of tasks) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    }
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        renderTasks(); 
    }
}

addButton.addEventListener('click', addTask);
renderTasks();