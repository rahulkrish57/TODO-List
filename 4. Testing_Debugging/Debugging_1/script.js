const addButton = document.getElementById("addBtn");
const inputBox = document.getElementById("inputBox");
let taskContainer = document.getElementById("taskContainer");

const taskArray = [];




function setTasks() {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function createTasks(userInput, isCompleted) {
    // creating new elements with value
    const newElem = document.createElement("div");
    newElem.innerText = userInput;
    newElem.addEventListener("click", handleTaskClick);
    newElem.addEventListener("dblclick", deleteTask);
    if(isCompleted) {
        newElem.setAttribute("class", "task completed");
    } else {
        newElem.setAttribute("class", "task");
    }
    
    taskContainer.append(newElem);
}

function getTasks() {
    let tasks = localStorage.getItem("tasks");
    if(!tasks) { return; }
    tasks = JSON.parse(tasks);
    for ( index in tasks ) {
        createTasks(tasks[index].value, tasks[index].isCompleted);
        taskArray.push(tasks[index]);
    }
}

function addFunc() {
    // taking user input
    const userInput = inputBox.value;
    const length = userInput.length;
    if (length === 0) {
        return alert("Enter some value");
    };
    let count = 0
     for(i = 0; i<length; i++) {
            if(userInput[i] === " ")
            count++; 
    }
    if (length === count) {
        return alert("Enter some value");
    }
    
    let taskObj = {}
    taskObj.value = userInput;
    taskObj.isCompleted = false;

    taskArray.push(taskObj);
    setTasks();
    createTasks(userInput, false);
}
getTasks();

function handleTaskClick() {
     // toggle
    this.classList.toggle("completed");
    const taskValue = this.innerText;
    for (i = 0; i < taskArray.length; i++){
        const taskObj = taskArray[i];
        if(taskObj.value === taskValue) {
            taskObj.isCompleted = !taskObj.isCompleted;
        }
    }
}

function deleteTask() {
    this.remove();
}

function handleEnter(e) {
    if(e.keycode === 13) addFunc();
}

addButton.addEventListener("click", addFunc);
inputBox.addEventListener("keyup", handleEnter);
document.getElementById('myform').reset();