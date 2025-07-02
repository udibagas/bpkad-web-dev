const todos = [
  {
    id: 1,
    text: "Belajar HTML",
    done: true,
  },
  {
    id: 2,
    text: "Belajar CSS",
    done: false,
  },
];

renderTodos();

function doneTodo(id) {
  console.log("Done button clicked for ID:", id);
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.done = !todo.done; // toggle the done status
    renderTodos(); // re-render the todo list
  } else {
    console.error("Todo not found with ID:", id);
  }
}

function delTodo(id) {
  console.log("Delete button clicked for ID:", id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1); // remove the todo from the array
    renderTodos(); // re-render the todo list
  } else {
    console.error("Todo not found with ID:", id);
  }
}

function renderTodos() {
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = ""; // clear the list before rendering

  todos.forEach((todo) => {
    // create a new list item
    const newTodoItem = document.createElement("li");
    newTodoItem.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const todoText = document.createElement("span");
    todoText.textContent = todo.text;

    if (todo.done) {
      todoText.className = "text-decoration-line-through";
    } else {
      todoText.className = "";
    }

    newTodoItem.appendChild(todoText);

    // create a button group
    const btnGroup = document.createElement("div");

    // create the done button
    const doneButton = document.createElement("button");
    doneButton.className = "btn btn-sm btn-success btn-done me-1";
    doneButton.textContent = "V";
    btnGroup.appendChild(doneButton);

    // add event listener for done button
    doneButton.addEventListener("click", () => {
      doneTodo(todo.id);
    });

    // create the delete button
    const delButton = document.createElement("button");
    delButton.className = "btn btn-sm btn-danger btn-del";
    delButton.textContent = "X";
    btnGroup.appendChild(delButton);

    // add event listener for delete button
    delButton.addEventListener("click", () => {
      delTodo(todo.id);
    });

    newTodoItem.appendChild(btnGroup);
    // append the new item to the list
    todoList.appendChild(newTodoItem);
  });
}

console.log("TODO List App Loaded");
const addButton = document.getElementById("add-btn");
const form = document.querySelector("#todo-form");

// add an event listener to the button
// addButton.addEventListener("click", addBtnHandler);
form.addEventListener("submit", addBtnHandler);

function addBtnHandler(event) {
  event.preventDefault();
  console.log("Add button clicked");
  // get the input value
  const todoInput = document.querySelector("#todo-input");
  console.log(todoInput.value);

  if (todoInput.value.trim() === "") {
    return;
  }

  // create a new todo object
  const newTodo = {
    id: Date.now(), // use current timestamp as unique ID
    text: todoInput.value.trim(),
    done: false,
  };

  // push the new todo to the todos array
  todos.push(newTodo);

  // render ulang
  renderTodos();

  // clear the input field
  todoInput.value = "";
}

// function doneBtnHandler() {
//   console.log("Done button clicked");
//   const todoItem = this.parentElement.previousElementSibling;
//   todoItem.className = "text-decoration-line-through";
// }

// function delBtnHandler() {
//   console.log("Del button clicked");
//   const todoItem = this.parentElement.parentElement;
//   todoItem.remove();
// }

// function registerEventListener() {
//   const btnDone = document.querySelectorAll(".btn-done");
//   btnDone.forEach((btn) => {
//     btn.removeEventListener("click", doneBtnHandler);
//     btn.addEventListener("click", doneBtnHandler);
//   });

//   const btnDel = document.querySelectorAll(".btn-del");
//   btnDel.forEach((btn) => {
//     btn.removeEventListener("click", delBtnHandler);
//     btn.addEventListener("click", delBtnHandler);
//   });
// }

registerEventListener();
