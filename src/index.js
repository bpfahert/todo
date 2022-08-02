import './style.css';
import {removeAllTasks, closeForm, openForm, renderTasks} from './dom';

let projects = [];
let defaultTasks = [];
projects[0] = defaultTasks;

const taskFactory = (title, description, dueDate, priority) => {

    return {title, description, dueDate, priority};
};

const task = taskFactory('homework', 'do homework', 'tomorrow', 'important');
const secondTask = taskFactory('dishes', 'do dishes', 'today', 'medium');
defaultTasks.push(task);
defaultTasks.push(secondTask);

renderTasks(projects[0]);


let submitBtn = document.querySelector(".submitbtn");
submitBtn.addEventListener('click', () => {
    const newTitle = document.querySelector("#title");
    const newDescription = document.querySelector("#description");
    const newDueDate = document.querySelector("#duedate");
    const newPriority = document.querySelector("#priority");
    const newTask = taskFactory(`${newTitle.value}`, `${newDescription.value}`, `${newDueDate.value}`, `${newPriority.value}`);
    defaultTasks.push(newTask);
    renderTasks(projects[0]);
    closeForm();
    console.table(defaultTasks);
});