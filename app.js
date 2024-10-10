//#region DOM Elements
const todosUL = document.getElementById("todosUL");
const searchForm = document.getElementById("searchForm");
const searchText = document.getElementById("searchText");
const addForm = document.getElementById("addForm");
const addText = document.getElementById("addText");
//#endregion

//#region Initial Data Source
let todosList = ["Play Tennis", "Deliver JS Assignment", "Learn New Techs"];
//#endregion

//#region Create Todo List Item
const createTodoLI = (todo) => `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
//#endregion

//#region Bind Todos To Dom
// دي بتستقبل ليستة و بتعيد رسمها في الصفحة
const BindTodosToDom = (todos) => {
  todosUL.innerHTML = todos.map(createTodoLI).join("");
};

const BindSingleTodo = (todo) => {
  todosUL.innerHTML += createTodoLI(todo);
};
//#endregion

//#region Search Todos
const searchTodos = (todoSearchText, list) => {
  let FilteredTodos = list.filter((todo) => todo.includes(todoSearchText));
  BindTodosToDom(FilteredTodos);
};
//#endregion

//#region Functions Calls
BindTodosToDom(todosList);
//#endregion

//#region Events Handlers
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchedText = searchText.value;
  searchTodos(searchedText, todosList);
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let addedText = addText.value;
  if (addedText.trim().length > 0) {
    todosList.push(addedText);
    BindSingleTodo(addedText);
  }
  addText.value = "";
});

todosUL.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let todoToBeDeleted = e.target.previousElementSibling.innerHTML;
    e.target.parentElement.remove();

    // Write your code to delete the todo from the array
  }
});
//#endregion
