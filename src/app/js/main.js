let taskInput = document.querySelector('#task');
let addBtn = document.querySelector('.add-btn');
let display = document.querySelector('.display');

const addTask = (task) => {
    let  newPara = document.createElement('p');

    newPara.innerHTML = task;
    display.appendChild(newPara);
}

addBtn.addEventListener('click', () => {
    let taskValue = taskInput.value;

    addTask(taskValue);
})