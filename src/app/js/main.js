let taskInput = document.querySelector('#task');
let addBtn = document.querySelector('.add-btn');
let display = document.querySelector('.display');

let trashBtn = "";

const taskList = [];

const initialiseTaskBtns = () => {
    trashBtn = document.querySelector('.trash');

    trashBtn.addEventListener('click', () => {
        console.log('Button CLicked');
        trashBtn.parentNode.parentNode.remove();
    });
    
}

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
        addTask(taskValue);
    }    
});

