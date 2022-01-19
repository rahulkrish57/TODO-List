const addButton = document.getElementById("addBtn");
const inputBox = document.getElementById("inputBox");
let taskContainer = document.getElementById("taskContainer");

const taskArray = [];


// setting local storage
function setTasks() {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function createTasks(userInput) {
    // creating new elements with value
    const newElem = document.createElement("div");
    newElem.innerText = userInput;
    newElem.addEventListener("click", handleTaskClick);
    newElem.addEventListener("dblclick", deleteTask);
    newElem.setAttribute("class", "task");
    taskContainer.append(newElem);
}
// getting key and value from local storage
function getTasks() {
    let tasks = localStorage.getItem("tasks");
    if(!tasks) { return; }
    tasks = JSON.parse(tasks);
    for ( index in tasks ) {
        createTasks(tasks[index]);
    }
}

function addFunc() {
    // taking user input
    const userInput = inputBox.value;
    const length = userInput.length;
    if (length === 0) return;

    taskArray.push(userInput);
    setTasks(); // calling set func
    createTasks(userInput);  // calling create task func
}
getTasks(); // calling get func

function handleTaskClick() {
     // toggle
     this.classList.toggle("completed");
}

function deleteTask() {
    this.remove();
}

function handleEnter(e) {
    if(e.keycode === 13) addFunc();
}

addButton.addEventListener("click", addFunc);
inputBox.addEventListener("keyup", handleEnter )
