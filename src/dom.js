let addTaskBtn = document.querySelector(".addtaskbtn")

addTaskBtn.addEventListener('click', () => {
   document.getElementById("form").style.display="block";
});

function openForm() {
    document.getElementById("form").style.display="block";
    
}

function closeForm() {
    document.getElementById("form").style.display="none";
}

function addTaskEntry() {
    const taskList = document.querySelector(".tasklist")
    let newTask = document.createElement("li");
    newTask.classList += "taskentry";
    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("type", "button");
    removeBtn.classList += "removetaskbtn";
    removeBtn.textContent = "Remove Task";
    newTask.textContent = "Sample Task!";
    taskList.appendChild(newTask);
    newTask.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => {
        newTask.remove();
    });
}



export {
    addTaskEntry,
    openForm,
    closeForm
};