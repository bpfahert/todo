let addTaskBtn = document.querySelector(".addtaskbtn")

addTaskBtn.addEventListener('click', () => {
   document.getElementById("form").style.display="block";
});

//REWORK OPEN AND CLOSE FORMS TO SUPPORT PROJECT AND TASK FORMS
function openForm(form) {
    document.getElementById(form).style.display="block";
    
}

function closeForm(form) {
    document.getElementById(form).style.display="none";
}

function removeAllTasks() {
    //REMOVE PROJECT TITLE
    let allTasks = document.querySelectorAll(".taskentry");
    allTasks.forEach(task => {
        task.remove();
    });
}


function renderTasks(array) {
    //Remove all task dom elements, then render task array
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

    let completeBtn = document.createElement("button");
    completeBtn.setAttribute("type", "button");
    completeBtn.classList += "completetaskbtn";
    if (array[i].complete == true) {
        completeBtn.textContent = "Completed";
    }
    else {
    completeBtn.textContent = "Task Complete?";
    };

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
    newTask.appendChild(completeBtn);
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

    //Only works once, won't switch back. also only works until previous array items are removed TODO FIX BUG
    completeBtn.addEventListener('click', () => {
        if (completeBtn.textContent == "Task Complete?") {
            array[i].complete = true;
            completeBtn.textContent = "Completed";
        }
        else {
            completeBtn.textContent == "Task Complete?";
        }
    });

    }
}

//render the sidebar from projects array
function renderSidebar(project) {
    removeAllProjects();
    for (let i = 0; i < project.length; i++) {
        let addProjectBtn = document.querySelector(".addprojectbtn");
        let projectList = document.querySelector(".projectlist");

        let projectEntryDiv = document.createElement("div");
        projectEntryDiv.classList += "projectdiv";

        let projectEntry = document.createElement("button");
        projectEntry.setAttribute("type", "button");
        projectEntry.classList += "project";
        projectEntry.textContent = `${project[i].name}`;

        let projectRemoveBtn = document.createElement("button");
        projectRemoveBtn.setAttribute("type", "button");
        projectRemoveBtn.classList += "projectremovebtn";
        projectRemoveBtn.textContent = "X ";

        projectList.insertBefore(projectEntryDiv, addProjectBtn);
        projectEntryDiv.appendChild(projectEntry);
        projectEntryDiv.appendChild(projectRemoveBtn);

        projectEntry.addEventListener('click', () => {
            let currentProject = project[i].array;
            let currentProjectTitle = document.querySelector(".currentprojecttitle");
            currentProjectTitle.textContent = `${project[i].name}`;
            renderTasks(currentProject);
        });
    };
};

function removeAllProjects() {
    let allProjects = document.querySelectorAll(".projectdiv");
    allProjects.forEach(project => {
        project.remove();
    });
}


 //check if needed to export removeAllTasks
export {
    openForm,
    closeForm,
    renderTasks,
    removeAllTasks,
    renderSidebar
};