// Selectors
const todoInput = document.querySelector(".input-todo");
const todoBotton = document.querySelector(".button-todo");
const todoList = document.querySelector(".list-todo");

//Event Listeners

todoBotton.addEventListener("click", TodoAdded);
todoList.addEventListener("click", cancelCheck);

//Functions

function TodoAdded(event) {
  //Prevent From from submitting
  event.preventDefault();
  //Todo DIV
  const DIVtodo = document.createElement("div");
  DIVtodo.classList.add("todo");
  //create li
  const updatedTodo = document.createElement("li");
  updatedTodo.innerText = todoInput.value;
  updatedTodo.classList.add("todo-item");
  DIVtodo.appendChild(updatedTodo);
  //Check mark button
  const buttonCompleted = document.createElement("button");
  buttonCompleted.innerHTML = '<i class="fas fa-check"></i>';
  buttonCompleted.classList.add("button-Completed");
  DIVtodo.appendChild(buttonCompleted);
  //Check bin button
  const buttonBin = document.createElement("button");
  buttonBin.innerHTML = '<i class="fas fa-trash"></i>';
  buttonBin.classList.add("button-Bin");
  DIVtodo.appendChild(buttonBin);
  //Append to list
  todoList.appendChild(DIVtodo);
  //Clear TODO Input Value
  todoInput.value = "";
}

function cancelCheck(e) {
  const item = e.target;
  //Delete Todo
  if (item.classList[0] === "button-Bin") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "button-Completed") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
