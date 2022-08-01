import './style.css';
import {addTaskEntry} from './dom';

let projects = [];

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

addTaskEntry();

//project should be an object that contains an array object?