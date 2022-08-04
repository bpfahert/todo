import './style.css';
import {removeAllTasks, closeForm, openForm, renderTasks, renderSidebar} from './dom';

//Factory function to make projects
const projectFactory = (projectName) => {
    let name = projectName;
    let array = [];
    return {name, array};
};

//initializing and test projects
let projectArray = [];
projectArray[0] = projectFactory("defaultTasks");
projectArray[1] = projectFactory("tomorrow");



//Factory function to create task objects
const taskFactory = (title, description, dueDate, priority, complete = false ) => {

    return {title, description, dueDate, priority, complete};
};


//creates test tasks and puts them into test project arrays
const task = taskFactory('homework', 'do homework', 'tomorrow', 'important', false);
const secondTask = taskFactory('dishes', 'do dishes', 'today', 'medium', false);
projectArray[0].array.push(task);
projectArray[0].array.push(secondTask);
const tomorrowTask = taskFactory('laundry');
projectArray[1].array.push(tomorrowTask);

//renders the defaultTasks array
renderTasks(projectArray[0].array);

//button for creating a new task 

//TODO: ALLOW ADDING TASKS TO SELECTED PROJECT
let submitBtn = document.querySelector(".submittaskbtn");
submitBtn.addEventListener('click', () => {
    const newTitle = document.querySelector("#title");
    const newDescription = document.querySelector("#description");
    const newDueDate = document.querySelector("#duedate");
    const newPriority = document.querySelector("#priority");
    const newTask = taskFactory(`${newTitle.value}`, `${newDescription.value}`, `${newDueDate.value}`, `${newPriority.value}`);
    projectArray[0].array.push(newTask); 
    renderTasks(projectArray[0].array);
    closeForm("form");
});

//initial sidebar render
renderSidebar(projectArray);

//Button to add new projects
let submitprojectBtn = document.querySelector(".projectsubmitbtn");
submitprojectBtn.addEventListener('click', () => {
    const newProjectName = document.querySelector("#projectname");
    const newProject = projectFactory(`${newProjectName.value}`);
    projectArray.push(newProject); 
    renderSidebar(projectArray);
    closeForm("projectform");

});

//button to open new project form
let projectFormBtn = document.querySelector('.addprojectbtn');
projectFormBtn.addEventListener('click', () => {
    openForm("projectform");
});


// console.log(Object.keys({projects})[0]);
console.log(projectArray[0].name);
console.log(projectArray[0].array);
console.table(projectArray);
// console.log(projects[0].name);
// console.log(defaultTasks.name);
