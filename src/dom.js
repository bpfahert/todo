let addTaskBtn = document.querySelector(".addtaskbtn")
addTaskBtn.addEventListener('click', () => {
   addTaskEntry(); 
});


function addTaskEntry() {
    const taskList = document.querySelector(".tasklist")
    let newTask = document.createElement("li");
    newTask.classList += "taskentry";
    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("type", "button");
    removeBtn.classList += "removetaskbtn";
    removeBtn.textContent = "Remove Task";
    newTask.textContent = "New task here!";
    taskList.appendChild(newTask);
    newTask.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => {
        newTask.remove();
    });
}


export {
    addTaskEntry
};