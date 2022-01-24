// Business Logic
function ToDo(toDo, dueDate, assignTo, check){
  this.toDo = toDo;
  this.dueDate = dueDate;
  this.assignTo = assignTo;
  this.check = check;
}

function ToDoList() {
  this.toDos = {};
  this.currentId = 0
}

ToDoList.prototype.addToDo = function(toDo) {
  toDo.id = this.assignId();
  this.toDos[toDo.id] = toDo;
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

let userList = new ToDoList();

// User Interface

function submitTask() {
  let taskIn = $("#task-name").val();
    let dateIn =  $("#task-date").val();
    let assignIn = $("#task-assign").val();
    let checkStart = -1;
    let toDoOutput = new ToDo(taskIn, dateIn, assignIn, checkStart);
    userList.addToDo(toDoOutput);
    return userList;
}


$(document).ready(function(event) {
  $("#task-entry").submit(function(event){
    event.preventDefault();
    submitTask();
  })
})