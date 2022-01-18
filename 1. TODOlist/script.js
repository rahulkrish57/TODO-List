const addButton = document.getElementById("addBtn");
const inputBox = document.getElementById("inputBox");
let taskContainer = document.getElementById("taskContainer");

/*
    this function is for adding styles statically
function styleElem(element) {
    // add styles in alphabetical order to maintain it easily
    element.style.border = "2px solid green";
    element.style.cursor = "pointer"
    element.style.margin = "10px";
    element.style.padding = "10px";
    element.style.textAlign = "center";
}
    styleElem(newElem);
 */  
/*
// function to add style dynamically 
const styleObj = {
    border: "2px solid green",
    cursor: "pointer",
    margin: "10px",
    padding: "10px",
    textAlign: "center",
};
function styleElem(element, style) {
    const styleKeys = Object.keys(style);
    console.log(styleKeys);
    for ( let i = 0; i < styleKeys.length; i++) {
       //element.style[styleKeys[i]] = style[styleKeys[i]];
       let key = styleKeys[i];
       let value = style[key];
       console.log(key);
       console.log(value);
       element.style[key] = value;
    }
}
*/
function addFunc() {
    // taking user input
    const userInput = inputBox.value;

    // creating new elements with value
    const newElem = document.createElement("div");
    newElem.innerText = userInput;
    newElem.addEventListener("click", handleTaskClick);
    newElem.setAttribute("class", "task");
    // applying styles
    //styleElem(newElem); --> statically
    // styleElem(newElem, styleObj); --> dynamically

    // adding event listeners...
    /*newElem.addEventListener('click', function () {
        console.log("working");
    })*/ 

    // appending taskcontainer with newelement
    taskContainer.append(newElem);
}

function handleTaskClick() { console.log("working"); } // used instead of above anonymous function method

function handleEnter(e) {
    if(e.keycode === 13) addFunc();
}

addButton.addEventListener("click", addFunc);
inputBox.addEventListener("keyup", handleEnter )