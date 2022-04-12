const newTaskBtn = document.getElementById("taskBtn");
const container = document.getElementById("list");
const inputTask = document.getElementById("task");
const newTask = document.getElementById("edit");
const editBtn = document.getElementById("editBtn");

//Ajouter Tâche

newTaskBtn.addEventListener("click", function () {
  const newTask = document.createElement("div");
  newTask.innerText = inputTask.value;
  container.appendChild(newTask);
  inputTask.value = "";

  //Fini Tâche

  let doneBtn = document.createElement("button");
  doneBtn.innerHTML = "Done";
  newTask.appendChild(doneBtn);
  doneBtn.id = "doneBtn";

  doneBtn.addEventListener("click", function () {
    if (newTask.style.textDecoration == "line-through") {
      newTask.style.textDecoration = "none";
    } else {
      newTask.style.textDecoration = "line-through";
    }
  });

  //Delete Tâche

  let trashBtn = document.createElement("button");
  trashBtn.innerHTML = "Trash";
  newTask.appendChild(trashBtn);
  trashBtn.id = "trashBtn";

  trashBtn.addEventListener("click", function () {
    container.removeChild(newTask);
  });

  //Edit Tâche

  let editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  newTask.appendChild(editBtn);
  editBtn.id = "editBtn";

  editBtn.addEventListener("click", function () {
    if (newTask.style.backgroundColor == "lightgray") {
      newTask.contentEditable = false;
      newTask.style.backgroundColor = "white";
    } else {
      newTask.contentEditable = true;
      newTask.style.backgroundColor = "lightgray";
    }
  });
});
