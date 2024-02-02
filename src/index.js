import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      const arr = state.filter((toDo) => toDo.id != action.id);
      return arr;
    default:
      return state;
  }
};
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

const deleteTodo = (e) => {
  const id = e.target.parentNode.id;
  console.log(id);
  store.dispatch({ type: DELETE_TODO, id });
};

const paintToDos = () => {
  ul.innerHTML = "";
  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const addTodo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addTodo(toDo);
};

form.addEventListener("submit", onSubmit);
