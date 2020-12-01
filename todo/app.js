'use strict'

// Event Listeners ////////////////////////////////////////////////////////

document.querySelector('form').addEventListener('submit', handleSubmitForm);

document.getElementById('todoUL').addEventListener('click', handleClickDeleteOrCheck);

document.getElementById('clearAll').addEventListener('click', handleClearAll);

// Functions //////////////////////////////////////////////////////////////

// On Submit, Add Task to List by calling addTodo
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != ''){
    addTodo(input.value);
    input.value = '';
  }
}

// Actually append a new LI to the UL with appropriate buttons
function addTodo(todo){
  let ul = document.getElementById('todoUL');
  let li = document.createElement('li');
  li.innerHTML = `
  <span class="todo-item">${todo}</span>
  <button name="checkButton"><i class="fas fa-check-square"></i></button>
  <button name="deleteButton"><i class="fas fa-trash"></i></button>
  `;
  li.classList.add('todo-list-item');
  ul.appendChild(li);
}

// Identify what button has been clicked and call appropriate function
function handleClickDeleteOrCheck(e){
  if(e.target.name == 'checkButton'){
    checkTodo(e);
  }
  if(e.target.name == 'deleteButton'){
    deleteTodo(e);
  }
}

// Cross off 'checked' items

function checkTodo(e){
  let item = e.target.parentNode;
  item.style.textDecoration == 'line-through' ? item.style.textDecoration = 'none' : item.style.textDecoration = 'line-through';
}

// Remove deleted items

function deleteTodo(e){
  let item = e.target.parentNode;
  item.addEventListener('transitioned', function() {
    item.remove();
  });
  item.classList.add('todo-list-item-fall');
}

// Clear All functionality

function handleClearAll(e){
  document.getElementById('todoUL').innerHTML = '';
}