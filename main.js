const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;
let statusApp = "stop";

// para conectar los inputs a una variable
const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (itTask.value !== "") {
      createTask(itTask.value);
      itTask.value = "";
      renderTasks();
    }
  });

  function createTask(value) {
    const newTask = {
      id: (Math.random() * 100).toString(36).slice(2),
      title: value,
      completed: false,
    };
  
    tasks.unshift(newTask);
  }

//funcion para renderizar una nueva tarea html a la lista
function renderTasks() {
    const html = tasks.map((task) => {
      return `
          <div class="task">
          <div class="completed">${
            task.completed
              ? "<span class='done'>Done</span>"
              : `<button class="start-button" data-id="${task.id}">Start</button></div>`
          }
              <div class="title">${task.title}</div>
          </div>`;
    });
    const tasksContainer = document.querySelector("#tasks");
    tasksContainer.innerHTML = html.join("");
}


