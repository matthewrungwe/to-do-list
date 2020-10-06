let taskInput = document.querySelector('#task');
let addBtn = document.querySelector('.add-btn');
let display = document.querySelector('.display');

let trashBtn = "";

const taskList = [];

// This function adds each task created to the task list as an object.
// A unique id is also created for each task created
const addTaskToList = (task) => {
    let numListItems = taskList.length;
    let taskObject = {
        id: ++numListItems,
        content: task
    };

    taskList.push(taskObject);
};

const initialiseTaskBtns = () => {
    trashBtn = document.querySelector('.trash');

    trashBtn.addEventListener('click', () => {
        console.log('Trash Button Clicked');
        trashBtn.parentNode.parentNode.parentNode.parentNode.remove();
    });
};

const addTask = (task) => {
    let  newDivEl = document.createElement('div');

    newDivEl.innerHTML = `
        <div class="card bg-dark text-light" style="width: 100%;">
            <div class="card-body">
                <p class="card-text">${task}</p>
                <div class="row">
                    <div class="col-sm time">
                    
                    </div>
                    <div class="col-sm ">
                        <button class="btn btn-success check"><i class="fa fa-check"></i></button>
                        <button class="btn btn-secondary edit" hidden><i class="fa fa-edit"></i></button>
                        <button class="btn btn-secondary trash"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;
    display.appendChild(newDivEl);

    initialiseTaskBtns();
};

addBtn.addEventListener('click', () => {
    let taskValue = taskInput.value;

    if(taskValue) {
        addTaskToList(taskValue);
        addTask(taskValue);
    }    
});

