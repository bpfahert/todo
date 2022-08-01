import './style.css';
import {addTaskEntry, closeForm, openForm} from './dom';

let projects = [];
let tasks = [];

const task = (title, description, dueDate, priority, completed, projectName) => {
    return {title, description, dueDate, priority, projectName};
}

const laundry = task("Laundry", "Do the laundry", "tomorrow", 1, false, "Today");

function addTask(newTask) {
    tasks.push(newTask)
}


function createProject(title){
    let newProjectName = title;
    projects.push(newProjectName);
}

function taskController() {

}

let submitBtn = document.querySelector(".submitbtn");
submitBtn.addEventListener('click', () => {
    const newTitle = document.querySelector("#title");
    const newDescription = document.querySelector("#description");
    const newDueDate = document.querySelector("#duedate");
    const newPriority = document.querySelector("#priority");
    const newTask = task(`${newTitle.value}`, `${newDescription.value}`, `${newDueDate.value}`, `${newPriority.value}`);
    tasks.push(newTask);
    console.table(tasks);
    addTaskEntry();
    closeForm();
});


addTaskEntry();

addTask(laundry);
console.table(tasks);

//project should be an object that contains an array object?