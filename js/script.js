const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const dateInput = document.getElementById("dateInput");
const todoList = document.getElementById("todoList");
const filterDate = document.getElementById("filterDate");

let todos = [];

// ADD TO-DO
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (todoInput.value.trim() === "" || dateInput.value === "") {
        alert("Please fill task and date.");
        return;
    }

    const todoItem = {
        id: Date.now(),
        text: todoInput.value,
        date: dateInput.value,
    };

    todos.push(todoItem);
    todoInput.value = "";
    dateInput.value = "";

    renderTodos();
});

// DELETE
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// FILTER
filterDate.addEventListener("change", function () {
    renderTodos();
});

// SHOW LIST
function renderTodos() {
    todoList.innerHTML = "";

    const filtered = filterDate.value
        ? todos.filter(t => t.date === filterDate.value)
        : todos;

    filtered.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <strong>${todo.text}</strong><br>
                <small>${todo.date}</small>
            </div>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">
                Delete
            </button>
        `;
        todoList.appendChild(li);
    });
}
