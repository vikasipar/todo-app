document.getElementById("addButton").addEventListener("click", function () {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    var taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-danger", "text-light", "px-3");
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
  }
});
