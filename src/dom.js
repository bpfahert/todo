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

function removeAllTasks() {
    let allTasks = document.querySelectorAll(".taskentry");
    allTasks.forEach(task => {
        task.remove();
    });
}


function renderTasks(array) {
    //Remove all task dom elements
    removeAllTasks();
    for (let i = 0; i < array.length; i++) {
    const taskList = document.querySelector(".tasklist")
    let newTask = document.createElement("div");
    newTask.textContent = "";
    newTask.classList += "taskentry";

    let newTitle = document.createElement("li");
    newTitle.textContent = `Task Title: ${array[i].title}`;
    let newDescription = document.createElement("li");
    newDescription.textContent = `Description: ${array[i].description}`;
    let newDueDate = document.createElement("li");
    newDueDate.textContent = `Due Date: ${array[i].dueDate}`;
    let newPriority = document.createElement("li");
    newPriority.textContent = `Priority: ${array[i].priority}`;

    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("type", "button");
    removeBtn.classList += "removetaskbtn";
    removeBtn.textContent = "Remove Task";

    newTask.setAttribute('data-id', i);

    taskList.appendChild(newTask);
    newTask.appendChild(newTitle);
    newTask.appendChild(newDescription);
    newTask.appendChild(newDueDate);
    newTask.appendChild(newPriority);
    newTask.appendChild(removeBtn);

    removeBtn.addEventListener('click', () => {
        if (array.length > 1) {
            array.splice(i, 1);
        }
        else {
            array.shift();
        }
        newTask.remove();
    });
    }
   
}



export {
    openForm,
    closeForm,
    renderTasks,
    removeAllTasks
};