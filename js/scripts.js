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

// delete button creates new blank array, then function to check for checkboxes, some way to get a value relating to the todolist index, then we have an array full of index numbers, for each loop to delete from todolist and remove/hide css class based also on index number

// User Interface

function getText(index) {
  let entryItem = userList.toDos[index];
  let outputText = " " + entryItem.toDo + " [Due on: " + entryItem.dueDate + "] Assigned to: " + entryItem.assignTo;
  return outputText;
}

function displayTasks() {
  let index = userList.currentId;
  let taskClass = "to-do-" + index;
  let taskText = getText(index);
  $("#main-task-list").append("<li class='" + taskClass + "'><input class='" + taskClass + "' type='checkbox'>" + taskText + "</input></li>");
}

function submitTask() {
  let taskIn = $("#task-name").val();
    let dateIn =  $("#task-date").val();
    let assignIn = $("#task-assign").val();
    let checkStart = -1;
    let toDoOutput = new ToDo(taskIn, dateIn, assignIn, checkStart);
    userList.addToDo(toDoOutput);
    return userList;
}

// $("input[type='checkbox']").val();

// if ($('#check_id').is(":checked"))
//{
  // it is checked
//}

// const toDoCheck = {
//   blah: blahblah;
//   blah2: blahblah
// }
// Object.keys(toDoCheck).forEach(key => {

// })


$(document).ready(function(event) {
  $("#task-entry").submit(function(event){
    event.preventDefault();
    submitTask();
    displayTasks();
    $(".status").show();
  })
  $("#reset-btn").click(function(event) {
    event.preventDefault();
    console.log("reset button is triggering");
     for (let i = 0; i <= userList.currentId; i++) {
       console.log(userList.currentId);
      if ($('input.to-do-' + i).is(":checked")) {
        console.log("for loop is triggering")
        $('.to-do-' + i).remove();
      }
    }
    
  })
})


