
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }


    const li = document.createElement("li");
    li.className = "list-group-item";


    const span = document.createElement("span");
    span.textContent = taskText;


    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });


    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);


    taskInput.value = "";
});