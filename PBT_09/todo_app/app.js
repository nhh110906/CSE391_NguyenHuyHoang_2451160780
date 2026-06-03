const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const count = document.getElementById("count");
const clearCompletedBtn = document.getElementById("clearCompleted");
const filterButtons = document.querySelectorAll(".filter");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

function saveTodos() {
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function updateCount() {
    const activeTodos = todos.filter(
        todo => !todo.completed
    );

    count.textContent =
        activeTodos.length + " items left";
}

function renderTodos() {

    todoList.innerHTML = "";

    let filtered = todos;

    if (currentFilter === "active") {
        filtered = todos.filter(
            todo => !todo.completed
        );
    }

    if (currentFilter === "completed") {
        filtered = todos.filter(
            todo => todo.completed
        );
    }

    filtered.forEach(todo => {

        const li = document.createElement("li");
        li.className = "todo-item";

        if (todo.completed) {
            li.classList.add("completed");
        }

        li.dataset.id = todo.id;

        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = todo.text;

        const deleteBtn =
            document.createElement("button");

        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "❌";

        li.appendChild(span);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });

    updateCount();
}

function addTodo() {

    const text = todoInput.value.trim();

    if (text === "") {
        return;
    }

    todos.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    saveTodos();
    renderTodos();

    todoInput.value = "";
}

addBtn.addEventListener(
    "click",
    addTodo
);

todoInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            addTodo();
        }
    }
);

todoList.addEventListener(
    "click",
    function(event) {

        const li =
            event.target.closest(".todo-item");

        if (!li) {
            return;
        }

        const id = Number(li.dataset.id);

        if (
            event.target.classList.contains(
                "delete-btn"
            )
        ) {

            todos = todos.filter(
                todo => todo.id !== id
            );

            saveTodos();
            renderTodos();

            return;
        }

        if (
            event.target.classList.contains(
                "todo-text"
            )
        ) {

            const todo = todos.find(
                todo => todo.id === id
            );

            todo.completed =
                !todo.completed;

            saveTodos();
            renderTodos();
        }
    }
);

todoList.addEventListener(
    "dblclick",
    function(event) {

        if (
            !event.target.classList.contains(
                "todo-text"
            )
        ) {
            return;
        }

        const li =
            event.target.closest(".todo-item");

        const id =
            Number(li.dataset.id);

        const todo =
            todos.find(
                todo => todo.id === id
            );

        const input =
            document.createElement("input");

        input.type = "text";
        input.value = todo.text;
        input.className = "edit-input";

        event.target.replaceWith(input);

        input.focus();

        input.addEventListener(
            "keydown",
            function(e) {

                if (e.key === "Enter") {

                    const newText =
                        input.value.trim();

                    if (newText !== "") {
                        todo.text = newText;
                    }

                    saveTodos();
                    renderTodos();
                }
            }
        );
    }
);

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            filterButtons.forEach(btn =>
                btn.classList.remove(
                    "active"
                )
            );

            this.classList.add("active");

            currentFilter =
                this.dataset.filter;

            renderTodos();
        }
    );
});

clearCompletedBtn.addEventListener(
    "click",
    function() {

        todos = todos.filter(
            todo => !todo.completed
        );

        saveTodos();
        renderTodos();
    }
);

renderTodos();
