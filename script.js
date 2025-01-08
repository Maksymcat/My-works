const createWork = document.querySelector(".createWork");
const toDoList = document.querySelector(".to-do-list");

const dataInput = document.querySelector(".textOfWork");
const removeTodos = document.querySelector(".removetodo");
const wrapper = document.querySelector(".to-do-list");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

createWork.addEventListener("click", () => {
  const name = dataInput.value;
  const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
  todos.push({ name, id });
  console.log(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
});
const renderTodos = () => {
  if (wrapper) {
    wrapper.innerHTML = "";
  }
  todos.forEach((element, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${element.name
      }<button onclick = "removetodo(${index})">asdad</button>
    <input type="checkbox" onchange = "checkeds(${index})" ${todos[index].checked ? "checked" : false
      }>`;
    console.log(`${element.name}`);
    wrapper.appendChild(li);
  });
};
const removetodo = (index) => {
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos))
  renderTodos();
};
const checkeds = (index) => {
  let completed = { checked: true };
  if (todos[index].checked == true || null) {
    completed = { checked: false };
  }
  Object.assign(todos[index], completed);
  localStorage.setItem("todos", JSON.stringify(todos));
};
renderTodos();
