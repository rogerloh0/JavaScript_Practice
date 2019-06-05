// Set local storage item
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// Set session storage item
// Only for the session
sessionStorage.setItem('name', 'Beth');

// Remove from storage
localStorage.removeItem('name');

// Get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear local storage
localStorage.clear();

console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks')===null){
    task = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task)){
  console.log(task)
}