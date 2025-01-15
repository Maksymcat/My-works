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
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos.length - 1)

  event.preventDefault();

  dataInput.value = ""


});
const renderTodos = (animatedIndex) => {
  if (wrapper) {
    wrapper.innerHTML = "";
  }

  todos.forEach((element, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<div> <input type="checkbox" onchange = "checkeds(${index})" ${todos[index].checked ? "checked" : false
      }> ${element.name
      }</div><button class = "removetodo " onclick = "removetodo(${index})">Видалити завдання</button>
   `;
    li.classList.add('to-do-list__item')
    console.log(index, animatedIndex)
    if (index == animatedIndex) {
      li.classList.add('to-do-list__item--animated')
    }


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

renderTodos()